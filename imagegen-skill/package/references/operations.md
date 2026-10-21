Hourly skill review runs concurrently with production; no10-entry or hourly-due pause. Parent reviews actual per-entry completion time, quality and workflow every60minutes. Catalog/image batch publication remains every30 accepted entries.

## Current throughput direction

The human requires continuous worker production with quality. Produce the assigned small batch privately, up to two calls per fresh entry. A deferred entry does not block other assigned entries. Parent reviews candidates concurrently and remains the only publisher; register/count only accepted ready results through the existing gate. Inspect visible output against original and current render. Source fields are diagnostics, not automatic visual verdicts. Never start a new service or audit loop for each entry.

# Current ready-only policy

This quality revision supersedes earlier language permitting failed registrations/counts. New failures stay private; two failed calls stop the entry. Only digest-bound parent-approved ready candidates may register via register-ready.mjs. Historical rows/statuses remain intact.

# Operations and receipts

Use native Windows tools on Windows. Do not start WSL, duplicate preview servers, browser helpers or global hooks. Reuse a healthy owned service only when it is needed. Viewing the published catalog needs no local server.

Use only register-ready.mjs with a parent-approved private job, as described in acceptance.md. It invokes the existing helper after the gate. New needs-correction/review-pending candidates stay private. Never invoke legacy registration directly.

When `stored:true,catalogUpdated:false`, preserve the record. After the identified writer releases its lock, invoke **only** the existing `refreshCatalog()` export from `画像生成管理.mjs`, then read back the entry. Use one bounded retry after a relevant state change. Do not remove another writer's lock, restart the full registration, or generate another bitmap to repair a catalog lock. If refresh remains blocked, checkpoint it as unfinished.

Use the original worker's queue/checkpoint/acceptance ledger when assigned. Direct tasks need an ordinary task receipt; no new queue is required. The skill learning ledger is an additional small JSON file in an explicit `.local` directory outside public exports, shared by producers under one designated curator. The CLI refuses ledger writes outside a `.local` path. Its short exclusive file lock fails clearly on contention; it does not recover stale locks automatically. Confirm owner/process state before manual recovery.

Create one receipt matching `task-receipt.example.json`. Start timing before source preparation and finish after stored-image/catalog readback and checkpoint. Include all attempts and waits in elapsed time. Record generation-call time and known active work separately; use null when unavailable. Do not backfill old entries with estimated timing. `review-pending` without visual inspection is incomplete and cannot enter the ready accepted count.

```text
node scripts/learning.mjs record --ledger "<private-ledger.json>" --receipt "<task-receipt.json>"
node scripts/learning.mjs report --ledger "<private-ledger.json>"
node scripts/learning.mjs review --ledger "<private-ledger.json>" --receipt "<review-release.json>" --package "<reviewed-skill-directory>"
```

The helper has no network access, does not generate images, does not edit catalog data, and never installs or rewrites its own skill. It validates reported evidence flags; the agent must inspect the actual artifacts behind them. Duplicate entry IDs return `recorded:false`, with the count unchanged. Retain later correction details in that entry's production record.

For owned queues, derive the next ID from the current assignment order and completed/excluded sets; do not increment IDs or guess the next category. Clear current-entry proof fields at start while preserving lastCompleted history. Reuse existing results and owned refresh helpers before another call. The parent writes improvement notes and owns publication.

For new receipts use the active installed version, explicit timezone offsets, and timingCoverage: elapsedScope(full/partial/interrupted), preparationMeasured(boolean), unknownIntervals(array). Mark omitted preparation partial and stopped/reboot intervals interrupted. Include wall waits in elapsed; leave activeMs unknown. Keep each old mistaken note/receipt intact, add a dated correction supplement naming the exact old claim and newly viewed evidence, and link it from parent notes. If an already-counted row conflicts with real pending status, stop production and request parent reconciliation: preserve a full ledger backup and audit, quarantine the invalid row using an owner-reviewed lock-aware repair, then verify counts and every affected boundary. The production CLI has no general quarantine or status-promotion command; never re-register identical bytes or replay a duplicate receipt to invent a correction.
