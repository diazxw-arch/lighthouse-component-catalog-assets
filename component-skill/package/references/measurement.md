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


## Hourly1.5 observed review

Thirty more components passed all required gates, bringing new accepted total to60. Their source-ready-to-acceptance intervals include waiting, corrections and parent publication. Active authoring remains unknown30/30, so no active completion-time or speed improvement is claimed. Compare those intervals only within the recorded family/complexity and source-ready basis. The private review records median/p90, observed browser phases, accepted entries/hour over an explicit release window and quality denominators. Acceptance throughput from queued source is not authoring throughput.

The initial combined actual-catalog audit passed26/30; four IDs needed parent harness/instrumentation supplements. Final results are120/120responsive renders,139/139functional/state cases,30/30accessibility and30/30desktop reachability. Earlier real preview corrections for153/154/161 remain separately recorded. The bounded workflow improvement targets parent publication/audit rework; its speed effect remains unproven. New worker per-ID start/local-check evidence is source-ready only until independent review and all release/catalog gates pass.


## Throughput goal:100 accepted entries per hour

The human goal is100 distinct fully accepted entries per wall-clock hour across the existing authorized pipeline. This is a target, not achieved performance. Count only entries with every required gate passed; report source-ready candidates separately.100/hour corresponds to36seconds average spacing between completed pipeline outputs, not36seconds of measured authoring per entry. Preserve coherent local groups5 and parent component publication groups30; keep hourly skill and website releases separate.

At each hourly review report rolling1h/3h/24h accepted throughput and source-ready throughput with exact window endpoints, distinct IDs, comparable family/complexity and quality denominators. Show the gap to100/hour, queue counts and known/unknown phase timing. Never infer speed from a queued release burst or from synchronous file-write duration. Keep real start-to-source-ready, start-to-acceptance, active/check/review/wait/rework measurements distinct.

Use the largest evidenced bottleneck for one bounded improvement: restore exact scoped commands and reusable deterministic source/receipt helpers; reuse validated primitives and unchanged source/font/media/render proof by exact identity; review shared source once and per-ID contracts separately; avoid full checkpoint serialization, guessed paths and repeated completed checks. Keep worker implementation running while parent independently reviews the queued aggregate. Record before/after comparable measurements and residuals before claiming gains. This target authorizes no additional workers, services, dependencies, WSL, other-chat outreach or relaxed fidelity/accessibility/security/review/CI/production/catalog/retention gates.

## v1.8 evidence scope

On 2026-10-23, three Site-local previews were published for LH01-0161, LH01-0162 and LH01-0172. The first live-route inspection found all three URLs missing from the Worker route map; a follow-up release added exact route/content checks. Version 60 then returned HTTP 200, `text/html`, and the pinned source byte counts for all three routes. The initial save also rejected an archive whose root was the `dist` contents; the corrected archive kept `.openai/hosting.json` at root and `dist/` nested. Preserve these failed attempts and fixes as publication rework evidence. They do not establish a component defect rate, a per-entry coding duration or a before/after speed gain. The three catalog implementation records remain pending acceptance; no newly accepted component is counted.


## Hourly1.7 evidence scope

The next30 remain source-reviewed candidates, not new accepted entries. Their exact aggregate has416files/2891tests passing,30immutable preview HTML/input maps matching, and150distinct default-width captures passing after one preserved screenshot retry. Preliminary standalone keyboard and accessibility/font probes have explicit harness failures and scoped successful supplements. These are stage-specific denominators, not a final component acceptance or defect rate. Accepted cumulative remains60 until every required gate actually passes.

Measure aggregate command/check overhead once, per-ID browser case wall time separately, and active authoring/review/wait/rework only when observed. The validated command/fixture/native-focus preflight addresses evidenced parent rework; its effect on comparable median/p90 accepted completion time and rolling accepted throughput is unproven. Keep actual1h/3h/24h windows and unknown timestamp counts in the private hourly receipt.

## v1.9 preview-only batch evidence

Five Airbnb discovery-filter previews were prepared locally as a coherent batch. The five source files render, and their bytes match the explicit Worker route map. A missing exporter overlay allowlist was noticed before export/build and added to the change set. No independent acceptance, production or actual-catalog interaction gates are included in this observation. Per-entry active time, comparable authoring time and speed improvement remain unknown.

## v2.0 observed batch review

Thirty new preview candidates were prepared in six coherent groups of five, preserving original/generated media and implementation status. Independent static review covered30/30; scoped findings were fixed. Corrected local sandbox observations cover60/60 renders at actual320/720px, with zero observed horizontal overflow or browser errors. The initial wrong-viewport observations remain retained as harness rework and are excluded from the60. Production and actual-catalog gates for the new30 are separate, and no newly accepted entry is counted.

Active implementation/check/review/wait/rework minutes remain unknown30/30; do not derive them from file-write, batch or render durations. Current source-ready IDs are listed in manifest.json's scoped1h observation; global3h/24h histories remain unknown. The transport preflight addresses two observed release repairs and one viewport-harness retry. There is no comparable before/after timing sample or measured speed improvement.

## v2.1 observed batch review

The current30preview candidates have final independent static review30/30; the initial per-ID static review passed26/30before four scoped corrections. Visual inspection separately found two issues, one in an already corrected ID. Reconciled render evidence contains120final captures at actual320/390/768/1280px, retaining16superseded captures separately. Twenty-five interactive previews produced47local host requests. Production74routes matched exact bytes, and30actual catalog previews with25interactive cases showed no observed overflow/page errors. These are stage-specific observations, not full acceptance; new accepted remains0and historical accepted60is unchanged.

Per-entry active implementation, checking, review, waiting and rework durations remain unknown30/30. Preserve source emission timestamps separately from authoring starts. Current1hsource-ready IDs and exact1h/3h/24hwindow endpoints are in manifest.json; global3h/24hcounts are unknown. The change addresses an observed route-update retry and lost-observation retry. No comparable before/after active-time or accepted-throughput improvement has been measured.

## v2.2 observed review scope

The retained last30 source review passed23/30initially and30/30after seven affected IDs were corrected. Final evidence covers120responsive observations at actual320/390/768/1280,26interactive previews/49local host requests,105byte-exact production routes and30actual catalog previews/26actions. Twenty-eight superseded render observations are retained; the original screenshot paths were reused, so this is not a claim that all superseded image files remain. All dates stay attached to their actual observations. No new accepted entry is counted.

This overdue review occurs after an interruption. Filter source-ready events by actual timestamps for each rolling window; old work is not current-hour throughput. Active implementation/check/review/wait/rework durations remain unknown30/30, and global histories remain unknown. The draft/focus/contrast contract addresses observed review and render rework, with no comparable speed gain or fresh paired skill test claimed.

## v2.3 observed review scope

The current30published preview candidates passed25/30initial source review and30/30final after five Important affected IDs. Final evidence covers120four-width render observations,40superseded observations,29interactive previews/102local requests,135exact live routes and30actual-catalog frames/29actions. Caption-growth supplements contain four observations at actual320/390 with24px labels. Following5local candidates passed4/5initially and5/5after an IME Enter guard correction.

Rolling throughput uses the actual sourceReady timestamps of these35distinct candidates and exact window endpoints. This is a stated partial scope; global source-ready and accepted histories remain unknown. No new accepted entry is counted. Active implementation/check/review/wait/rework durations remain unknown35/35. No comparable speed gain or fresh paired skill test is claimed. All old releases, observation dates and baseline exclusions remain unchanged.

## v2.4 observed review scope

The current30published preview candidates passed22/30initial Important-level source review and30/30final after eight affected IDs. Final evidence covers120current four-width renders,29interactive previews/107local requests,165exact live routes and30actual-catalog frames/29actions. Auxiliary-column supplements contain six200%text observations at actual320/390. Following10local candidates passed9/10initially and10/10final; a minor description-list markup repair is retained separately.

Rolling1h/3h/24h source-ready rates use the actual timestamps of these40distinct candidates and exact window endpoints. This is a partial stated scope; global source-ready and accepted histories remain unknown. New accepted count is0; the accepted target gap remains100/hour. All40active/check/review/wait/rework durations are unknown. No comparable speed gain or fresh paired skill experiment is claimed. Keep prior review snapshots, dates and baseline exclusions unchanged.

## v2.5 observed review scope

The current30published preview candidates passed23/30initial Important-level source review and30/30final. Evidence covers120current four-width renders,26interactive previews/134local requests,195exact live routes and30actual-catalog frames/26actions. Following10local candidates passed8/10initially and10/10final. Another5are source-ready with review/captures in progress at this dated snapshot; do not include them in a final-quality denominator yet.

Rolling1h/3h/24h source-ready rates use actual timestamps from these45distinct candidates and exact endpoints. This is a partial stated scope; global source-ready and accepted histories remain unknown. New accepted count is0 and the accepted target gap remains100/hour. All45active/check/review/wait/rework durations are unknown. No comparable speed gain or fresh paired skill experiment is claimed. Preserve prior review snapshots, dates and baseline exclusions.
