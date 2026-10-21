.lh-progress-recommendation,.lh-daily-summary,.lh-achievement-strip,.lh-progress-profile,.lh-quiz-setup{box-sizing:border-box;width:100%;max-width:390px;margin:0;background:white;color:#1d1d1d;font:400 14px/24px Meiryo,'Lighthouse Learning Progress Sans',sans-serif;letter-spacing:0}
.lh-progress-recommendation *,.lh-daily-summary *,.lh-achievement-strip *,.lh-progress-profile *,.lh-quiz-setup *{box-sizing:border-box}
.lh-progress-recommendation button,.lh-daily-summary button,.lh-progress-profile button,.lh-quiz-setup button,.lh-quiz-setup select{font:inherit;cursor:pointer;touch-action:manipulation}
.lh-progress-recommendation button:disabled,.lh-daily-summary button:disabled,.lh-progress-profile button:disabled,.lh-quiz-setup button:disabled,.lh-quiz-setup select:disabled{cursor:default}
.lh-progress-recommendation button:focus-visible,.lh-daily-summary button:focus-visible,.lh-progress-profile button:focus-visible,.lh-quiz-setup button:focus-visible,.lh-quiz-setup select:focus-visible{outline:2px solid #34363a;outline-offset:3px}
.lh-progress-recommendation{min-height:290px;padding:8px 16px 10px}
.lh-progress-recommendation article{min-height:272px;padding:13px 15px 19px;border:1px solid #047857;border-radius:4px;background:white}
.lh-progress-recommendation h2{margin:0;font-size:20px;line-height:28px;font-weight:700}
.lh-progress-recommendation__reason{margin:10px 0 0;font-size:12px;line-height:16px}
.lh-progress-recommendation__book{display:grid;grid-template-columns:66px minmax(0,1fr);gap:18px;margin-top:16px}
.lh-progress-recommendation__book img{width:66px;height:101px;object-fit:contain}
.lh-progress-recommendation__book h3{margin:2px 0 0;font-size:14px;line-height:24px;font-weight:400}
.lh-progress-recommendation__book p{margin:10px 0 0;color:#6e6e6e;font-size:12px;line-height:16px}
.lh-progress-recommendation__book p+p{margin-top:18px}
.lh-progress-recommendation__actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin-top:15px}
.lh-progress-recommendation__actions button{min-height:52px;padding:14px 8px;border:0;border-radius:10px;background:linear-gradient(135deg,#174c36 0%,#1f6444 58%,#2d8f5e 100%);color:white;font-size:14px;line-height:24px}
.lh-progress-recommendation__empty,.lh-progress-recommendation__error{margin:16px 0 0;font-size:12px;line-height:20px}
.lh-daily-summary{min-height:460px;padding:16px 16px 34px}
.lh-daily-summary h2{margin:0;font-size:20px;line-height:28px;font-weight:700}
.lh-daily-summary ol{list-style:none;min-height:246px;margin:22px 0 0;padding:0;border-radius:12px;box-shadow:inset 0 0 0 1px #e4e4e4}
.lh-daily-summary li{position:relative;min-height:82px;padding:30px 58px 28px 88px}
.lh-daily-summary li:after{position:absolute;left:16px;right:16px;bottom:0;height:1px;background:#e4e4e4;content:''}
.lh-daily-summary li:last-child:after{display:none}
.lh-daily-summary li>img{position:absolute;left:16px;top:12px;width:52px;height:52px;object-fit:contain}
.lh-daily-summary li>p{margin:0;font-size:14px;line-height:24px}
.lh-daily-summary__check{position:absolute;right:18px;top:30px;display:grid;place-items:center;width:20px;height:20px;border-radius:50%;border:1px solid #b9b9b9;background:white}
.lh-daily-summary__check[data-complete=true]{border:0;background:linear-gradient(135deg,#174c36 0%,#1f6444 58%,#2d8f5e 100%);color:white}
.lh-daily-summary__check svg{width:14px;height:12px}
.lh-daily-summary__completion-slot{min-height:30px}
.lh-daily-summary__completion{min-height:30px;margin:0;padding:8px 4px 6px;border-radius:4px;background:linear-gradient(135deg,#174c36 0%,#1f6444 58%,#2d8f5e 100%);color:white;text-align:center;font-size:12px;line-height:16px}
.lh-daily-summary__confirm{display:block;width:100%;min-height:44px;margin-top:40px;padding:10px 8px;border:0;border-radius:10px;background:linear-gradient(135deg,#174c36 0%,#1f6444 58%,#2d8f5e 100%);color:white;font-size:14px;line-height:24px;font-weight:400}
.lh-daily-summary__empty{min-height:246px;margin:22px 0 0;font-size:12px;line-height:20px}
.lh-daily-summary__error{margin:12px 0 0;font-size:12px;line-height:20px}
.lh-achievement-strip{position:relative;min-height:260px;padding-top:8px;overflow:hidden}
.lh-achievement-strip h2{margin:0 16px;font-size:20px;line-height:28px;font-weight:700}
.lh-achievement-strip ol{list-style:none;margin:0;padding:0}
.lh-achievement-strip li{position:absolute;top:58px;width:168px}
.lh-achievement-art{display:block;width:168px;height:168px;background:white}
.lh-achievement-strip li>p{width:168px;margin:8px 0 0;text-align:center;font-size:12px;line-height:16px;white-space:nowrap}
.lh-achievement-strip li:first-child>p{margin-left:88px}
.lh-achievement-strip li:nth-child(3)>p{width:94px}
.lh-achievement-strip__empty{margin:22px 16px 0;font-size:12px;line-height:20px}
.lh-progress-profile{min-height:740px;padding:8px 0 12px}
.lh-progress-profile>h2{margin:0 16px;font-size:20px;line-height:28px;font-weight:700}
.lh-progress-profile>.lh-achievement-strip{margin-top:40px;font-family:inherit}
.lh-progress-profile__streak{min-height:302px;margin:28px 16px 0;padding:25px 15px 20px;border:1px solid #e4e4e4;border-radius:14px;background:white}
.lh-progress-profile__streak>img{display:block;width:79px;height:119px;margin:0 auto;object-fit:contain}
.lh-progress-profile__streak>h3{margin:21px 0 0;text-align:center;font-size:20px;line-height:28px;font-weight:700}
.lh-progress-profile__streak>p{margin:16px 0 0;color:#747474;text-align:center;font-size:12px;line-height:16px}
.lh-progress-profile__streak>div{display:flex;justify-content:space-between;width:292px;max-width:calc(100% - 24px);margin:26px 0 0 12px}
.lh-progress-profile__streak button{position:relative;flex:none;width:28px;height:28px;padding:6px 0;border:1px solid #e4e4e4;border-radius:50%;background:white;color:#747474;font-size:12px;line-height:16px}
.lh-progress-profile__streak button:before{position:absolute;inset:-8px;border-radius:50%;content:''}
.lh-progress-profile__streak button[aria-pressed=true]{border-color:#1f6444;background:linear-gradient(135deg,#174c36 0%,#1f6444 58%,#2d8f5e 100%);color:white}
.lh-progress-profile__suggest{display:block;width:calc(100% - 16px);min-height:48px;margin:14px 8px 0;padding:12px 16px;border:1px solid #e4e4e4;border-radius:8px;background:white;color:#1d1d1d;text-align:left;font-size:14px;line-height:24px}
.lh-progress-profile__error{margin:12px 16px 0;font-size:12px;line-height:20px}
.lh-quiz-setup{position:relative;min-height:700px;padding-top:8px}
.lh-quiz-setup h2{margin:0 16px;font-size:20px;line-height:28px;font-weight:700}
.lh-quiz-setup__subject{margin:16px 16px 0;color:#747474;font-size:12px;line-height:16px}
.lh-quiz-setup__count,.lh-quiz-setup__answer,.lh-quiz-setup__instant,.lh-quiz-setup__trueFalse,.lh-quiz-setup__multipleChoice,.lh-quiz-setup__written{position:absolute;left:16px;right:16px;min-height:24px;font-size:14px;line-height:24px}
.lh-quiz-setup__count{top:104px}.lh-quiz-setup__instant{top:162px}.lh-quiz-setup__answer{top:216px}.lh-quiz-setup__trueFalse{top:290px}.lh-quiz-setup__multipleChoice{top:342px}.lh-quiz-setup__written{top:394px}
.lh-quiz-setup__select{position:absolute;right:0;top:-10px;width:106px;height:44px}
.lh-quiz-setup__select select{appearance:none;width:100%;height:44px;padding:10px 24px 10px 0;border:0;border-radius:4px;background:white;color:#047857;text-align:right;font-size:14px;line-height:24px}
.lh-quiz-setup__select>span{position:absolute;right:2px;top:10px;display:grid;place-items:center;width:12px;height:24px;pointer-events:none;color:#047857}
.lh-quiz-setup__select>span svg{width:12px;height:12px}
.lh-quiz-setup [role=switch]{position:absolute;right:6px;top:-2px;display:flex;align-items:center;justify-content:flex-start;width:54px;height:30px;padding:4px;border:0;border-radius:15px;background:#e4e4e4;box-shadow:none}
.lh-quiz-setup [role=switch]:before{position:absolute;inset:-7px;border-radius:15px;content:''}
.lh-quiz-setup [role=switch][data-state=checked]{background:linear-gradient(135deg,#174c36 0%,#1f6444 58%,#2d8f5e 100%)}
.lh-quiz-setup [role=switch]>span{display:block;width:22px;height:22px;border-radius:50%;background:white;box-shadow:none;transform:translateX(0)}
.lh-quiz-setup [role=switch]>span[data-state=checked]{transform:translateX(22px)}
.lh-quiz-setup__start{position:absolute;left:16px;right:16px;top:638px;min-height:44px;padding:10px 8px;border:0;border-radius:10px;background:linear-gradient(135deg,#174c36 0%,#1f6444 58%,#2d8f5e 100%);color:white;font-size:14px;line-height:24px}
.lh-quiz-setup__error{position:absolute;left:16px;right:16px;top:562px;margin:0;font-size:12px;line-height:20px}
.lh-progress-recommendation button:disabled,.lh-daily-summary__confirm:disabled,.lh-progress-profile__suggest:disabled,.lh-quiz-setup__start:disabled{border:1px solid #e4e4e4;background:white;color:#747474}
@media(hover:hover){.lh-progress-recommendation button:hover:not(:disabled),.lh-daily-summary__confirm:hover:not(:disabled),.lh-quiz-setup__start:hover:not(:disabled){box-shadow:inset 0 0 0 1px #174c36}.lh-progress-profile__suggest:hover:not(:disabled){background:#e5e6e8}}
.lh-progress-recommendation button:active:not(:disabled),.lh-daily-summary__confirm:active:not(:disabled),.lh-quiz-setup__start:active:not(:disabled){box-shadow:inset 0 0 0 2px #174c36}
.lh-progress-profile__suggest:active:not(:disabled){background:#d9dade}
@media(prefers-reduced-motion:reduce){.lh-quiz-setup [role=switch],.lh-quiz-setup [role=switch]>span{transition:none}}
