import {useRef,useState} from 'react';import {createRoot} from 'react-dom/client';
import {AnswerDirectionCard} from './AnswerDirectionCard';
import {MinimumAnswerNotice} from './MinimumAnswerNotice';
import {answerDirectionCopy,initialLearningSettings,minimumAnswerCopy} from './study-settings-demo-data';
import './study-settings-font.css';import './study-settings-preview.css';
export function AnswerDirectionCardPreview(){const state=new URLSearchParams(location.search).get('state'),[value,setValue]=useState(initialLearningSettings.direction),[container,setContainer]=useState<HTMLElement|null>(null),[open,setOpen]=useState(false),target=useRef<HTMLElement|null>(null);return <main className="lh-study-settings-demo"><div ref={setContainer} className="lh-study-settings-demo-frame lh-study-settings-demo-frame--direction"><AnswerDirectionCard {...answerDirectionCopy} value={value} onChange={setValue} onInvalid={trigger=>{target.current=trigger;setOpen(true);}} disabled={state==='disabled'}/><MinimumAnswerNotice open={open} container={container} returnFocus={target.current} title={minimumAnswerCopy.noticeTitle} descriptionLines={minimumAnswerCopy.noticeLines} actionLabel={minimumAnswerCopy.noticeAction} onDismiss={()=>setOpen(false)}/></div></main>;}
createRoot(document.getElementById('root')!).render(<AnswerDirectionCardPreview/>);
