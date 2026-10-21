import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {LetterSoundRecording} from './LetterSoundRecording';
import illustrationSrc from './vocabulary-practice-media/letter-mouse.png';
import './vocabulary-practice-font.css';
import './vocabulary-practice-preview.css';
export function LetterSoundRecordingPreview(){const state=new URLSearchParams(location.search).get('state'),[recording,setRecording]=useState(false),[message,setMessage]=useState('');const end=(cancel:boolean)=>{setRecording(false);setMessage(cancel?'録音を取り消すリクエストです。':'録音を停止するリクエストです。');};return <main className="lh-vocabulary-practice-demo"><LetterSoundRecording letter={state==='empty'?'':'ね'} illustrationSrc={illustrationSrc} illustrationLabel="ねずみの挿絵" progress={168/316} recording={recording} onClose={()=>setMessage('文字の練習を閉じるリクエストです。')} onStart={()=>{setRecording(true);setMessage('録音を始めるリクエストです。音声の取得は呼び出し元が提供します。');}} onStop={()=>end(false)} onCancel={()=>end(true)} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'録音を始められませんでした。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<LetterSoundRecordingPreview/>);
