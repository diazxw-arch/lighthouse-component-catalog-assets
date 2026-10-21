# Current ready-only policy

This quality revision supersedes earlier language permitting failed registrations/counts. New failures stay private; two failed calls stop the entry. Only digest-bound parent-approved ready candidates may register via register-ready.mjs. Historical rows/statuses remain intact.

# Prompt recipe

Write one concise prompt with these parts in this order:

1. **Target:** exact existing catalog ID/name, intended display bounds and visible state.
2. **Reference roles:** image 1=original anatomy/artwork; image 2=Japanese content/layout guide; image 3=approved style, if needed. Supply only relevant references.
3. **Preserve:** exact visible copy, controls, icon geometry/weight, typography, media crop and protected assets. List entry-specific exceptions from the human instruction.
4. **Change:** the requested styling or one bounded correction, with measurable inset/size/alignment when known. Apply the current collection design contract.
5. **Deliver:** one component on white canvas, no invented data, missing controls, decorative frame or extra empty margins.

Example: “Create LH07-0115, the five-column footer at its 740×425 review size. Reference 1 controls columns and icon shapes; reference 2 supplies the exact Japanese links. Preserve all five columns, link order and original marks. Use the approved white/slate treatment and established Japanese typography. Keep body links readable at the target size without increasing the outer bounds. Output only this footer on white.”

For a correction, refer to the existing candidate and change only the observed defect. State which geometry and content must remain fixed. Do not paste the entire catalog brief into every prompt. Save the exact tool prompt and reference order, not a later paraphrase.

Before a correction call, state one material visible defect and what the call can repair. First compare at intended width; do not spend a second call on harmless baseline/whitespace variation. If protected media still fails, a text-only correction cannot make that result ready. Compare the full original against native media crops before describing artwork as invented. Save each entry preparation-start timestamp in its entry folder before advancing the global timer; keep actual await duration separate from queue, inspection and accounting time.
