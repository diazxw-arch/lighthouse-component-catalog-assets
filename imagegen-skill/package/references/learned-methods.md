# Starting methods and known errors

This is a qualitative selection from10 existing worker histories, durable checkpoints and sampled tool events. The sample contains34 ImageGen calls and33 matched tool waits. Those waits include orchestration overhead and are not comparable end-to-end production measurements. No claim of globally optimal speed or measured improvement is made.

| Observed result | Selected method |
| --- | --- |
| Navigation/footer candidates were registered, reopened and checkpointed; one footer refinement improved readability at740×425 | Review at intended size as well as enlarged; one scoped correction |
| Original file/photo/scanner glyphs differed from mocks | Original reference controls icon anatomy and optical weight |
| Photo redraws survived repeated prompts | Preserve the media invariant; retain failed versions and unresolved status |
| A missing image preview caused a repeated generation call | Recover tool output/files before retrying generation |
| Stored outputs waited on catalog locks | Separate storage, refresh and readback; retry only the unfinished stage |
| Green tint and decorative accents contradicted scoped human feedback | Read the current design standard and preserve entry-specific exceptions |
| Whole-screen corrections changed unrelated geometry | Edit only the observed defect and compare unchanged regions |
| Excess blank canvas surrounded an otherwise usable candidate | Request exact component bounds; preserve full original output and disclose any approved derived crop |
| Worker pauses left generated but unregistered files | Reconcile pending outputs before choosing the next entry |

Source-pixel compositing was observed in older runs. It is not the default image-editing method here: use the supported ImageGen editing tool. Any different workflow needs explicit user authorization and its own provenance/review; a composite is not evidence that ImageGen preserved source pixels.

The starting workflow is reference-first, one entry at a time, localized correction, verified registration, durable checkpoint. The10-entry reviews will test whether particular changes improve elapsed time while preserving the quality contract.

## First10-entry review, version1.1

Ten distinct valid tasks:2ready on first call,8needs-correction,18calls. Worker-reported elapsed median530000ms/p90747000ms; generation9samples median31100ms/p9051600ms; active0samples. Timing scopes vary and some preparation is omitted, so these are descriptive observations, not a comparable end-to-end benchmark. Worker ratings and parent corrections remain separate. One review-pending task is excluded; a pre-change11th valid task is carryover, outside this window.

Promote evidence/accounting safeguards: separate reference/mock state inventories, verify authoritative stored status/hash before counting, direct-await timing with canonical units, explicit assignment-order lookup and compare both attempts before selection. Existing failures justify these checks; they do not establish improved generated-image quality or speed. Keep reference-first ImageGen, one scoped correction and raw-output retention. Do not modify a final candidate with a non-ImageGen crop to make it fit. Analysis/reference crops remain separate evidence.

Repeated unresolved issues: redrawn protected artwork, broad or subtle tint/texture, wrong aspect/framing, typography/hierarchy drift and retry regressions. Do not promote alternative generation recipes without matched rendered evidence. Numeric rubric averages cannot waive artwork/state failures.
