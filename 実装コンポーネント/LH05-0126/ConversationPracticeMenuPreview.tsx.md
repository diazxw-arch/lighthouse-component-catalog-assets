import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ConversationPracticeMenu} from './ConversationPracticeMenu';
import {OriginalReferenceCrop} from './OriginalReferenceCrop';
import video from './grammar-practice-media/conversation-video.png';
import roleplay from './grammar-practice-media/conversation-roleplay.png';
import source from './grammar-practice-media/practice-original.webp';
import './grammar-practice-font.css';
import './grammar-practice-preview.css';
export function ConversationPracticeMenuPreview(){const state=new URLSearchParams(location.search).get('state'),[message,setMessage]=useState('');return <main className="lh-grammar-demo"><ConversationPracticeMenu heading="会話の練習" conversations={state==='empty'?[]:[{id:'video',label:'ビデオで会話',artworkSrc:video},{id:'roleplay',label:'場面を決めて会話',artworkSrc:roleplay}]} weaknessHeading="苦手なところを練習" mistakeLabel="間違えた問題" mistakeCount={state==='empty'?0:3} mistakeArtwork={<OriginalReferenceCrop source={source} crop={[891,2018,181,181]}/>} onConversation={id=>setMessage('会話の練習「'+id+'」を開くリクエストです。')} onMistakes={()=>setMessage('間違えた問題を開くリクエストです。')} disabled={state==='disabled'} busyId={state==='busy'?'video':undefined} error={state==='error'?'練習を開けませんでした。もう一度お試しください。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<ConversationPracticeMenuPreview/>);
