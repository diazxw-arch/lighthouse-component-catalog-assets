.lh-quote-editor,.lh-document-menu,.lh-document-tools,.lh-glossary-note,.lh-selected-reading { box-sizing:border-box; width:100%; max-width:390px; margin:0; color:#1d1d1d; background:#fff; font-family:Meiryo,'Lighthouse Reader Sans',sans-serif; font-weight:400; letter-spacing:0; }
.lh-quote-editor *,.lh-document-menu *,.lh-document-tools *,.lh-glossary-note *,.lh-selected-reading * { box-sizing:border-box; }
.lh-quote-editor button,.lh-quote-editor textarea,.lh-document-menu button,.lh-document-tools button,.lh-selected-reading button { color:inherit; font:inherit; }
.lh-quote-editor button,.lh-document-menu button,.lh-document-tools button,.lh-selected-reading button { cursor:pointer; -webkit-tap-highlight-color:transparent; }
.lh-quote-editor :focus-visible,.lh-document-menu :focus-visible,.lh-document-tools :focus-visible,.lh-selected-reading :focus-visible { outline:2px solid #34363a; outline-offset:2px; }
.lh-quote-editor :disabled,.lh-document-menu :disabled,.lh-document-tools :disabled,.lh-selected-reading :disabled { cursor:default; opacity:.45; }
.lh-reader-error { margin:8px 0 0; font-size:12px; line-height:18px; }
.lh-quote-editor { min-height:280px; padding:12px 20px 24px; }
.lh-quote-editor__label,.lh-quote-editor__note-label { display:block; margin:0; font-size:12px; line-height:16px; color:#626262; }
.lh-quote-editor__tags { display:flex; flex-wrap:wrap; gap:8px; margin-top:18px; }
.lh-quote-editor__tags button { display:flex; align-items:center; justify-content:center; gap:6px; height:32px; padding:3px 9px; border:1px solid #e4e4e4; border-radius:16px; background:#f6f6f6; font-size:14px; line-height:24px; white-space:nowrap; }
.lh-quote-editor__tags button:nth-child(1) { width:114px; border-color:transparent; color:white; background:linear-gradient(#174c36,#1f6444,#2d8f5e); }
.lh-quote-editor__tags button:nth-child(2) { width:74px; }.lh-quote-editor__tags button:nth-child(3) { width:104px; }
.lh-quote-editor svg { flex:none; width:14px; height:14px; fill:none; stroke:currentColor; stroke-width:1.3; stroke-linecap:round; }
.lh-quote-editor__tags button:not(:first-child) svg { color:#526173; }
.lh-quote-editor__note-label { margin-top:34px; }
.lh-quote-editor textarea { display:block; width:100%; min-height:110px; resize:vertical; margin-top:18px; border:1px solid #e4e4e4; border-radius:6px; background:white; padding:12px 11px; font-size:14px; line-height:24px; caret-color:#34363a; }
.lh-document-menu { min-height:274px; padding:8px 36px; }
.lh-document-menu [role=menu] { padding:8px 10px; min-height:258px; border:1px solid #e4e4e4; border-radius:20px; background:white; box-shadow:0 2px 7px #00000010; }
.lh-document-menu button { display:flex; align-items:center; gap:19px; width:100%; min-height:48px; padding:10px 11px; text-align:left; border:0; border-radius:6px; background:transparent; font-size:14px; line-height:24px; white-space:nowrap; }
.lh-document-menu svg { flex:none; width:24px; height:24px; fill:none; stroke:#526173; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; }
.lh-document-tools { min-height:126px; padding:12px 20px; }
.lh-document-tools__pill { position:relative; container-type:inline-size; height:102px; border:1px solid #e6e6e6; border-radius:44px; background:#fff; box-shadow:0 1px 4px #0000000a; }
.lh-document-tools button { border:0; background:transparent; padding:0; }
.lh-document-tools__instruments { display:grid; grid-template-columns:repeat(4,51px); position:absolute; left:12px; bottom:8px; }
.lh-document-tools__instruments button { position:relative; height:94px; width:50px; border-radius:8px; }
.lh-document-tools__instruments svg { position:absolute; bottom:20px; left:12px; display:block; width:26px; height:64px; }
.lh-document-tools__instruments button:first-child svg { height:76px; }.lh-document-tools__instruments button:nth-child(2) svg { height:60px; }
.lh-document-tools__instruments span { position:absolute; bottom:0; left:0; right:0; font-size:12px; line-height:16px; color:#526173; }
.lh-document-tools__instruments [aria-pressed=true] span { text-decoration:underline; text-underline-offset:4px; }
.lh-document-tools__color,.lh-document-tools__add { position:absolute; top:27px; width:44px; height:44px; border-radius:50%; }
.lh-document-tools__color { right:62px; display:grid; place-items:center; }
.lh-document-tools__color::before { content:''; width:28px; height:28px; border-radius:50%; background:conic-gradient(#df739b,#f9d459,#7ac77a,#7db6f1,#af8ddc,#df739b); }
.lh-document-tools__color>span { position:absolute; width:21px; height:21px; border:2px solid white; border-radius:50%; }
.lh-document-tools__add { right:13px; display:grid; place-items:center; }
.lh-document-tools__add::before { content:''; position:absolute; width:28px; height:28px; background:#e5e5e5; border-radius:50%; }
.lh-document-tools__add svg { position:relative; width:20px; height:20px; fill:none; stroke:#1d1d1d; stroke-width:2; stroke-linecap:round; }
.lh-glossary-note { min-height:360px; padding:8px 16px 11px; }
.lh-glossary-note section+section { margin-top:22px; }
.lh-glossary-note h2 { position:relative; display:flex; align-items:center; gap:10px; margin:0; font-size:20px; line-height:28px; font-weight:700; }
.lh-glossary-note h2 svg { display:block; flex:none; width:22px; height:22px; }
.lh-glossary-note p { margin:18px 0 0; font-size:14px; line-height:24px; }
.lh-glossary-note p>span { display:block; }
.lh-glossary-note__insertion { position:relative; height:.5px; margin-top:34px; background:#eadb9c; }
.lh-glossary-note__insertion::before { content:''; position:absolute; left:0; top:-3px; width:0; height:0; border-top:3px solid transparent; border-bottom:3px solid transparent; border-left:4px solid #eadb9c; }
.lh-selected-reading { min-height:280px; padding:4px 20px 26px; }
.lh-selected-reading__actions { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); height:44px; border:1px solid #e4e4e4; border-radius:22px; box-shadow:0 1px 4px #0000000a; padding:4px 0; }
.lh-selected-reading__actions button { position:relative; border:0; background:transparent; border-radius:5px; padding:0 2px; font-size:12px; line-height:16px; white-space:nowrap; }
.lh-selected-reading__actions button+button::before { content:''; position:absolute; left:0; top:7px; bottom:7px; width:1px; background:#e4e4e4; }
.lh-selected-reading__text { position:relative; margin-top:14px; font-size:14px; line-height:24px; user-select:none; }
.lh-selected-reading__text>div { min-height:24px; }
.lh-selected-reading__text>div>span { position:relative; display:inline; padding:3px 0; box-decoration-break:clone; -webkit-box-decoration-break:clone; }
.lh-selected-reading__text .is-selected { background:#e1f2e9; }
.lh-selected-reading__handle { position:absolute; z-index:1; top:0; height:30px; width:22px; padding:0; border:0; background:transparent; touch-action:none; }
.lh-selected-reading__handle::before { content:''; position:absolute; top:3px; bottom:3px; left:10px; width:2px; background:#1f6444; }
.lh-selected-reading__handle::after { content:''; position:absolute; width:6px; height:6px; left:8px; border-radius:50%; background:#1f6444; }
.lh-selected-reading__handle--start::after { top:-5px; }
.lh-selected-reading__handle--end::after { bottom:-2px; }
@media(hover:hover) { .lh-selected-reading__actions button:hover:not(:disabled) { background:#d8dadd; } }
@media(hover:hover) { .lh-quote-editor__tags button:not(:first-child):hover:not(:disabled),.lh-document-menu button:hover:not(:disabled) { background:#d8dadd; }.lh-quote-editor__add:hover:not(:disabled) { filter:brightness(.9); }.lh-document-tools__instruments button:hover:not(:disabled) { background:#f0f0f0; }.lh-document-tools__color:hover:not(:disabled),.lh-document-tools__add:hover:not(:disabled) { box-shadow:inset 0 0 0 1px #525861; } }
.lh-document-menu button:active:not(:disabled) { background:#c5c8cc; }
@media(max-width:359px) { .lh-document-menu { padding-left:20px; padding-right:20px; } }
@container(max-width:318px) { .lh-document-tools__instruments { grid-template-columns:repeat(4,42px);left:4px; }.lh-document-tools__instruments button { width:42px; }.lh-document-tools__instruments svg { left:8px; }.lh-document-tools__color { right:45px; }.lh-document-tools__add { right:1px; } }
