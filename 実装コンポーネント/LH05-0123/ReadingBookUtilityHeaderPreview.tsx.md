import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ReadingBookUtilityHeader} from './ReadingBookUtilityHeader';
import './reader-utility-font.css';
import './reader-utility-preview.css';
export function ReadingBookUtilityHeaderPreview(){const state=new URLSearchParams(location.search).get('state'),[message,setMessage]=useState(''),empty=state==='empty';return <main className="lh-reader-utility-demo"><ReadingBookUtilityHeader title={empty?'読む本を選んでください':'モンテ・クリスト伯'} status={empty?'本は選ばれていません':'ひとりで読書中'} onBack={()=>setMessage('本の一覧に戻るリクエストです。')} onDiscussion={()=>setMessage('本の会話を開くリクエストです。')} onTool={tool=>setMessage('読書の操作「'+tool+'」を開くリクエストです。')} disabled={state==='disabled'||empty}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<ReadingBookUtilityHeaderPreview/>);
