# Entry workflow and local helper

## Scope and runtime

The owner invokes this skill for a bounded task. It does not resume the old 8,000-entry research queue. Keep originals, ownership allocations and historical acceptance intact. The library is the existing `日本語コンポーネント集`, not the Lighthouse application repository.

Use the existing native Windows Python with Pillow. The reviewed authoring runtime used Python 3.11+ and Pillow 12.3.0. The package installs no dependencies, runs no child process, accesses no credentials and makes no network requests. Mobbin research stays in the app-managed Mobbin connector. Check runtime availability once; missing dependencies require their own inspection before installation.

In PowerShell, set task-specific variables to the verified Python executable, this skill's script and the existing library. Quote paths with spaces. Commands below use `$catalogPython`, `$catalogScript` and `$catalogLibrary`:

```powershell
& $catalogPython $catalogScript --library $catalogLibrary status
& $catalogPython $catalogScript --library $catalogLibrary report
& $catalogPython $catalogScript --library $catalogLibrary index
& $catalogPython $catalogScript --library $catalogLibrary start LH03-0560
& $catalogPython $catalogScript --library $catalogLibrary mark LH03-0560 selected
```

The ID is an example. Recover the actual next allocated ID; do not reuse it blindly. The index reads only each area's exact `catalog.json`, supporting raw arrays, `items` or `components`. Do not scan backup catalogs or source manifests as entries. It includes excluded rows in duplicate checks, and deduplicates strict counts by technical ID with **all three flags !== false**. Source deduplication and actual structural distinctness remain separate.

Do not repeatedly dump the full index to chat. Retain it privately; use names, families and nearby entries to select a small visual comparison set. The helper rereads fingerprints at the write boundary. Other tools must respect the same single-writer allocation; the helper lock cannot control unrelated processes.

## Research and retain

Select a useful reusable component, not a random whole page. A diverse app/category sample is acceptable; the component must suit the allocated category and a real church-app use. Prefer suitable saved originals/results. When fresh research is authorized, use small targeted Mobbin searches and inspect returned images. Retain the canonical screen URL, app, screen ID, query/result provenance and any source notice privately beside the reference. A connector success is not proof that an original was saved.

After selecting the source, mark `selected`. Retain the unchanged original inside the assigned shard, verify dimensions and SHA-256, and mark `reference_saved`. Use the source image's pixel dimensions for the region, never the scaled chat preview. A full dashboard, workspace, screenshot footer, unrelated controls or padding does not constitute a component.

```powershell
& $catalogPython $catalogScript --library $catalogLibrary mark LH03-0560 reference_saved
& $catalogPython $catalogScript crop 'C:\assigned-shard\original.webp' 'C:\assigned-shard\component.png' 120 240 600 320
& $catalogPython $catalogScript --library $catalogLibrary mark LH03-0560 crop_saved
```

The crop command preserves the original, refuses overwrites and rejects out-of-bounds/noninteger rectangles. PNG encoding is deterministic for a fixed source, Pillow version and parameters. Pixel equivalence is verified independently on registration. If an existing crop is suitable, verify its actual pixels/hash rather than re-create it. If the original is already exactly one component, use it as both original and crop with `already_component: true` and full-image `xywh`; actual inspection must justify this exception.

View the actual original and actual crop with an image inspection tool. Inspect every edge, text/control inclusion and the visible state. If a crop is wrong, preserve it and create a revised file; do not mark it inspected until viewed. Record timestamp, both exact asset hashes and specific observations. Mark `inspected` only then. A helper validation, contact-sheet label or self-attested Boolean cannot replace actual visual judgment.

## Quality and registration

All hard gates must pass: authentic provenance, unchanged original, a reusable component boundary, distinct structure, actual matching image and visual inspection, and exact catalog readback. Score these judgment dimensions **0, 1 or 2**:

| Dimension | 0: fail | 1: adequate | 2: strong |
|---|---|---|---|
| Boundary | Missing or page-level | Complete, small incidental padding | Exact complete component, clean edges |
| Distinctness | State/content variant | Clear structural difference | Explicit nearest-component comparison explains the difference |
| Usefulness | No church-app use | Concrete plausible placement | Concrete user task, state and limitation documented |

Completion requires at least **5/6**, no zero and all hard gates. Scores are the reviewer's rubric, not a measured fidelity percentage. Preserve failed attempts and reasons for the 30-entry review.

Fill a receipt using `receipt.example.json`. Asset paths are relative to the assigned shard; no absolute paths or parent traversal. Include quality before registering so the exact receipt matches readback. Include the original source evidence record path/notice when available; the receipt is not a substitute for retaining that evidence.

```powershell
& $catalogPython $catalogScript --library $catalogLibrary validate 'C:\task\receipt.json'
& $catalogPython $catalogScript --library $catalogLibrary register 'C:\task\receipt.json' --expected-sha256 ACTUAL_CATALOG_SHA256
& $catalogPython $catalogScript --library $catalogLibrary complete 'C:\task\receipt.json'
```

Use the current target catalog hash from the index, not an invented constant. `register` preserves the existing catalog wrapper and every previous row/value, appends a research-only record, uses a lock plus temporary file/atomic replace, and verifies exact readback. An identical retry returns `already_registered`; a different receipt with the same ID fails. It refuses reused source IDs even in excluded rows. The script validates evidence consistency; it cannot determine whether a structure is genuinely new or whether someone truly viewed the crop.

The helper stores its append-only task ledger in `LIBRARY/.local/catalog-entry-skill/events.jsonl`. It records actual stage wall times across process calls. Research, reference retention, crop, inspection, registration and total wall time remain separate. They include tool/agent wait between marks: do not label them CPU timings. `reference_mode` distinguishes `fresh` and `reused`. No historical durations are inferred from old chat turns. Retain retries/waits in the same clock; record rejection with `reject ID REASON`. Missing historical metrics remain unknown.

`complete` requires the measured stage order and exact catalog receipt. A retry/re-crop cannot increment a completed ID. If later invalid, `revoke ID REASON` permanently excludes that ID from valid completion counts; correct it as evidence without earning another completion. Revocation does not erase historical releases.

Run the canonical aggregation only after the batch is saved and stable. Verify the exact root/shard technical IDs, each count flag and affected source/crop links. Do not translate successful reference registration into native, build, fidelity or public-delivery claims.

## Recovery

An existing writer lock or temporary file is an ownership conflict, not permission to delete it. Stop, identify its owner and checkpoint. A changed catalog hash requires a fresh bounded read and duplicate check. Recover an append/readback interruption from the actual catalog and receipt before retrying; do not register a second ID. A malformed ledger/catalog is a real blocker to repair with its owner, not grounds for normalization or an unchanged retry loop.
