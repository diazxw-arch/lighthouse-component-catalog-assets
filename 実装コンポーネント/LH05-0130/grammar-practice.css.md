.lh-conversation-practice,.lh-lesson-level,.lh-grammar-comparison,.lh-unit-grammar,.lh-unit-keyphrases{box-sizing:border-box;width:100%;max-width:390px;margin:0;background:#fff;color:#1d1d1d;font:400 14px/24px Meiryo,'Lighthouse Grammar Practice Sans',sans-serif;letter-spacing:0}
.lh-conversation-practice *,.lh-lesson-level *,.lh-grammar-comparison *,.lh-unit-grammar *,.lh-unit-keyphrases *{box-sizing:border-box}
.lh-conversation-practice button,.lh-lesson-level button,.lh-grammar-comparison button,.lh-unit-grammar button,.lh-unit-keyphrases button{font:inherit;cursor:pointer;touch-action:manipulation}
.lh-conversation-practice button:disabled,.lh-lesson-level button:disabled,.lh-grammar-comparison button:disabled,.lh-unit-grammar button:disabled,.lh-unit-keyphrases button:disabled{cursor:default;opacity:.5}
.lh-conversation-practice button:focus-visible,.lh-lesson-level button:focus-visible,.lh-grammar-comparison button:focus-visible,.lh-unit-grammar button:focus-visible,.lh-unit-keyphrases button:focus-visible{outline:2px solid #34363a;outline-offset:2px}
.lh-grammar-message{margin:12px 0;font-size:12px;line-height:20px}
.lh-conversation-practice{min-height:360px;padding:8px 16px 14px}
.lh-conversation-practice h2{margin:0;font-size:20px;line-height:28px;font-weight:700}
.lh-conversation-practice ul{display:grid;gap:12px;list-style:none;margin:18px 0 0;padding:0}
.lh-conversation-practice li>button,.lh-conversation-practice__mistakes>button{position:relative;width:100%;min-height:64px;padding:22px 82px 18px 18px;border:0;border-radius:10px;background:#fff;box-shadow:0 3px 0 #ddd;color:#1d1d1d;text-align:left;font-size:14px;line-height:24px;font-weight:700}
.lh-conversation-practice li>button:after,.lh-conversation-practice__mistakes>button:after{position:absolute;inset:0;border:1px solid #e4e4e4;border-radius:inherit;pointer-events:none;content:''}
.lh-conversation-practice li>button>span{display:block;overflow-wrap:anywhere}
.lh-conversation-practice li img{position:absolute;right:6px;top:6px;width:70px;height:52px;object-fit:contain;object-position:right bottom}
.lh-conversation-practice h2.lh-conversation-practice__weakness{margin-top:38px}
.lh-conversation-practice__mistakes{position:relative;margin-top:24px}
.lh-conversation-practice__mistakes>button{min-height:62px;padding-bottom:16px}
.lh-conversation-practice__orange{position:absolute;right:16px;top:6px;width:52px;height:52px;overflow:hidden}
.lh-conversation-practice__orange svg{display:block;width:100%;height:100%}
.lh-conversation-practice__badge{position:absolute;right:8px;top:-10px;display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:#ef5b58;color:#fff;font-size:12px;line-height:16px;pointer-events:none}
.lh-lesson-level{min-height:220px;padding:8px 16px}
.lh-lesson-level article{position:relative;min-height:204px;padding:12px 16px 14px;border-radius:16px;background:linear-gradient(145deg,#174c36,#1f6444 62%,#2d8f5e);color:#fff}
.lh-lesson-level article:before{position:absolute;left:calc(50% - 8px);top:-8px;width:16px;height:16px;transform:rotate(45deg);background:#174c36;content:''}
.lh-lesson-level h2{position:relative;margin:0;font-size:20px;line-height:28px;font-weight:700}
.lh-lesson-level article>p{margin:14px 0 0;font-size:12px;line-height:16px}
.lh-lesson-level article>button{display:block;width:100%;min-height:40px;margin-top:26px;padding:8px 4px;border:0;border-radius:10px;background:#fff;box-shadow:0 3px 0 #c8d8d1;color:#174c36;font-size:14px;line-height:24px;font-weight:700}
.lh-lesson-level article>button.lh-lesson-level__advanced{margin-top:14px;background:repeating-linear-gradient(135deg,#ffdc51 0 40px,#ffd33f 40px 80px);box-shadow:0 3px 0 #e7a61b;color:#6b4300}
.lh-grammar-vocabulary{display:inline;margin:0;padding:0;border:0;background:transparent;color:inherit;text-align:inherit;text-decoration:underline dotted #bbb;text-decoration-thickness:1px;text-underline-offset:4px;white-space:normal;overflow-wrap:anywhere}
.lh-grammar-vocabulary strong{color:#19afe6;font-weight:700}
.lh-grammar-comparison{padding:8px 16px 10px}
.lh-grammar-comparison__frame{position:relative;overflow:hidden;border-radius:14px}
.lh-grammar-comparison__frame:after{position:absolute;inset:0;border:1px solid #e4e4e4;border-radius:inherit;pointer-events:none;content:''}
.lh-grammar-comparison table{width:100%;table-layout:fixed;border-collapse:separate;border-spacing:0;font:inherit;color:#4b4b4b}
.lh-grammar-comparison col:first-child{width:calc(50% - 1px)}
.lh-grammar-comparison th,.lh-grammar-comparison td{vertical-align:top;text-align:left;overflow-wrap:anywhere}
.lh-grammar-comparison th{height:42px;padding:12px 14px 6px;background:#f7f7f7;color:#747474;font-weight:700;box-shadow:inset 0 -1px #e4e4e4}
.lh-grammar-comparison td{height:44px;padding:10px 14px;box-shadow:inset 0 -1px #e4e4e4}
.lh-grammar-comparison tbody tr:last-child td{height:46px;padding-bottom:12px;box-shadow:none}
.lh-grammar-comparison th+th,.lh-grammar-comparison td+td{border-left:1px solid #e4e4e4;padding-left:13px}
.lh-grammar-audio{display:grid;place-items:center;width:44px;height:44px;padding:7.5px;border:0;border-radius:6px;background:transparent;color:#19afe6}
.lh-grammar-audio svg{display:block;width:29px;height:28px;fill:currentColor;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.lh-grammar-audio svg path+path{fill:none}
.lh-grammar-audio[aria-pressed=true]{box-shadow:inset 0 0 0 1px #19afe6}
.lh-unit-grammar{min-height:790px}
.lh-unit-grammar header{position:relative;height:132px;background:linear-gradient(145deg,#174c36,#1f6444 62%,#2d8f5e);color:#fff}
.lh-unit-grammar header>button{position:absolute;left:8px;top:-2px;display:grid;place-items:center;width:44px;height:32px;padding:0;border:0;border-radius:4px;background:transparent;color:#fff}
.lh-unit-grammar header>button svg{width:18px;height:18px}
.lh-unit-grammar header h2{position:absolute;left:20px;right:110px;top:36px;margin:0;font-size:20px;line-height:28px;font-weight:700}
.lh-unit-grammar header>p{position:absolute;left:20px;right:110px;top:82px;margin:0;font-size:12px;line-height:16px}
.lh-unit-grammar header>img{position:absolute;right:0;top:12px;width:102px;height:121px;object-fit:contain;object-position:right top}
.lh-unit-grammar__main{padding:28px 16px 0}
.lh-unit-grammar__main>h3{position:relative;margin:0;padding-left:38px;font-size:20px;line-height:28px;font-weight:700}
.lh-unit-grammar__main>h3>span{position:absolute;left:0;top:0;width:24px;height:24px}
.lh-unit-grammar__main>h3 svg{display:block;width:24px;height:24px}
.lh-unit-grammar__noun{margin-top:30px}
.lh-unit-grammar h4{margin:0;font-size:14px;line-height:24px;font-weight:700}
.lh-unit-grammar h4>button{display:flex;align-items:center;justify-content:space-between;width:100%;min-height:24px;padding:0;border:0;border-radius:3px;background:transparent;color:#1d1d1d;text-align:left;font-weight:700}
.lh-unit-grammar h4 svg{width:20px;height:20px;color:#87949e}
.lh-unit-grammar__intro{margin:18px 0 0;font-size:14px;line-height:24px}
.lh-unit-grammar__intro>span,.lh-unit-grammar__explanation>span{display:block}
.lh-unit-grammar__table{margin-top:32px}
.lh-unit-grammar__table .lh-grammar-comparison{max-width:none;padding:0}
.lh-unit-grammar__explanation{margin:28px 0 0;font-size:14px;line-height:24px}
.lh-unit-grammar__examples{display:grid;gap:4px;list-style:none;margin:28px 0 0;padding:0}
.lh-unit-grammar__examples li{position:relative;min-height:44px;padding:8px 0 8px 46px}
.lh-unit-grammar__examples .lh-grammar-audio{position:absolute;left:-7.5px;top:-4px}
.lh-unit-grammar__examples p{margin:0;font-size:14px;line-height:24px}
.lh-unit-grammar footer{margin-top:32px;padding:23px 16px 18px;border-top:1px solid #e4e4e4}
.lh-unit-grammar footer>div{margin-top:16px;font-size:14px;line-height:24px}
.lh-unit-grammar [hidden]{display:none}
.lh-unit-keyphrases{min-height:800px}
.lh-unit-keyphrases header{position:relative;padding:184px 16px 22px;border-bottom:1px solid #e4e4e4;text-align:center}
.lh-unit-keyphrases header>button{position:absolute;left:4px;top:-2px;display:grid;place-items:center;width:44px;height:40px;padding:0;border:0;border-radius:4px;background:transparent;color:#87949e}
.lh-unit-keyphrases header>button svg{width:20px;height:20px}
.lh-unit-keyphrases header>img{position:absolute;left:calc(50% - 64.5px);top:4px;width:129px;height:158px;object-fit:contain}
.lh-unit-keyphrases header>p{margin:0;color:#747474;font-size:12px;line-height:16px}
.lh-unit-keyphrases h2{margin:22px 0 0;font-size:20px;line-height:28px;font-weight:700}
.lh-unit-keyphrases h2>span,.lh-unit-keyphrases h3>span{display:block}
.lh-unit-keyphrases__main{padding:29px 16px 38px}
.lh-unit-keyphrases__label{margin:0;color:#19afe6;font-size:12px;line-height:16px;font-weight:400}
.lh-unit-keyphrases h3{margin:18px 0 0;font-size:20px;line-height:28px;font-weight:700}
.lh-unit-keyphrases ul{display:grid;gap:16px;list-style:none;margin:34px 16px 0 18px;padding:0}
.lh-unit-keyphrases li{position:relative;min-height:92px;padding:14px 14px 26px 54px;border:0;border-radius:14px;background:#fff;box-shadow:inset 0 0 0 1px #e4e4e4}
.lh-unit-keyphrases li:before,.lh-unit-keyphrases li:after{position:absolute;left:-14px;top:27px;width:14px;height:16px;clip-path:polygon(100% 0,0 50%,100% 100%);background:#e4e4e4;content:''}
.lh-unit-keyphrases li:after{left:-12px;top:28px;width:13px;height:14px;background:#fff}
.lh-unit-keyphrases li>.lh-grammar-audio{position:absolute;left:6.5px;top:8px}
.lh-unit-keyphrases__phrase{margin:0;font-size:14px;line-height:24px}
.lh-unit-keyphrases__meaning{margin:12px 0 0;color:#747474;font-size:12px;line-height:16px}
@media(hover:hover){.lh-conversation-practice button:hover:not(:disabled),.lh-lesson-level article>button:hover:not(:disabled),.lh-grammar-vocabulary:hover:not(:disabled),.lh-grammar-audio:hover:not(:disabled),.lh-unit-grammar h4>button:hover:not(:disabled),.lh-unit-keyphrases header>button:hover{background-color:#e5e6e8}.lh-lesson-level article>button.lh-lesson-level__advanced:hover:not(:disabled){background:repeating-linear-gradient(135deg,#ffdc51 0 40px,#f4c62d 40px 80px)}.lh-unit-grammar header>button:hover{background:#174c36}}
.lh-conversation-practice button:active:not(:disabled){background:#e5e6e8;box-shadow:0 1px 0 #ddd}
.lh-lesson-level article>button:active:not(:disabled){background:#e5e6e8;box-shadow:0 1px 0 #c8d8d1}
.lh-lesson-level article>button.lh-lesson-level__advanced:active:not(:disabled){background:#f4c62d;box-shadow:0 1px 0 #e7a61b}
.lh-grammar-vocabulary:active:not(:disabled),.lh-grammar-audio:active:not(:disabled),.lh-unit-grammar h4>button:active:not(:disabled),.lh-unit-keyphrases header>button:active{background:#e5e6e8}
