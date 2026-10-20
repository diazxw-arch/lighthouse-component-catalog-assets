# Evolution after every 10 valid entries

Count each distinct catalog ID once after visually inspecting the candidate and actual stored image, successful local registration/refresh, hash/version/status readback and checkpoint. Fully processed needs-correction counts but is unready. Unseen, review-pending and blocked-refresh results do not count. Retries and image versions do not inflate the count.

Version arithmetic uses integer tenths:10→1.1,20→1.2,90→1.9,100→2.0. The recorder blocks a new entry at each10-entry boundary until a real review release is recorded. Parent skill guide/package/aggregate-metric releases occur every10; parent catalog/image batch publication stays every30. Production workers do neither publication nor skill editing. Preserve other skill routes and concurrent source.

## Review window

Inspect all10 parent-authored entry notes and original/candidate/stored/readback evidence. Parent notes distinguish verified observations, worker ratings, parent ratings, known errors and untested proposals with concrete matched checks and quality risk. Pending/excluded notes explain errors but stay outside completion/performance denominators.

Review elapsed median/p90, measurement coverage, generation/active sample counts, first-pass ready/correction rates, attempts and five quality dimensions. Separate tool call duration from preparation/inspection/wait and interrupted wall time. Never backfill unknown timing. Compare matched methods/difficulties; a small mixed sample is not a speedup. Keep typography, original geometry/icons, state and artwork floors. Retain the generation method if no comparative evidence supports changing it.

Prepare next revision outside active discovery. Increase version exactly0.1; set VERSION.json completedEntriesAtRelease to the due boundary and entriesPerRevision10. Update change log and known-method guide. Test real scenarios and counterexamples; run complete SkillSpector --no-llm and source-aware review of exact runtime/package. Install only approved bytes, preserving prior versions. Publish matching skill guide/ZIP/aggregate evidence using the current-source owner Sites workflow; preserve audience and private data.

Create a review-release receipt: through(10,20,…), version, decision(retain/improve), rationale, errorsReviewed, timingReviewed, qualityReviewed, testsPassed, scanPassed, sourceReviewPassed, websitePublished and packageSha256. Booleans reflect actual proof. The review command verifies exact package version, cadence, boundary and digest. If any release step is blocked, hold production and retain the real blocker.

## Explicit initial cadence migration

An initial schema1 ledger used30-entry reviews. Do not reinterpret it silently. For an owner-authorized30→10 change before any release and with10–30valid historical entries, back up the original ledger and provide a migration receipt with from30, to10, expectedCount, SHA256 of JSON.stringify(original entries) as expectedEntriesDigest, and the human reason. Run node scripts/learning.mjs migrate --ledger <private-ledger> --receipt <migration-receipt> --backup <original-ledger-backup>. The CLI compares the backup to the current original ledger inside its exclusive lock before migrating. It validates all rows and preserves exact historical rows/version attestations under a digest-bound migration record. No release is invented.

If11 entries already exist, first review uses rows1–10 and dueThrough10. Entry11 stays as carryover with its original1.0 attestation. After real1.1 release, the next window contains entry11; subsequent new entries require1.1. No extra production is allowed before that first release. Source receipts and audit files remain unchanged. Migration rejects already released ledgers or mismatched evidence.

Only sanitized aggregate metrics belong on the website. Prompts, screenshots, worker IDs, paths and chat/private notes stay private. Preserve human stops and unrelated queues.
