# Production contract

Read the catalog's current `デザイン基準/DESIGN.md` and the entry's scoped corrections. They override older palette experiments. Preserve established Japanese/English font family, weight, size, line height, tracking and wrapping; do not infer new typography from generated pixels.

The collection defaults are white canvas/cards/inputs, forest-green primary gradient `#174C36 0% → #1F6444 58% → #2D8F5E 100%`, slate utility icons `#526173`, quiet neutral borders and restrained shadows. Use gradients for real primary/selected actions. Do not tint the whole screen, assign decorative colors by icon category, or invent an accent on a neutral component. Semantic warning/error/data colors retain their meaning. Respect a newer entry-specific color instruction.

Original references determine icon stroke/optical weight, silhouette, control anatomy, spacing relationships, media crop, logos and illustrations. Mocks can be inaccurate. Do not copy a damaged crop or turn a scoped density correction into a global redesign. Use white surrounding canvas without adding nested containers or blank margins to make an entry look richer.

Record each criterion as 0–4 or null: geometry/icons; typography; Japanese content/state; palette/surfaces; protected media. 0=failed, 1=major error, 2=noticeable error, 3=minor residual, 4=matches the stated contract. Null=not inspected. Scores are reviewer observations, not a fidelity certificate. `reviewed` requires every criterion inspected, no known material defect, and exact preservation of protected media where required. An average cannot compensate for a failed logo, photograph, glyph or control.

Inspect actual output at intended size and enlarged. Record residuals explicitly: glyph substitution, wrong icon/stroke, redrawn media, crop loss, wrong control state, missing content, excessive tint, palette drift, unwanted margins or incomplete registration. Preserve exact source and candidate bytes plus prompt/reference provenance.

Do not count a screenshot as editable/native implementation. Do not replace an existing live component with an ImageGen image. Preserve the original reference and all generated versions; the catalog keeps the static mock hidden for generated/implemented entries.
