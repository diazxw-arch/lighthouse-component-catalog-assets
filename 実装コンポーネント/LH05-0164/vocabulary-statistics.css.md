.lh-vocabulary-sort,.lh-vocabulary-statistics,.lh-score-distribution,.lh-learning-metrics,.lh-course-mastery{box-sizing:border-box;width:100%;max-width:390px;margin:0;background:white;color:#1d1d1d;font:400 14px/24px Meiryo,'Lighthouse Vocabulary Statistics Sans',sans-serif;letter-spacing:0}
.lh-vocabulary-sort *,.lh-vocabulary-statistics *,.lh-score-distribution *,.lh-learning-metrics *,.lh-course-mastery *{box-sizing:border-box}
.lh-vocabulary-sort button,.lh-score-distribution button,.lh-course-mastery button{font:inherit;cursor:pointer;touch-action:manipulation}
.lh-vocabulary-sort button:disabled,.lh-score-distribution button:disabled,.lh-course-mastery button:disabled{cursor:default}
.lh-vocabulary-sort button:focus-visible,.lh-vocabulary-sort__front:focus-visible,.lh-score-distribution button:focus-visible,.lh-course-mastery button:focus-visible{outline:2px solid #34363a;outline-offset:3px}
.lh-vocabulary-sort{container-type:inline-size;position:relative;min-height:720px;overflow:hidden;padding-top:8px}
.lh-vocabulary-sort__position{margin:0 16px;text-align:center;font-size:14px;line-height:24px;font-weight:700}
.lh-vocabulary-sort__learning,.lh-vocabulary-sort__known{position:absolute;top:64px;width:72px;height:38px;margin:0;padding:10px 8px;border:1px solid #e4e4e4;border-radius:19px;background:white;font-size:12px;line-height:16px}
.lh-vocabulary-sort__learning{left:-12px;padding-left:15px;color:#747474}
.lh-vocabulary-sort__known{right:-12px;border:0;background:linear-gradient(135deg,#174c36 0%,#1f6444 58%,#2d8f5e 100%);color:white}
.lh-vocabulary-sort__back,.lh-vocabulary-sort__front{position:absolute;width:342px;height:482px;border:1px solid #e4e4e4;border-radius:22px;background:white}
.lh-vocabulary-sort__back{left:24px;top:118px}
.lh-vocabulary-sort__front{left:86px;top:106px;touch-action:pan-y;cursor:grab}
.lh-vocabulary-sort__front:active{cursor:grabbing}
.lh-vocabulary-sort__front h2{position:absolute;left:31px;width:min(234px,calc(100cqi - 134px));overflow-wrap:anywhere;top:195px;margin:0;text-align:center;font-size:20px;line-height:28px;font-weight:700;color:#1f6444}
.lh-vocabulary-sort__front>p{position:absolute;left:31px;width:min(234px,calc(100cqi - 134px));overflow-wrap:anywhere;top:235px;margin:0;text-align:center;font-size:20px;line-height:28px;font-weight:400}
.lh-vocabulary-sort__front>p.lh-vocabulary-sort__empty{font-size:14px;line-height:24px}
.lh-vocabulary-sort__undo,.lh-vocabulary-sort__next{position:absolute;display:grid;place-items:center;width:44px;height:44px;padding:0;border:0;border-radius:4px;background:transparent;color:#526173}
.lh-vocabulary-sort__undo{left:16px;top:622px}
.lh-vocabulary-sort__undo svg{width:24px;height:24px}
.lh-vocabulary-sort__next{right:27px;top:627px}
.lh-vocabulary-sort__next svg{width:14px;height:18px}
.lh-vocabulary-sort__instruction{position:absolute;left:72px;right:78px;top:640px;margin:0;text-align:center;font-size:12px;line-height:16px}
.lh-vocabulary-sort button:disabled{opacity:.5}
.lh-vocabulary-sort>.lh-vocabulary-statistics-error{position:absolute;left:16px;right:16px;top:688px;margin:0}
.lh-learning-metrics{min-height:164px;padding:4px 16px 8px}
.lh-learning-metrics dl{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 10px;margin:0}
.lh-learning-metrics dl>div{display:flex;flex-direction:column;min-height:72px;padding:8px 12px 14px;border-radius:12px;background:white;box-shadow:inset 0 0 0 1px #e5e7eb}
.lh-learning-metrics dt{order:2;margin-top:6px;font-size:12px;line-height:16px}
.lh-learning-metrics dd{order:1;margin:0;font-size:20px;line-height:28px;font-weight:700}
.lh-learning-metrics>p{margin:8px 0;font-size:12px;line-height:20px}
.lh-score-distribution{min-height:300px;padding:4px 16px 6px}
.lh-score-distribution article{position:relative;min-height:290px;border-radius:18px;background:white;box-shadow:inset 0 0 0 1px #e4e4e4}
.lh-score-distribution h3{position:absolute;left:20px;right:20px;top:18px;margin:0;font-size:14px;line-height:24px;font-weight:700}
.lh-score-distribution__score{position:absolute;left:20px;right:20px;top:52px;margin:0;color:#747474;font-size:12px;line-height:16px}
.lh-score-distribution__chart{position:absolute;left:20px;top:96px;width:calc(100% - 40px);height:118px;overflow:visible;font-family:inherit}
.lh-score-distribution__axis{position:absolute;left:20px;right:20px;top:222px;margin:0;white-space:pre;color:#747474;font-size:12px;line-height:16px}
.lh-score-distribution article>button{position:absolute;left:calc(50% - 95px);top:250px;width:190px;min-height:44px;padding:10px 8px;border:0;border-radius:10px;background:linear-gradient(135deg,#174c36 0%,#1f6444 58%,#2d8f5e 100%);color:white;font-size:14px;line-height:24px}
.lh-score-distribution__empty{margin:0;padding:20px;font-size:12px;line-height:20px}
.lh-vocabulary-statistics{min-height:760px;padding:12px 0}
.lh-vocabulary-statistics>h2{margin:0 16px;font-size:20px;line-height:28px;font-weight:700}
.lh-vocabulary-statistics__test{min-height:70px;margin:24px 16px 0;padding:12px 20px 14px;border-radius:18px;box-shadow:inset 0 0 0 1px #e4e4e4}
.lh-vocabulary-statistics__test h3{margin:0;font-size:14px;line-height:24px;font-weight:700}
.lh-vocabulary-statistics__test time{display:block;margin-top:4px;color:#1d1d1d;font-size:12px;line-height:16px}
.lh-vocabulary-statistics__streak{position:relative;min-height:112px;margin:14px 16px 0;border-radius:18px;background:white;box-shadow:inset 0 0 0 1px #e4e4e4}
.lh-vocabulary-statistics__streak>h3{position:absolute;left:68px;top:14px;margin:0;font-size:14px;line-height:24px;font-weight:700}
.lh-vocabulary-statistics__streak>p{position:absolute;left:16px;top:42px;margin:0;color:#1f6444;font-size:20px;line-height:28px;font-weight:700}
.lh-vocabulary-statistics__streak>ol{position:absolute;left:27.3743%;right:26px;top:50px;display:flex;justify-content:space-between;gap:4px;list-style:none;margin:0;padding:0}
.lh-vocabulary-statistics__streak li{flex:1;min-width:0;text-align:center}
.lh-vocabulary-statistics__streak li>span:first-child{display:block;font-size:12px;line-height:16px}
.lh-vocabulary-statistics__streak li>span+span{display:block;width:18px;height:18px;margin:14px auto 0;border-radius:50%;background:#e4e4e4}
.lh-vocabulary-statistics__streak li>span[data-complete=true]{background:linear-gradient(135deg,#174c36 0%,#1f6444 58%,#2d8f5e 100%)}
.lh-vocabulary-statistics>.lh-learning-metrics{width:calc(100% - 32px);max-width:none;min-height:152px;margin:18px 16px 0;padding:0;font-family:inherit}
.lh-vocabulary-statistics>.lh-score-distribution{width:calc(100% - 32px);max-width:none;min-height:300px;margin:24px 16px 0;padding:0;font-family:inherit}
.lh-course-mastery{min-height:410px;padding:4px 16px}
.lh-course-mastery>article{min-height:402px;border-radius:16px;background:white;box-shadow:inset 0 0 0 1px #e4e4e4}
.lh-course-mastery header{padding:14px 16px 22px;border-bottom:1px solid #e4e4e4}
.lh-course-mastery header>p{margin:0;color:#747474;font-size:12px;line-height:16px}
.lh-course-mastery header>h3{margin:8px 0 0;font-size:14px;line-height:24px;font-weight:700}
.lh-course-mastery header>h2{margin:22px 0 0;font-size:20px;line-height:28px;font-weight:700}
.lh-course-mastery__total,.lh-course-mastery__part{overflow:hidden;background:#e4e4e4}
.lh-course-mastery__total{height:14px;margin-top:18px;border-radius:7px}
.lh-course-mastery [role=progressbar]>span{display:block;height:100%;border-radius:inherit;background:linear-gradient(135deg,#174c36 0%,#1f6444 58%,#2d8f5e 100%)}
.lh-course-mastery__course{position:relative;min-height:124px;padding:19px 16px 24px;border-bottom:1px solid #e4e4e4}
.lh-course-mastery__course>img{position:absolute;left:16px;top:25px;width:66px;height:70px;object-fit:contain}
.lh-course-mastery__course>div{margin-left:80px;margin-right:34px}
.lh-course-mastery__course h3{margin:0;font-size:14px;line-height:24px;font-weight:700}
.lh-course-mastery__part{height:8px;margin-top:22px;border-radius:4px}
.lh-course-mastery__course>div>p{margin:10px 0 0;color:#1f6444;font-size:12px;line-height:16px}
.lh-course-mastery__course>p{margin:0;font-size:12px;line-height:20px}
.lh-course-mastery footer{padding:15px 16px 12px}
.lh-course-mastery footer>p{margin:0;color:#747474;font-size:12px;line-height:16px}
.lh-course-mastery footer>button{display:block;width:100%;min-height:44px;margin-top:24px;padding:10px 8px;border:0;border-radius:10px;background:linear-gradient(135deg,#174c36 0%,#1f6444 58%,#2d8f5e 100%);color:white;font-size:14px;line-height:24px}
.lh-score-distribution button:disabled,.lh-course-mastery button:disabled{border:1px solid #e4e4e4;background:white;color:#747474}
.lh-vocabulary-statistics-error{margin:12px 16px 0;font-size:12px;line-height:20px}
@media(hover:hover){.lh-vocabulary-sort button:hover:not(:disabled){background:#e5e6e8}.lh-score-distribution button:hover:not(:disabled),.lh-course-mastery button:hover:not(:disabled){box-shadow:inset 0 0 0 1px #174c36}}
.lh-vocabulary-sort button:active:not(:disabled){background:#d9dade}
.lh-score-distribution button:active:not(:disabled),.lh-course-mastery button:active:not(:disabled){box-shadow:inset 0 0 0 2px #174c36}
