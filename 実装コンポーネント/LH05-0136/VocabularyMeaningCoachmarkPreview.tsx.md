import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {VocabularyMeaningCoachmark} from './VocabularyMeaningCoachmark';
import {meaningCopy,meaningChoices} from './vocabulary-practice-demo-data';
import characterSrc from './vocabulary-practice-media/meaning-character.png';
import './vocabulary-practice-font.css';
import './vocabulary-practice-preview.css';
export function VocabularyMeaningCoachmarkPreview(){const state=new URLSearchParams(location.search).get('state'),[open,setOpen]=useState(state!=='plain'),[selected,setSelected]=useState<string[]>([]),[message,setMessage]=useState('');return <main className="lh-vocabulary-practice-demo"><VocabularyMeaningCoachmark {...meaningCopy} characterSrc={characterSrc} choices={state==='empty'?[]:meaningChoices} selectedIds={selected} coachmarkOpen={open} onDismissCoachmark={()=>setOpen(false)} onClose={()=>setMessage('練習を閉じるリクエストです。')} onEnergy={()=>setMessage('学習のエネルギーを開くリクエストです。')} onAudio={()=>setMessage('文の音声を再生するリクエストです。')} onVocabulary={()=>setMessage('ことばの意味を開くリクエストです。')} onChoose={id=>setSelected(previous=>[...previous,id])} onRemove={id=>setSelected(previous=>previous.filter(item=>item!==id))} onCheck={()=>setMessage('答えを確認するリクエストです。判定は呼び出し元が提供します。')} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'答えを確認できませんでした。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<VocabularyMeaningCoachmarkPreview/>);
