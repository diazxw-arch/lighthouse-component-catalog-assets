import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {CourseLectureLibrary} from './CourseLectureLibrary';
import type {LectureMaterialTab} from './LectureMaterialTabs';
import {lectureLibraryCopy,courseLectures} from './lecture-dialogue-demo-data';
import './lecture-dialogue-font.css';
import './lecture-dialogue-preview.css';
export function CourseLectureLibraryPreview(){const state=new URLSearchParams(location.search).get('state'),[tab,setTab]=useState<LectureMaterialTab>('lectures'),[current,setCurrent]=useState('workspace'),[message,setMessage]=useState('');return <main className="lh-lecture-dialogue-demo"><CourseLectureLibrary {...lectureLibraryCopy} lectures={state==='empty'?[]:courseLectures} currentLectureId={current} tab={tab} onTabChange={setTab} panels={{downloads:<p role="status">保存した教材は呼び出し元が提供します。</p>,other:<p role="status">講義の追加情報は呼び出し元が提供します。</p>}} onLecture={id=>{setCurrent(id);setMessage('「'+courseLectures.find(x=>x.id===id)?.title+'」を開くリクエストです。');}} onDownload={request=>{let label='すべての教材';if(request.kind==='chapter')label='この章の教材';if(request.kind==='lecture')label=courseLectures.find(x=>x.id===request.id)?.title??'講義の教材';setMessage('「'+label+'」を保存するリクエストです。保存処理は呼び出し元が提供します。');}} disabled={state==='disabled'} busyDownloadId={state==='busy'?'workspace':undefined} error={state==='error'?'教材を保存できませんでした。もう一度お試しください。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<CourseLectureLibraryPreview/>);
