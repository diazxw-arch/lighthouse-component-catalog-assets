import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ReaderContentsSheet,type ReaderContentsTab} from './ReaderContentsSheet';
import './reader-utility-font.css';
import './reader-utility-preview.css';
const labels=['マルセイユへの帰港','父と息子','カタルーニャ人たち','陰謀','婚礼の宴','検事代理','審問','イフ城','婚約の夕べ','王の書斎','コルシカの鬼','父と息子'];
export function ReaderContentsSheetPreview(){const state=new URLSearchParams(location.search).get('state'),[open,setOpen]=useState(state!=='closed'),[tab,setTab]=useState<ReaderContentsTab>('contents'),[chapter,setChapter]=useState('chapter-1'),[message,setMessage]=useState('');return <main className="lh-reader-utility-demo"><ReaderContentsSheet open={open} onOpenChange={value=>{setOpen(value);setMessage(value?'目次を開きました。':'目次を閉じました。');}} tab={tab} onTabChange={value=>{setTab(value);setMessage('本の分類「'+value+'」を表示するリクエストです。');}} chapters={state==='empty'?[]:labels.map((label,index)=>({id:'chapter-'+(index+1),label:'第'+(index+1)+'章　'+label}))} currentChapterId={chapter} onChapter={value=>{setChapter(value);setMessage('章「'+value+'」を開くリクエストです。本文は呼び出し元が提供します。');}} panels={{highlights:<p role="status">強調の内容は呼び出し元が提供します。</p>,notes:<p role="status">ノートの内容は呼び出し元が提供します。</p>,bookmarks:<p role="status">しおりの内容は呼び出し元が提供します。</p>}} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'目次を読み込めませんでした。':undefined} onRetry={()=>setMessage('目次を読み直すリクエストです。')}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<ReaderContentsSheetPreview/>);
