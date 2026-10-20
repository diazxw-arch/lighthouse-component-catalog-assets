.lh-course-overview,.lh-module-dashboard,.lh-assignment-overview,.lh-related-courses,.lh-study-goal-screen{box-sizing:border-box;width:100%;max-width:390px;margin:0;background:white;color:#1d1d1d;font:400 14px/24px Meiryo,'Lighthouse Course Flow Sans',sans-serif;letter-spacing:0}
.lh-course-overview *,.lh-module-dashboard *,.lh-assignment-overview *,.lh-related-courses *,.lh-study-goal-screen *{box-sizing:border-box}
.lh-course-overview :is(.lh-instructor,.lh-lesson-progress,.lh-course-download,.lh-techniques),.lh-module-dashboard :is(.lh-course-nav,.lh-module-selector,.lh-module-progress,.lh-daily-goal),.lh-assignment-overview :is(.lh-course-nav,.lh-assignment-guidance,.lh-assignment-grades),.lh-study-goal-screen .lh-session-goal{font-family:inherit}
.lh-course-overview{display:flex;flex-direction:column;min-height:800px;padding-top:10px}
.lh-course-overview .lh-instructor__stage{height:108px}
.lh-course-overview .lh-instructor__portrait{left:22px;top:0;width:42px;height:42px}
.lh-course-overview .lh-instructor__name{left:74px;right:16px;top:0}
.lh-course-overview .lh-instructor__back{top:17px;width:44px;height:44px}
.lh-course-overview .lh-instructor__back svg{width:24px;height:24px}
.lh-course-overview .lh-instructor__about{top:64px;right:16px}
.lh-course-overview .lh-lesson-progress{margin-top:20px;padding:0 16px}
.lh-course-overview .lh-lesson-progress__grid{display:grid;grid-template-columns:repeat(5,38px);grid-auto-rows:64px;justify-content:space-between;gap:8px 0;height:178px;padding:14px 8px 0;border-top:1px solid #e4e4e4;aspect-ratio:auto}
.lh-course-overview .lh-lesson-progress__grid li{position:static;width:38px;height:64px}
.lh-course-overview .lh-lesson-progress__grid button{place-items:start center}
.lh-course-overview .lh-lesson-progress__art{width:36.56px;height:54.84px}
.lh-course-overview .lh-lesson-progress__circle{r:93px}
.lh-course-overview [data-status=complete] .lh-lesson-progress__circle{fill:#3a9c56}
.lh-course-overview [data-status=current] .lh-lesson-progress__circle{fill:#1f6444}
.lh-course-overview .lh-lesson-progress__number{font-family:Meiryo,'Lighthouse Course Flow Sans',sans-serif;font-size:65.65px}
.lh-course-overview .lh-course-download{padding:0 16px}
.lh-course-overview .lh-course-download__row{align-items:flex-start;min-height:90px;padding:16px 0 20px}
.lh-course-overview .lh-course-download__copy>span{margin-top:12px}
.lh-course-overview .lh-course-download__switch{flex-basis:54px;width:54px;height:30px;margin-top:6px}
.lh-course-overview .lh-course-download__switch input{width:54px;height:30px}
.lh-course-overview .lh-course-download__switch>span{top:4px;left:4px;width:22px;height:22px}
.lh-course-overview .lh-course-download__switch input:checked+span{transform:translateX(24px)}
.lh-course-overview>h2{margin:30px 16px 0;font-size:20px;line-height:28px;font-weight:700}
.lh-course-overview .lh-techniques{margin-top:28px;padding:0 16px}
.lh-course-overview .lh-techniques ul{gap:16px}
.lh-course-overview .lh-techniques li>button{grid-template-columns:82px minmax(0,1fr) 16px;gap:12px}
.lh-course-overview .lh-techniques__metadata{margin-top:6px}
.lh-course-overview .lh-techniques__chevron{width:16px;height:24px;stroke-width:1.5}
.lh-course-overview>h2.lh-course-overview__related{margin-top:36px;padding-top:22px;border-top:1px solid #e4e4e4}
.lh-course-overview footer{position:sticky;bottom:0;margin-top:auto;padding:12px 16px 14px;background:white}
.lh-course-overview footer button{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;min-height:44px;padding:10px;border:0;border-radius:22px;background:linear-gradient(#174c36,#1f6444,#2d8f5e);color:white;font:400 14px/24px Meiryo,'Lighthouse Course Flow Sans',sans-serif;cursor:pointer}
.lh-course-overview footer svg{width:14px;height:14px;fill:currentColor}
.lh-module-dashboard{min-height:820px}
.lh-module-dashboard .lh-module-selector{padding-top:16px}
.lh-module-dashboard .lh-module-selector>div{margin-top:4px}
.lh-module-dashboard .lh-module-progress{margin-top:8px;padding-top:4px;padding-bottom:8px;min-height:76px}
.lh-module-dashboard .lh-module-progress>button>span{gap:13px}
.lh-module-dashboard .lh-daily-goal{margin-top:12px;padding-top:6px;padding-bottom:6px}
.lh-module-dashboard .lh-daily-goal__card{min-height:108px}
.lh-module-dashboard__next-label{display:flex;align-items:center;justify-content:center;gap:12px;margin:24px 16px 0;font-size:12px;line-height:16px}
.lh-module-dashboard__next-label:before,.lh-module-dashboard__next-label:after{flex:1;height:1px;background:#e4e4e4;content:''}
.lh-next-learning-material{position:relative;min-height:104px;margin:24px 16px 0;padding:13px 15px 15px;border:1px solid #1f6444;border-radius:8px;background:white;box-shadow:0 2px 5px #00000008}
.lh-next-learning-material>h2{margin:0 34px 0 0;font-size:14px;line-height:24px;font-weight:700}
.lh-next-learning-material__save{position:absolute;top:7px;right:7px;display:grid;place-items:center;width:44px;height:44px;border:0;border-radius:4px;background:transparent;cursor:pointer}
.lh-next-learning-material__save img{width:14px;height:auto}
.lh-next-learning-material>div{display:flex;align-items:center;flex-wrap:wrap;gap:8px;margin-top:24px}
.lh-next-learning-material>div>span,.lh-next-learning-material>div>button{display:flex;align-items:center;justify-content:center;gap:4px;min-width:60px;min-height:26px;padding:0 8px;border:1px solid #e4e4e4;border-radius:10px;font:400 14px/24px Meiryo,'Lighthouse Course Flow Sans',sans-serif}
.lh-next-learning-material>div>span:first-child{min-width:66px}
.lh-next-learning-material>div>button{background:linear-gradient(#174c36,#1f6444,#2d8f5e);border-color:#1f6444;color:white;cursor:pointer}
.lh-next-learning-material svg{width:12px;height:12px;fill:currentColor}
.lh-module-dashboard__heading{margin:40px 16px 0;font-size:20px;line-height:28px;font-weight:700}
.lh-module-dashboard__body{margin:22px 16px 0;font-size:14px;line-height:24px}
.lh-module-dashboard__body>span{display:block}
.lh-assignment-overview{min-height:790px}
.lh-assignment-overview .lh-assignment-guidance{padding:32px 16px 0}
.lh-assignment-overview .lh-assignment-guidance ul{gap:24px}
.lh-assignment-overview .lh-assignment-grades{margin-top:48px}
.lh-related-courses{min-height:188px;padding:6px 16px 12px}
.lh-related-courses>h2{margin:0;font-size:20px;line-height:28px;font-weight:700}
.lh-related-courses>ul{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;list-style:none;margin:16px 0 0;padding:0}
.lh-related-courses button{position:relative;display:flex;flex-direction:column;align-items:stretch;width:100%;min-height:126px;padding:11px 11px 15px 49px;border:1px solid #e4e4e4;border-radius:8px;background:white;text-align:left;color:inherit;font:inherit;cursor:pointer;box-shadow:0 1px 2px #00000004}
.lh-related-courses__art{position:absolute;left:11px;top:13px;width:28px;height:28px}
.lh-related-courses__art>svg{display:block;width:100%;height:100%;overflow:hidden}
.lh-related-courses strong{display:block;min-height:48px;font-size:14px;line-height:24px;font-weight:700}
.lh-related-courses strong>span{display:block}
.lh-related-courses__kind{margin-top:6px;font-size:12px;line-height:16px;color:#6e6e6e}
.lh-related-courses__rating{display:flex;align-items:center;gap:4px;margin-top:12px;font-size:12px;line-height:16px}
.lh-related-courses__rating svg{flex:none;width:12px;height:12px;fill:#526173;stroke:#526173}
.lh-study-goal-screen{position:relative;min-height:820px}
.lh-study-goal-screen__underlay{position:relative;padding:22px 16px 0}
.lh-study-goal-screen__underlay>h2{margin:0;padding-right:22px;font-size:20px;line-height:28px;font-weight:700}
.lh-study-goal-screen__underlay>p{margin:34px 0 0;font-size:12px;line-height:16px;color:#6e6e6e}
.lh-study-goal-screen__status{position:absolute;right:16px;top:32px;width:24px;height:24px;color:#526173}
.lh-study-goal-screen__status svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
.lh-study-goal-screen__underlay>button{display:flex;align-items:center;gap:12px;width:100%;min-height:56px;margin-top:26px;padding:12px 16px;border:1px solid #dedee1;border-radius:10px;background:white;color:#1d1d1d;font:400 14px/24px Meiryo,'Lighthouse Course Flow Sans',sans-serif;cursor:pointer}
.lh-study-goal-screen__underlay>button+button{margin-top:12px}
.lh-study-goal-screen__underlay>button>svg{width:28px;height:28px;fill:none;stroke:#526173;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.lh-study-goal-screen__underlay>button:first-of-type svg rect{fill:#526173;stroke:none}
.lh-study-goal-screen__underlay>button:first-of-type svg rect:first-child{opacity:.55}
.lh-study-goal-screen__scrim{position:absolute;inset:0;width:100%;height:100%;padding:0;border:0;border-radius:0;background:#0003;cursor:default}
.lh-study-goal-screen__dialog{position:relative;z-index:1;margin:82px 8px 0;background:white;border-radius:32px;outline:0}
.lh-course-flow__sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.lh-study-goal-screen .lh-session-goal{width:100%;max-width:none;padding:12px 16px 54px}
.lh-study-goal-screen .lh-session-goal>button{font-family:inherit}
.lh-course-overview footer button:disabled,.lh-next-learning-material button:disabled,.lh-related-courses button:disabled{opacity:.5;cursor:default}
.lh-course-overview footer button:focus-visible,.lh-next-learning-material button:focus-visible,.lh-related-courses button:focus-visible,.lh-study-goal-screen__underlay>button:focus-visible{outline:2px solid #34363a;outline-offset:2px}
@media(hover:hover){.lh-course-overview footer button:hover:not(:disabled),.lh-next-learning-material>div>button:hover:not(:disabled){background:#174c36}.lh-related-courses button:hover:not(:disabled),.lh-next-learning-material__save:hover:not(:disabled),.lh-study-goal-screen__underlay>button:hover:not(:disabled){background:#e5e6e8}}

@media(max-width:350px){.lh-related-courses strong>span{display:inline}}
