# Operations and receipts

Use native Windows tools on Windows. Do not start WSL, duplicate preview servers, browser helpers or global hooks. Reuse a healthy owned service only when it is needed. Viewing the published catalog needs no local server.

From the resolved local catalog root, use the existing helper:

```text
node "画像生成を登録.mjs" --id "LH07-0115" --image "<absolute-candidate.png>" --prompt-file "<absolute-prompt.txt>" --references-file "<absolute-references.json>" --status "reviewed" --notes "<specific comparison and residuals>" --generator image_gen
```

Supported statuses are `reviewed`, `needs-correction`, `review-pending`. The helper allocates versions; invoking it twice can create two versions. It has no idempotency-key option. On uncertain output, read the manifest/catalog and compare ID, stored file and SHA-256 first. Do not fabricate a successful tool receipt.

When `stored:true,catalogUpdated:false`, preserve the record. After the identified writer releases its lock, invoke **only** the existing `refreshCatalog()` export from `画像生成管理.mjs`, then read back the entry. Use one bounded retry after a relevant state change. Do not remove another writer's lock, restart the full registration, or generate another bitmap to repair a catalog lock. If refresh remains blocked, checkpoint it as unfinished.

Use the original worker's queue/checkpoint/acceptance ledger when assigned. Direct tasks need an ordinary task receipt; no new queue is required. The skill learning ledger is an additional small JSON file in an explicit `.local` directory outside public exports, shared by producers under one designated curator. The CLI refuses ledger writes outside a `.local` path. Its short exclusive file lock fails clearly on contention; it does not recover stale locks automatically. Confirm owner/process state before manual recovery.

Create one receipt matching `task-receipt.example.json`. Start timing before source preparation and finish after stored-image/catalog readback and checkpoint. Include all attempts and waits in elapsed time. Record generation-call time and known active work separately; use null when unavailable. Do not backfill old entries with estimated timing. `review-pending` without visual inspection is incomplete and cannot enter the 10-entry count.

```text
node scripts/learning.mjs record --ledger "<private-ledger.json>" --receipt "<task-receipt.json>"
node scripts/learning.mjs report --ledger "<private-ledger.json>"
node scripts/learning.mjs review --ledger "<private-ledger.json>" --receipt "<review-release.json>" --package "<reviewed-skill-directory>"
```

The helper has no network access, does not generate images, does not edit catalog data, and never installs or rewrites its own skill. It validates reported evidence flags; the agent must inspect the actual artifacts behind them. Duplicate entry IDs return `recorded:false`, with the count unchanged. Retain later correction details in that entry's production record.

For owned queues, derive the next ID from the current assignment order and completed/excluded sets; do not increment IDs or guess the next category. Clear current-entry proof fields at start while preserving lastCompleted history. Reuse existing results and owned refresh helpers before another call. The parent writes improvement notes and owns publication.

For new receipts use the active installed version, explicit timezone offsets, and timingCoverage: elapsedScope(full/partial/interrupted), preparationMeasured(boolean), unknownIntervals(array). Mark omitted preparation partial and stopped/reboot intervals interrupted. Include wall waits in elapsed; leave activeMs unknown. Keep each old mistaken note/receipt intact, add a dated correction supplement naming the exact old claim and newly viewed evidence, and link it from parent notes. If an already-counted row conflicts with real pending status, stop production and request parent reconciliation: preserve a full ledger backup and audit, quarantine the invalid row using an owner-reviewed lock-aware repair, then verify counts and every affected boundary. The production CLI has no general quarantine or status-promotion command; never re-register identical bytes or replay a duplicate receipt to invent a correction.
