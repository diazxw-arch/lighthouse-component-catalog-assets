import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {UnitRewindCard} from './UnitRewindCard';
import artwork from './reader-utility-media/unit-rewind-character.png';
import './reader-utility-font.css';
import './reader-utility-preview.css';
export function UnitRewindCardPreview(){const state=new URLSearchParams(location.search).get('state'),[message,setMessage]=useState('');return <main className="lh-reader-utility-demo"><UnitRewindCard heading="単元をもう一度" descriptionLines={['第8単元を振り返り、','学んだことを覚えておきましょう。']} actionLabel="始める・20ポイント" artworkSrc={artwork} onStart={()=>setMessage('第8単元の復習を始めるリクエストです。ポイントは呼び出し元が処理します。')} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'復習を開始できませんでした。もう一度お試しください。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<UnitRewindCardPreview/>);
