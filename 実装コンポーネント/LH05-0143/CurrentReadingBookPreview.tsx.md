import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {CurrentReadingBook} from './CurrentReadingBook';
import {currentReadingCopy} from './reading-guide-demo-data';
import coverSrc from './reading-guide-media/book-cover.png';
import './reading-guide-font.css';
import './reading-guide-preview.css';
export function CurrentReadingBookPreview(){const state=new URLSearchParams(location.search).get('state'),[message,setMessage]=useState('');return <main className="lh-reading-guide-demo"><CurrentReadingBook {...currentReadingCopy} coverSrc={coverSrc} bookId={state==='empty'?'':currentReadingCopy.bookId} onOpen={()=>setMessage('電子書籍を開くリクエストです。本の提供と移動は呼び出し元が行います。')} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'本を開けませんでした。もう一度お試しください。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<CurrentReadingBookPreview/>);
