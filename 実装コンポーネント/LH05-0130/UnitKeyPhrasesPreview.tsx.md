import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {UnitKeyPhrases} from './UnitKeyPhrases';
import {keyPhraseCopy,keyPhrases} from './grammar-practice-demo-data';
import campfire from './grammar-practice-media/keyphrases-campfire.png';
import './grammar-practice-font.css';
import './grammar-practice-preview.css';
export function UnitKeyPhrasesPreview(){const state=new URLSearchParams(location.search).get('state'),[playingId,setPlayingId]=useState<string>(),[message,setMessage]=useState('');return <main className="lh-grammar-demo"><UnitKeyPhrases {...keyPhraseCopy} artworkSrc={campfire} phrases={state==='empty'?[]:keyPhrases} onClose={()=>setMessage('重要な表現を閉じるリクエストです。')} onVocabulary={id=>setMessage('ことば「'+id+'」の説明を開くリクエストです。')} onAudio={(id,play)=>{setPlayingId(play?id:undefined);setMessage('音声「'+id+'」の'+(play?'再生':'停止')+'リクエストです。音声は呼び出し元が提供します。');}} playingId={playingId} busyId={state==='busy'?'restaurant':undefined} disabled={state==='disabled'} error={state==='error'?'音声を準備できませんでした。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<UnitKeyPhrasesPreview/>);
