import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {GreetingDialoguePractice} from './GreetingDialoguePractice';
import {greetingCopy} from './lecture-dialogue-demo-data';
import './lecture-dialogue-font.css';
import './lecture-dialogue-preview.css';
export function GreetingDialoguePracticePreview(){const state=new URLSearchParams(location.search).get('state'),[hidden,setHidden]=useState<string[]>([]),[message,setMessage]=useState(''),empty=state==='empty';return <main className="lh-lecture-dialogue-demo"><GreetingDialoguePractice {...greetingCopy} firstPartner={empty?undefined:greetingCopy.firstPartner} nextPartner={empty?undefined:greetingCopy.nextPartner} response={empty?{...greetingCopy.response,text:'',successful:false}:greetingCopy.response} hiddenMessageIds={hidden} onVisibility={(id,value)=>{setHidden(previous=>value?[...new Set([...previous,id])]:previous.filter(item=>item!==id));setMessage(value?'発言を非表示にしました。':'発言を表示しました。');}} onClose={()=>setMessage('対話の練習を閉じるリクエストです。')} onSettings={()=>setMessage('対話の設定を開くリクエストです。')} onAudio={()=>setMessage('発言の音声を開くリクエストです。音声は呼び出し元が提供します。')} onTranslate={()=>setMessage('発言の訳を開くリクエストです。')} onRetry={()=>setMessage('自分の返答をもう一度練習するリクエストです。')} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'対話を準備できませんでした。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<GreetingDialoguePracticePreview/>);
