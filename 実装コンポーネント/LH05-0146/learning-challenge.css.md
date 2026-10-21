.lh-combined-reading,.lh-ratio-number,.lh-quantity-ratio,.lh-daily-reading,.lh-learning-result{box-sizing:border-box;width:100%;max-width:390px;margin:0;background:white;color:#1d1d1d;font:400 14px/24px Meiryo,'Lighthouse Learning Challenge Sans',sans-serif;letter-spacing:0}
.lh-combined-reading *,.lh-ratio-number *,.lh-quantity-ratio *,.lh-daily-reading *,.lh-learning-result *{box-sizing:border-box}
.lh-ratio-number button,.lh-quantity-ratio button,.lh-daily-reading button,.lh-learning-result button{font:inherit;cursor:pointer;touch-action:manipulation}
.lh-ratio-number button:disabled,.lh-quantity-ratio button:disabled,.lh-daily-reading button:disabled,.lh-learning-result button:disabled{cursor:default}
.lh-ratio-number button:focus-visible,.lh-ratio-number input:focus-visible,.lh-quantity-ratio button:focus-visible,.lh-daily-reading button:focus-visible,.lh-learning-result button:focus-visible{outline:2px solid #34363a;outline-offset:3px}
.lh-combined-reading{position:relative;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:32px;min-height:680px;padding:16px 14px 28px 16px}
.lh-combined-reading:before{position:absolute;left:calc(50% - 1px);top:16px;bottom:32px;width:1px;background:#e4e4e4;content:''}
.lh-combined-reading .lh-reading-bibliography,.lh-combined-reading .lh-chapter-questions{padding:0;min-height:0;max-width:none;font-family:inherit}
.lh-combined-reading .lh-reading-bibliography dl>div{border-top-color:#1f6444}
.lh-combined-reading .lh-reading-bibliography__category,.lh-combined-reading .lh-reading-bibliography>h2,.lh-combined-reading .lh-chapter-questions>h2{color:#1f6444}
.lh-combined-reading .lh-chapter-questions li{min-height:76px;padding-bottom:0}
.lh-ratio-number{position:relative;min-height:760px;padding-top:8px}
.lh-ratio-number h2,.lh-quantity-ratio h2,.lh-daily-reading h2,.lh-learning-result>h2{margin:0 16px;font-size:20px;line-height:28px;font-weight:700}
.lh-ratio-number__shapes{position:absolute;left:calc(50% - 41px);top:118px;width:88px;height:112px}
.lh-ratio-number__input{position:absolute;left:16px;top:320px;width:calc(100% - 32px);height:62px;padding:16px;border:1px solid #e4e4e4;border-radius:12px;background:white;color:#1d1d1d;font:700 20px/28px Meiryo,'Lighthouse Learning Challenge Sans',sans-serif}
.lh-ratio-number__actions{position:absolute;left:16px;right:16px;top:404px;display:grid;grid-template-columns:44px minmax(0,1fr);gap:12px}
.lh-ratio-number__actions button{height:44px;padding:10px 4px;border:0;border-radius:10px;background:#1f6444;color:white;font-size:14px;line-height:24px}
.lh-ratio-number__actions button:first-child{border:1px solid #e4e4e4;background:white;color:#526173;font-size:20px;line-height:24px;font-weight:700}
.lh-ratio-number__actions button:disabled{color:#747474;background:white;border:1px solid #e4e4e4}
.lh-ratio-number__error{position:absolute;left:16px;right:16px;top:448px;margin:0;font-size:12px;line-height:16px}
.lh-ratio-number__keypad{position:absolute;left:0;right:0;top:466px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px 8px;padding:14px 16px 28px;background:white}
.lh-ratio-number__keypad button{height:54px;padding:13px 6px;border:1px solid #e4e4e4;border-radius:10px;background:white;color:#1d1d1d;font-size:20px;line-height:28px;font-weight:700}
.lh-ratio-number__keypad button[data-key='：']{background:#1f6444;color:white;border-color:#1f6444}
.lh-ratio-number__keypad button:disabled{color:#747474}
.lh-quantity-ratio{position:relative;min-height:760px;padding-top:8px}
.lh-quantity-ratio__character{position:absolute;left:24px;top:70px;width:109px;height:161px;object-fit:contain}
.lh-quantity-ratio__question{position:absolute;left:144px;right:16px;top:90px;min-height:118px;margin:0;padding:25px 15px;border:1px solid #e4e4e4;border-radius:14px;background:white;font-size:14px;line-height:24px}
.lh-quantity-ratio__question>span{display:block}
.lh-quantity-ratio__divider{position:absolute;left:16px;right:16px;top:246px;height:1px;background:#e4e4e4}
.lh-quantity-ratio__board{position:absolute;left:16px;right:16px;top:278px;height:252px;border:1px solid #e4e4e4;border-radius:14px;background:white}
.lh-quantity-ratio__rice{position:absolute;left:31px;right:41px;top:23px;display:flex;justify-content:space-between;gap:8px}
.lh-quantity-ratio__rice button{flex:none;width:64px;height:70px;padding:0;border:0;border-radius:4px;background:transparent}
.lh-quantity-ratio__rice svg{display:block;width:100%;height:100%}
.lh-quantity-ratio__water{position:absolute;left:calc(50% - 47px);top:151px;width:82px;height:58px;padding:0;border:0;border-radius:4px;background:transparent}
.lh-quantity-ratio__water svg{display:block;width:82px;height:58px}
.lh-quantity-ratio__tokens{position:absolute;left:0;right:0;top:578px;height:70px}
.lh-quantity-token{position:absolute;left:calc(50% - 83px);top:0;width:64px;height:70px;padding:0;border:0;border-radius:4px;background:transparent;touch-action:none!important}
.lh-quantity-token[data-kind=water]{left:calc(50% + 23px);top:6px;width:82px;height:58px}
.lh-quantity-token svg{display:block;width:100%;height:100%}
.lh-quantity-token:disabled{opacity:.5}
.lh-quantity-ratio__result{position:absolute;left:0;right:0;top:666px;min-height:94px;padding:9px 16px 8px;border-top:1px solid #e4e4e4;background:white}
.lh-quantity-ratio__result p{margin:0;color:#1f6444;font-size:14px;line-height:24px;font-weight:700}
.lh-quantity-ratio__result p[role=alert]{font-size:12px;line-height:16px;color:#1d1d1d}
.lh-quantity-ratio__result button{display:block;width:100%;min-height:44px;margin-top:8px;padding:10px 8px;border:0;border-radius:10px;background:#1f6444;color:white;font-size:14px;line-height:24px}
.lh-quantity-ratio__result button:disabled{color:#747474;background:white;border:1px solid #e4e4e4}
.lh-daily-reading{position:relative;min-height:680px;padding-top:8px}
.lh-daily-reading__subtitle{margin:12px 16px 0;color:#1f6444;font-size:14px;line-height:24px;font-weight:700}
.lh-daily-reading__days{position:absolute;left:0;right:0;top:134px;display:flex;gap:80px;padding:0 16px 1px;overflow-x:auto;scrollbar-width:none}
.lh-daily-reading__days::-webkit-scrollbar{display:none}
.lh-daily-reading__days:before{position:absolute;left:16px;right:0;top:26px;height:1px;background:#e4e4e4;content:''}
.lh-daily-reading__days article{position:relative;flex:none;width:170px}
.lh-daily-reading__days button{position:relative;display:flex;align-items:center;gap:4px;width:146px;min-height:44px;padding:10px 10px;border:1px solid #e4e4e4;border-radius:4px;background:white;color:#1d1d1d;font-size:14px;line-height:24px;font-weight:700}
.lh-daily-reading__days button[aria-current=step]{border-color:#1f6444}
.lh-daily-reading__days button svg{width:14px;height:12px;color:#1f6444}
.lh-daily-reading__empty-check{width:14px;height:14px;border:1.5px solid #1f6444;border-radius:3px}
.lh-daily-reading__days img{display:block;width:170px;height:258px;margin-top:18px;object-fit:contain}
.lh-daily-reading__empty{position:absolute;left:16px;right:16px;top:196px;margin:0;font-size:12px;line-height:20px}
.lh-daily-reading__trophies{position:absolute;left:16px;right:16px;top:502px}
.lh-daily-reading__trophies header{display:grid;grid-template-columns:minmax(0,1fr) 142px;align-items:start}
.lh-daily-reading__trophies h3{margin:0;font-size:20px;line-height:28px;font-weight:700}
.lh-daily-reading__trophies p{margin:2px 0 0;color:#747474;font-size:12px;line-height:16px}
.lh-daily-reading__trophies img{display:block;width:100%;height:58px;margin-top:12px;object-fit:contain}
.lh-daily-reading__actions{position:absolute;left:16px;right:16px;top:624px;display:grid;grid-template-columns:110px minmax(0,1fr);gap:10px}
.lh-daily-reading__actions button{min-height:44px;padding:10px 8px;border:1px solid #e4e4e4;border-radius:10px;background:white;color:#1d1d1d;font-size:14px;line-height:24px}
.lh-daily-reading__actions button+button{border-color:#1f6444;background:#1f6444;color:white}
.lh-daily-reading__actions button:disabled{background:white;border-color:#e4e4e4;color:#747474}
.lh-daily-reading__error{position:absolute;left:16px;right:16px;top:676px;margin:0;font-size:12px;line-height:20px}
.lh-learning-result{min-height:740px;padding:8px 16px 40px}
.lh-learning-result>h2{margin:0}
.lh-learning-result__results{list-style:none;margin:26px 0 0;padding:0}
.lh-learning-result__results li{position:relative;min-height:34px;padding-left:32px;font-size:14px;line-height:24px}
.lh-learning-result__results svg{position:absolute;left:4px;top:6px;width:14px;height:12px;color:#047857}
.lh-learning-result__recommendation{min-height:272px;margin-top:40px;padding:13px 15px 19px;border:1px solid #047857;border-radius:4px;background:white}
.lh-learning-result__recommendation h3{margin:0;font-size:20px;line-height:28px;font-weight:700}
.lh-learning-result__reason{margin:10px 0 0;font-size:12px;line-height:16px}
.lh-learning-result__book{display:grid;grid-template-columns:66px minmax(0,1fr);gap:18px;margin-top:16px}
.lh-learning-result__book img{width:66px;height:101px;object-fit:contain}
.lh-learning-result__book h4{margin:2px 0 0;font-size:14px;line-height:24px;font-weight:400}
.lh-learning-result__book p{margin:10px 0 0;color:#6e6e6e;font-size:12px;line-height:16px}
.lh-learning-result__book p+p{margin-top:18px}
.lh-learning-result__actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin-top:15px}
.lh-learning-result__actions button{min-height:52px;padding:14px 8px;border:0;border-radius:10px;background:#047857;color:white;font-size:14px;line-height:24px}
.lh-learning-result__condition{margin:50px 0 0;text-align:center;font-size:12px;line-height:16px}
.lh-learning-result__continue{display:block;width:100%;min-height:58px;margin-top:32px;padding:17px 8px;border:1px solid #e4e4e4;border-radius:10px;background:white;color:#1d1d1d;font-size:14px;line-height:24px;font-weight:700}
.lh-learning-result button:disabled{border:1px solid #e4e4e4;background:white;color:#747474}
.lh-learning-result__empty,.lh-learning-result__error{margin:20px 0 0;font-size:12px;line-height:20px}
@media(hover:hover){.lh-ratio-number button:hover:not(:disabled),.lh-quantity-ratio button:hover:not(:disabled),.lh-daily-reading button:hover:not(:disabled),.lh-learning-result button:hover:not(:disabled){box-shadow:inset 0 0 0 1px #526173}}
.lh-ratio-number button:active:not(:disabled),.lh-quantity-ratio button:active:not(:disabled),.lh-daily-reading button:active:not(:disabled),.lh-learning-result button:active:not(:disabled){outline:1px solid #526173;outline-offset:1px}
@media(max-width:359px){.lh-quantity-ratio__question{left:140px;padding-left:8px;padding-right:8px}.lh-quantity-ratio__rice{left:15px;right:15px;gap:4px}.lh-quantity-ratio__rice button{width:58px}.lh-daily-reading__trophies header{grid-template-columns:minmax(0,1fr) 110px}.lh-daily-reading__trophies h3{font-size:18px}}
