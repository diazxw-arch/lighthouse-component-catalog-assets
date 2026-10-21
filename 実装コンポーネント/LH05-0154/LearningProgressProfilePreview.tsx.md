import {useState} from 'react';import {createRoot} from 'react-dom/client';
import {LearningProgressProfile} from './LearningProgressProfile';
import {learningProfileCopy,learningAchievements} from './learning-progress-demo-data';
import flameSrc from './learning-progress-media/streak-flame.png';
import './learning-progress-font.css';import './learning-progress-preview.css';
export function LearningProgressProfilePreview(){const state=new URLSearchParams(location.search).get('state'),[day,setDay]=useState('thu'),[message,setMessage]=useState('');return <main className="lh-learning-progress-demo"><LearningProgressProfile {...learningProfileCopy} achievements={state==='empty'?[]:learningAchievements} flameSrc={flameSrc} selectedDayId={day} onDay={id=>{setDay(id);setMessage('表示する曜日を切り替えるリクエストです。連続学習の記録は呼び出し元が提供します。');}} onSuggest={()=>setMessage('次に読む要約を選ぶリクエストです。本の選択は呼び出し元が提供します。')} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'次の要約を選べませんでした。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<LearningProgressProfilePreview/>);
