import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {RatioNumberEntry} from './RatioNumberEntry';
import {ratioEntryCopy} from './learning-challenge-demo-data';
import './learning-challenge-font.css';
import './learning-challenge-preview.css';
export function RatioNumberEntryPreview(){const state=new URLSearchParams(location.search).get('state'),[value,setValue]=useState(state==='empty'?'':'3：3'),[message,setMessage]=useState('');return <main className="lh-learning-challenge-demo"><RatioNumberEntry {...ratioEntryCopy} value={value} onValueChange={setValue} onCheck={()=>setMessage('答えを確認するリクエストです。判定は呼び出し元が提供します。')} onHint={()=>setMessage('比率のヒントを開くリクエストです。')} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'答えを確認できませんでした。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<RatioNumberEntryPreview/>);
