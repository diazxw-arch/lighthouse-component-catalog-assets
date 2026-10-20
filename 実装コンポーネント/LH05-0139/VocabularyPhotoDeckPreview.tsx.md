import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {VocabularyPhotoDeck} from './VocabularyPhotoDeck';
import {vocabularyDeckCopy} from './vocabulary-practice-demo-data';
import photoSrc from './vocabulary-practice-media/vocabulary-ice-cream.png';
import handSource from './vocabulary-practice-media/vocabulary-photo-original.webp';
import './vocabulary-practice-font.css';
import './vocabulary-practice-preview.css';
export function VocabularyPhotoDeckPreview(){const state=new URLSearchParams(location.search).get('state'),[recording,setRecording]=useState(false),[hand,setHand]=useState(true),[message,setMessage]=useState('');return <main className="lh-vocabulary-practice-demo"><VocabularyPhotoDeck {...vocabularyDeckCopy} word={state==='empty'?'':vocabularyDeckCopy.word} photoSrc={photoSrc} handSource={handSource} showHand={hand} recording={recording} onBack={()=>setMessage('単語の一覧へ戻るリクエストです。')} onDetails={()=>{setHand(false);setMessage('単語の詳しい説明を開くリクエストです。');}} onAudio={()=>setMessage('単語の音声を再生するリクエストです。')} onStart={()=>{setRecording(true);setMessage('録音開始のリクエストです。音声の取得は呼び出し元が提供します。');}} onStop={()=>{setRecording(false);setMessage('録音停止のリクエストです。');}} onCancel={()=>{setRecording(false);setMessage('録音取消のリクエストです。');}} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'録音を始められませんでした。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<VocabularyPhotoDeckPreview/>);
