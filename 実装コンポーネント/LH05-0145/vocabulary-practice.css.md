.lh-meaning-coachmark,.lh-retention-guide,.lh-letter-sound,.lh-vocabulary-deck,.lh-reading-milestone{box-sizing:border-box;width:100%;max-width:390px;margin:0;background:white;color:#1d1d1d;font:400 14px/24px Meiryo,'Lighthouse Vocabulary Practice Sans',sans-serif;letter-spacing:0}
.lh-meaning-coachmark *,.lh-retention-guide *,.lh-letter-sound *,.lh-vocabulary-deck *,.lh-reading-milestone *{box-sizing:border-box}
.lh-meaning-coachmark button,.lh-retention-guide button,.lh-letter-sound button,.lh-vocabulary-deck button{font:inherit;cursor:pointer;touch-action:manipulation}
.lh-meaning-coachmark button:disabled,.lh-retention-guide button:disabled,.lh-letter-sound button:disabled,.lh-vocabulary-deck button:disabled{cursor:default}
.lh-meaning-coachmark button:focus-visible,.lh-retention-guide button:focus-visible,.lh-letter-sound button:focus-visible,.lh-vocabulary-deck button:focus-visible{outline:2px solid #34363a;outline-offset:2px}
.lh-vocabulary-message{margin:12px 16px;font-size:12px;line-height:20px}
.lh-meaning-coachmark{position:relative;min-height:790px}
.lh-meaning-coachmark header{position:relative;height:24px}
.lh-meaning-coachmark__close{position:absolute;left:4px;top:-8px;display:grid;place-items:center;width:40px;height:40px;padding:0;border:0;border-radius:4px;background:transparent;color:#7a8285}
.lh-meaning-coachmark__close svg{width:24px;height:24px}
.lh-meaning-coachmark__progress{position:absolute;left:64px;right:90px;top:8px;height:8px;overflow:hidden;border-radius:5px;background:#ddd}
.lh-meaning-coachmark__progress>span{display:block;height:100%;border-radius:5px;background:linear-gradient(#174c36,#1f6444,#2d8f5e)}
.lh-meaning-coachmark__energy{position:absolute;right:6px;top:-6px;display:grid;place-items:center;width:68px;height:36px;padding:0;border:0;border-radius:4px;background:transparent}
.lh-meaning-coachmark__energy svg{width:52px;height:16px}
.lh-meaning-coachmark__eyebrow{display:flex;align-items:center;gap:8px;margin:4px 16px 0;color:#9457d4;font-size:12px;line-height:16px}
.lh-meaning-coachmark__eyebrow svg{width:14px;height:14px}
.lh-meaning-coachmark h2{margin:4px 16px 0;font-size:20px;line-height:28px;font-weight:700}
.lh-meaning-coachmark__character{position:absolute;left:28px;top:112px;width:93px;height:190px;object-fit:contain}
.lh-meaning-coachmark__sentence{position:absolute;left:138px;right:20px;top:176px;min-height:64px;padding:20px 8px 20px 48px;border-radius:12px;background:white;box-shadow:inset 0 0 0 1px #e4e4e4}
.lh-meaning-coachmark__sentence:before,.lh-meaning-coachmark__sentence:after{position:absolute;left:-12px;top:12px;width:13px;height:24px;clip-path:polygon(100% 0,0 50%,100% 100%);background:#e4e4e4;content:''}
.lh-meaning-coachmark__sentence:after{left:-10px;top:13px;width:12px;height:22px;background:white}
.lh-meaning-coachmark__sentence p{margin:0;font-size:14px;line-height:24px;text-decoration:underline dotted #b9b9b9;text-underline-offset:4px}
.lh-meaning-coachmark__word{display:inline;padding:0;border:0;border-radius:2px;background:transparent;color:#1d1d1d;font-weight:700!important;text-decoration:inherit}
.lh-meaning-coachmark__audio{position:absolute;left:2px;top:10px;display:grid;place-items:center;width:40px;height:40px;padding:0;border:0;border-radius:4px;background:transparent;color:#19afe6}
.lh-meaning-coachmark__audio svg{width:25px;height:24px;fill:currentColor;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.lh-meaning-coachmark__audio svg path+path{fill:none}
.lh-meaning-coachmark__answer{position:absolute;left:16px;right:16px;top:344px;min-height:55px;padding:4px 0;box-shadow:inset 0 1px #ddd,inset 0 -1px #ddd;display:flex;align-items:flex-start;gap:6px;flex-wrap:wrap}
.lh-meaning-coachmark__answer button{min-height:32px;padding:3px 8px;border:1px solid #e4e4e4;border-radius:7px;background:white}
.lh-meaning-coachmark__choices{padding-top:396px}
.lh-meaning-coachmark__choices>div{display:flex;flex-wrap:wrap;gap:8px;margin:0 24px}
.lh-meaning-coachmark__choices>div[data-row='2']{margin-top:20px;margin-left:clamp(24px,calc(100% - 298px),92px)}
.lh-meaning-coachmark__choices button{min-height:42px;padding:9px 15px;border:0;border-radius:8px;background:white;box-shadow:inset 0 0 0 1px #ddd,0 3px #ddd;color:#1d1d1d;font-size:14px;line-height:24px;font-weight:400}
.lh-meaning-coachmark__choices button[data-selected=true]{color:#b9b9b9}
.lh-meaning-coachmark__check{position:absolute;left:16px;right:16px;top:708px;min-height:44px;padding:10px 8px;border:0;border-radius:10px;background:linear-gradient(#174c36,#1f6444,#2d8f5e);color:white;font-size:14px;line-height:24px}
.lh-meaning-coachmark__check:disabled{background:#e5e6e8;color:#b9b9b9}
.lh-meaning-coachmark__error{position:absolute;left:16px;right:16px;top:650px;margin:0;font-size:12px;line-height:20px}
.lh-meaning-coachmark__scrim{position:absolute;inset:0;z-index:2;pointer-events:none}
.lh-meaning-coachmark__tooltip{position:absolute;z-index:3;width:176px;min-height:88px;border-radius:12px;background:white}
.lh-meaning-coachmark__tooltip>button{display:block;width:100%;min-height:88px;padding:20px 12px 36px;border:0;border-radius:12px;background:white;color:#1d1d1d;text-align:left;font-size:12px;line-height:16px;font-weight:400}
.lh-meaning-coachmark__tooltip>button>span>span{display:block}
.lh-meaning-coachmark__pointer{position:absolute;top:-12px;width:16px;height:13px;clip-path:polygon(50% 0,100% 100%,0 100%);background:white}
.lh-retention-guide{position:relative;min-height:360px;padding:62px 16px 0;border-radius:24px 24px 0 0}
.lh-retention-guide__close{position:absolute;right:12px;top:8px;display:grid;place-items:center;width:32px;height:36px;padding:0;border:0;border-radius:4px;background:transparent;color:#526173}
.lh-retention-guide__close svg{width:18px;height:18px}
.lh-retention-guide h2{margin:0;font-size:20px;line-height:28px;font-weight:700}
.lh-retention-guide h2>span{display:block}
.lh-retention-guide__diagram{position:absolute;left:clamp(8px,calc(100% - 336px),54px);top:208px;width:310px;height:32px}
.lh-retention-guide__diagram ol{display:flex;gap:10px;list-style:none;margin:0;padding:0}
.lh-retention-guide__diagram li{flex:none;width:32px;height:32px;padding-top:6px;border-radius:3px;background:#d1fae5;color:#1f6444;text-align:center;font-size:14px;line-height:24px;font-weight:700}
.lh-retention-guide__diagram p{position:absolute;left:218px;top:0;width:92px;height:32px;margin:0;padding-top:6px;border-radius:4px;background:white;box-shadow:inset 0 0 0 1px #e4e4e4;text-align:center;font-size:14px;line-height:24px;font-weight:700}
.lh-retention-guide__bridges{position:absolute;left:0;top:-36px;width:210px;height:40px;overflow:visible}
.lh-retention-guide__pages{position:absolute;left:calc(50% - 29px);top:306px;display:flex}
.lh-retention-guide__pages button{display:grid;place-items:center;width:16px;height:32px;padding:0;border:0;border-radius:3px;background:transparent}
.lh-retention-guide__pages span{width:7px;height:7px;border-radius:50%;background:#b9b9b9}
.lh-retention-guide__pages button[aria-current=step] span{width:8px;height:8px;border-radius:2px;background:#34363a}
.lh-letter-sound{position:relative;min-height:650px}
.lh-letter-sound__close{position:absolute;left:10px;top:0;display:grid;place-items:center;width:40px;height:40px;padding:0;border:0;border-radius:4px;background:transparent;color:#d9dadc}
.lh-letter-sound__close svg{width:24px;height:24px;stroke-width:5}
.lh-letter-sound__progress{position:absolute;left:54px;right:20px;top:8px;height:24px;overflow:hidden;border-radius:12px;background:#e5e6e8}
.lh-letter-sound__progress>span{position:relative;display:block;height:100%;border-radius:12px;background:linear-gradient(#174c36,#1f6444,#2d8f5e)}
.lh-letter-sound__progress>span:after{position:absolute;left:8px;right:8px;top:4px;height:5px;border-radius:4px;background:#ffffff25;content:''}
.lh-letter-sound__prompt{position:absolute;left:0;right:0;top:252px;height:80px}
.lh-letter-sound__prompt img{position:absolute;left:clamp(28px,calc(100% - 328px),62px);top:2px;width:123px;height:75px;object-fit:contain}
.lh-letter-sound__prompt h2{position:absolute;left:clamp(178px,calc(100% - 176px),214px);top:0;width:120px;margin:0;text-align:center;font-size:64px;line-height:80px;font-weight:700}
.lh-letter-sound__record{position:absolute;left:calc(50% - 97px);top:362px;width:194px;height:194px;padding:0;border:0;border-radius:50%;background:#b0e6fb;color:#19afe6}
.lh-letter-sound__record>span{position:absolute;left:57px;top:57px;width:80px;height:80px;border-radius:50%;background:#dff5fd}
.lh-letter-sound__record>svg{position:absolute;left:77px;top:70px;width:40px;height:64px}
.lh-letter-sound__record[aria-pressed=true]{box-shadow:inset 0 0 0 3px #19afe6}
.lh-letter-sound__record:disabled{opacity:.5}
.lh-letter-sound__error{position:absolute;left:16px;right:16px;top:584px;margin:0;text-align:center;font-size:12px;line-height:20px}
.lh-vocabulary-deck{position:relative;min-height:790px}
.lh-vocabulary-deck header{position:relative;height:40px}
.lh-vocabulary-deck header>button{position:absolute;left:7px;top:-1px;display:grid;place-items:center;width:40px;height:40px;padding:0;border:0;border-radius:4px;background:transparent;color:#879196}
.lh-vocabulary-deck header>button svg{width:10px;height:18px}
.lh-vocabulary-deck header>p{position:absolute;left:calc(50% - 43px);top:0;display:flex;align-items:center;justify-content:center;width:86px;height:40px;margin:0;border-radius:18px;background:#f2f3f5;font-size:14px;line-height:24px}
.lh-vocabulary-deck header>p>span+span{white-space:pre;color:#a9afb2}
.lh-vocabulary-deck__helper{position:relative;margin:28px 16px 0;color:#879196;text-align:center;font-size:14px;line-height:24px}
.lh-vocabulary-deck__helper>span{position:absolute;left:41px;top:6px;width:10px;height:10px;border:1px solid #879196;border-radius:50%;background:repeating-linear-gradient(90deg,transparent 0 1px,#879196 1px 2px)}
.lh-vocabulary-deck__cards{position:absolute;left:0;right:0;top:132px;height:426px}
.lh-vocabulary-deck__rear,.lh-vocabulary-deck__middle{position:absolute;width:calc(100% - 80px);max-width:310px;height:414px;border-radius:30px}
.lh-vocabulary-deck__rear{left:44px;top:0;transform:rotate(8deg);background:#ff5947}
.lh-vocabulary-deck__middle{left:38px;top:6px;transform:rotate(-5deg);background:#f3b755}
.lh-vocabulary-deck__front{position:absolute;left:42px;right:42px;top:12px;height:414px;border-radius:30px;background:white;box-shadow:inset 0 0 0 1px #e4e4e4}
.lh-vocabulary-deck__front>img{position:absolute;left:calc(50% - 44px);top:32px;width:88px;height:176px;object-fit:contain;pointer-events:none}
.lh-vocabulary-deck__front>h2{position:absolute;left:24px;right:24px;top:246px;margin:0;text-align:center;font-size:20px;line-height:28px;font-weight:700;pointer-events:none}
.lh-vocabulary-deck__front>p{position:absolute;left:24px;right:24px;top:296px;margin:0;color:#879196;text-align:center;font-size:14px;line-height:24px;pointer-events:none}
.lh-vocabulary-deck__details{position:absolute;inset:0;z-index:1;border:0;border-radius:30px;background:transparent}
.lh-vocabulary-deck__audio{position:absolute;right:43px;top:286px;z-index:2;display:grid;place-items:center;width:38px;height:42px;padding:0;border:0;border-radius:4px;background:transparent;color:#879196}
.lh-vocabulary-deck__audio svg{width:14px;height:18px}
.lh-vocabulary-deck__hand{position:absolute;left:calc(50% - 35px);top:186px;z-index:3;width:90px;height:100px;pointer-events:none}
.lh-vocabulary-deck__hand svg{display:block;width:90px;height:100px}
.lh-vocabulary-deck__instruction{position:absolute;left:16px;right:16px;top:620px;margin:0;color:#879196;text-align:center;font-size:12px;line-height:16px}
.lh-vocabulary-deck__record{position:absolute;left:calc(50% - 33px);top:682px;width:66px;height:66px;padding:0;border:1px dotted #c8c8c8;border-radius:50%;background:white;color:#879196;touch-action:none!important}
.lh-vocabulary-deck__record svg{position:absolute;left:19.5px;top:16px;width:25px;height:40px}
.lh-vocabulary-deck__record[aria-pressed=true]{outline:2px solid #19afe6;outline-offset:2px}
.lh-vocabulary-deck__record:disabled{opacity:.5}
.lh-vocabulary-deck__error{position:absolute;left:16px;right:16px;top:758px;margin:0;font-size:12px;line-height:20px}
.lh-reading-milestone{min-height:140px;padding:8px 20px}
.lh-reading-milestone article{min-height:124px;padding:12px 14px 18px;border-radius:3px;background:white;box-shadow:inset 0 0 0 1px #e4e4e4}
.lh-reading-milestone__badge{position:relative;width:106px;height:22px;margin:0;padding:3px 4px 3px 26px;border-radius:3px;background:#f5f6f5;font-size:12px;line-height:16px}
.lh-reading-milestone__badge svg{position:absolute;left:6px;top:4px;width:14px;height:14px;color:#526173}
.lh-reading-milestone__row{display:grid;grid-template-columns:68px minmax(0,1fr);column-gap:12px;margin-top:16px}
.lh-reading-milestone time{position:relative;display:block;padding-top:4px;font-size:14px;line-height:24px;font-weight:700}
.lh-reading-milestone time:after{position:absolute;left:68px;top:0;width:1px;height:50px;background:#e4e4e4;content:''}
.lh-reading-milestone__row>div>p{margin:0;color:#747474;font-size:12px;line-height:16px}
.lh-reading-milestone h2{margin:12px 0 0;overflow-wrap:anywhere;font-size:20px;line-height:28px;font-weight:700}
@media(hover:hover){.lh-meaning-coachmark button:hover:not(:disabled),.lh-retention-guide button:hover:not(:disabled),.lh-vocabulary-deck header>button:hover,.lh-vocabulary-deck__audio:hover:not(:disabled){background-color:#e5e6e8}.lh-meaning-coachmark__check:hover:not(:disabled){background:#174c36}.lh-vocabulary-deck__details:hover:not(:disabled){box-shadow:inset 0 0 0 1px #c8c8c8}}
.lh-meaning-coachmark button:active:not(:disabled),.lh-retention-guide button:active:not(:disabled),.lh-vocabulary-deck header>button:active,.lh-vocabulary-deck__audio:active:not(:disabled){background:#d9dade}
.lh-meaning-coachmark__choices button:active:not(:disabled){box-shadow:inset 0 0 0 1px #ddd,0 1px #ddd}
.lh-letter-sound__record:active:not(:disabled){box-shadow:inset 0 0 0 3px #19afe6}
.lh-vocabulary-deck__record:active:not(:disabled){background:#e5e6e8}
