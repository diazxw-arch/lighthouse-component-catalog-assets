import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {PronunciationReviewCard} from './PronunciationReviewCard';
import {pronunciationCopy} from './lecture-dialogue-demo-data';
import './lecture-dialogue-font.css';
import './lecture-dialogue-preview.css';
export function PronunciationReviewCardPreview(){const state=new URLSearchParams(location.search).get('state'),[bookmarked,setBookmarked]=useState(false),[examplePlaying,setExamplePlaying]=useState(false),[ownPlaying,setOwnPlaying]=useState(false),[message,setMessage]=useState(''),empty=state==='empty';return <main className="lh-lecture-dialogue-demo"><PronunciationReviewCard {...pronunciationCopy} phrase={empty?'':pronunciationCopy.phrase} meaning={empty?'':pronunciationCopy.meaning} completed={!empty} ownAudioAvailable={!empty&&state!=='no-recording'} bookmarked={bookmarked} onFlag={()=>setMessage('発音の内容を報告する画面を開くリクエストです。')} onBookmark={value=>{setBookmarked(value);setMessage('しおりの変更リクエストです。保存は呼び出し元が処理します。');}} onExampleAudio={()=>{setExamplePlaying(!examplePlaying);setMessage('お手本の音声リクエストです。音声は呼び出し元が提供します。');}} onOwnAudio={()=>{setOwnPlaying(!ownPlaying);setMessage('自分の声の音声リクエストです。録音は呼び出し元が提供します。');}} onRestart={()=>setMessage('発音をもう一度練習するリクエストです。')} examplePlaying={examplePlaying} ownPlaying={ownPlaying} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'音声を開けませんでした。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<PronunciationReviewCardPreview/>);
