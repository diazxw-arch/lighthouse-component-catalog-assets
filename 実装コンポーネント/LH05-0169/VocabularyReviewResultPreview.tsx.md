import {useState} from 'react';import {createRoot} from 'react-dom/client';import {VocabularyReviewResult} from './VocabularyReviewResult';import {reviewResultCopy} from './review-practice-demo-data';
import './review-practice-font.css';import './review-practice-preview.css';
export function VocabularyReviewResultPreview(){const state=new URLSearchParams(location.search).get('state'),[message,setMessage]=useState('');return <main className="lh-review-practice-demo"><VocabularyReviewResult {...reviewResultCopy} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'復習を準備できませんでした。':undefined} onReview={()=>setMessage('もう一度復習するリクエストです。')}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<VocabularyReviewResultPreview/>);
