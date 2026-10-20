.lh-course-lectures,.lh-lecture-quiz,.lh-pronunciation-review,.lh-greeting,.lh-final-listening{box-sizing:border-box;width:100%;max-width:390px;margin:0;background:white;color:#1d1d1d;font:400 14px/24px Meiryo,'Lighthouse Lecture Dialogue Sans',sans-serif;letter-spacing:0}
.lh-course-lectures *,.lh-lecture-quiz *,.lh-pronunciation-review *,.lh-greeting *,.lh-final-listening *{box-sizing:border-box}
.lh-course-lectures button,.lh-lecture-quiz button,.lh-pronunciation-review button,.lh-greeting button,.lh-final-listening button{font:inherit;cursor:pointer;touch-action:manipulation}
.lh-course-lectures button:disabled,.lh-lecture-quiz button:disabled,.lh-pronunciation-review button:disabled,.lh-greeting button:disabled{cursor:default;opacity:.5}
.lh-course-lectures button:focus-visible,.lh-lecture-quiz button:focus-visible,.lh-pronunciation-review button:focus-visible,.lh-greeting button:focus-visible{outline:2px solid #34363a;outline-offset:2px}
.lh-lecture-message{margin:12px 16px;font-size:12px;line-height:20px}
.lh-lecture-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.lh-lecture-download{position:absolute;right:6px;display:grid;place-items:center;width:44px;height:44px;margin:0;padding:10px;border:0;border-radius:5px;background:transparent}
.lh-lecture-download>span{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:linear-gradient(#174c36,#1f6444,#2d8f5e);color:white}
.lh-lecture-download[data-tone=slate]>span{background:#6b737c}
.lh-lecture-download svg{display:block;width:20px;height:20px;stroke-width:2.6}
.lh-lecture-tabs__bar{position:relative;height:36px;box-shadow:inset 0 -1px #c8c8c8}
.lh-lecture-tabs__bar [role=tablist]{display:grid;grid-template-columns:minmax(0,104fr) minmax(0,132fr) minmax(0,104fr);width:calc(100% - 50px);height:36px}
.lh-lecture-tabs__bar [role=tab]{position:relative;min-width:0;margin:0;padding:9px 14px 11px;border:0;border-radius:0;background:white;color:#526173;text-align:left;font-size:12px;line-height:16px;font-weight:400}
.lh-lecture-tabs__bar [role=tab]:first-child{padding-left:16px}
.lh-lecture-tabs__bar [role=tab][data-state=active]:after{position:absolute;left:0;right:0;bottom:1px;height:3px;background:#1f6444;content:''}
.lh-lecture-tabs__bar>.lh-lecture-download{top:-5px}
.lh-lecture-tabs [role=tabpanel][hidden]{display:none}
.lh-lecture-tabs [role=tabpanel]{outline:none}
.lh-course-lectures{min-height:550px}
.lh-course-lectures header{padding:8px 16px 20px}
.lh-course-lectures h2{margin:0;font-size:20px;line-height:28px;font-weight:400}
.lh-course-lectures h2>span{display:block}
.lh-course-lectures header>p{margin:12px 0 0;color:#747474;font-size:12px;line-height:16px}
.lh-course-lectures__chapter{position:relative;min-height:62px;padding:22px 52px 24px 16px}
.lh-course-lectures__chapter p{margin:0;color:#747474;font-size:12px;line-height:16px}
.lh-course-lectures__chapter>.lh-lecture-download{top:8px}
.lh-course-lectures ol{list-style:none;margin:0;padding:0}
.lh-course-lectures li{position:relative;min-height:76px}
.lh-course-lectures li[data-current=true]{background:#f3f6f4}
.lh-course-lectures__open{position:relative;display:block;width:calc(100% - 50px);min-height:76px;margin:0;padding:12px 2px 14px 46px;border:0;background:transparent;color:#1d1d1d;text-align:left;font-size:14px;line-height:24px;font-weight:400}
.lh-course-lectures__open:focus-visible{outline-offset:-3px!important}
.lh-course-lectures__number{position:absolute;left:12px;top:24px;width:28px;text-align:center;font-size:14px;line-height:24px;font-weight:700}
.lh-course-lectures__title{display:block;overflow-wrap:anywhere}
.lh-course-lectures li[data-current=true] .lh-course-lectures__title{font-weight:700}
.lh-course-lectures__metadata{display:block;margin-top:10px;color:#747474;font-size:12px;line-height:16px;font-weight:400}
.lh-course-lectures li>.lh-lecture-download{top:14px}
.lh-lecture-quiz{min-height:350px}
.lh-lecture-quiz__video{position:relative;height:218px;background:#1d1d1d;color:white}
.lh-lecture-quiz__video>p{position:absolute;left:26px;top:86px;margin:0;font-size:14px;line-height:24px;font-weight:700}
.lh-lecture-quiz__video>img{position:absolute;right:0;top:0;width:120px;height:218px;object-fit:contain}
.lh-lecture-quiz__video button{border:0;color:white}
.lh-lecture-quiz__minimize{position:absolute;left:4px;top:0;display:grid;place-items:center;width:40px;height:40px;padding:0;border-radius:4px;background:transparent}
.lh-lecture-quiz__minimize svg{width:16px;height:16px}
.lh-lecture-quiz__start{position:absolute;left:50%;top:62px;width:206px;min-height:48px;padding:12px 6px;transform:translateX(-50%);border-radius:24px;background:linear-gradient(#174c36,#1f6444,#2d8f5e);font-size:14px!important;line-height:24px;font-weight:700!important}
.lh-lecture-quiz__skip{position:absolute;left:50%;top:128px;width:246px;min-height:32px;padding:8px 0;transform:translateX(-50%);border-radius:3px;background:transparent;font-size:12px!important;line-height:16px}
.lh-lecture-quiz>.lh-lecture-tabs{margin-top:18px}
.lh-lecture-quiz__row{padding-top:18px}
.lh-lecture-quiz__row>button{position:relative;display:block;width:100%;min-height:54px;padding:8px 14px 2px 40px;border:0;background:#f3f6f4;color:#1d1d1d;text-align:left}
.lh-lecture-quiz__row>button>span{position:absolute;left:16px;top:17px;width:10px;height:20px;color:#526173}
.lh-lecture-quiz__row svg{display:block;width:10px;height:20px}
.lh-lecture-quiz__row strong{display:block;font-size:14px;line-height:24px;font-weight:700}
.lh-lecture-quiz__row small{display:block;margin-top:4px;color:#747474;font-size:12px;line-height:16px;font-weight:400}
.lh-pronunciation-review{min-height:480px;padding:8px 8px 14px}
.lh-pronunciation-review article{position:relative;min-height:458px;border:1px solid #e4e4e4;border-radius:20px;background:white}
.lh-pronunciation-review__flag,.lh-pronunciation-review__bookmark{position:absolute;top:14px;display:grid;place-items:center;height:40px;padding:0;border:0;border-radius:4px;background:transparent;color:#a9afb2}
.lh-pronunciation-review__flag{left:5px;width:44px}.lh-pronunciation-review__flag svg{width:16px;height:18px}
.lh-pronunciation-review__bookmark{right:5px;width:40px}.lh-pronunciation-review__bookmark svg{width:12px;height:18px}
.lh-pronunciation-review__bookmark[aria-pressed=true]{color:#1f6444}.lh-pronunciation-review__bookmark[aria-pressed=true] svg{fill:currentColor}
.lh-pronunciation-review__completion{position:absolute;left:calc(50% - 35px);top:15px;display:grid;place-items:center;width:70px;height:38px;border-radius:19px;background:#f2f3f5;color:#526173;font-size:12px;line-height:16px}
.lh-pronunciation-review__completion[data-completed=true]{background:linear-gradient(#174c36,#1f6444,#2d8f5e);color:white}
.lh-pronunciation-review__completion svg{width:14px;height:12px;stroke-width:3}
.lh-pronunciation-review h2{position:absolute;left:23px;right:23px;top:133px;margin:0;color:#1f6444;text-align:center;overflow-wrap:anywhere;font-size:20px;line-height:28px;font-weight:700}
.lh-pronunciation-review__plays{position:absolute;left:clamp(12px,calc(100% - 310px),63px);right:13px;top:191px;display:flex;justify-content:space-between;gap:8px}
.lh-pronunciation-review__plays>button{position:relative;flex:none;width:116px;height:44px;padding:0;border:0;border-radius:5px;background:transparent;color:#526173;font-size:14px;line-height:24px;font-weight:400}
.lh-pronunciation-review__plays>button>span:last-child{position:absolute;left:50px;top:12px;white-space:nowrap}
.lh-pronunciation-review__plays>button:last-child>span:last-child{left:46px}
.lh-pronunciation-review__speaker{position:absolute;left:8px;top:8px;width:29px;height:28px}
.lh-pronunciation-review__speaker svg{display:block;width:29px;height:28px;fill:currentColor;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.lh-pronunciation-review__speaker svg path+path{fill:none}
.lh-pronunciation-review__person{position:absolute;left:8px;top:10px;width:30px;height:22px}
.lh-pronunciation-review__person svg{display:block;width:30px;height:22px}
.lh-pronunciation-review__plays button[aria-pressed=true]{box-shadow:inset 0 0 0 1px #526173}
.lh-pronunciation-review__message{position:absolute;left:23px;right:23px;top:257px;margin:0;font-size:12px;line-height:20px}
.lh-pronunciation-review__meaning{position:absolute;left:23px;right:23px;top:313px;margin:0;text-align:center;font-size:14px;line-height:24px}
.lh-pronunciation-review__restart{position:absolute;left:calc(50% - 71px);top:379px;width:142px;height:44px;padding:0;border:0;border-radius:22px;background:#f2f3f5;color:#526173;font-size:14px;line-height:24px;font-weight:400}
.lh-pronunciation-review__restart svg{position:absolute;left:20px;top:12px;width:18px;height:20px}
.lh-pronunciation-review__restart>span{position:absolute;left:50px;top:12px}
.lh-greeting{min-height:550px}
.lh-greeting header{position:relative;padding:8px 16px 0;text-align:center}
.lh-greeting header h2{margin:0 16px;font-size:20px;line-height:28px;font-weight:700}
.lh-greeting__close,.lh-greeting__settings{position:absolute;top:0;display:grid;place-items:center;width:40px;height:40px;padding:0;border:0;border-radius:4px;background:transparent;color:#7a8285}
.lh-greeting__close{left:4px}.lh-greeting__close svg{width:16px;height:16px}
.lh-greeting__settings{right:10px}.lh-greeting__settings svg{width:20px;height:20px}
.lh-greeting__section{margin:24px 0 0;font-size:14px;line-height:24px}
.lh-greeting__description{margin:14px 0 0;color:#747474;font-size:12px;line-height:16px}
.lh-greeting__question{position:relative;margin:18px 0 0;color:#747474;font-size:12px;line-height:16px}
.lh-greeting__question:before{position:absolute;left:0;right:0;top:8px;height:1px;background:#e4e4e4;content:''}
.lh-greeting__question>span{position:relative;display:inline-block;min-width:146px;padding:0 4px;background:white}
.lh-greeting__partner{position:relative;width:min(306px,calc(100% - 32px));min-height:82px;margin:26px 0 0 16px;padding:14px 16px 0;border-radius:2px 14px 14px 14px;background:white;box-shadow:inset 0 0 0 1px #e4e4e4}
.lh-greeting__partner[data-first=true]{min-height:92px;margin-top:30px;padding-top:16px}
.lh-greeting__partner>p{margin:0;font-size:14px;line-height:24px}
.lh-greeting__utilities{position:relative;height:44px;margin-left:-8px}
.lh-greeting__partner[data-first=true] .lh-greeting__utilities{margin-top:8px}
.lh-greeting__utilities button{position:absolute;display:grid;place-items:center;margin:0;padding:0;border:0;border-radius:4px;background:transparent;color:#7a8285}
.lh-greeting__speaker{left:0;top:0;width:44px;height:44px}
.lh-greeting__speaker svg{width:29px;height:28px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.lh-greeting__translation{left:40px;top:0;width:36px;height:40px;font-size:12px!important;line-height:16px}
.lh-greeting__visibility{left:92px;top:2px;width:40px;height:38px}
.lh-greeting__visibility svg{width:24px;height:22px}
.lh-greeting__prompt{position:relative;min-height:46px;margin-top:22px;padding:14px 16px 16px 42px;color:#747474;box-shadow:inset 0 1px #e4e4e4,inset 0 -1px #e4e4e4}
.lh-greeting__prompt>span{position:absolute;left:16px;top:14px;width:18px;height:18px}
.lh-greeting__prompt svg{display:block;width:18px;height:18px}
.lh-greeting__prompt p{margin:0;font-size:12px;line-height:16px}
.lh-greeting__response-row{margin:16px 16px 0}
.lh-greeting__response{position:relative;width:min(274px,calc(100% - 48px));min-height:88px;margin-left:auto;padding:20px 16px 0;border-radius:16px 2px 16px 16px;background:white;box-shadow:inset 0 0 0 1px #e4e4e4}
.lh-greeting__response>p{margin:0;font-size:14px;line-height:24px}
.lh-greeting__retry{display:grid;place-items:center;width:44px;height:44px;margin-left:-13.5px;padding:0;border:0;border-radius:4px;background:transparent;color:#7a8285}
.lh-greeting__retry svg{width:17px;height:19px}
.lh-greeting__success{position:absolute;left:-36px;top:24px;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:linear-gradient(#174c36,#1f6444,#2d8f5e);color:white}
.lh-greeting__success svg{width:16px;height:16px;stroke-width:2.5}
.lh-final-listening{position:relative;min-height:760px}
.lh-final-listening__progress{position:absolute;left:0;right:0;top:8px;height:5px;border-radius:3px;background:#ddd;overflow:hidden}
.lh-final-listening__progress>span{display:block;height:100%;border-radius:3px;background:#ff580d}
.lh-final-listening__intro{margin:0;padding:40px 16px 0;color:#747474;text-align:center;font-size:12px;line-height:16px}
.lh-final-listening__instruction{min-height:50px;margin:36px 16px 0;padding:16px 8px 10px;border-radius:14px;background:white;box-shadow:inset 0 0 0 1px #e4e4e4;text-align:center;font-size:14px;line-height:24px}
.lh-final-listening__scene{min-height:78px;margin:22px 16px 0;padding:14px 16px 16px;border-radius:14px;background:white;box-shadow:inset 0 0 0 1px #e4e4e4;text-align:center;font-size:14px;line-height:24px}
.lh-final-listening__scene>span{display:block}
.lh-final-listening__avatar{display:block;width:50px;height:51px;margin:30px 0 0 20px;object-fit:contain}
.lh-final-listening__bubble{width:min(270px,calc(100% - 32px));min-height:86px;margin:17px 0 0 16px;padding:14px 16px 18px;border-radius:2px 12px 12px 12px;background:white;box-shadow:inset 0 0 0 1px #e4e4e4}
.lh-final-listening__bubble>p{margin:0;font-size:14px;line-height:26px}
.lh-final-listening__bubble mark{display:inline-block;padding:1px 0;border-radius:2px;background:#f1ffe9;box-shadow:inset 0 0 0 1px #59c927;color:inherit;font-size:14px;line-height:24px}
.lh-final-listening__bubble>p.lh-final-listening__meaning{margin-top:12px;color:#747474;font-size:12px;line-height:16px}
.lh-final-listening__answers{display:grid;gap:18px;width:100%;min-inline-size:0;min-height:176px;margin:158px 0 0;padding:20px 16px 30px;border:0;border-radius:22px 22px 0 0;background:white;box-shadow:inset 0 1px #e4e4e4}
.lh-final-listening__answers>label{position:relative;display:flex;align-items:center;justify-content:center;min-height:54px;padding:12px 8px;border-radius:10px;background:white;box-shadow:inset 0 0 0 1px #c8c8c8;color:#1d1d1d;text-align:center;font-size:14px;line-height:24px;cursor:pointer}
.lh-final-listening__answers>label[data-selected=true]{box-shadow:inset 0 0 0 2px #1f6444}
.lh-final-listening__answers>label[data-correct=true]{background:#f1ffe9;color:#174c36}
.lh-final-listening__answers>label[data-disabled=true]{background:#f3f3f3;color:#b9b9b9;cursor:default}
.lh-final-listening__answers:disabled>label{cursor:default;opacity:.5}
.lh-final-listening__answers input{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.lh-final-listening__answers label:has(input:focus-visible){outline:2px solid #34363a;outline-offset:2px}
@media(hover:hover){.lh-lecture-download:hover:not(:disabled),.lh-lecture-tabs__bar [role=tab]:hover:not(:disabled),.lh-course-lectures__open:hover:not(:disabled),.lh-lecture-quiz__row>button:hover:not(:disabled),.lh-pronunciation-review button:hover:not(:disabled),.lh-greeting button:hover:not(:disabled){background-color:#e5e6e8}.lh-lecture-quiz__start:hover:not(:disabled){background:#174c36}.lh-lecture-quiz__skip:hover:not(:disabled),.lh-lecture-quiz__minimize:hover{background:#34363a}.lh-final-listening__answers>label:not([data-disabled=true]):not([data-correct=true]):hover{background:#e5e6e8}}
.lh-lecture-download:active:not(:disabled),.lh-lecture-tabs__bar [role=tab]:active:not(:disabled),.lh-course-lectures__open:active:not(:disabled),.lh-lecture-quiz__row>button:active:not(:disabled),.lh-pronunciation-review button:active:not(:disabled),.lh-greeting button:active:not(:disabled){background:#d9dade}
.lh-lecture-quiz__start:active:not(:disabled){background:#123e2c}
.lh-lecture-quiz__skip:active:not(:disabled),.lh-lecture-quiz__minimize:active{background:#526173}
