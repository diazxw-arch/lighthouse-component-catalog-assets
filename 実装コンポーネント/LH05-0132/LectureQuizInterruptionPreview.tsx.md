import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {LectureQuizInterruption} from './LectureQuizInterruption';
import type {LectureMaterialTab} from './LectureMaterialTabs';
import {lectureQuizCopy} from './lecture-dialogue-demo-data';
import instructor from './lecture-dialogue-media/lecture-instructor-frame.png';
import './lecture-dialogue-font.css';
import './lecture-dialogue-preview.css';
export function LectureQuizInterruptionPreview(){const state=new URLSearchParams(location.search).get('state'),[tab,setTab]=useState<LectureMaterialTab>('lectures'),[message,setMessage]=useState('');return <main className="lh-lecture-dialogue-demo"><LectureQuizInterruption {...lectureQuizCopy} instructorFrameSrc={instructor} tab={tab} onTabChange={setTab} panels={{downloads:<p role="status">保存した教材は呼び出し元が提供します。</p>,other:<p role="status">講義の追加情報は呼び出し元が提供します。</p>}} onMinimize={()=>setMessage('講義を小さくするリクエストです。')} onOpenQuiz={()=>setMessage('確認問題を開くリクエストです。')} onSkip={()=>setMessage('次の講義へ進むリクエストです。')} onDownload={()=>setMessage('講義の教材を保存するリクエストです。')} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'確認問題を開けませんでした。もう一度お試しください。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<LectureQuizInterruptionPreview/>);
