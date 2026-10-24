# Timing, quality and version releases

## One private ledger for all users of this skill

Use the canonical catalog checkpoint's `component-skill-cycle/` ledger, shared by implementation owners with one writer at a time. On another catalog initialize its own ledger once. Never initialize per worker/batch, lose the counter on compaction or include the historical baseline again. The website is a public read-only snapshot, not a live counter or background worker.

The package's baseline excludes the 155 distinct IDs already accepted at skill creation (154 new deliveries plus the original seed). It is an exclusion list, not proof that historic inputs are current or timing measurements. The new skill starts at v1.0 and 0/30. Unknown active/waiting time is `null`, not zero. Record actual start/completion timestamps; pause duration belongs in elapsed time and measured blocked time, not active work. Do not estimate measured fields from chat token counts. Shared batch review/build/deploy overhead is allocated once across its members, with the allocation method in the evidence.

## Tracker commands

The dependency-free Node tracker reads only explicit local paths. It never builds, deploys, installs skills, contacts a network, resumes chats or schedules itself. Review it under the current skill-inspection rules before executing a changed copy.

PowerShell example (replace paths with your actual catalog and reviewed package):

```powershell
$catalog = 'C:/path/to/catalog'
$skill = 'C:/path/to/lighthouse-catalog-component-builder'
$ledger = Join-Path $catalog '.local/component-skill-cycle'
node "$skill/scripts/cycle.mjs" init --store $ledger --workspace $skill --baseline baseline.json
node "$skill/scripts/cycle.mjs" status --store $ledger
node "$skill/scripts/cycle.mjs" record --store $ledger --workspace $catalog --receipt .local/component-receipts/LH01-0123.json
```

Use receipt.template.json as a schema example, not a completed receipt. All nine gates must pass for the same ordered input manifest: visual, interaction, responsive, accessibility, tests, independentReview, ci, production and actualCatalog. Supply relative paths and SHA-256 pins for each input and evidence file; `inputHash` is SHA-256 of `JSON.stringify(inputs)` in recorded order. Pin source, reference and relevant build/host inputs. Each proof must describe its actual scope; the tracker validates pins and required fields, not the truth of a visual or reviewer claim. Use a real independent reviewer. Reused observations retain their true date; record a new acceptance interval encompassing the valid observation, and explain prior active time instead of falsifying dates.

`quality` records first-pass result, review rounds, open defects (must be empty for completion) and honest residuals. Excluded/unobserved physical-device/native-edit/pixel-perfect claims are residuals, not passes. `cleanup` is complete, retained or deferred with an explicit reason. Deferred shared-library cleanup is separate from verified component delivery, and never called completed cleanup.

The tracker rejects missing/stale gates, changed file hashes, duplicate/baseline IDs, self-review, path escapes, symlinks and impossible measured durations. An exclusive lock and atomic replacement preserve the old ledger on failed validation. A stale lock needs inspection of its owning operation before manual recovery. Keep this private state and receipts out of the public site.

## Required review at 30, 60, 90…

The 30th completion sets reviewDue. The 31st is refused until review. Record notes/errors continuously; do not wait 30 to fix a defect.

1. Compare the last 30 by family/complexity and scope. Report elapsed/active/wait/rework median and p90, unknown counts, first-pass fraction, defects, review rounds and residuals. Avoid comparing a hard dialog batch to simple controls as a speed improvement.
2. Inspect failure evidence and corrections. Keep better proven methods; remove repeated loops, stale task recovery, duplicated asset hashing and invalid evidence refreshes. Preserve actual visual/interaction/accessibility/independent-review/CI/release checks. Faster by skipping quality is rejected.
3. Review methods with comparable observed samples. `adopt` needs positive before/after measured time, a faster result, no quality regression and all gates preserved. Otherwise `retain` the method and document the finding. A necessary quality repair can be retained as the proven baseline without claiming a speed win.
4. Prepare the new package: update SKILL.md, manifest version, changelog and affected references/tests. Version uses integer tenths: 1.0 → 1.1 → … → 1.9 → 2.0. Re-run static inspection and meaningful tests on exact changed content before runtime/install. Preserve prior release archives and checksums. Publish/install the reviewed package and updated page/summary under current authorization; stop boundaries still apply.
5. Only when the package release is delivered, create a pinned review receipt with `from`, `to`, `decision`, `findings`, `knownErrors`, `reviewer`, `methods` and `evidence` (file/path SHA-256 of release/review proof). Run:

```powershell
node "$skill/scripts/cycle.mjs" review --store $ledger --workspace $catalog --review .local/component-receipts/workflow-1.1.json
```

The next component must use the new version. `review` advances the ledger exactly 0.1 and retains all component/review events. It does not silently edit the package or publish for you. Generate public progress from ledger status only after fresh observation; include the observation date. Never expose private receipt paths or fabricate live updates. No automation is required or authorized by this skill.
