import {StudyToggleRow} from './StudyToggleRow';
import './study-settings.css';
export type QuestionFormatValue={flashcards:boolean;multipleChoice:boolean;written:boolean};
type Props={heading:string;value:QuestionFormatValue;onChange:(value:QuestionFormatValue)=>void;disabled?:boolean};
export function QuestionFormatCard({heading,value,onChange,disabled=false}:Props){return <section className="lh-question-format" aria-label="暗記と選択と記述の出題形式"><div className="lh-study-settings-card"><h3>{heading}</h3><div className="lh-study-settings-card__rows"><StudyToggleRow label="暗記カード" checked={value.flashcards} onChange={checked=>onChange({...value,flashcards:checked})} disabled={disabled}/><StudyToggleRow label="選択問題" checked={value.multipleChoice} onChange={checked=>onChange({...value,multipleChoice:checked})} disabled={disabled}/><StudyToggleRow label="記述問題" checked={value.written} onChange={checked=>onChange({...value,written:checked})} disabled={disabled}/></div></div></section>;}
