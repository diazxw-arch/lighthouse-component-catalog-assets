import {useState} from 'react';import {createRoot} from 'react-dom/client';
import {AnswerGradingSettings} from './AnswerGradingSettings';
import {gradingChoices,gradingCopy} from './study-settings-demo-data';
import './study-settings-font.css';import './study-settings-preview.css';
export function AnswerGradingSettingsPreview(){const state=new URLSearchParams(location.search).get('state'),[selected,setSelected]=useState('exact'),[rewrite,setRewrite]=useState(false),[message,setMessage]=useState('');return <main className="lh-study-settings-demo"><AnswerGradingSettings {...gradingCopy} choices={state==='empty'?[]:gradingChoices} selectedId={selected} rewrite={rewrite} canRewrite={state==='written'} onSelect={setSelected} onRewrite={setRewrite} onWritingMode={()=>setMessage('記述モードを開くリクエストです。採点は呼び出し元が行います。')} disabled={state==='disabled'} error={state==='error'?'判定方法を保存できませんでした。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<AnswerGradingSettingsPreview/>);
