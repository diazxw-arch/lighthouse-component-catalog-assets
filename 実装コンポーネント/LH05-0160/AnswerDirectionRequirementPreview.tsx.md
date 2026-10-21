import {useState} from 'react';import {createRoot} from 'react-dom/client';
import {AnswerDirectionRequirement} from './AnswerDirectionRequirement';
import {initialLearningSettings,minimumAnswerCopy} from './study-settings-demo-data';
import './study-settings-font.css';import './study-settings-preview.css';
export function AnswerDirectionRequirementPreview(){const state=new URLSearchParams(location.search).get('state'),[value,setValue]=useState(initialLearningSettings.direction),[open,setOpen]=useState(state!=='plain');return <main className="lh-study-settings-demo"><AnswerDirectionRequirement {...minimumAnswerCopy} heading="何を答えるか" cardHeading="何を答えるか" value={value} open={open} onChange={setValue} onOpenChange={setOpen} disabled={state==='disabled'} error={state==='error'?'設定を保存できませんでした。':undefined}/></main>;}
createRoot(document.getElementById('root')!).render(<AnswerDirectionRequirementPreview/>);
