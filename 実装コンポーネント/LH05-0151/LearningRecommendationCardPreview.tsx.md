import {useState} from 'react';import {createRoot} from 'react-dom/client';
import {LearningRecommendationCard} from './LearningRecommendationCard';
import {recommendationCardCopy} from './learning-progress-demo-data';
import {recommendedBook} from './learning-challenge-demo-data';
import coverSrc from './learning-challenge-media/recommended-cover.png';
import './learning-progress-font.css';import './learning-progress-preview.css';
export function LearningRecommendationCardPreview(){const state=new URLSearchParams(location.search).get('state'),[message,setMessage]=useState('');return <main className="lh-learning-progress-demo"><LearningRecommendationCard {...recommendationCardCopy} book={state==='empty'?null:{...recommendedBook,coverSrc}} onListen={()=>setMessage('この本を聞くリクエストです。')} onRead={()=>setMessage('この本を読むリクエストです。')} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'本を開けませんでした。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<LearningRecommendationCardPreview/>);
