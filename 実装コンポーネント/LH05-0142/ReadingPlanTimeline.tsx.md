import {ReadingStartCard,type ReadingStartCopy} from './ReadingStartCard';
import {ReadingMilestoneCard} from './ReadingMilestoneCard';
import './reading-guide.css';
export type ReadingPlanMilestone={id:string;badge:string;dateLabel:string;dateTime?:string;description:string;chapter:string};
type Props={start:ReadingStartCopy;milestones:readonly ReadingPlanMilestone[];currentId:string;startId:string;continuation:string;emptyLabel:string};
export function ReadingPlanTimeline({start,milestones,currentId,startId,continuation,emptyLabel}:Props){return <section className="lh-reading-plan" aria-label="到達章をたどる読書計画"><ol><li data-kind="start" aria-current={currentId===startId?'step':undefined}><span className="lh-reading-plan__marker" aria-hidden="true"/><ReadingStartCard {...start}/></li>{milestones.map(milestone=><li key={milestone.id} aria-current={currentId===milestone.id?'step':undefined}><span className="lh-reading-plan__marker" aria-hidden="true"/><ReadingMilestoneCard {...milestone}/></li>)}</ol>{!milestones.length&&<p className="lh-reading-plan__empty" role="status">{emptyLabel}</p>}<p className="lh-reading-plan__continuation">{continuation}</p></section>;}
