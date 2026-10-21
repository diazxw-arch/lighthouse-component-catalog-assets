# Review the skill every 10 entries; publish every 30

Initial version **1.0** starts with **0 measured completions**. Historical catalog entries do not count toward this skill's measured cohort. Initial reference/crop speed and entry-quality averages are **unknown**. Baseline authoring tests are fixtures and do not add catalog components.

The helper blocks new starts, registrations and completions at the cumulative review milestone. Explicit owner override:1.1 is released now with6 valid measured completions (8 previously accepted,2 revoked after actual crop re-audit);1.2 is due at20 TOTAL. This is not a claim that10 were completed. Thereafter the cumulative gates are30,40,etc. At a review:

1. Review all pending accepted receipts and every associated rejection, retry, re-crop, source error and correction. Recheck actual crops and their boundaries; audit source/technical ID collisions across the current library. Revoke invalid IDs, obtain enough new valid entries to reach the cumulative milestone (the documented early current release is owner-authorized), and retain the errors.
2. Compute reference, crop, inspection, registration and total wall-time median/p90, with sample sizes. Separate fresh/reused sources, platform, crop size and difficult cases. Include rejected attempts in overall yield and elapsed throughput. Missing observations stay null. Do not claim speed gains from unrelated cohorts or only successful fast attempts.
3. Assess the hard-gate failure rate, boundary corrections/rework, rubric distributions and useful distinct components per hour. These measurements must be derived from the ledger/receipts, with referenced input hashes.
4. Identify the actual bottleneck. Compare any proposed method on comparable held-out examples, retaining originals, actual crop inspection and the same quality gates. Adopt only a supported improvement with no observed quality regression; disclose small samples/confounders. When evidence is insufficient, retain the working method and say so. A required new version may document evidence and unchanged methods.
5. Add regression scenarios for observed errors, revise the staged skill and changelog, and increment one integer tenth: 1.0 → 1.1 → … → 1.9 → 2.0. Scan the exact package with NVIDIA SkillSpector `--no-llm`, review the source/runtime, resolve coverage gaps, run appropriate regression checks, then inspect the final revised content again before installing.
6. Obtain independent read-only review using the SAME existing authorized worker at its idle batch boundary; no new worker/chat. Install only the exact reviewed files. Website publication is separate, every30 cumulative accepted entries and at final delivery. When due, through the existing Sites repository/project workflow, publish the new page, current download and immutable version archive. Verify the live version and downloaded package hash. Do not create a new site, change audience or erase older releases. Leave owner-paused chats and automations paused.
7. Record a release with a JSON report and `release REPORT.json`. Fields: `version`, all pending accepted `entry_ids` exactly once, `errors_reviewed`, `timing_analysis`, `quality_analysis`, `method_decision`, `regression_evidence`, `security_review`, `independent_review`, `installed_package_sha256`, `next_review_at_total`, `publication_status`. The early1.1 report binds `accepted_at_release` to the live valid count and additionally records `owner_override: "Owner requested 1.1 now; 1.2 at 20 total"`. For local installation before the30-entry website milestone, use `publication_status: "pending"` and null `public_download_sha256`/`published_url`; retain immutable local ZIP and file hashes. Only actual verified publication uses `publication_status: "verified"` with matching public hash and HTTPS URL. Record later publication proof separately without rewriting release history. The matching hashes refer to the same exact release ZIP. Each analysis/evidence string must link to actual retained reports. Tool fields record evidence, not proof of a human judgment.

The release command verifies milestone/version/hash consistency and appends history; it does not rewrite itself, install anything, publish or restart a chat. The active agent performs the reviewed release. There is no background promise while every chat is stopped. Current progress is shown by `status`; no duplicate worker or automation is needed.

## Known errors incorporated in 1.0

| Observed failure | Required better method |
|---|---|
| New screen was a scroll/state duplicate of an existing component | Compare nearest component structures visually across all areas |
| Broad report/dashboard region included neighboring cards | Measure the component's actual edges in original pixels and inspect the saved crop |
| Coordinates or crop path were recorded without a crop file | Validate existence, dimensions, hash and pixel equivalence; view the file |
| Aggregation dropped two exclusion flags | Verify all three flags at root/shard boundaries; preserve the canonical repair |
| Successful saved result was treated as unusable after later OAuth failure | Reuse independently verified saved evidence; halt only the failing fresh-access route |
| Source manifests/backups were mistaken for catalog rows | Read only plan-listed area/catalog.json and its supported wrapper |
| Chat elapsed time was proposed as a stage benchmark | Begin actual stage marks now; historical stage metrics remain unknown |
| Repeated full-library scans, reports and backup churn reduced useful work | Index once for candidate selection, bounded nearest comparisons, authority-boundary reread and one meaningful checkpoint |

Private study: eight existing shard catalogs and bounded acceptance history, coordinator corrections and completed baseline decision scenarios. No private transcripts, credentials or full Mobbin originals are distributed in this skill package.

## 1.1 evidence and limits

Six valid parent-accepted timed completions support this early release. Eight had previously been accepted; the release audit revoked LH11-0307 for external background/adjacent text and LH05-0614 for retained page chrome. Their histories remain intact and crop repairs cannot earn new completions. Rejected whole pages and state variants remain in history; LH05-0622 has catalog evidence but missing stage marks, so it earns no measured completion. LH05-0619 duplicated LH05-0168; LH05-0626 retained an entire results page. LH05-0624/0625 were rejected before registration. Repeated revocation events do not create additional failures or reduce the unique count twice.

The new pre-registration timing gate is regression-tested. Global nearest comparisons, four-edge inspection and single-unit boundaries remain human visual gates; neither a rubric score nor helper validation proves them. No causal speed gain or improved production yield is established yet. Compare future comparable cases before making such claims; preserve outage-dominated durations and unknown early-stage coverage honestly.
