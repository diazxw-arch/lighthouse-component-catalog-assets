---
name: lighthouse-catalog-imagegen
description: Use when creating or correcting catalog ImageGen candidates, recovering interrupted image work, or reviewing repeated image quality failures.
---

# Lighthouse catalog ImageGen

Version **1.4**, workflow revision **hourly-2**. Produce an accepted component, not a queue of failed pictures. Existing historical records stay intact. New failed candidates remain private: they do not register, count or publish. A difficult entry goes to the repair backlog; it does not freeze unrelated assigned work.

## One entry, one acceptance decision

1. Read the latest human steering and exact assignment. A production hold stops generation and registration. Resolve this installed skill directory once; use absolute paths to its scripts. A source/dist copy is not the runtime. Ignore historical chat messages already resolved in the current checkpoint.
2. Start the entry clock before its first source/assignment lookup. Open the original and native/mock; record exact Japanese copy, row/control/state inventory, native frame/type roles, protected artwork and source/mock conflicts. Apply apple-design and the current catalog design standard. Original icons/artwork/state control inaccurate mocks; scoped human exceptions control their entry only.
3. Compare original and current rendered references first. Use [native text contract](references/native-contract.md) when a typography question needs source facts; it is a diagnostic, not a mandatory per-entry gate. Saved fields can disagree with rendered output. Record that conflict; do not declare a visible defect from one field alone or spend calls correcting an unverified assumption. Plan the smallest ImageGen edit against the native-sized reference. Name exactly what changes and what stays fixed. Record actual target dimensions and reference roles; run the installed preflight references command with absolute paths before every call. If the required proportions, fine text or artwork cannot be preserved, stop with a private method blocker instead of generating another catalog failure.
4. Use ImageGen and time the awaited call. Open the actual raw result at intended size and enlarged. Check all text, icons/state, white surfaces, native typography, frame proportions and artwork. Read actual PNG dimensions; a requested canvas is not proof. Compare at the intended display width before judging typography or icon scale; raw canvas whitespace and content scale are separate findings. Count original icon parts (for example three sparkles versus one) instead of inheriting an inaccurate mock. Preserve raw attempts. Candidate provenance is the unmodified raw file returned by the recorded ImageGen call; source/native/reference crops never become generated candidates. If raw provenance is uncertain, leave candidatePath null and recover before another call. One scoped correction is allowed; two failed attempts defer that entry privately and continue the next assigned entry; do not retry an exhausted entry without a separate reviewed recovery. Do not advance or hide defects through crop/stretch.
5. Produce assigned private candidates continuously in small batches, without waiting for parent review after every call. Save ready-for-parent or deferred-private status, raw image, prompt/references, timing and concise visible defects. The parent reviews results concurrently; private pending output never counts as ready. The parent independently compares the actual candidate with original/rendered evidence. Before labeling artwork invented or missing, inspect the full original; an embedded native crop cannot establish absence. Minor spacing or baseline residuals alone do not need another call when intended-size copy, hierarchy, control alignment and state remain clear, without clipping, wrapping or protected-media defects. Only an inspected ready result with no known material or clearly visible defect at intended size, all quality dimensions at least3 and exact protected media at4 receives a digest-bound approval in the private manager/approvals directory. Source imagery is not exact merely because its subject or logo text is recognizable. The worker never writes parent approvals or manager notes.
6. Use only the gated registration path below. Verify stored bytes, metadata/manifest and refreshed catalog, then open the stored image. Record the ready receipt and separate production/generation/accounting time. Failed, unseen or pending outputs never count. Parent approval is an evidence workflow, not OS access control.

## Registration gate

Read [acceptance contract](references/acceptance.md). Prepare one private job JSON containing entryId, assignmentPath, catalogRoot, candidatePath, promptPath, referencesPath and approvalPath. The parent releases the exact assignment only after review.

Run with this skill's absolute script path:

- node <installed>/scripts/register-ready.mjs check --input <absolute-private-job.json>
- node <installed>/scripts/register-ready.mjs register --input <absolute-private-job.json>

The wrapper verifies current hold, assignment/parent identity, actual candidate/source hashes, target aspect and approval before invoking the existing catalog helper with reviewed status. Never call the legacy helper directly to bypass a failed gate. Unknown registration results require readback, not a second registration.

For learning record, include acceptanceJob in the task receipt. Use node <installed>/scripts/learning.mjs record --ledger <absolute-private-ledger> --receipt <absolute-private-receipt>. New records require ready status and parent acceptance. Historical failed rows remain readable and immutable; they are processed history, not ready completion.

## Review and release

The parent keeps per-entry quality/workflow notes and timing unknowns. Record time through accounting completion separately from receipt endpoint; active time remains unknown unless measured. Every one hour, the parent reviews new timing, quality and workflow evidence and releases a tested +0.1 revision. This replaces the10-entry schedule. Hourly review never pauses private production or valid registration/counting. If overdue after interruption, reconcile one current review rather than inventing backdated versions. A blocked release keeps the last approved skill active while independent production continues. See [evolution](references/evolution.md). Parent alone publishes skill releases; catalog batches remain every30 accepted entries. Preserve originals, prior versions, existing implementations and other skill routes.

Use [operations](references/operations.md), [production](references/production.md), [prompt recipe](references/prompt-recipe.md) and [known methods](references/learned-methods.md) only for the current step. No new workers, services, dependencies or restart loops are part of this skill.
