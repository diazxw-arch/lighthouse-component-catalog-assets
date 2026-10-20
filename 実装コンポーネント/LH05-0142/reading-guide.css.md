.lh-reading-start,.lh-reading-plan,.lh-current-reading,.lh-reading-bibliography,.lh-chapter-questions{box-sizing:border-box;width:100%;max-width:390px;margin:0;background:#fff;color:#1d1d1d;font:400 14px/24px Meiryo,'Lighthouse Reading Guide Sans',sans-serif;letter-spacing:0}
.lh-reading-start *,.lh-reading-plan *,.lh-current-reading *,.lh-reading-bibliography *,.lh-chapter-questions *{box-sizing:border-box}
.lh-reading-start{min-height:220px;padding:8px 20px 10px}
.lh-reading-start article{min-height:202px;padding:14px 14px 8px;border-radius:3px;border-top:3px solid #174c36;box-shadow:inset 0 0 0 1px #e4e4e4}
.lh-reading-start header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:-3px;font-size:12px;line-height:16px}
.lh-reading-start header>p{margin:0}
.lh-reading-start__badge{position:relative;min-width:106px;min-height:22px;padding:3px 6px 3px 26px;border-radius:3px;background:white;box-shadow:inset 0 0 0 1px #e4e4e4}
.lh-reading-start__badge svg{position:absolute;left:6px;top:3px;width:14px;height:16px;color:#174c36}
.lh-reading-start__date{display:grid;grid-template-columns:68px minmax(0,1fr);gap:12px;margin-top:22px}
.lh-reading-start__date time{position:relative;padding-top:2px;font-size:14px;line-height:24px;font-weight:700}
.lh-reading-start__date time:after{position:absolute;left:68px;top:0;width:1px;height:30px;background:#e4e4e4;content:''}
.lh-reading-start__date h2{margin:0;font-size:20px;line-height:28px;font-weight:700;overflow-wrap:anywhere}
.lh-reading-start__facilitator{display:flex;gap:14px;align-items:flex-start;min-height:44px;margin-top:22px}
.lh-reading-start__facilitator img{flex:none;width:34px;height:34px;margin-top:4px;object-fit:contain}
.lh-reading-start__facilitator>div{padding-top:2px}
.lh-reading-start__facilitator p{margin:0;font-size:12px;line-height:16px}
.lh-reading-start__facilitator p+p{margin-top:8px;color:#6e6e6e}
.lh-reading-start__welcome{margin:18px 0 0;font-size:14px;line-height:24px}
.lh-reading-plan{position:relative;min-height:780px;padding:8px 16px 42px 54px}
.lh-reading-plan:before{position:absolute;left:26px;top:18px;bottom:42px;width:1px;background:#e4e4e4;content:''}
.lh-reading-plan>ol{list-style:none;margin:0;padding:0}
.lh-reading-plan>ol>li{position:relative;margin:28px 0 0}
.lh-reading-plan>ol>li:first-child{margin-top:0}
.lh-reading-plan>ol>li:nth-child(2){margin-top:24px}
.lh-reading-plan__marker{position:absolute;left:-35px;top:24px;width:14px;height:14px;border:1px solid #d7d7d7;border-radius:50%;background:white}
.lh-reading-plan>ol>li[aria-current=step]>.lh-reading-plan__marker{border-color:#174c36}
.lh-reading-plan>ol>li[aria-current=step]>.lh-reading-plan__marker:after{position:absolute;inset:4px;border-radius:50%;background:#174c36;content:''}
.lh-reading-plan .lh-reading-start{max-width:none;min-height:202px;padding:0}
.lh-reading-plan .lh-reading-milestone{max-width:none;min-height:124px;padding:0;font-family:inherit}
.lh-reading-plan .lh-reading-milestone__badge{background:white;box-shadow:inset 0 0 0 1px #e4e4e4}
.lh-reading-plan .lh-reading-milestone__badge svg{color:#174c36}
.lh-reading-plan .lh-reading-milestone__row{margin-top:16px}
.lh-reading-plan__continuation{margin:48px 0 0;color:#747474;font-size:12px;line-height:16px}
.lh-reading-plan__empty{margin:20px 0 0;font-size:12px;line-height:16px}
.lh-current-reading{min-height:220px;padding:8px 20px 28px}
.lh-current-reading>h2{margin:0;font-size:20px;line-height:28px;font-weight:700}
.lh-current-reading__book{display:grid;grid-template-columns:83px minmax(0,1fr);gap:17px;margin-top:26px}
.lh-current-reading__book>img{width:83px;height:127px;object-fit:contain}
.lh-current-reading__book>div{padding-top:12px;min-width:0}
.lh-current-reading h3{margin:0;font-size:14px;line-height:24px;font-weight:700;overflow-wrap:anywhere}
.lh-current-reading__book>div>p{margin:16px 0 0;color:#747474;font-size:12px;line-height:16px}
.lh-current-reading button{display:block;width:100%;min-height:38px;margin-top:24px;padding:11px 8px;border:0;border-radius:19px;background:#1f6444;color:white;font:400 12px/16px Meiryo,'Lighthouse Reading Guide Sans',sans-serif;cursor:pointer;touch-action:manipulation}
.lh-current-reading button:focus-visible{outline:2px solid #1d1d1d;outline-offset:3px}
.lh-current-reading button:disabled{background:#e5e6e8;color:#747474;cursor:default}
.lh-current-reading button:active:not(:disabled){background:#174c36}
@media(hover:hover){.lh-current-reading button:hover:not(:disabled){background:#174c36}}
.lh-current-reading__error,.lh-current-reading__empty{margin:16px 0 0;font-size:12px;line-height:20px}
.lh-reading-bibliography{min-height:650px;padding:8px 24px 64px}
.lh-reading-bibliography__category{margin:0;color:#174c36;font-size:12px;line-height:16px}
.lh-reading-bibliography>h2{margin:26px 0 0;color:#174c36;font-size:20px;line-height:28px;font-weight:700}
.lh-reading-bibliography>h2>span{display:block}
.lh-reading-bibliography>img{display:block;width:100%;height:138px;margin-top:56px;object-fit:contain}
.lh-reading-bibliography dl{margin:42px 0 0}
.lh-reading-bibliography dl>div{min-height:90px;padding:11px 0 26px;border-top:1px solid #b9b9b9}
.lh-reading-bibliography dt{color:#747474;font-size:12px;line-height:16px}
.lh-reading-bibliography dd{margin:12px 0 0;color:#1d1d1d;font-size:14px;line-height:24px;overflow-wrap:anywhere}
.lh-chapter-questions{min-height:660px;padding:8px 16px 18px}
.lh-chapter-questions h2{margin:0;font-size:20px;line-height:28px;font-weight:700}
.lh-chapter-questions ol{list-style:none;margin:20px 0 0;padding:0}
.lh-chapter-questions li{min-height:78px;padding-bottom:38px}
.lh-chapter-questions li:last-child{min-height:40px;padding-bottom:0}
.lh-chapter-questions h3{margin:0;color:#747474;font-size:12px;line-height:16px;font-weight:400}
.lh-chapter-questions li p{margin:8px 0 0;font-size:12px;line-height:16px;overflow-wrap:anywhere}
.lh-chapter-questions>p{font-size:12px;line-height:16px}
