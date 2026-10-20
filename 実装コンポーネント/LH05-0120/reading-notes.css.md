.lh-reflection-tabs,.lh-quote-actions,.lh-annotation-popover,.lh-saved-highlights,.lh-book-notebook { box-sizing:border-box; width:100%; max-width:390px; margin:0; color:#1d1d1d; background:#fff; font-family:Meiryo,'Lighthouse Notes Sans',sans-serif; font-weight:400; letter-spacing:0; }
.lh-reflection-tabs *,.lh-quote-actions *,.lh-annotation-popover *,.lh-saved-highlights *,.lh-book-notebook * { box-sizing:border-box; }
.lh-reflection-tabs button,.lh-quote-actions button,.lh-annotation-popover button,.lh-book-notebook button { font:inherit; color:inherit; cursor:pointer; -webkit-tap-highlight-color:transparent; }
.lh-reflection-tabs button:focus-visible,.lh-quote-actions button:focus-visible,.lh-annotation-popover button:focus-visible,.lh-book-notebook button:focus-visible { outline:2px solid #34363a; outline-offset:3px; }
.lh-reflection-tabs button:disabled,.lh-quote-actions button:disabled,.lh-annotation-popover button:disabled,.lh-book-notebook button:disabled { cursor:default; opacity:.45; }
.lh-reflection-tabs { min-height:56px; padding:0 24px 10px; }
.lh-reflection-tabs [role=tablist] { display:flex; align-items:stretch; border-bottom:1px solid #e4e4e4; height:46px; gap:8px; }
.lh-reflection-tabs button { position:relative; display:block; min-height:44px; border:0; padding:12px 0 16px; text-align:left; background:transparent; font-size:12px; line-height:16px; color:#6e6e6e; }
.lh-reflection-tabs button:first-child { flex:0 0 104px; }
.lh-reflection-tabs button:last-child { flex:0 1 180px; min-width:0; }
.lh-reflection-tabs button[aria-selected=true] { color:#1d1d1d; }
.lh-reflection-tabs button[aria-selected=true]::after { content:''; position:absolute; left:0; right:0; bottom:-1px; height:2px; background:#1f6444; }
.lh-quote-actions { min-height:76px; padding:12px 20px 16px; }
.lh-quote-actions>div { display:flex; gap:20px; }
.lh-quote-actions button { display:flex; align-items:center; justify-content:center; gap:8px; flex:1; min-width:0; min-height:48px; padding:8px; border:1px solid #e4e4e4; border-radius:999px; background:white; font-size:14px; line-height:24px; white-space:nowrap; }
.lh-quote-actions button:last-child { color:#fff; border-color:transparent; background:linear-gradient(110deg,#174c36,#1f6444 50%,#2d8f5e); }
.lh-quote-actions svg { width:18px; height:20px; fill:none; stroke:currentColor; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; }
.lh-quote-actions button:first-child svg { color:#526173; }
.lh-quote-actions>p,.lh-reading-notes__feedback { margin:8px 0 0; font-size:12px; line-height:16px; }
.lh-annotation-popover { min-height:90px; padding:8px 24px 18px; }
.lh-annotation-popover__surface { display:flex; position:relative; min-height:64px; border:1px solid #e4e4e4; border-radius:10px; box-shadow:0 2px 6px #00000012; background:white; }
.lh-annotation-popover__surface::after { content:''; position:absolute; z-index:1; left:calc(50% - 6px); bottom:-7px; width:12px; height:12px; background:#fff; border:solid #e4e4e4; border-width:0 1px 1px 0; transform:rotate(45deg); }
.lh-annotation-popover__previous,.lh-annotation-popover__next { position:absolute; z-index:2; top:0; width:24px; height:62px; padding:0; border:0; background:transparent; color:#526173!important; border-radius:8px; }
.lh-annotation-popover__previous { left:-6px; }
.lh-annotation-popover__next { right:10px; }
.lh-annotation-popover__previous svg,.lh-annotation-popover__next svg { width:12px; height:16px; fill:none; stroke:currentColor; stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round; }
.lh-annotation-popover__categories { width:calc(100% - 36px); margin-left:-2px; min-width:0; display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); }
.lh-annotation-popover__categories button { min-width:0; display:flex; align-items:center; justify-content:flex-start; flex-direction:column; gap:4px; border:0; padding:7px 0 9px; background:transparent; font-size:12px; line-height:16px; white-space:nowrap; border-radius:6px; }
.lh-annotation-popover__swatch { display:block; flex:none; width:24px; height:24px; border-radius:50%; box-shadow:0 0 0 2px #f1f1ed; }
.lh-annotation-popover__categories button[aria-pressed=true]>span:last-child { text-decoration:underline; text-underline-offset:3px; }
.lh-saved-highlights { min-height:390px; padding:8px 24px 31px; font-size:14px; line-height:24px; }
.lh-saved-highlights ol { margin:0; padding:0; list-style:none; }
.lh-saved-highlights li { margin:0; border-bottom:1px solid #e4e4e4; padding-bottom:24px; }
.lh-saved-highlights li+li { padding-top:29px; }
.lh-saved-highlights p { margin:0; }
.lh-saved-highlights__author { color:#1f6444; font-size:12px; line-height:16px; }
.lh-saved-highlights blockquote { margin:20px 0 12px; font:inherit; }
.lh-saved-highlights blockquote>span { display:block; }
.lh-saved-highlights mark { background:linear-gradient(#eaf5ed,#eaf5ed) center/100% 18px no-repeat; color:inherit; box-decoration-break:clone; -webkit-box-decoration-break:clone; padding:0 1px; }
.lh-saved-highlights__source { color:#6e6e6e; font-size:12px; line-height:16px; }
.lh-book-notebook { min-height:460px; padding:12px 12px 12px; }
.lh-book-notebook header { position:relative; text-align:center; margin:0 12px; }
.lh-book-notebook h2 { font-size:20px; line-height:28px; font-weight:700; margin:0; }
.lh-book-notebook header p { font-size:12px; line-height:16px; margin:8px 30px 0; }
.lh-book-notebook header button { position:absolute; top:-2px; right:-6px; width:44px; height:44px; display:grid; place-items:center; border:0; border-radius:8px; padding:0; background:transparent; }
.lh-book-notebook header svg { width:24px; height:24px; fill:none; stroke:#526173; stroke-width:1.5; stroke-linecap:round; }
.lh-book-notebook header svg path { stroke-width:2.4; }
.lh-book-notebook__content { margin:36px 12px 0; }
.lh-book-notebook h3 { position:relative; font-size:14px; line-height:24px; font-weight:400; margin:0; }
.lh-book-notebook h3::before,.lh-book-notebook__note::before { content:''; position:absolute; top:3px; left:-10px; height:18px; width:2px; background:#acafb2; border-radius:2px; }
.lh-book-notebook__position { margin:24px 0 0; color:#6e6e6e; font-size:12px; line-height:16px; }
.lh-book-notebook blockquote { position:relative; margin:16px 0 0; padding-left:16px; font-size:14px; line-height:24px; }
.lh-book-notebook blockquote::before { content:''; position:absolute; left:0; top:4px; bottom:4px; width:2px; background:#f5de38; }
.lh-book-notebook blockquote>span { display:block; }
.lh-book-notebook__note { position:relative; display:block; width:100%; min-height:60px; margin-top:64px; padding:16px; border:solid #e4e4e4; border-width:1px 0; border-radius:0; background:#fff; text-align:left; font-size:14px!important; line-height:24px!important; }
.lh-book-notebook__note::before { top:19px; left:2px; }
@media(hover:hover) {
 .lh-reflection-tabs button:not(:disabled):hover,.lh-annotation-popover button:not(:disabled):hover,.lh-book-notebook button:not(:disabled):hover { background:#ececee; }
 .lh-quote-actions button:first-child:not(:disabled):hover { background:#dedee1; }
 .lh-quote-actions button:last-child:not(:disabled):hover { filter:brightness(.9); }
}
.lh-reflection-tabs button:not(:disabled):active,.lh-annotation-popover button:not(:disabled):active,.lh-book-notebook button:not(:disabled):active { background:#d6d7da; }
.lh-quote-actions button:not(:disabled):active { filter:brightness(.84); }
@media(max-width:350px) { .lh-annotation-popover { padding-left:12px; padding-right:12px; } .lh-annotation-popover__next { right:2px; } .lh-annotation-popover__categories { width:calc(100% - 24px); margin-left:0; } }
