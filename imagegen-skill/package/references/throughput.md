# Faster production with the same quality contract

The human requests 150 distinct parent-accepted ready entries per hour. This supersedes the earlier 3x target. This is a target, not a measured achievement. The initial small three-entry cycle took 1,719 seconds including retries and between-turn waits: 6.28 accepted entries/hour. The new target is 150/hour, one accepted entry every 24 seconds, approximately 23.88x this initial baseline. Recent measured individual ImageGen calls of roughly 16-36 seconds consume much or all of that budget before preparation and inspection; the current single-worker sequential pipeline has not demonstrated this rate. This small cohort is not a general benchmark or causal proof. Record comparable continuous windows before claiming improvement.

## Keep the single worker supplied

The parent maintains the exact authorized worker's rolling assignment: target twelve unstarted entries, replenish below six. Process microbatches of three without waiting for parent approval of earlier private candidates. An empty authorized queue requires a checkpoint and parent assignment; it never permits guessing IDs or self-claiming work. Missing references are private recovery work, not removed from the full goal. Parent reviews available candidates before prolonged publication work. No extra workers, simultaneous ImageGen calls, services or dependencies are authorized by this optimization.

## Remove repeated work

Read unchanged skill/design/assignment guidance once per batch; reload changed human steering or authority before dependent work. Batch independent local source and manifest reads into one call. Open each actual original and current render once, reuse unchanged source evidence with explicit region mapping, and reopen for a concrete uncertainty or correction. Inspect every actual raw candidate at intended size and enlarged; reuse evidence does not waive visual inspection.

Build one checked request per actual ImageGen call. Its ordered hash check replaces a duplicate references-mode pass for the same unchanged inputs. Persist the returned raw identity and awaited duration immediately, then make one canonical per-entry receipt with immutable entry ID and an append-only attempt array. Keep the existing evidence, required gate inputs and attempt histories; thin queue/index records point to that receipt rather than copying its full contents. Never discard historical files or reset attempts to simplify accounting. The worker must not edit parent approvals or notes.

Use a correction only for a specific visible material error. Do not spend another call on harmless baseline/spacing differences when content, hierarchy, control alignment and state remain clear. Two failed calls defer that entry privately and allow the next assigned entry to proceed. White ordinary surfaces and protected original artwork remain required. No unready registration or count is permitted. Parent approval, original/raw/stored hashes, actual frame checks, stored-image inspection and catalog readback remain unchanged.

## Measure the whole pipeline

For each entry preserve preparation start, actual awaited generation per attempt, post-call inspection, parent review, registration/readback completion and checkpoint times. Separate measured durations from orchestration waits and unknown active time. Include failed/deferred attempts and waiting/publication delays in a continuous throughput window; count only distinct accepted ready entries in its numerator. Also report generated call count, acceptance yield, retries and known quality defects. An accepted-only median or generation latency cannot establish end-to-end speedup.

The parent keeps the per-entry notes and compares comparable windows, including their sample size and quality outcomes. Hourly reviewed +0.1 releases continue independently of production. An immediate human-directed same-version workflow patch receives exact-byte scan/source/independent review and a separate release receipt; it does not reset the hourly clock or rewrite historical version attestations. Catalog/image publication stays parent-only every thirty accepted entries.

## Observed retry decision

Two parent-inspected entries ultimately selected their first raw after optional spacing corrections. Use the existing receipt quality/defects fields before call2 to distinguish a material visible problem from a minor residual. Complete exact copy, correct state, readable hierarchy and intact protected media with minor row/baseline/divider/weight differences proceed to parent review. Do not create extra forms or make another call solely to chase a minor difference. Real missing copy, wrong state, material anatomy, altered artwork and ordinary-surface tint remain correction reasons. This observation is not proof of a general speedup.
