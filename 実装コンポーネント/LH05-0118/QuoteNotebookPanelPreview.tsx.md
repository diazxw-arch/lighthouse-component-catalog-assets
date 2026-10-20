import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { QuoteNotebookPanel } from './QuoteNotebookPanel';

import './learning-exercise-font.css';
import './learning-exercise-preview.css';
export function QuoteNotebookPanelPreview(){const state=new URLSearchParams(window.location.search).get('state'),disabled=state==='disabled';
const[note,setNote]=useState(state==='empty'?'':'最初の章から'),[marked,setMarked]=useState(false),[message,setMessage]=useState('');return <main className="lh-learning-exercise-demo"><QuoteNotebookPanel title="読書からの抜粋" quoteLines={['「あの人たちは、特別に選ばれた','一人っ子でいたいのです。','そして私たちは、','その願いを断る役なのです。」']} editor={{note,onNoteChange:setNote,onAddTag:()=>setMessage('タグを追加するリクエストです。'),onTag:tag=>setMessage('タグ「'+tag+'」を開くリクエストです。'),error:state==='error'?'メモを保存できませんでした。':undefined}} marked={marked} onDelete={()=>setMessage('引用の削除リクエストです。削除は呼び出し元が処理します。')} onShare={()=>setMessage('引用を共有するリクエストです。')} onMark={value=>{setMarked(value);setMessage('引用の印を'+(value?'付ける':'外す')+'リクエストです。永続化は呼び出し元が処理します。');}} disabled={disabled}/><p role="status">{message}</p></main>;
}
createRoot(document.getElementById('root')!).render(<QuoteNotebookPanelPreview/>);
