import {useState} from 'react';import {createRoot} from 'react-dom/client';
import {QuizSetup} from './QuizSetup';
import {quizSetupCopy,initialQuizValue} from './learning-progress-demo-data';
import './learning-progress-font.css';import './learning-progress-preview.css';
export function QuizSetupPreview(){const state=new URLSearchParams(location.search).get('state'),[value,setValue]=useState(initialQuizValue),[message,setMessage]=useState('');return <main className="lh-learning-progress-demo"><QuizSetup {...quizSetupCopy} counts={state==='empty'?[]:quizSetupCopy.counts} value={value} onChange={setValue} onStart={()=>setMessage('この設定でテストを始めるリクエストです。出題と判定は呼び出し元が提供します。')} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'テストを準備できませんでした。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<QuizSetupPreview/>);
