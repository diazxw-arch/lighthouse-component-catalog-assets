import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {FinalListeningExercise} from './FinalListeningExercise';
import {finalListeningCopy,listeningAnswers} from './lecture-dialogue-demo-data';
import avatar from './lecture-dialogue-media/listening-avatar.png';
import './lecture-dialogue-font.css';
import './lecture-dialogue-preview.css';
export function FinalListeningExercisePreview(){const state=new URLSearchParams(location.search).get('state'),[selected,setSelected]=useState<string|undefined>(state==='unanswered'||state==='empty'?undefined:'morning'),[message,setMessage]=useState('');let answers=listeningAnswers;if(state==='empty')answers=[];if(state==='unanswered')answers=listeningAnswers.map(answer=>({...answer,disabled:false}));return <main className="lh-lecture-dialogue-demo"><FinalListeningExercise {...finalListeningCopy} avatarSrc={avatar} answers={answers} selectedId={selected} correctId={state==='unanswered'?undefined:'morning'} onAnswer={id=>{setSelected(id);setMessage('答えの選択リクエストです。判定は呼び出し元が提供します。');}} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'答えを確認できませんでした。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<FinalListeningExercisePreview/>);
