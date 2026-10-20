.lh-quote-collection,.lh-reader-contents,.lh-book-utility,.lh-mistake-review,.lh-unit-rewind{box-sizing:border-box;width:100%;max-width:390px;margin:0;background:#fff;color:#1d1d1d;font:400 14px/24px Meiryo,'Lighthouse Reader Utility Sans',sans-serif;letter-spacing:0}
.lh-quote-collection *,.lh-reader-contents *,.lh-book-utility *,.lh-mistake-review *,.lh-unit-rewind *{box-sizing:border-box}
.lh-quote-collection button,.lh-reader-contents button,.lh-book-utility button,.lh-mistake-review button,.lh-unit-rewind button{font:inherit;cursor:pointer;touch-action:manipulation}
.lh-quote-collection button:focus-visible,.lh-reader-contents button:focus-visible,.lh-book-utility button:focus-visible,.lh-mistake-review button:focus-visible,.lh-unit-rewind button:focus-visible{outline:2px solid #34363a;outline-offset:2px}
.lh-quote-collection button:disabled,.lh-reader-contents button:disabled,.lh-book-utility button:disabled,.lh-mistake-review button:disabled,.lh-unit-rewind button:disabled{cursor:default;opacity:.5}
.lh-reader-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.lh-reader-message{margin:12px 16px;font-size:12px;line-height:20px}
.lh-quote-collection{min-height:790px}
.lh-quote-collection header{position:relative;height:48px}
.lh-quote-collection header button{display:flex;align-items:center;justify-content:center;padding:0;border:0;background:white;color:#526173}
.lh-quote-collection header svg{width:20px;height:20px;flex:none}
.lh-quote-collection__back{position:absolute;left:8px;top:4px;width:44px;height:44px}
.lh-quote-collection header .lh-quote-collection__collection{position:absolute;left:50%;top:4px;width:calc(100% - 168px);max-width:190px;min-height:44px;transform:translateX(-50%);gap:5px;color:#1d1d1d;font-size:14px;line-height:24px;font-weight:700;white-space:nowrap}
.lh-quote-collection__collection svg{width:12px!important;height:12px!important}
.lh-quote-collection__help,.lh-quote-collection__add{position:absolute;top:8px;width:36px;height:36px}
.lh-quote-collection__help{right:44px}.lh-quote-collection__add{right:8px}
.lh-quote-collection__card{min-height:626px;margin:10px 8px 0;padding:162px 32px 32px;border-radius:36px;background:linear-gradient(145deg,#174c36,#1f6444 62%,#2d8f5e);color:white;text-align:center}
.lh-quote-collection__mark{display:block;height:48px;font-family:Georgia,'Times New Roman',serif;font-size:40px;line-height:48px;font-weight:700}
.lh-quote-collection blockquote{margin:10px 0 0;font-size:20px;line-height:28px;font-weight:700}
.lh-quote-collection blockquote>span{display:block}
.lh-quote-collection__card>p{margin:56px 0 0;font-size:12px;line-height:16px;font-weight:400}
.lh-quote-collection__card>.lh-quote-collection__empty{margin:0;line-height:24px}
.lh-quote-collection footer{display:flex;justify-content:center;gap:26px;margin:26px 0 24px}
.lh-quote-collection footer button{display:grid;place-items:center;width:56px;height:56px;padding:13px;border:1px solid #e4e4e4;border-radius:50%;background:white;color:#526173;box-shadow:0 2px 5px #0000000a}
.lh-quote-collection footer svg{width:20px;height:26px}
.lh-quote-collection footer button[aria-pressed=true] svg{fill:#e5e6e8}
.lh-reader-contents{position:relative;min-height:44px}
.lh-reader-contents[data-open=true]{height:760px;max-height:100dvh}
.lh-reader-contents__reopen{min-height:44px;margin:8px;padding:8px 16px;border:1px solid #dddfe3;border-radius:8px;background:#fff;color:#1d1d1d}
.lh-reader-contents__overlay{position:absolute;inset:0;background:transparent}
.lh-reader-contents__sheet{position:absolute;inset:0;display:flex;flex-direction:column;overflow:hidden;border:1px solid #dddfe3;border-radius:20px;background:#fff;font-family:inherit;outline:none}
.lh-reader-contents__handle{position:absolute;top:11px;left:calc(50% - 15px);width:30px;height:4px;border-radius:3px;background:#ddd}
.lh-reader-contents__tabs{display:flex;flex:1;min-height:0;flex-direction:column;padding-top:33px}
.lh-reader-contents__tablist{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:2px;flex:none;height:34px;margin:0 23px 18px;padding:1px;border-radius:8px;background:#f0f1f2}
.lh-reader-contents__tablist button{position:relative;min-width:0;height:32px;padding:8px 0;border:0;border-radius:6px;background:transparent;color:#1d1d1d;font-size:12px;line-height:16px;font-weight:400}
.lh-reader-contents__tablist button:not(:last-child):after{position:absolute;right:-1px;top:8px;bottom:8px;width:1px;background:#d7d9db;content:''}
.lh-reader-contents__tablist button[data-state=active]{background:white;box-shadow:0 1px 3px #00000018}
.lh-reader-contents__panel{flex:1;min-height:0;overflow:auto;outline:none}
.lh-reader-contents__panel[hidden]{display:none}
.lh-reader-contents__panel ol{list-style:none;margin:0;padding:0}
.lh-reader-contents__panel li{height:48px;border-bottom:1px solid #e4e4e4}
.lh-reader-contents__panel li>button{display:block;width:100%;height:47px;padding:15px 19px 16px;border:0;background:white;color:#1d1d1d;text-align:left;font-size:12px;line-height:16px;font-weight:400}
.lh-reader-contents__panel li>button[aria-current]{background:#eef1f1;color:#174c36}
.lh-reader-contents__panel li>button:focus-visible,.lh-mistake-review li>button:focus-visible{outline-offset:-3px}
.lh-reader-contents__panel>p{margin:16px 20px;font-size:12px;line-height:20px}
.lh-reader-contents__sheet footer{flex:none;padding:31px 23px 21px}
.lh-reader-contents__sheet footer>button{width:100%;height:44px;padding:10px 12px;border:1px solid #174c36;border-radius:24px;background:linear-gradient(#174c36,#1f6444,#2d8f5e);color:white;box-shadow:0 2px 0 #123e2c;font-size:14px;line-height:24px;font-weight:400}
.lh-book-utility{min-height:160px}
.lh-book-utility header{position:relative;min-height:78px;padding:8px 68px 18px}
.lh-book-utility header>button{position:absolute;left:8px;top:6px;display:grid;place-items:center;width:40px;height:40px;padding:8px;border:1px solid #e4e4e4;border-radius:50%;background:white;color:#526173}
.lh-book-utility header>button:last-child{left:auto;right:20px}
.lh-book-utility header svg{width:20px;height:20px}
.lh-book-utility h2{overflow-wrap:anywhere;margin:0;font-size:20px;line-height:28px;font-weight:400}
.lh-book-utility header>p{margin:8px 0 0;color:#1f6444;font-size:12px;line-height:16px}
.lh-book-utility nav{display:flex;justify-content:space-between;gap:0;margin:0 10px 0 20px}
.lh-book-utility nav>button{display:flex;flex-direction:column;align-items:center;gap:10px;flex:none;width:56px;margin:0;padding:0;border:0;background:transparent;color:#1d1d1d;font-size:12px;line-height:16px;font-weight:400}
.lh-book-utility__circle{display:grid;place-items:center;width:40px;height:40px;border:1px solid #e4e4e4;border-radius:50%;background:white;color:#526173;box-shadow:0 1px 3px #00000008}
.lh-book-utility__circle>span{font-size:14px;line-height:24px;font-weight:400}
.lh-book-utility__circle>svg{width:22px;height:22px}
.lh-mistake-review{min-height:450px}
.lh-mistake-review header{position:relative;height:209px;border-bottom:1px solid #e4e4e4}
.lh-mistake-review__back{position:absolute;top:0;left:4px;display:grid;place-items:center;width:44px;height:40px;padding:10px 12px;border:0;background:white;color:#526173}
.lh-mistake-review__back svg{width:20px;height:20px}
.lh-mistake-review h2{position:absolute;left:16px;right:76px;top:42px;margin:0;font-size:20px;line-height:28px;font-weight:700}
.lh-mistake-review h2>span{display:block}
.lh-mistake-review__marker{position:absolute;right:18px;top:56px;display:grid;place-items:center;width:58px;height:58px;border:3px solid #1f6444;border-radius:50%;color:#1f6444}
.lh-mistake-review__marker svg{width:30px;height:30px;stroke-width:2.4}
.lh-mistake-review__start{position:absolute;left:16px;right:16px;top:140px;height:44px;padding:9px 10px;border:1px solid #174c36;border-radius:10px;background:linear-gradient(#174c36,#1f6444,#2d8f5e);box-shadow:0 3px 0 #123e2c;color:white;font-size:14px!important;line-height:24px;font-weight:400}
.lh-mistake-review h3{margin:17px 16px 0;font-size:14px;line-height:24px;font-weight:700}
.lh-mistake-review ol{position:relative;overflow:hidden;list-style:none;margin:20px 16px 18px;padding:0;border-radius:14px}
.lh-mistake-review ol:after{position:absolute;inset:0;border:1px solid #dddfe3;border-radius:inherit;pointer-events:none;content:''}
.lh-mistake-review li{min-height:54px;border-bottom:1px solid #dddfe3}
.lh-mistake-review li:last-child{border:0}
.lh-mistake-review li>button{position:relative;display:block;width:100%;min-height:53px;padding:17px 34px 16px 18px;border:0;background:white;color:#1d1d1d;text-align:left;font-size:12px;line-height:16px;font-weight:400}
.lh-mistake-review li>button>span:first-child{display:block;overflow-wrap:anywhere}
.lh-mistake-review__dot{position:absolute;top:23px;right:18px;width:6px;height:6px;border-radius:50%;background:#ff5757}
.lh-mistake-review__dot[data-reviewed=true]{background:#747474}
.lh-unit-rewind{min-height:240px;padding:8px 16px}
.lh-unit-rewind article{position:relative;min-height:224px;overflow:hidden;border-radius:18px;background:linear-gradient(145deg,#174c36,#1f6444 62%,#2d8f5e);color:white}
.lh-unit-rewind h2{position:absolute;left:18px;top:18px;max-width:236px;margin:0;font-size:20px;line-height:28px;font-weight:700}
.lh-unit-rewind article>p{position:absolute;left:18px;right:18px;top:66px;max-width:236px;margin:0;font-size:12px;line-height:16px;font-weight:400}
.lh-unit-rewind article>p>span{display:block}
.lh-unit-rewind img{position:absolute;right:1px;top:100px;width:101px;height:117px;object-fit:contain}
.lh-unit-rewind article>button{position:absolute;left:18px;top:156px;width:146px;height:44px;padding:13px 4px;border:1px solid #e4e4e4;border-radius:10px;background:white;color:#174c36;box-shadow:0 3px 0 #c8d8d1;font-size:12px;line-height:16px;font-weight:400}
.lh-quote-collection header button:active:not(:disabled),.lh-quote-collection footer button:active:not(:disabled),.lh-book-utility header>button:active:not(:disabled),.lh-book-utility nav>button:active:not(:disabled) .lh-book-utility__circle,.lh-mistake-review li>button:active:not(:disabled){background:#e5e6e8}
.lh-reader-contents__sheet footer>button:active,.lh-mistake-review__start:active:not(:disabled){background:#123e2c}
.lh-reader-contents__reopen:active:not(:disabled),.lh-reader-contents__tablist button:active:not(:disabled),.lh-mistake-review__back:active{background:#e5e6e8}
.lh-unit-rewind article>button:active:not(:disabled){background:#e5e6e8;box-shadow:0 1px 0 #c8d8d1}
@media(hover:hover){.lh-quote-collection header button:hover:not(:disabled),.lh-quote-collection footer button:hover:not(:disabled),.lh-book-utility header>button:hover:not(:disabled),.lh-book-utility nav>button:hover:not(:disabled) .lh-book-utility__circle,.lh-reader-contents__panel li>button:hover:not(:disabled),.lh-mistake-review li>button:hover:not(:disabled){background:#e5e6e8}.lh-reader-contents__sheet footer>button:hover,.lh-mistake-review__start:hover:not(:disabled){background:#174c36}.lh-unit-rewind article>button:hover:not(:disabled){background:#eef1f1}}
@media(max-width:319px){.lh-book-utility nav{margin-left:8px;margin-right:8px}.lh-book-utility nav>button{width:52px}.lh-unit-rewind article>button{max-width:calc(100% - 130px)}}
