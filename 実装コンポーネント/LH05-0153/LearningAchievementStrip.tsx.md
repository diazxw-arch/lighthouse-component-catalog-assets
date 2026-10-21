import {AchievementBadgeArt,type AchievementArt} from './AchievementBadgeArt';
import './learning-progress.css';
export type LearningAchievement={id:string;label:string;art:AchievementArt};
type Props={heading:string;achievements:readonly LearningAchievement[];emptyLabel:string};
export function LearningAchievementStrip({heading,achievements,emptyLabel}:Props){return <section className="lh-achievement-strip" aria-label="学びの達成バッジの横並び"><h2>{heading}</h2>{achievements.length?<ol>{achievements.map((achievement,index)=><li key={achievement.id} style={{left:-88+index*184}}><AchievementBadgeArt {...achievement.art}/><p>{achievement.label}</p></li>)}</ol>:<p className="lh-achievement-strip__empty" role="status">{emptyLabel}</p>}</section>;}
