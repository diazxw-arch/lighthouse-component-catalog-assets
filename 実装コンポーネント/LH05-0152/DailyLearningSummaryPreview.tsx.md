import {useState} from 'react';import {createRoot} from 'react-dom/client';
import {DailyLearningSummary} from './DailyLearningSummary';
import {dailySummaryCopy,dailyLearningTasks} from './learning-progress-demo-data';
import './learning-progress-font.css';import './learning-progress-preview.css';
export function DailyLearningSummaryPreview(){const state=new URLSearchParams(location.search).get('state'),[message,setMessage]=useState('');return <main className="lh-learning-progress-demo"><DailyLearningSummary {...dailySummaryCopy} tasks={state==='empty'?[]:state==='incomplete'?dailyLearningTasks.map((task,index)=>({...task,complete:index!==2})):dailyLearningTasks} onConfirm={()=>setMessage('今日の学びを確認したリクエストです。保存は呼び出し元が提供します。')} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'確認を保存できませんでした。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<DailyLearningSummaryPreview/>);
