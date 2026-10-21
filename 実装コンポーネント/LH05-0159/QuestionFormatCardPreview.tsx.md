import {useState} from 'react';import {createRoot} from 'react-dom/client';
import {QuestionFormatCard} from './QuestionFormatCard';
import {questionFormatCopy,initialLearningSettings} from './study-settings-demo-data';
import './study-settings-font.css';import './study-settings-preview.css';
export function QuestionFormatCardPreview(){const state=new URLSearchParams(location.search).get('state'),[value,setValue]=useState(initialLearningSettings.formats);return <main className="lh-study-settings-demo"><QuestionFormatCard {...questionFormatCopy} value={value} onChange={setValue} disabled={state==='disabled'}/></main>;}
createRoot(document.getElementById('root')!).render(<QuestionFormatCardPreview/>);
