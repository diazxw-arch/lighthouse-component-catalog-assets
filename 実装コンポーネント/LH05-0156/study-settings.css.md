.lh-learning-settings,.lh-answer-grading,.lh-answer-direction,.lh-question-format,.lh-answer-requirement{box-sizing:border-box;width:100%;max-width:390px;margin:0;background:white;color:#1d1d1d;font:400 14px/24px Meiryo,'Lighthouse Study Settings Sans',sans-serif;letter-spacing:0}
.lh-learning-settings *,.lh-answer-grading *,.lh-answer-direction *,.lh-question-format *,.lh-answer-requirement *,.lh-minimum-answer-notice *{box-sizing:border-box}
.lh-study-settings-card{border-radius:12px;padding:12px 16px;background:white;box-shadow:inset 0 0 0 1px #e4e4e4}
.lh-study-settings-card h3{margin:0;font-size:12px;line-height:16px;font-weight:700}
.lh-study-settings-card__rows{margin-top:14px}
.lh-study-toggle-row{position:relative;min-height:48px;padding:12px 68px 12px 0;font-size:14px;line-height:24px}
.lh-study-toggle-row label{display:block;cursor:pointer}
.lh-study-toggle-row [role=switch]{position:absolute;right:6px;top:10px;display:flex;align-items:center;justify-content:flex-start;width:54px;height:30px;padding:4px;border:0;border-radius:15px;background:#e4e4e4;box-shadow:none;cursor:pointer;touch-action:manipulation}
.lh-study-toggle-row [role=switch]:before{position:absolute;inset:-7px;border-radius:15px;content:''}
.lh-study-toggle-row [role=switch][data-state=checked]{background:linear-gradient(135deg,#174c36 0%,#1f6444 58%,#2d8f5e 100%)}
.lh-study-toggle-row [role=switch]>span{display:block;width:22px;height:22px;border-radius:50%;background:white;box-shadow:none;transform:translateX(0)}
.lh-study-toggle-row [role=switch]>span[data-state=checked]{transform:translateX(22px)}
.lh-study-toggle-row [role=switch]:disabled{cursor:default}
.lh-study-toggle-row [role=switch]:focus-visible,.lh-learning-settings button:focus-visible,.lh-answer-grading button:focus-visible,.lh-answer-grading input:focus-visible,.lh-minimum-answer-notice button:focus-visible{outline:2px solid #34363a;outline-offset:3px}
.lh-answer-direction{min-height:158px;padding:4px 16px}
.lh-answer-direction>.lh-study-settings-card{min-height:150px}
.lh-question-format{min-height:210px;padding:4px 16px}
.lh-question-format>.lh-study-settings-card{min-height:202px;padding-bottom:16px}
.lh-learning-settings{min-height:760px;padding:16px 16px 20px}
.lh-learning-settings>header{position:relative;height:28px}
.lh-learning-settings>header h2{margin:0 32px;font-size:20px;line-height:28px;text-align:center;font-weight:700}
.lh-learning-settings>header button{position:absolute;left:-12px;top:-8px;display:grid;place-items:center;width:44px;height:44px;padding:0;border:0;border-radius:4px;background:transparent;color:#747474;cursor:pointer;touch-action:manipulation}
.lh-learning-settings>header svg{width:18px;height:18px}
.lh-learning-settings__basic{min-height:152px;margin-top:22px;padding:16px 16px 12px}
.lh-learning-settings__basic .lh-study-settings-card__rows{margin-top:12px}
.lh-learning-settings>.lh-answer-direction,.lh-learning-settings>.lh-question-format{max-width:none;min-height:0;margin-top:18px;padding:0;font-family:inherit}
.lh-learning-settings__grading{min-height:116px;margin-top:18px;padding:16px 16px 24px}
.lh-learning-settings__grading>button{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;min-height:48px;margin-top:12px;padding:12px 0;border:0;border-radius:4px;background:white;color:#1d1d1d;text-align:left;font:inherit;cursor:pointer;touch-action:manipulation}
.lh-learning-settings__grading>button svg{flex:none;width:20px;height:20px;color:#747474;transform:rotate(-90deg)}
.lh-answer-grading{min-height:590px;padding:4px 16px 32px}
.lh-answer-grading>.lh-study-settings-card{min-height:420px;padding:14px 16px 20px}
.lh-answer-grading fieldset{min-width:0;margin:22px 0 0;padding:0;border:0}
.lh-answer-grading__choice{position:relative;display:block;min-height:106px;padding-right:40px;cursor:pointer}
.lh-answer-grading__choice:last-child{min-height:88px}
.lh-answer-grading__choice>span:first-child{display:block;font-size:14px;line-height:24px}
.lh-answer-grading__choice input{appearance:none;position:absolute;right:2px;top:2px;width:18px;height:18px;margin:0;border:1px solid #747474;border-radius:50%;background:white;cursor:pointer}
.lh-answer-grading__choice input:checked{border:0;background:linear-gradient(135deg,#174c36 0%,#1f6444 58%,#2d8f5e 100%)}
.lh-answer-grading__choice input:checked:before{position:absolute;inset:1px;border-radius:50%;background:white;content:''}
.lh-answer-grading__choice input:checked:after{position:absolute;inset:4px;border-radius:50%;background:linear-gradient(135deg,#174c36 0%,#1f6444 58%,#2d8f5e 100%);content:''}
.lh-answer-grading__description{display:block;margin-top:10px;color:#747474;font-size:12px;line-height:16px}
.lh-answer-grading__description>span,.lh-answer-grading__rewrite-description>span{display:block}
.lh-answer-grading__rewrite-description{margin:14px 16px 0;color:#747474;font-size:12px;line-height:16px}
.lh-answer-grading__writing-mode{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;min-height:58px;margin-top:30px;padding:17px 16px;border:1px solid #e4e4e4;border-radius:12px;background:white;color:#1d1d1d;text-align:left;font:inherit;cursor:pointer;touch-action:manipulation}
.lh-answer-grading__writing-mode svg{width:20px;height:20px;color:#747474;transform:rotate(-90deg)}
.lh-answer-grading button:disabled,.lh-learning-settings button:disabled{cursor:default}
.lh-answer-requirement{position:relative;isolation:isolate;min-height:570px;padding-top:20px;border-radius:24px;background:white}
.lh-answer-requirement>h2{margin:0 16px 0 48px;font-size:20px;line-height:28px;font-weight:700}
.lh-answer-requirement>.lh-answer-direction{position:absolute;left:0;right:0;top:76px;font-family:inherit}
.lh-minimum-answer-notice__overlay{position:absolute;inset:0;z-index:10;border-radius:inherit;background:#0006}
.lh-minimum-answer-notice{position:absolute;left:16px;right:16px;top:220px;z-index:11;min-height:260px;padding:26px 20px 34px;border:0;border-radius:24px;background:white;color:#1d1d1d;font:400 14px/24px Meiryo,'Lighthouse Study Settings Sans',sans-serif;letter-spacing:0;outline:none}
.lh-minimum-answer-notice h2{margin:0;text-align:center;font-size:20px;line-height:28px;font-weight:700}
.lh-minimum-answer-notice p{margin:36px 0 0;color:#747474;text-align:center;font-size:14px;line-height:24px}
.lh-minimum-answer-notice p>span{display:block}
.lh-minimum-answer-notice button{display:block;width:100%;min-height:44px;margin-top:44px;padding:10px 8px;border:0;border-radius:10px;background:linear-gradient(135deg,#174c36 0%,#1f6444 58%,#2d8f5e 100%);color:white;font:400 14px/24px Meiryo,'Lighthouse Study Settings Sans',sans-serif;cursor:pointer;touch-action:manipulation}
.lh-study-settings-error{margin:12px 16px 0;font-size:12px;line-height:20px}
.lh-study-settings-demo-frame{position:relative;isolation:isolate;min-height:760px}
.lh-study-settings-demo-frame--direction{min-height:158px}
.lh-study-settings-demo-frame--direction:has(.lh-minimum-answer-notice){min-height:570px}
@media(hover:hover){.lh-learning-settings>header button:hover,.lh-learning-settings__grading>button:hover:not(:disabled),.lh-answer-grading__writing-mode:hover:not(:disabled){background:#e5e6e8}.lh-minimum-answer-notice button:hover{box-shadow:inset 0 0 0 1px #174c36}}
.lh-learning-settings>header button:active,.lh-learning-settings__grading>button:active:not(:disabled),.lh-answer-grading__writing-mode:active:not(:disabled){background:#d9dade}
.lh-minimum-answer-notice button:active{box-shadow:inset 0 0 0 2px #174c36}
@media(prefers-reduced-motion:reduce){.lh-study-toggle-row [role=switch],.lh-study-toggle-row [role=switch]>span{transition:none}}
