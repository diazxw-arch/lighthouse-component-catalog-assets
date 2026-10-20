import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { SyllabusCourseOverview } from './SyllabusCourseOverview';
import { OriginalCourseThumbnail } from './OriginalCourseThumbnail';
import artwork from './learning-media/original-related-courses.jpg';
import './learning-exercise-font.css';
import './learning-exercise-preview.css';
export function SyllabusCourseOverviewPreview(){const state=new URLSearchParams(window.location.search).get('state'),disabled=state==='disabled';
const[message,setMessage]=useState('');return <main className="lh-learning-exercise-demo"><SyllabusCourseOverview related={{heading:'おすすめの学習コース',courses:state==='empty'?[]:[{id:'programming',titleLines:['プログラミングの','基礎'],artwork:<OriginalCourseThumbnail source={artwork} kind="programming"/>,kind:'講座',rating:'4.7'},{id:'computer-science',titleLines:['計算機科学を学ぶ'],artwork:<OriginalCourseThumbnail source={artwork} kind="projector"/>,kind:'講座',rating:'4.8'}],onOpen:id=>setMessage('おすすめ講座「'+id+'」を開くリクエストです。')}} heading="この講座で学ぶこと" chapters={{chapters:state==='empty'?[]:['プログラミングの基礎','条件と繰り返し','配列','入力と出力','関数とライブラリ','再帰','性能'].map((title,i)=>({id:'chapter-'+(i+1),chapter:'第'+(i+1)+'章',title})),onOpen:id=>setMessage('シラバス「'+id+'」を開くリクエストです。'),busy:state==='busy',error:state==='error'?'シラバスを読み込めませんでした。':undefined}} startDate="2月19日から" onEnrollment={()=>setMessage('受講方法を表示するリクエストです。登録や支払いは呼び出し元が処理します。')} disabled={disabled}/><p role="status">{message}</p></main>;
}
createRoot(document.getElementById('root')!).render(<SyllabusCourseOverviewPreview/>);
