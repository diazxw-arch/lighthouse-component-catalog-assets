# Catalog implementation workflow, v2.4

## Authority and recovery

Use native Windows. Read only relevant current pointers; do not scan entire chat histories. Keep one owner, one checkpoint and one acceptance ledger. Latest human scope wins. Other chats, paused research/image queues, global hooks, MCP settings, WSL and dependencies are outside this skill's authority.

Before each batch, save objective, assigned IDs, exact unfinished step, branch/HEAD, changed paths, completed commands after checkpoint, valid evidence hashes, blockers, scoped correction IDs, process ownership and shutdown command. On context restoration, reconcile these against current source and receipts before choosing work. Closed tasks reopen only for a new human request or a specific invalidated check. A final answer about an old task is drift, not backlog completion.

Existing project production rules and CI remain required. Identify overlap before editing shared infrastructure. Reuse a healthy owned preview. A's historical infrastructure ownership is assignment-specific, not a permanent grant to another worker. No background service or recurring automation belongs in the skill.

## Site identity and registration source

Resolve a ChatGPT Site by its exact URL and opaque project ID. Record its current published version, source repository/branch and audience before writing. Keep the Site, authoritative component library, generated-image staging and component runtime separate. Do not redirect a Site-only request into another Lighthouse application.

`generated=yes` is an index facet, not an eligibility decision. Check the assigned record's `catalogPresentation.status`, latest `generatedImages` status/file/hash, `latestImageMissing` and `implementation.status`. Reuse verified unchanged work. Treat `hosted-generation` as staging: compare candidate-image, source-entry and source-catalog hashes with the current authoritative library and complete the parent review before promotion. If a source or pin cannot be reconciled, leave the candidate staged and report the blocker.

## Fast path for an existing-Site preview batch

Use this path when the assigned work adds coded previews while catalog rows, source images and native files stay unchanged.

1. Resolve only the assigned IDs and their exact source records. Do not scan or re-export the full catalog unless registration data actually changes. Save the source commit, Site version and completed-work checkpoint once.
2. Before coding, trace the real request route through the Worker. A file copied into `dist` or an archive is not necessarily served. For each ID update the catalog-client injection, exporter overlay allowlist, Worker route map, validator's expected overlays and byte/hash manifest in one pass; the exporter allowlist is easy to overlook. Have the validator compare mapped content with pinned source bytes.
3. Keep previews self-contained where the sandbox requires it. Batch compatible IDs, reuse unchanged host messaging and resize behavior, and change only affected shared code. Leave catalog implementation status pending until all acceptance gates pass.
4. Build once after the batch is ready. Check every source-to-dist hash and Worker route/content pair. Use the full-export validator only when its pinned full-snapshot argument is available; do not invoke it with a missing or invented path.
5. Package from a root that contains `.openai/hosting.json` and a nested `dist/` tree, including the supported Worker entry point or declared static directory. Inspect archive member paths before saving the Site version. Push the exact commit used to build that archive.
6. After deployment succeeds, request each new URL and verify status, byte count and content type, then open the actual catalog card and exercise the preview in its iframe. A successful site shell does not prove component routes loaded. If a route fails, fix the route map and publish a new commit before reporting it live.

This path removes repeat discovery, full-catalog export and archive/route retries when their inputs are unchanged. It does not remove source identity, interaction, accessibility, independent review, CI, production or actual-catalog gates.

## Catalog transport and viewport preflight

At resume, inspect one existing live card before coding the next group. Trace its client load, parse `/catalog.json`, resolve the selected row's exact card-bundle URL, and confirm its sandboxed component appears. Save the deployed version and dependency hashes once; reuse unchanged proof. If the data chain is broken, repair it independently while retaining queued component source.

Do not rely on archive membership or a configured ASSETS binding. Every relative card URL must have a supported route. In this repository, `.openai/card-assets.json` pins the immutable card files; `scripts/build-worker.mjs` verifies local bytes and emits `PINNED_CARD_ASSETS`; `src/worker/index.js` checks fetched size/SHA before serving. Never turn this into an arbitrary upstream proxy. Preserve native/hosted overrides and catalog data. Return directly parseable JSON: Site dispatch was observed stripping Content-Encoding from a compressed response. Keep HEAD responses empty, including errors.

For browser captures, set the page viewport explicitly and record the iframe's observed `innerWidth`. Compare requested and observed widths before counting responsive evidence. A requested-width label is insufficient: the initial helper passed viewport options to a context page factory that ignored them. Retain invalid observations with the exact harness cause, then replace only affected captures. Capture the actual iframe after its load/resize settles; a blank clipped capture is not visual proof.

## Manifest-driven routes and durable batch observations

The Worker preview map is generated from `.openai/component-previews.json`. The build validates ID/path shape, duplicate routes, regular source files, exact source/dist bytes, size and SHA-256. Add final source files and regenerate the manifest before building; do not maintain a second Worker ID list or replace a list by its first ID. Exporter/validator allowlists and client callbacks still need the scoped batch update. Inspect the generated `site-assets.js` payload rather than searching only the importing Worker entry point.

Write each browser observation as it completes, including its exact ID/input identity. Optional unrelated network requests must not discard completed observations. Preserve failed reports; replace only affected ID/state/width captures. A script's source emission start is not measured active implementation start.

If the source branch advances during ImageGen registration, keep a recoverable local candidate commit, fetch and rebase normally. Regenerate conflicted build artifacts from combined source, then check selected source/detail hashes and upstream catalog/hosted mappings. Reuse unchanged component renders instead of rebuilding their evidence. Never force push or overwrite parallel media/registration work.

## Select and measure

Read the actual catalog record and its selected original/Image Gen paths. Inspect images at useful size. Confirm eligibility, current revision and whether a reusable coded implementation already exists. Hash changed source/reference records at acceptance boundaries, not every asset on every poll. Keep provenance and licensed originals. Never replace a working component with an image.

Write a short contract: original crop/bounds, font face/weight/size/line-height/tracking for Japanese and English roles, spacing, states, behavior, app-owned data/callbacks, interaction targets and width-dependent rules. Preserve fine geometry from the original and the approved target. A screenshot is visual evidence, not permission for unrelated redesign.

Capture source message ID/thread, exact new human correction, affected IDs, scoped reusable rule, exceptions, and pending/proved verification. Deduplicate by message ID. Only the parent writes a shared correction log; owner inboxes carry pending feedback. Apply relevant corrections to later work and record their actual check in that item's acceptance.

## Build efficiently

Prefer existing typed primitives and accessible patterns. Batch five compatible items, ten only when coherent. Keep per-item proof even with family reuse. Model controlled state and real host requests. Avoid fake download success, media playback, upload progress or persistence. Distinct color/text/state swaps are one component, not extra completions.

Start the component preview with the component itself. Do not add unrelated reader content, dimension labels, demo chrome or visible credit UI. Preserve required attribution and licenses in deliverables. Preserve meaningful swatch fills and authored themes.

For gestures, capture one pointer, track its actual grab point, cancel safely on disable/capture loss, clamp bounds, provide keyboard controls and accessible boundary feedback. Avoid repetitive live announcements during dragging and no-op undo entries. For dialogs, reuse the installed focus-containment primitive; check outside press, Escape, reopen, focus return and scroll-lock teardown.

For a Component Builder-only release, run `node scripts/export-skills.mjs --component-only`. This preserves the separately maintained entry-skill distribution and its current navigation link; export both skills only when both releases are in scope.

## Draft and embedded preview contract

Before implementation, fill these fields in the private per-entry contract. Review shared control logic once and keep per-ID copy, artwork, state and callback checks separate.

| Field | Required decision |
| --- | --- |
| Primary action and draft | List every visible editable value and how Save/Send commits it. Include text still in an add-row field; preserve invalid drafts and show specific feedback. |
| Text growth | Use minimum heights and intrinsic input sizing. Let labels size their controls and wrap the control group. Preserve reference font roles and default geometry. |
| Accessible content | Include visible identifying copy, preview text, time and state in a row’s accessible name or description. |
| Semantic contrast | Check normal text at4.5:1 and enabled non-text controls at3:1. Keep source functional color meanings, using the smallest necessary color adjustment. |
| Embedded focus | Parent focus stays where it is on iframe load. Focus enters an embedded editor after explicit activation; standalone editing may initialize its own caret. |

Observe draft submission with pending add-row text, keyboard and pointer behavior, text growth and actual iframe focus. Apply scoped fixes before the final four-width render so review repairs do not repeat unaffected captures. Native informational entries need their reading/geometry checks and no invented action.

## Intrinsic media captions

For a duration badge over a thumbnail, place the artwork behind the control content and keep the badge in normal flow. Its label and play glyph determine the control's minimum intrinsic width. Use a wrapping media row so a longer caption can create another row instead of being clipped by a fixed quarter-width cell. Keep the source font roles and ordinary four-item geometry when the supplied labels fit.

Observe the longest supplied duration at the actual narrow iframe width with enlarged text before the final four-width captures. Read the rendered text as well as the overflow measurement. Keep any reconstructed opaque badge that covers a baked source label scoped to that artwork, and record its fidelity difference.

## Intrinsic auxiliary columns

For a header with a side Clear action, use an intrinsic side column and a wrapping title/count column. Reserve the action's rendered text and complete pointer target; fixed title padding does not reserve a growing action label. Keep focus indicators visible.

For a list with a reading index, put the content and index in one normal-flow grid after the header and selected chips. Reserve the rail's complete interactive width plus a gap. Do not position the rail at a fixed vertical offset through a header that can grow. Check both visible glyphs and actual pointer footprints; preserving glyph spacing does not prove that neighboring hit areas are separate.

At actual320/390 iframe widths, observe enlarged header/chip labels before final four-width captures. Read the rendered text and inspect neighboring control bounds as well as overflow. Reuse unchanged captures by exact source hash and replay only the affected entries after a repair.

## Verify only what needs fresh proof

Compare enlarged original/target/candidate crops and the full result at relevant widths. Normally include 320, 390, 768 and 1280; include the actual iframe width and specific smaller bounds when the component needs them. Check real pointer and keyboard behavior, focus, 44px targets where applicable, overlaps, responsive text, overflow, empty/loading/error/disabled states, console/network/font/media failures and reduced motion when affected. A source assertion or numeric score cannot replace looking at the render.

Exercise the actual catalog preview under its existing `sandbox="allow-scripts"` as well as production. Native form submission may be blocked before its submit event; verify click/Enter and invalid input in that environment and fix the component's request path without widening sandbox permission. This is a context-specific hazard, not a ban on native forms.

Pin proof to input hashes. A changed CSS/reference invalidates affected visual/interaction proof; replay only affected and concretely at-risk shared cases. Never reuse proof across changed inputs. Never change checkedAt to imply a fresh check. Preserve failed/partial tool calls separately from successful final receipts. State unobserved details explicitly: computed font family does not establish document.fonts.status, and desktop emulation is not a physical-device pass.

During edits use focused tests/lint/typecheck. At a batch boundary run required build, independent source/artifact review and CI once for final inputs. The reviewer must differ from the implementer and account for manually excluded files. Use current configured models and permissions, not old model leases. If independent review is unavailable, report it as pending; do not label self-review independent or launch an unauthorized worker.

## Release and cleanup

For the parent's authorized child workflow, the worker hands off local source/checks only. The parent collects 30 distinct source candidates for aggregate publication and owns independent review, CI, production and actual-catalog gates. This supersedes per-five release timing. The parent writes learning notes per entry and performs a +0.1 skill and matching website release every60minutes, without waiting for10 acceptances or blocking entry completion. Keep the two cadences and pending versus accepted evidence separate.

Under current release authorization, commit/push/integrate/deploy and verify immutable production URL, alias, source/build hash mapping and actual catalog route. HTTP 200 returning the SPA shell is not a component. Wait for the relevant deployment terminal state. If Windows CRLF differs from Git LF, prove normalization explicitly instead of claiming raw byte identity.

Record coded, local verified, catalog published, production verified, actual-catalog verified and cleanup disposition independently. Missing/shared publication gates stay pending while independent implementation proceeds. Do not retry a failed launch without a changed prerequisite. Diagnose effective permissions and exact errors; do not revive a resolved access blocker.

FigCraft cleanup follows verified replacements, shared-file dependency and active-writer checks, retained original/generated media and recoverable source. Shared libraries with unreplaced siblings remain retained/deferred with a reason. Do not claim native edit/save/reopen, pixel identity or human acceptance without that exact proof.

Record the qualified delivery once with `cycle.mjs`. Save the next unfinished step. Stop and wait for temporary children; retain a preview only with its owner, PID/session, port, command, cwd and shutdown procedure recorded. Respect a human stop immediately, including during incomplete publication.

## Actual catalog and publication boundaries

Read the actual iframe content width before assessing overflow or hit targets. For iframe-local geometry, read getBoundingClientRect inside that frame; browser page-coordinate bounds need an explicit translation. In a fixed-height preview, verify that internal scrolling and keyboard focus reach lower content/actions. A viewport screenshot does not show the entire component. Recheck only changed and concretely at-risk inputs, preserving the dates of reused proof.

When text source pins differ across Windows/Git, verify lossless UTF-8 and CRLF-only normalization for the specific text file, including SVG/TXT. Font and photographic payloads remain exact bytes. If hosting publication fails, preserve the version/artifact, diagnose once and perform only a bounded attempt after a relevant prerequisite changes. Keep public source documents recoverable and hash-verifiable in the existing immutable asset workflow; a successful transport experiment does not establish the cause of an earlier generic failure.

## Parent publication preflight from the second30 acceptance

Freeze the exact final source and reuse its valid independent source/build proof. Restore the prior canonical Git-blob publication stage before catalog installation: Windows checkout CRLF must not be substituted for committed LF hashes. Preserve binary media/font bytes. Use the existing scoped additive catalog projection when changing only implementations; retain unrelated public entries, counts, dates, media histories and skill links. Check its real validator arguments before invoking it. Keep source documents in the existing reviewed immutable asset transport, and check archive expanded size before publication. These steps add no service, dependency or sandbox permission.

Reuse the complete existing audit helper closure when moving tests into the actual strict catalog iframe. Probe one representative case per affected family before the full audit, then execute every required per-ID/state case. Native radio groups normally have one Tab stop and Arrow navigation. Capture pointer target metadata before an action can hide its underlay. If frame-specific CDP is unsupported for a same-process iframe, inspect that exact iframe document through its parent target; do not alter origin or sandbox restrictions. Verify actual active font embedding separately from unused declared provenance font files. Pin all retained inputs, and never exempt an active font from loading/render checks.

Retain initial failed reports and diagnose whether the failure belongs to the component, audit harness, publication input or external boundary. Rerun only failed and concretely affected scopes, then reconcile successful supplements by exact ID/state/input and observation date. All final visual, keyboard, responsive, accessibility, independent review, build/CI, production and actual-catalog gates remain mandatory. No before/after active-time improvement has yet been measured.


## Restore the release recipe and native audit contract

Restore the last successful command, current CI public build-target variables and exact unfinished phase before launching an aggregate release. Read current CI/environment policy; never print or publish credentials. If the component builds passed but Vite rejected a missing public target, retain the failure and resume only Vite and required delivery guards with the documented target. Do not rebuild unchanged component previews. Avoid overlapping the full test suite with CPU-heavy build/lint/browser phases after observed timeouts. A bounded worker count can preserve assertions and timeouts; retain the initial failures, verify affected tests and obtain one clean required full-suite run before release. This is process concurrency, not authorization for more implementation workers or services.

Before a new browser family audit, inspect the actual preview fixture, visible controls and authored receipt. A conditional status may be absent initially, and a request receipt need not echo the submitted value. Assert the real host-request contract without inventing backend success. Wait for the requested aria-selected/focus state instead of sampling before controlled activation settles. Radix Tabs can include an intentional tabpanel Tab stop; native radio groups and roving toolbars do not have one Tab stop per enabled control. Count actual visible tabbable stops, then verify the family Arrow/Home/End behavior separately. Inputs with labels inside a hidden panel remain hidden; visible-label geometry does not authorize counting hidden controls.

For platform-font inspection, sample an actually visible direct text run. A wrapper with descendant text may report zero direct glyphs; that is not proof of a missing font. Retain the failed probe and sample the rendered text node or owning element. Record active font families/glyph usage separately from computed declarations and source font provenance. Capture available geometry/focus/target metadata before any assertion or screenshot that can fail, preserving useful observations with the failed case. A viewport screenshot tail is not authored component height.

Use distinct immutable report names for failed and successful attempts. Rerun only failed ID/state/width cases, verify exact inputs and retain true observation dates when reconciling supplements. Generic language/name/font/Tab probes supplement the required visual, full functional/state, keyboard/accessibility, strict catalog, production and retention gates; they cannot replace them. The observed parent preparation fixes have no measured accepted-throughput or active-authoring gain yet.

## Existing catalog source map

| Preview registry role | Current source |
| --- | --- |
| Catalog card injection and initial heights | `src/catalog-client.js` |
| Exporter overlay allowlist | `scripts/export-light.mjs` |
| Worker URL map | `scripts/build-worker.mjs` |
| Expected overlays and exact-byte checks | `scripts/validate-light.mjs` |
| Source sizes and SHA-256 pins | `.openai/component-previews.json` |

Update this map when the repository changes. Regenerate pins from final source bytes.
