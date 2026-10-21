import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {DailyReadingChallenge,type ReadingChallengeDay} from './DailyReadingChallenge';
import {dailyChallengeCopy} from './learning-challenge-demo-data';
import firstCover from './learning-challenge-media/challenge-cover-1.png';
import secondCover from './learning-challenge-media/challenge-cover-2.png';
import trophySrc from './learning-challenge-media/trophies.png';
import './learning-challenge-font.css';
import './learning-challenge-preview.css';
const days:readonly ReadingChallengeDay[]=[{id:'day-1',label:'1日目',title:'WHY WE SLEEP',coverSrc:firstCover,complete:true},{id:'day-2',label:'2日目',title:'WHAT THE MOST SUCCESSFUL PEOPLE DO BEFORE BREAKFAST',coverSrc:secondCover,complete:false}];
export function DailyReadingChallengePreview(){const state=new URLSearchParams(location.search).get('state'),[current,setCurrent]=useState('day-2'),[message,setMessage]=useState('');return <main className="lh-learning-challenge-demo"><DailyReadingChallenge {...dailyChallengeCopy} days={state==='empty'?[]:days} currentDayId={current} trophySrc={trophySrc} onDay={setCurrent} onRead={()=>setMessage('選んだ日の本を読むリクエストです。')} onListen={()=>setMessage('選んだ日の本を聞くリクエストです。')} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'本を開けませんでした。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<DailyReadingChallengePreview/>);
