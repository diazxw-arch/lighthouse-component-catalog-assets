import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {QuoteCollectionReader} from './QuoteCollectionReader';
import './reader-utility-font.css';
import './reader-utility-preview.css';
export function QuoteCollectionReaderPreview(){const state=new URLSearchParams(location.search).get('state'),[bookmarked,setBookmarked]=useState(false),[message,setMessage]=useState('');return <main className="lh-reader-utility-demo"><QuoteCollectionReader collectionLabel="すべてのことば" quoteLines={state==='empty'?[]:['起きることのすべてを','選ぶことはできなくても、','それに押しつぶされない','自分でいることは','選べるのです。']} author="マヤ・アンジェロウ" bookmarked={bookmarked} onBack={()=>setMessage('ことばの一覧に戻るリクエストです。')} onCollection={()=>setMessage('ことばの分類を開くリクエストです。')} onHelp={()=>setMessage('ことばのヘルプを開くリクエストです。')} onAdd={()=>setMessage('ことばを追加するリクエストです。')} onShare={()=>setMessage('ことばを共有するリクエストです。')} onBookmark={value=>{setBookmarked(value);setMessage('しおりを'+(value?'付ける':'外す')+'リクエストです。保存は呼び出し元が処理します。');}} disabled={state==='disabled'}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<QuoteCollectionReaderPreview/>);
