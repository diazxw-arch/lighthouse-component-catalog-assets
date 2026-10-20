.lh-lesson-completion,.lh-streak-goal,.lh-conversation-takeaway,.lh-conversation-correction,.lh-word-correction { box-sizing:border-box;width:100%;max-width:390px;margin:0;background:white;color:#1d1d1d;font-family:Meiryo,'Lighthouse Study Sans',sans-serif;font-weight:400;letter-spacing:0; }
.lh-lesson-completion *,.lh-streak-goal *,.lh-conversation-takeaway *,.lh-conversation-correction *,.lh-word-correction * { box-sizing:border-box; }
.lh-streak-goal button,.lh-conversation-correction button,.lh-word-correction button { font:inherit;color:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent; }
.lh-streak-goal :focus-visible,.lh-conversation-correction :focus-visible,.lh-conversation-correction:focus-visible,.lh-word-correction :focus-visible { outline:2px solid #34363a;outline-offset:2px; }
.lh-streak-goal :disabled,.lh-conversation-correction :disabled,.lh-word-correction :disabled { cursor:default;opacity:.5; }
.lh-lesson-completion { min-height:460px;padding:8px 28px 26px; }
.lh-lesson-completion>img { display:block;width:159px;height:223px;object-fit:contain;margin:0 auto; }
.lh-lesson-completion h2 { margin:47px -12px 0;text-align:center;font-size:20px;line-height:28px;font-weight:700;color:#1f6444; }
.lh-lesson-completion dl { display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin:48px 0 0; }
.lh-lesson-completion__metric { --metric:#f6c900;--metric-ink:#665200;border:2px solid var(--metric);border-radius:12px;overflow:hidden;min-height:80px; }
.lh-lesson-completion__metric--accuracy { --metric:#58c900;--metric-ink:#286000; }.lh-lesson-completion__metric--time { --metric:#20b2e9;--metric-ink:#006082; }
.lh-lesson-completion dt { display:flex;align-items:center;justify-content:center;min-height:24px;background:var(--metric);font-size:12px;line-height:16px;color:#1d1d1d;white-space:nowrap; }
.lh-lesson-completion dd { display:flex;align-items:center;justify-content:center;gap:5px;min-height:52px;margin:0;font-size:20px;line-height:28px;font-weight:700;color:var(--metric-ink); }
.lh-lesson-completion svg { width:16px;height:16px;flex:none; }
.lh-lesson-completion dd>span { min-width:0;overflow-wrap:anywhere; }
.lh-streak-goal { min-height:640px;padding:8px 16px 26px; }
.lh-streak-goal__bubble { position:relative;max-width:278px;min-height:84px;margin:0 auto;padding:19px 12px 15px;border:1px solid #e4e4e4;border-radius:12px;font-size:14px;line-height:24px;text-align:center; }
.lh-streak-goal__bubble>span { display:block; }
.lh-streak-goal__bubble::after { content:'';position:absolute;bottom:-12px;right:65px;width:17px;height:17px;background:white;border-right:1px solid #e4e4e4;border-bottom:1px solid #e4e4e4;transform:rotate(45deg) skew(16deg,16deg); }
.lh-streak-goal__art { position:relative;width:198px;height:143px;margin:14px auto 0;overflow:hidden; }
.lh-streak-goal__art img { display:block;width:198px;height:143px;object-fit:contain; }
.lh-streak-goal__art::after { content:'';position:absolute;top:0;right:34px;width:18px;height:7px;background:white; }
.lh-streak-goal fieldset { min-width:0;border:0;padding:0;margin:35px 0 0;display:grid;gap:12px; }
.lh-streak-goal legend { position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0; }
.lh-streak-goal label { position:relative;display:block;min-height:60px; }
.lh-streak-goal input { position:absolute;inset:0;opacity:0;width:100%;height:100%;margin:0;cursor:pointer; }
.lh-streak-goal input:disabled { opacity:0;cursor:default; }
.lh-streak-goal label>span { display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:60px;padding:14px 15px;border:1px solid #e4e4e4;border-radius:10px;box-shadow:0 2px 0 #e4e4e4; }
.lh-streak-goal label strong { font-size:14px;line-height:24px; }.lh-streak-goal label>span>span { font-size:12px;line-height:16px;color:#6e6e6e; }
.lh-streak-goal input:checked+span { border-color:#525861;box-shadow:0 2px 0 #525861; }.lh-streak-goal input:focus-visible+span { outline:2px solid #34363a;outline-offset:3px; }
.lh-streak-goal__commit { display:block;width:100%;min-height:44px;margin:82px 0 0;padding:10px;border:0;border-radius:10px;background:#34363a;color:white!important;font-size:14px!important;line-height:24px!important; }
.lh-streak-goal__commit:disabled { opacity:1;background:#e4e4e4;color:#6e6e6e!important; }.lh-streak-goal>p[role] { margin:8px 0 0;font-size:12px;line-height:18px; }
.lh-conversation-takeaway { min-height:216px;padding:8px 20px 14px; }
.lh-conversation-takeaway h2 { display:flex;align-items:center;gap:10px;margin:0;font-size:14px;line-height:24px;font-weight:700;color:#1f6444; }
.lh-conversation-takeaway h2 svg { width:24px;height:24px;flex:none; }
.lh-conversation-takeaway>p { margin:16px 0 0;font-size:14px;line-height:24px; }.lh-conversation-takeaway p>span { display:block; }
.lh-conversation-takeaway__example { margin-top:22px;min-height:84px;padding:10px 13px;border:1px solid #bccfc2;border-radius:8px;font-size:14px;line-height:24px; }
.lh-conversation-takeaway__example>* { display:block; }.lh-conversation-takeaway__example>span { margin-top:10px; }
.lh-lesson-feedback { display:flex;justify-content:flex-end;gap:0; }
.lh-lesson-feedback button { display:grid;place-items:center;width:34px;min-height:44px;padding:3px;border:0;border-radius:6px;background:transparent; }
.lh-lesson-feedback svg { display:block;width:28px;height:28px;fill:white;stroke:#526173;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round; }
.lh-lesson-feedback [aria-pressed=true] svg { fill:#2d8f5e;stroke:#174c36; }
.lh-conversation-correction { height:290px;overflow:auto;padding:8px 16px 0;scrollbar-width:none; }
.lh-conversation-correction__partner { position:relative;padding-left:58px; }
.lh-conversation-correction__partner>img { position:absolute;left:0;top:2px;width:49px;height:52px;object-fit:contain; }
.lh-conversation-correction__partner>div { position:relative;min-height:90px;padding:10px 13px;border:1px solid #e4e4e4;border-radius:12px; }
.lh-conversation-correction__partner>div::before { content:'';position:absolute;top:18px;left:-7px;width:11px;height:11px;border-left:1px solid #e4e4e4;border-bottom:1px solid #e4e4e4;background:white;transform:rotate(45deg); }
.lh-conversation-correction__partner p { margin:0;font-size:14px;line-height:24px; }
.lh-conversation-correction__partner button { border:0;padding:0;min-height:24px;background:transparent;text-align:left;text-decoration:underline dotted #b6b6b6;text-underline-offset:4px; }
.lh-conversation-correction__reply { position:relative;margin:22px 0 0 54px;border:1px solid #e4e4e4;border-radius:12px 12px 0 0; }
.lh-conversation-correction__reply::before { content:'';position:absolute;top:14px;right:-7px;width:11px;height:11px;background:white;border-right:1px solid #e4e4e4;border-top:1px solid #e4e4e4;transform:rotate(45deg); }
.lh-conversation-correction__reply h2 { display:flex;align-items:center;gap:5px;margin:8px 13px 0;font-size:14px;line-height:24px;font-weight:700;color:#1f6444; }
.lh-conversation-correction__reply h2 svg { width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round; }
.lh-conversation-correction__reply>p { margin:14px 13px 0;font-size:14px;line-height:24px; }
.lh-conversation-correction__explanation { margin-top:14px;padding:10px 12px 0;background:#f1fae9;font-size:12px;line-height:16px; }
.lh-conversation-correction__explanation>span { display:block; }.lh-conversation-correction__explanation .lh-lesson-feedback { margin-top:16px; }
.lh-word-correction { min-height:510px;padding:8px 16px; }
.lh-word-correction__card { display:flex;flex-direction:column;min-height:494px;border:1px solid #e4e4e4;border-radius:12px;overflow:hidden; }
.lh-word-correction header { min-height:74px;padding:8px 15px 10px;background:#fafafa; }
.lh-word-correction header>p { margin:0;font-size:12px;line-height:16px;color:#6e6e6e; }.lh-word-correction header>div { margin-top:14px;font-size:14px;line-height:24px; }
.lh-word-correction__body { padding:28px 15px 0; }.lh-word-correction__body>p { margin:0;font-size:14px;line-height:24px; }.lh-word-correction__body p>span { display:block; }
.lh-word-correction ul { margin:26px 0 0;padding:0;list-style:none;font-size:14px;line-height:24px; }.lh-word-correction li::before { content:'・'; }
.lh-word-correction li button { border:0;padding:0;min-height:24px;background:transparent;text-decoration:underline dotted #b6b6b6;text-underline-offset:4px; }.lh-word-correction li strong { color:#1f6444; }
.lh-word-correction .lh-lesson-feedback { margin:auto 15px 0;padding-bottom:9px;padding-top:16px; }
@media(hover:hover) { .lh-streak-goal input:hover:not(:disabled)+span { background:#e5e6e8; }.lh-streak-goal__commit:hover:not(:disabled) { background:#141519; }.lh-lesson-feedback button:hover:not(:disabled) { background:#e5e6e8; }.lh-conversation-correction__partner button:hover:not(:disabled),.lh-word-correction li button:hover:not(:disabled) { background:#e5e6e8; } }
@media(max-width:359px) { .lh-lesson-completion { padding-left:16px;padding-right:16px; } }
