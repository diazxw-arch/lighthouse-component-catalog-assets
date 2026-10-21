import { useId,type ComponentProps,type ReactNode } from 'react';
import { ReadingReflectionTabs,type ReadingReflectionTab } from './ReadingReflectionTabs';
import { ScriptureReflection } from './ScriptureReflection';
import './learning-exercise.css';
import './first30-catalog-narrow.css';
type Reflection=ComponentProps<typeof ScriptureReflection>;
type Props={tab:ReadingReflectionTab;commentCount:number;onTabChange:(tab:ReadingReflectionTab)=>void;reflections:readonly Reflection[];comments:ReactNode;disabled?:boolean};
export function PairedReadingReflections({tab,commentCount,onTabChange,reflections,comments,disabled=false}:Props){const id=useId(),valid=Number.isInteger(commentCount)&&commentCount>=0;return <section className="lh-paired-reflections" aria-label="二つのことばを読む振り返り">{valid?<ReadingReflectionTabs value={tab} commentCount={commentCount} onChange={onTabChange} panelIds={{reflection:id+'-reflection',comments:id+'-comments'}} disabled={disabled}/>:<p role="status" className="lh-exercise-message">コメント数を確認できません。</p>}<div id={id+'-reflection'} role="tabpanel" aria-label="振り返り" hidden={tab!=='reflection'}>{reflections.map((item,i)=><ScriptureReflection key={i} {...item} disabled={disabled||item.disabled}/>)}</div><div id={id+'-comments'} role="tabpanel" aria-label="コメント" hidden={tab!=='comments'}>{comments}</div>{reflections.length===0&&tab==='reflection'&&<p role="status" className="lh-exercise-message">振り返りはまだありません。</p>}</section>;}
