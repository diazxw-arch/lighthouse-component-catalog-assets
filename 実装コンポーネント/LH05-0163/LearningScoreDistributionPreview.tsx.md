import {useState} from 'react';import {createRoot} from 'react-dom/client';
import {LearningScoreDistribution} from './LearningScoreDistribution';import {statisticsCopy,scoreDistribution} from './vocabulary-statistics-demo-data';
import './vocabulary-statistics-font.css';import './vocabulary-statistics-preview.css';
export function LearningScoreDistributionPreview(){const state=new URLSearchParams(location.search).get('state'),[message,setMessage]=useState('');return <main className="lh-vocabulary-statistics-demo"><LearningScoreDistribution data={state==='empty'?null:scoreDistribution} emptyLabel={statisticsCopy.emptyDistributionLabel} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'練習を準備できませんでした。':undefined} onPractice={()=>setMessage('練習を始めるリクエストです。')}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<LearningScoreDistributionPreview/>);
