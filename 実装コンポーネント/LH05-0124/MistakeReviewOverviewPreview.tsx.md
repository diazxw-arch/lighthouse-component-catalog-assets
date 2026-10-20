import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {MistakeReviewOverview,type MistakeReviewQuestion} from './MistakeReviewOverview';
import './reader-utility-font.css';
import './reader-utility-preview.css';
export function MistakeReviewOverviewPreview(){const state=new URLSearchParams(location.search).get('state'),[message,setMessage]=useState('');let questions:readonly MistakeReviewQuestion[]=[{id:'sentence-1',label:'文を完成させる'},{id:'sentence-2',label:'文を完成させる'},{id:'listening',label:'聞こえたことばを答える'}];if(state==='empty')questions=[];if(state==='long')questions=[{id:'long',label:'間違えた長い設問の内容をもう一度確認し、正しい答えを考えてから選び直しましょう。'},...questions];return <main className="lh-reader-utility-demo"><MistakeReviewOverview titleLines={['最近間違えた問題を','復習しましょう']} actionLabel="復習を始める・6ポイント" questions={questions} onBack={()=>setMessage('学習に戻るリクエストです。')} onStart={()=>setMessage('間違えた問題の復習を始めるリクエストです。採点やポイントは呼び出し元が処理します。')} onQuestion={id=>setMessage('問題「'+id+'」を開くリクエストです。')} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'復習の準備ができませんでした。もう一度お試しください。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<MistakeReviewOverviewPreview/>);
