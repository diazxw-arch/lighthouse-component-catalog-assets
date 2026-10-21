import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {VocabularyRetentionGuide} from './VocabularyRetentionGuide';
import {retentionCopy} from './vocabulary-practice-demo-data';
import './vocabulary-practice-font.css';
import './vocabulary-practice-preview.css';
export function VocabularyRetentionGuidePreview(){const state=new URLSearchParams(location.search).get('state'),[page,setPage]=useState('fourth'),[message,setMessage]=useState('');return <main className="lh-vocabulary-practice-demo"><VocabularyRetentionGuide {...retentionCopy} counts={state==='empty'?[]:retentionCopy.counts} currentPageId={page} onPage={id=>{setPage(id);setMessage('説明のページを切り替えるリクエストです。内容は呼び出し元が提供します。');}} onClose={()=>setMessage('定着の説明を閉じるリクエストです。')} disabled={state==='disabled'}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<VocabularyRetentionGuidePreview/>);
