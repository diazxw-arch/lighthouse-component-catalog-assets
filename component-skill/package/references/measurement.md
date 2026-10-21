# Timing, quality and version releases

## One private ledger for all users of this skill

Use the canonical catalog checkpoint's `component-skill-cycle/` ledger, shared by implementation owners with one writer at a time. On another catalog initialize its own ledger once. Never initialize per worker/batch, lose the counter on compaction or include the historical baseline again. The website is a public read-only snapshot, not a live counter or background worker.

The package's baseline excludes the 155 distinct IDs already accepted at skill creation (154 new deliveries plus the original seed). It is an exclusion list, not proof that historic inputs are current or timing measurements. The original release started at v1.0 and 0/10; a new catalog now starts with the reviewed package version and zero completions. Existing ledgers retain their current version/history. Unknown active/waiting time is `null`, not zero. Record actual start/completion timestamps; pause duration belongs in elapsed time and measured blocked time, not active work. Do not estimate measured fields from chat token counts. Shared batch review/build/deploy overhead is allocated once across its members, with the allocation method in the evidence.

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

## Hourly review and migration

Current human rule2026-10-21: review/update the skill and matching website every60minutes. Entry counts no longer trigger or block a release. The existing parent automation/checkpoint supplies the clock; the offline tracker starts no timer/service. Stage and inspect the changed runtime before executing it. Under mutateStore, migrateHourly(existingState, actualLastReviewTimestamp) preserves accepted IDs, baseline exclusions, historical reviews/version and events, sets the last-release accepted offset and next due time. It refuses a repeated migration. Do not reset the ledger or rewrite old timing. New stores initialize the reviewed manifest version and hourly mode.

When due, compare all new work/blocked/quality observations since the last review, including partial work when no entries were accepted. Record actual source-ready versus accepted intervals separately from measured active/check/review/wait/rework. Unknown stays null. Report comparable median/p90 per-entry completion time, accepted entries/hour over the stated observation window and quality denominators. Allocate shared overhead once. Fix the largest evidenced bottleneck; adopt measured speed claims only with comparable before/after samples and no quality/gate regression. retain is appropriate for a necessary quality repair or unproven speed result.

Prepare +0.1 version, manifest/changelog/references, relevant tests and exact static/source inspection outside discovery roots. Publish package, ZIP, SKILL.md, checksums, skill page and homepage/catalog links together and verify exact live hashes. Then submit the existing pinned review receipt through review. The hourly tracker accepts zero or any number of newly accepted entries for a due review; advances exactly0.1, saves only those new IDs and sets the next review60minutes after actual delivery. Overdue reviews do not block completion. Failed release leaves last safe version/public package intact; record the concrete failure and continue independent implementation. Do not fabricate success or catch up missed hours with synthetic releases. Parent component publication remains30source candidates and all nine acceptance gates remain mandatory.

## First reviewed cycle and website contract

The first 10 accepted entries span learning/reflection and reader-utility families. Active authoring, blocked and active rework measurements are unknown for every entry. The recorded verification interval begins at the first retained observation and includes waiting and coordination; it is not authoring time. Browser/build phase timings remain separately attributed, and shared overhead is recorded once with its allocation method.

Nine entries passed the first parent actual-catalog audit; one required a narrow-layout correction. This first-pass metric describes that specific published-catalog check, not first implementation or first source review. Preserve source-review rounds, defects, fixes and residuals separately. Use comparable family/complexity and actual phase scope in future comparisons. With no comparable measured active-time samples, retain the method and make no speed claim.

Each reviewed skill release publishes the exact package, ZIP, SKILL.md, checksum manifest, skill page and homepage/catalog version links in the same hourly release. Verify the deployed labels, link destinations and artifact hashes. This does not wait for the 30-candidate component batch. Save-only or failed hosting publication is incomplete; keep the previous reviewed public release until the replacement succeeds. Never count new baseline/history entries or fabricate acceptance or release evidence.

For a new catalog only, init reads the version and60minute hourly cadence from the reviewed package manifest supplied as workspace. Existing stores refuse init and keep their accepted history/version. Upgrade an existing ledger only through the pinned due-hourly review command; never reset it to install a newer package.

The local ledger requires a trusted single-owner filesystem and cooperating writers using cycle.lock. File existence is checked separately from parsed state under the held lock, so init refuses even an existing null/false/0 file. Atomic rename is not a claim of hostile-filesystem isolation or fsync/power-loss durability. Inspect a leftover lock and its owner before explicit recovery; never delete it blindly.

## Second reviewed cycle

The next10 accepted entries are grammar/lesson guidance and lecture/dialogue families. Nine passed the initial parent actual-catalog audit;135initially failed an audit harness assumption about its deliberately disabled completed-state radio and passed an explicit supplement. All10 cleared the required final gates after earlier source/render review and the scoped130punctuation correction. This is not a measured improvement over the first cycle: family/complexity differs and active authoring, waiting and rework duration remain unknown10/10. Retain methods; make no speed gain claim. Record actual per-ID browser-check elapsed time separately and do not allocate the shared application-build time without a stated method.

When gathering evidence, reconcile explicit successful supplements by ID and state; retain the failed original audit and its cause. A verification interval begins at the earliest actual responsive or interaction observation for the accepted inputs. It is distinct from authoring time. Pin the full unchanged render graph against both its historical capture commit and the delivered source before reusing dated screenshots. Keep historical implementation skillVersion separate from current acceptance review skillVersion; never rewrite old version attestations.

## Third reviewed cycle

The third10 accepted entries cover word learning/controlled recording and reading-plan/editorial guidance. Initial catalog-audit7/10includes two real layout failures (137/138) and a140audit assumption about an intentionally static card. All10cleared final gates. Do not call this a source-first-pass defect rate or compare different families as speed improvement. Active authoring, waiting and rework remain unknown10/10; fresh production browser-check durations are separately recorded per ID.

A broad verification interval can begin at an actual retained source-ready handoff and include subsequent corrections/waiting/coordination. Label that basis; it is not authoring time. Reuse valid source/render observations with their actual dates only after full input-graph identity checks. Keep resolved source findings, layout defects and audit-harness mistakes separate, and preserve each exact successful supplement.

