---
name: lighthouse-catalog-imagegen
description: Use when creating or correcting ImageGen candidates for existing Lighthouse catalog entries, recovering interrupted image tasks, or reviewing the workflow after 10 completed entries.
---

# Lighthouse catalog ImageGen

Version **1.1**. Create one traceable candidate for one real catalog entry at a time. Original references control anatomy, icons, artwork and proportions. Generated candidates, agent review, owner approval, editable assets and working implementations are separate outcomes.

## Start

1. Resolve the catalog root and requested entry ID. Read its current record, original reference, previous generated versions and applicable design standard. Apply `apple-design` for visual decisions. Inspect reference images before editing. A mock supplies Japanese content/layout only where it agrees with the original. Preserve scoped human corrections and exceptions.
2. For assigned queues, verify the active thread owns the queue; retain paused workers and completed records. For direct requests, use the requested entry without creating a queue. Reconcile any existing unregistered output or pending catalog refresh before generating again.
3. Read [the production contract](references/production.md). Save an exact prompt and ordered reference list. Cache unchanged design guidance for the task; inspect each entry's own sources.

## Produce and verify

1. Start a task timer before reference preparation. Record generation-call time separately. Select the original crop as the anatomy reference, the mock as content guidance, and an approved example only as style guidance. State each reference's role explicitly.
2. Use the available **ImageGen tool**. For edits use its documented image-reference mechanism. Keep supplied artwork, Japanese wording, visible state and typography. Use [the prompt recipe](references/prompt-recipe.md).
3. Open the actual result. Compare it at intended display size and enlarged against the original. Check text, geometry, icons, palette and protected media. One localized ImageGen correction is the default retry budget. Preserve all attempts; unresolved defects become `needs-correction`. Missing visual access becomes `review-pending`, never a claimed visual pass.
4. Register using the catalog's existing flagged helper; see [operations](references/operations.md). Require `stored:true` **and** `catalogUpdated:true`, matching entry/version/hash readback, an opened stored image, and a saved checkpoint. A saved file alone is unfinished. A refresh lock means retry refresh only; the helper has no idempotency-key flag.
5. Record the completed entry with `node scripts/learning.mjs record --ledger <explicit-private-ledger.json> --receipt <task-receipt.json>`. Include failed attempts in timing and quality results. Count a fully inspected, registered and checkpointed `needs-correction` entry as processed, while keeping it visibly unready. Incomplete or unseen outputs do not count.

## Every 10 entries

Run `node scripts/learning.mjs report --ledger <ledger.json>`. The shared ledger counts each catalog ID once; retries and replayed receipts do not advance it. Version arithmetic uses integer tenths: **1.0 → 1.1 → … → 1.9 → 2.0**.

At 10, 20, 30… completed entries, **review before the next entry**. Follow [evolution](references/evolution.md): inspect errors and slow steps; compare matched difficulty groups; retain methods only when quality holds; update the skill by exactly 0.1 even when the evidence supports retaining the current method. Test, scan, inspect, install and publish the exact reviewed revision. Record the release using the `review` command. No timer, background server or automatic chat restart is required.

## Recovery

| Observed problem | Next action |
| --- | --- |
| Tool result missing | Recover the existing output/status before another generation call |
| Stored, refresh failed | Preserve the stored version; refresh and read back, without re-registering |
| Photo or logo redrawn | Keep the source artwork invariant; mark unresolved rather than accepting a lookalike |
| Tint, icon weight or geometry drift | Make one scoped correction against the original; preserve prior versions |
| Review due | Finish the version review before entry 11, 21, 31… |

The website is a read-only snapshot. The agent performs generation through its own tools; users are not asked to operate an image-generation button.

## Evidence contract

Before the prompt, record separate original, mock and candidate inventories: wording, row/control/marker counts, selected state, type roles and bounds. Document each supported localization. Original fine geometry, icons and artwork control disagreements. At review, retain both attempts and select the stronger overall result; latest is not automatically best.

Before counting, match actual stored hash/version/status across manifest, metadata and refreshed catalog. A receipt boolean alone is insufficient. Keep review-pending excluded. Measure awaited tool calls with one clock; derive elapsed units from one offset-aware timestamp pair. Capture missing preparation and interruption coverage explicitly; never estimate active time. See [evolution](references/evolution.md) for cadence migration and [known methods](references/learned-methods.md) for evidence limits.

The parent writes per-entry improvement notes and owns releases. Production workers generate/register locally. Parent skill releases occur every10valid entries; catalog/image batch pushes remain every30.
