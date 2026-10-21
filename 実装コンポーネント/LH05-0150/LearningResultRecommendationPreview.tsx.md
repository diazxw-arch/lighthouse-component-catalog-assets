import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {LearningResultRecommendation} from './LearningResultRecommendation';
import {learningResultCopy,suppliedLearningResults,recommendedBook} from './learning-challenge-demo-data';
import coverSrc from './learning-challenge-media/recommended-cover.png';
import './learning-challenge-font.css';
import './learning-challenge-preview.css';
export function LearningResultRecommendationPreview(){const state=new URLSearchParams(location.search).get('state'),[message,setMessage]=useState('');return <main className="lh-learning-challenge-demo"><LearningResultRecommendation {...learningResultCopy} results={state==='empty'?[]:suppliedLearningResults} recommendation={state==='empty'?null:{...recommendedBook,coverSrc}} canContinue={state==='available'} onListen={()=>setMessage('おすすめの本を聞くリクエストです。')} onRead={()=>setMessage('おすすめの本を読むリクエストです。')} onContinue={()=>setMessage('次の段階へ進むリクエストです。')} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'本を開けませんでした。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<LearningResultRecommendationPreview/>);
