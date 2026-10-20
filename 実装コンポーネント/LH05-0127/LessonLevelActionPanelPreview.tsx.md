import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {LessonLevelActionPanel} from './LessonLevelActionPanel';
import './grammar-practice-font.css';
import './grammar-practice-preview.css';
export function LessonLevelActionPanelPreview(){const state=new URLSearchParams(location.search).get('state'),[message,setMessage]=useState('');return <main className="lh-grammar-demo"><LessonLevelActionPanel heading="基本の表現を使う" description="上級問題で、身についた力を試しましょう。" reviewLabel="復習する・5ポイント" advancedLabel="上級問題・40ポイント" onReview={()=>setMessage('復習を開くリクエストです。ポイントは呼び出し元が処理します。')} onAdvanced={()=>setMessage('上級問題を開くリクエストです。ポイントは呼び出し元が処理します。')} disabled={state==='disabled'} busyAction={state==='busy'?'advanced':undefined} error={state==='error'?'問題を開けませんでした。もう一度お試しください。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<LessonLevelActionPanelPreview/>);
