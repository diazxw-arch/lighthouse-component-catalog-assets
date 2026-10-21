# Visual search selection source media

Four immutable PNG payloads embedded in SVG wrappers come from the bounded original reference crops listed in each LH01-0066/68/69 descriptor. Pixel identity is recorded in owner A batch-14-protected-crop-identity.json. No inpainting, recoloring or generated replacement is used. Source artwork includes baked original controls/guides as documented in item usage and QA. Native and ImageGen histories remain retained; these wrappers are provenance-preserving media, not the component implementation.

Typography uses the existing Meiryo / Lighthouse Discovery List Sans stack. The bundled fallback license remains NOTO-LICENSE.txt and is embedded in each built artifact.

## Current source-row reconciliation

LH01-0066 now embeds the retained original crop PNG from 画像生成リデザイン/作業記録/LH01-0066/inspection-original-crop-1.png:1038x1271, SHA256 370196e631306a160217ebb7e13f5dca67dd3a89af0edc5e77ef0231fe30478b. This restores one original row omitted by the older native1038x1270 payload. No raster pixels were repainted, enhanced or resampled. The other three SVG/PNG payloads remain exact retained source blobs; fresh pixel comparison is recorded in the worker handoff. Historical source hash/proof remains historical.

Current preview overlay is explicit and source-specific. White masks cover original English UI text only. SourceSearchActionGlyph clips the retained original UI glyph regions and derives alpha from their luminance; it does not reconstruct photo pixels. Primary circle color is a live CSS overlay. Source-overlay term rows move below the photo at widths below 320px to preserve 44px targets. Actual rendered comparisons remain pending.
