"""Bounded local catalog operations. No network, subprocesses or credential access."""
import argparse
import contextlib
import datetime
import hashlib
import json
import math
import os
import pathlib
import re
import statistics
import time

from PIL import Image

FLAGS = ('counted', 'countedTowardTarget', 'counts_toward_target')
STAGES = ('selected', 'reference_saved', 'crop_saved', 'inspected')


def sha256(path):
    with pathlib.Path(path).open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


def read(path):
    return json.loads(pathlib.Path(path).read_text(encoding='utf-8-sig'))


def rows_of(document):
    if isinstance(document, list):
        rows = document
    elif isinstance(document, dict):
        keys = [key for key in ('items', 'components') if isinstance(document.get(key), list)]
        if len(keys) != 1:
            raise ValueError('Catalog must contain exactly one items/components array')
        rows = document[keys[0]]
    else:
        raise ValueError('Unknown catalog format')
    if any(not isinstance(row, dict) or not row.get('id') for row in rows):
        raise ValueError('Catalog contains malformed rows; repair with its owner first')
    return rows


def under(root, relative):
    relative = pathlib.Path(relative)
    if relative.is_absolute() or '..' in relative.parts:
        raise ValueError('Asset must have a relative path inside its assigned shard')
    path = (pathlib.Path(root) / relative).resolve()
    if not path.is_relative_to(pathlib.Path(root).resolve()):
        raise ValueError('Path escapes its assigned shard')
    return path


def source_ids(row):
    found = set()
    def visit(value, key=''):
        if isinstance(value, dict):
            if key in ('source', 'sourceReference') and value.get('id'):
                found.add(str(value['id']))
            for child_key, child in value.items():
                visit(child, child_key)
        elif isinstance(value, list):
            for child in value:
                visit(child, key)
        elif isinstance(value, str):
            if key in ('screenId', 'screen_id', 'sourceId', 'sourceScreenId'):
                found.add(value)
            found.update(re.findall(r'mobbin\.com/(?:screens|screen)/([A-Za-z0-9-]+)', value))
    visit(row)
    return {value.lower() for value in found}


def index_library(root):
    root = pathlib.Path(root)
    plan = read(root / '計画.json')
    rows, fingerprints, areas = [], {}, {}
    for area in plan['areas']:
        key = area['key']
        shard = under(root, key)
        catalog = shard / 'catalog.json'
        areas[key] = area
        fingerprints[key] = sha256(catalog)
        for row in rows_of(read(catalog)):
            rows.append({'area': key, 'row': row, 'sources': sorted(source_ids(row))})
    eligible = {item['row']['id'] for item in rows if all(item['row'].get(flag) is not False for flag in FLAGS)}
    return {'rows': rows, 'areas': areas, 'fingerprints': fingerprints, 'strict_unique': len(eligible)}


def make_crop(original, destination, xywh):
    original, destination = pathlib.Path(original).resolve(), pathlib.Path(destination).resolve()
    if original == destination or destination.exists():
        raise ValueError('Preserve originals and existing crops; choose a new destination')
    if len(xywh) != 4 or any(type(n) is not int for n in xywh):
        raise ValueError('Crop coordinates must be integer source-pixel xywh')
    x, y, width, height = xywh
    with Image.open(original) as image:
        if x < 0 or y < 0 or width <= 0 or height <= 0 or x + width > image.width or y + height > image.height:
            raise ValueError('Crop is outside source pixels')
        if destination.suffix.lower() != '.png':
            raise ValueError('Deterministic crops must be PNG')
        destination.parent.mkdir(parents=True, exist_ok=True)
        with destination.open('xb') as stream:
            image.crop((x, y, x + width, y + height)).save(stream, format='PNG', optimize=False, compress_level=9)
    return {'path': str(destination), 'sha256': sha256(destination), 'dimensions': [width, height], 'xywh': xywh}


def validate_receipt(root, receipt, index=None):
    index = index if index is not None else index_library(root)
    area = index['areas'].get(receipt['area'])
    if not area or not re.fullmatch(re.escape(area['idPrefix']) + r'-\d{4,}', receipt['id']):
        raise ValueError('Technical ID must belong to the existing allocated shard')
    shard = under(root, receipt['area'])
    for key in ('name', 'boundary', 'visible_state', 'use_case'):
        if not isinstance(receipt.get(key), str) or not receipt[key].strip():
            raise ValueError('Missing meaningful ' + key)
    source = receipt['source']
    if not source.get('app_name') or source.get('mobbin_url') != 'https://mobbin.com/screens/' + source['id']:
        raise ValueError('Source URL, app and screen ID must agree')
    if receipt.get('reference_mode', 'fresh') not in ('fresh', 'reused'):
        raise ValueError('Reference mode must distinguish fresh and reused evidence')
    review = receipt['distinctness']
    if review.get('reviewed') is not True or not review.get('rationale') or not isinstance(review.get('nearest_ids'), list):
        raise ValueError('Actual structure comparison and rationale required')
    known = {item['row']['id'] for item in index['rows']}
    if any(entry_id not in known or entry_id == receipt['id'] for entry_id in review['nearest_ids']):
        raise ValueError('Nearest comparison ID does not exist')
    if known - {receipt['id']} and not review['nearest_ids']:
        raise ValueError('Compare nearest existing structures, not just unused source IDs')
    original, crop = receipt['original'], receipt['crop']
    original_path, crop_path = under(shard, original['path']), under(shard, crop['path'])
    for asset, path in ((original, original_path), (crop, crop_path)):
        if sha256(path).lower() != asset['sha256'].lower():
            raise ValueError('Asset hash mismatch')
        with Image.open(path) as image:
            if list(image.size) != asset['dimensions']:
                raise ValueError('Asset dimension mismatch')
    xywh = crop['xywh']
    if len(xywh) != 4 or any(type(n) is not int for n in xywh):
        raise ValueError('Region must use integer source pixels')
    x, y, width, height = xywh
    with Image.open(original_path) as source_image, Image.open(crop_path) as cropped_image:
        if x < 0 or y < 0 or width <= 0 or height <= 0 or x + width > source_image.width or y + height > source_image.height:
            raise ValueError('Region outside source')
        expected = source_image.crop((x, y, x + width, y + height)).convert('RGBA')
        if cropped_image.size != expected.size or cropped_image.convert('RGBA').tobytes() != expected.tobytes():
            raise ValueError('Crop pixels do not match the unchanged original region')
        if original_path == crop_path and receipt.get('already_component') is not True:
            raise ValueError('Full original requires actual already-component inspection')
    inspection = receipt['inspection']
    if inspection.get('original_sha256', '').lower() != original['sha256'].lower() or inspection.get('crop_sha256', '').lower() != crop['sha256'].lower():
        raise ValueError('Inspection must identify these actual asset hashes')
    if not inspection.get('notes') or not inspection.get('at'):
        raise ValueError('Actual visual inspection notes and timestamp required')
    return index


@contextlib.contextmanager
def locked(root):
    folder = pathlib.Path(root) / '.local' / 'catalog-entry-skill'
    folder.mkdir(parents=True, exist_ok=True)
    lock = folder / 'writer.lock'
    descriptor = os.open(lock, os.O_CREAT | os.O_EXCL | os.O_WRONLY)
    try:
        with os.fdopen(descriptor, 'w', encoding='ascii') as stream:
            stream.write(str(os.getpid()))
        yield folder
    finally:
        lock.unlink()


def row_from(receipt):
    source = dict(receipt['source'], local_path=receipt['original']['path'], dimensions=receipt['original']['dimensions'], sha256=receipt['original']['sha256'])
    return {'id': receipt['id'], 'name': receipt['name'], 'source': source, 'region': receipt['crop']['xywh'],
            'preview': receipt['crop']['path'], 'component_crop_path': receipt['crop']['path'], 'componentCrop': receipt['crop'],
            'componentBoundary': receipt['boundary'], 'observedInteraction': receipt['visible_state'], 'useCase': receipt['use_case'],
            'distinctnessRationale': receipt['distinctness'], 'entrySkillEvidence': receipt,
            **{flag: True for flag in FLAGS}, 'state': 'RESEARCHED_COMPONENT', 'research_only': True,
            'native': None, 'native_status': 'NOT_BUILT', 'build_status': 'NOT_CLAIMED', 'check_status': 'NOT_CLAIMED', 'fidelity_status': 'NOT_CLAIMED'}


def register(root, receipt, expected_sha256):
    with locked(root) as folder:
        index = validate_receipt(root, receipt)
        row = row_from(receipt)
        matches = [item for item in index['rows'] if item['row']['id'] == receipt['id']]
        if matches:
            if len(matches) == 1 and matches[0]['row'] == row and matches[0]['area'] == receipt['area']:
                return {'status': 'already_registered', 'id': receipt['id']}
            raise ValueError('Technical ID already registered with different evidence')
        if any(receipt['source']['id'].lower() in item['sources'] for item in index['rows']):
            raise ValueError('Duplicate source screen across existing catalog rows, including excluded rows')
        catalog = under(root, receipt['area']) / 'catalog.json'
        if sha256(catalog) != expected_sha256:
            raise ValueError('Catalog changed since preparation; reread before writing')
        document = read(catalog)
        rows_of(document).append(row)
        if index_library(root)['fingerprints'] != index['fingerprints']:
            raise ValueError('Another shard changed during duplicate validation; retry only after rereading')
        temporary = catalog.with_name('catalog.json.entry-skill.tmp')
        created = False
        try:
            with temporary.open('x', encoding='utf-8', newline='\n') as stream:
                created = True
                json.dump(document, stream, ensure_ascii=False, indent=2)
                stream.write('\n')
                stream.flush()
                os.fsync(stream.fileno())
            os.replace(temporary, catalog)
        finally:
            if created and temporary.exists():
                temporary.unlink()
        delivered_index = index_library(root)
        if not any(item['row'] == row for item in delivered_index['rows']):
            raise ValueError('Catalog readback failed; retain evidence and stop')
        validate_receipt(root, receipt, delivered_index)
        return {'status': 'registered', 'id': receipt['id'], 'catalog_sha256': sha256(catalog)}


def version_after(version):
    major, minor = map(int, version.split('.'))
    tenths = major * 10 + minor + 1
    return f'{tenths // 10}.{tenths % 10}'


def progress(events):
    completed, revoked, released, version = {}, set(), set(), '1.0'
    for event in events:
        if event['event'] == 'complete':
            completed.setdefault(event['id'], event)
        elif event['event'] == 'revoke':
            revoked.add(event['id'])
        elif event['event'] == 'release':
            released.update(event['entry_ids'])
            version = event['version']
    valid = set(completed) - revoked
    pending = sorted(valid - released)
    return {'version': version, 'next_version': version_after(version), 'valid_completed': len(valid),
            'pending_ids': pending, 'pending_count': len(pending), 'review_due': len(pending) >= 30}


def ledger_events(folder):
    file = folder / 'events.jsonl'
    return [json.loads(line) for line in file.read_text(encoding='utf-8').splitlines() if line.strip()] if file.exists() else []


def measurements(events):
    revoked = {event['id'] for event in events if event['event'] == 'revoke'}
    completed = {}
    for event in events:
        if event['event'] == 'complete' and event['id'] not in revoked:
            completed.setdefault(event['id'], event)
    def distribution(values):
        values = sorted(value for value in values if isinstance(value, (int, float)) and value >= 0)
        return {'samples': len(values), 'median': statistics.median(values) if values else None,
                'p90': values[math.ceil(len(values) * .9) - 1] if values else None}
    timing_keys = ('research_ms', 'reference_ms', 'crop_ms', 'inspection_ms', 'registration_ms')
    modes = {}
    for event in completed.values():
        mode = event.get('reference_mode', 'unknown')
        modes[mode] = modes.get(mode, 0) + 1
    return {'valid_completed': len(completed), 'rejections': sum(e['event'] == 'reject' for e in events),
            'revoked': len(revoked), 'reference_modes': modes,
            'timings': {key: distribution(event.get('timing', {}).get(key) for event in completed.values()) for key in timing_keys},
            'total_wall_ms': distribution(event.get('total_wall_ms') for event in completed.values()),
            'quality_rubric_total': distribution(sum(event['quality'][key] for key in ('boundary', 'distinctness', 'usefulness')) for event in completed.values() if 'quality' in event),
            'by_reference_mode': {mode: {key: distribution(event.get('timing', {}).get(key) for event in completed.values() if event.get('reference_mode', 'unknown') == mode) for key in timing_keys} for mode in modes},
            'note': 'Stage wall times include tool and agent waits. Rejections have reasons; review their elapsed attempts separately. No CPU timing or historical speed gain is inferred.'}


def append_event(folder, event):
    with (folder / 'events.jsonl').open('a', encoding='utf-8', newline='\n') as stream:
        stream.write(json.dumps(dict(event, at=datetime.datetime.now(datetime.timezone.utc).isoformat(), wall_ms=time.time_ns() // 1000000), ensure_ascii=False) + '\n')
        stream.flush()
        os.fsync(stream.fileno())


def record(root, receipt):
    with locked(root) as folder:
        events = ledger_events(folder)
        state = progress(events)
        if any(event.get('id') == receipt['id'] and event['event'] == 'complete' for event in events):
            raise ValueError('Already completed; retries and re-crops never increase the counter')
        if state['review_due']:
            raise ValueError('30 completed: review and release the next skill version before starting another batch')
        index = validate_receipt(root, receipt)
        if not any(item['row'] == row_from(receipt) for item in index['rows']):
            raise ValueError('Complete only after exact catalog readback')
        quality = receipt['quality']
        scores = [quality[key] for key in ('boundary', 'distinctness', 'usefulness')]
        if any(type(score) is not int or score not in (1, 2) for score in scores) or sum(scores) < 5 or not quality.get('notes'):
            raise ValueError('Quality rubric needs at least 5/6 and no failed dimension')
        timeline = [event for event in events if event.get('id') == receipt['id'] and event['event'] in ('start', 'mark')]
        stages = [event.get('stage') for event in timeline]
        if stages != ['start', *STAGES]:
            raise ValueError('Use start and the four measured stage marks once, in order; never reconstruct historical times')
        times = [event['wall_ms'] for event in timeline] + [time.time_ns() // 1000000]
        if times != sorted(times):
            raise ValueError('Clock moved backwards; timing invalid, retain attempt and start a new measured task')
        durations = dict(zip(('research_ms', 'reference_ms', 'crop_ms', 'inspection_ms', 'registration_ms'), [b - a for a, b in zip(times, times[1:])]))
        append_event(folder, {'event': 'complete', 'id': receipt['id'], 'skill_version': state['version'], 'timing': durations,
                              'total_wall_ms': times[-1] - times[0], 'quality': quality, 'reference_mode': receipt.get('reference_mode', 'fresh'),
                              'original_sha256': receipt['original']['sha256'], 'crop_sha256': receipt['crop']['sha256']})
        return progress(ledger_events(folder))


def release(root, report):
    with locked(root) as folder:
        state = progress(ledger_events(folder))
        if state['pending_count'] != 30 or set(report['entry_ids']) != set(state['pending_ids']) or len(report['entry_ids']) != 30:
            raise ValueError('Release must review exactly the 30 unique valid pending entries')
        if report['version'] != state['next_version']:
            raise ValueError('Version must increase by exactly 0.1')
        index = index_library(root)
        for entry_id in state['pending_ids']:
            matching = [item for item in index['rows'] if item['row']['id'] == entry_id]
            if len(matching) != 1 or any(matching[0]['row'].get(flag) is False for flag in FLAGS) or not matching[0]['row'].get('entrySkillEvidence'):
                raise ValueError('Cohort entry missing or invalid in current catalog: ' + entry_id)
            receipt = matching[0]['row']['entrySkillEvidence']
            validate_receipt(root, receipt, index)
            if sum(receipt['source']['id'].lower() in item['sources'] for item in index['rows']) != 1:
                raise ValueError('Cohort source duplicated in current catalog')
        for key in ('errors_reviewed', 'timing_analysis', 'quality_analysis', 'method_decision', 'regression_evidence', 'security_review', 'installed_package_sha256', 'public_download_sha256', 'published_url'):
            if not isinstance(report.get(key), str) or not report[key].strip():
                raise ValueError('Missing release evidence: ' + key)
        if report['installed_package_sha256'] != report['public_download_sha256'] or not report['published_url'].startswith('https://'):
            raise ValueError('Installed and publicly verified package hashes must match')
        if not re.fullmatch('[0-9a-fA-F]{64}', report['installed_package_sha256']):
            raise ValueError('Release requires actual SHA-256 evidence')
        append_event(folder, dict(report, event='release'))
        return progress(ledger_events(folder))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--library', type=pathlib.Path)
    sub = parser.add_subparsers(dest='command', required=True)
    sub.add_parser('index')
    sub.add_parser('status')
    sub.add_parser('report')
    for name in ('validate', 'register', 'complete', 'release'):
        command = sub.add_parser(name)
        command.add_argument('receipt', type=pathlib.Path)
        if name == 'register':
            command.add_argument('--expected-sha256', required=True)
    for name in ('start', 'mark', 'reject', 'revoke'):
        command = sub.add_parser(name)
        command.add_argument('id')
        if name == 'mark':
            command.add_argument('stage', choices=STAGES)
        if name in ('reject', 'revoke'):
            command.add_argument('reason')
    crop = sub.add_parser('crop')
    crop.add_argument('original', type=pathlib.Path)
    crop.add_argument('destination', type=pathlib.Path)
    crop.add_argument('xywh', nargs=4, type=int)
    args = parser.parse_args()
    if args.command == 'crop':
        result = make_crop(args.original, args.destination, args.xywh)
    else:
        if not args.library:
            parser.error('--library is required')
        if args.command == 'index':
            result = index_library(args.library)
            result = {**result, 'rows': [{'area': item['area'], 'id': item['row']['id'], 'name': item['row'].get('name'), 'sources': item['sources']} for item in result['rows']]}
        elif args.command in ('validate', 'register', 'complete', 'release'):
            receipt = read(args.receipt)
            if args.command == 'validate':
                validate_receipt(args.library, receipt)
                result = {'status': 'valid_assets_and_metadata', 'visual_judgment': 'agent responsibility'}
            elif args.command == 'register':
                result = register(args.library, receipt, args.expected_sha256)
            elif args.command == 'complete':
                result = record(args.library, receipt)
            else:
                result = release(args.library, receipt)
        else:
            with locked(args.library) as folder:
                events = ledger_events(folder)
                state = progress(events)
                if args.command in ('status', 'report'):
                    result = measurements(events) if args.command == 'report' else state
                else:
                    if state['review_due'] and args.command == 'start':
                        raise ValueError('30 completed; release review is due')
                    if args.command == 'start' and any(e.get('id') == args.id and e['event'] in ('start', 'complete') for e in events):
                        raise ValueError('Task already started; preserve its clock and retries')
                    if args.command == 'mark':
                        prior = [e.get('stage') for e in events if e.get('id') == args.id and e['event'] in ('start', 'mark')]
                        if prior != ['start', *STAGES[:STAGES.index(args.stage)]]:
                            raise ValueError('Stage marks must follow the actual measured sequence')
                    append_event(folder, {'event': args.command, 'id': args.id, 'stage': 'start' if args.command == 'start' else getattr(args, 'stage', None), 'reason': getattr(args, 'reason', None)})
                    result = progress(ledger_events(folder))
    print(json.dumps(result, ensure_ascii=True, indent=2))


if __name__ == '__main__':
    main()
