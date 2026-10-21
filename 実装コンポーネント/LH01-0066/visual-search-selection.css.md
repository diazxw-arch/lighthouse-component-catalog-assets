@import './visual-search-font.css';
.lh-visual-search{box-sizing:border-box;color:#1d1d1d;font:400 14px/24px Meiryo,'Lighthouse Visual Search Sans',sans-serif;letter-spacing:0;overflow-wrap:anywhere}
.lh-visual-search *{box-sizing:border-box}
.lh-visual-search button{font:inherit;letter-spacing:inherit;color:inherit;cursor:pointer}
.lh-visual-search button:disabled{opacity:.4;cursor:default}
.lh-visual-search button:focus-visible{outline:2px solid #526173;outline-offset:3px}
.lh-visual-search svg{display:block;width:24px;height:24px}
.lh-visual-search__sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.lh-photo-related-search{position:relative;width:100%;max-width:342px;margin:0 auto;container-type:inline-size}
.lh-photo-related-search__photo{display:block;width:100%;height:auto}
.lh-photo-related-search__terms{position:absolute;left:66.0819%;top:calc(25.7143% - 5px);width:31.5789%;display:grid;grid-auto-rows:44px}
.lh-photo-related-search__terms button{display:grid;align-items:center;height:44px;min-width:44px;padding:0;border:0;background:transparent}
.lh-photo-related-search__terms span{display:grid;place-items:center;width:100%;min-height:34px;padding:3px;border-radius:10px;background:#fff;white-space:nowrap}
.lh-photo-related-search__terms button:hover:not(:disabled) span,.lh-photo-related-search__terms button[aria-pressed=true] span{background:#f0f2f3}
.lh-photo-related-search__circle{position:absolute;display:grid;place-items:center;min-width:44px;min-height:44px;height:auto;aspect-ratio:1;padding:8px;border:0;border-radius:50%;background:#fff;color:#526173}
.lh-photo-related-search .lh-photo-related-search__primary{left:71.345%;top:58.5714%;width:16.9591%;color:#fff;background:linear-gradient(135deg,#174c36 0%,#1f6444 58%,#2d8f5e 100%)}
.lh-photo-related-search .lh-photo-related-search__share{left:56.1404%;top:70.4762%;width:15.2047%}
.lh-photo-related-search .lh-photo-related-search__pin{left:50.2924%;top:84.2857%;width:15.2047%}
.lh-photo-related-search__circle:hover:not(:disabled){background:#f3f4f5}
.lh-photo-related-search .lh-photo-related-search__primary:hover:not(:disabled){box-shadow:inset 0 0 0 1px #174c36}
.lh-photo-related-search__pin[aria-pressed=true]{color:#08765a;box-shadow:inset 0 0 0 1px #08765a}
.lh-photo-related-search button:active:not(:disabled){box-shadow:inset 0 0 0 1px #526173}
.lh-image-result-tabs{width:100%;padding:10px 0 14px;border-radius:26px 26px 0 0;background:#fff}
.lh-image-result-tabs__handle{display:block;width:42px;height:4px;margin:0 auto 16px;border-radius:3px;background:#1d1d1d}
.lh-image-result-tabs__list{display:flex;justify-content:center;gap:10px;padding-left:12px}
.lh-image-result-tabs__choice{position:relative;min-width:100px;min-height:44px;padding:8px 4px;border:0;background:transparent;font-weight:400}
.lh-image-result-tabs__choice[aria-selected=true],.lh-image-result-tabs__choice[aria-pressed=true]{color:#1f6444}
.lh-image-result-tabs__choice[aria-selected=true]:after,.lh-image-result-tabs__choice[aria-pressed=true]:after{position:absolute;bottom:0;left:12px;right:12px;height:2px;background:#1f6444;content:''}
.lh-image-result-tabs button:hover:not(:disabled){background:#f3f4f5;border-radius:6px}
.lh-photo-region{overflow-x:auto;width:100%;max-width:342px;margin:0 auto}
.lh-photo-region__toolbar{min-width:186px;display:flex;align-items:center;min-height:44px;gap:0}
.lh-photo-region__toolbar button{display:grid;place-items:center;flex-shrink:0;min-width:44px;height:44px;padding:8px;border:0;border-radius:8px;background:transparent;color:#526173}
.lh-photo-region__toolbar svg{width:22px;height:22px}
.lh-photo-region__toolbar .lh-photo-region__done{margin-left:auto;min-width:54px;border-radius:18px;background:#1f6444;color:#fff;font-weight:400}
.lh-photo-region__toolbar button:hover:not(:disabled){background:#f3f4f5}
.lh-photo-region__toolbar .lh-photo-region__done:hover:not(:disabled){background:#1f6444;box-shadow:inset 0 0 0 1px #174c36}
.lh-photo-region__toolbar button:active:not(:disabled){box-shadow:inset 0 0 0 1px #9ba5b0}
.lh-photo-region__media{position:relative;margin:0 16px;width:calc(100% - 32px)}
.lh-photo-region__media>img{display:block;width:100%;height:auto;border-radius:12px}
.lh-photo-region__selection{position:absolute;pointer-events:none}
.lh-photo-region__media:focus-within .lh-photo-region__selection{outline:1px dashed #fff;outline-offset:-1px}
.lh-photo-region__controls{position:absolute;inset:0;pointer-events:none}
.lh-photo-region__corner{position:absolute;width:44px;height:44px;transform:translate(-50%,-50%);touch-action:none;pointer-events:auto;user-select:none;padding:0;border:0;border-radius:6px;background:transparent}
.lh-photo-region__corner span{position:absolute;width:16px;height:16px;border:solid #fff;filter:drop-shadow(0 0 1px #0008)}
.lh-photo-region__corner--nw span{left:22px;top:22px;border-width:3px 0 0 3px}
.lh-photo-region__corner--ne span{right:22px;top:22px;border-width:3px 3px 0 0}
.lh-photo-region__corner--sw span{left:22px;bottom:22px;border-width:0 0 3px 3px}
.lh-photo-region__corner--se span{right:22px;bottom:22px;border-width:0 3px 3px 0}
.lh-photo-region__corner:focus-visible{outline:2px solid #526173;box-shadow:0 0 0 2px #fff}
.lh-photo-candidates{display:flex;gap:8px;align-items:flex-start;width:100%;overflow-x:auto;padding:4px;scrollbar-width:thin}
.lh-photo-candidates button{display:block;flex:0 0 92px;width:92px;min-height:92px;padding:2px;border:2px solid transparent;border-radius:10px;background:#fff}
.lh-photo-candidates img{display:block;width:84px;height:auto;object-fit:contain;border-radius:8px}
.lh-photo-candidates button[aria-pressed=true]{border-color:#1f6444}
.lh-photo-candidates button:hover:not(:disabled){box-shadow:0 0 0 1px #526173}
.lh-photo-candidates button:active:not(:disabled){box-shadow:0 0 0 2px #526173}
.lh-limited-photo-access{display:flex;align-items:center;gap:16px;width:100%;min-height:0;padding:16px;background:#fff}
.lh-limited-photo-access p{flex:1;min-width:0;margin:0;font:inherit}
.lh-limited-photo-access button{flex-shrink:0;min-width:82px;min-height:44px;padding:8px 12px;border:0;border-radius:12px;background:#fff;box-shadow:inset 0 0 0 1px #e4e4e4;color:#1f6444;font-weight:400}
.lh-limited-photo-access button:hover:not(:disabled){background:#f3f4f5}
.lh-limited-photo-access button:active:not(:disabled){box-shadow:inset 0 0 0 1px #9ba5b0}
.lh-visual-search-preview{width:100%}
.lh-visual-search-preview>p[role=status]{margin:8px 0 0;color:#526173;font:400 12px/20px Meiryo,'Lighthouse Visual Search Sans',sans-serif;overflow-wrap:anywhere}
.lh-discovery-preview.lh-visual-search-preview--fullbleed{padding:16px 0;min-height:0}
.lh-discovery-preview.lh-visual-search-preview--sheet{padding:0;min-height:88px}
.lh-discovery-preview.lh-visual-search-preview--banner{padding:0;min-height:0}
.lh-discovery-preview.lh-visual-search-preview--candidates{min-height:124px}
.lh-photo-related-search__source-label-masks{position:absolute;inset:0;pointer-events:none}
.lh-photo-related-search__source-label-masks span{position:absolute;width:22%;height:4%;background:#fff}
.lh-photo-related-search__source-label-masks span:nth-child(1){left:68%;top:28.5%}
.lh-photo-related-search__source-label-masks span:nth-child(2){left:70%;top:39.3%}
.lh-photo-related-search__source-label-masks span:nth-child(3){left:71%;top:48.7%}
@container(max-width:310px){.lh-photo-related-search__terms{top:calc(25.7143% - 25px)}.lh-photo-related-search__terms span{min-height:44px}.lh-photo-related-search .lh-photo-related-search__share{transform:translateX(-6px)}}
.lh-photo-related-search[data-source-overlay=true]{max-width:390px;--source-term-top:min(calc(37.1387cqw - 22px),calc(68.7861cqw - 133px))}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__terms{inset:0;display:block;width:auto;pointer-events:none}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__terms button{position:absolute;display:block;height:44px;min-height:44px;pointer-events:auto;font-size:clamp(12px,3.5897cqw,14px);line-height:clamp(20px,6.1538cqw,24px)}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__terms button:nth-child(1){left:65.1252%;top:var(--source-term-top);width:25.9152%}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__terms button:nth-child(2){left:67.1484%;top:calc(var(--source-term-top) + 44px);width:24.0848%}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__terms button:nth-child(3){left:68.3044%;top:calc(var(--source-term-top) + 88px);width:22.8324%}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__terms span{position:absolute;left:0;display:block;width:100%;min-height:0;padding:0;background:transparent;text-align:center;transform:translateY(-50%)}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__terms button:nth-child(1)>span{top:calc(37.1387cqw - var(--source-term-top))}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__terms button:nth-child(2)>span{top:calc(49.9037cqw - var(--source-term-top) - 44px)}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__terms button:nth-child(3)>span{top:calc(61.7534cqw - var(--source-term-top) - 88px)}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__source-label-masks span:nth-child(1){left:67.4374%;top:34.2004cqw;width:22.158%;height:5.5877cqw}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__source-label-masks span:nth-child(2){left:68.8825%;top:47.4952cqw;width:20.7129%;height:4.817cqw}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__source-label-masks span:nth-child(3){left:70.0385%;top:59.1522cqw;width:19.2678%;height:4.817cqw}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__primary{left:71.1946%;top:68.7861cqw;width:17.2447%;padding:0;background:transparent}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__primary:before{position:absolute;left:0;top:0;width:17.2447cqw;height:17.2447cqw;border-radius:50%;background:linear-gradient(135deg,#174c36 0%,#1f6444 58%,#2d8f5e 100%);content:''}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__share{left:55.8767%;top:82.2736cqw;width:15.7033%;padding:0;background:transparent;transform:none}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__pin{left:50.6744%;top:100.1927cqw;width:15.7033%;padding:0;background:transparent}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__circle>svg{width:15.7033cqw;height:15.7996cqw;position:absolute;left:0;top:0}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__primary>svg{width:17.2447cqw;height:17.2447cqw}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__terms button[aria-pressed=true]>span{color:#1f6444;text-decoration:underline;text-underline-offset:2px}
.lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__terms button:active>span{color:#526173}
.lh-discovery-preview.lh-visual-search-preview--source-photo{padding:0;min-height:0}
@container(max-width:319px){
 .lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__terms{position:static;display:grid;gap:4px;margin-top:8px;pointer-events:auto}
 .lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__terms button:nth-child(n){position:relative;left:auto;top:auto;width:100%;min-height:44px;border-radius:10px;background:#fff;box-shadow:inset 0 0 0 1px #e4e4e4;font-size:14px;line-height:24px}
 .lh-photo-related-search[data-source-overlay=true] .lh-photo-related-search__terms button:nth-child(n)>span{position:static;top:auto;transform:none;white-space:normal}
}
