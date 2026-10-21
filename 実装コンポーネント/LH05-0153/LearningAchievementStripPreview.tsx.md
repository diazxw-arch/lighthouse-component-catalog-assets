import {createRoot} from 'react-dom/client';
import {LearningAchievementStrip} from './LearningAchievementStrip';
import {achievementCopy,learningAchievements} from './learning-progress-demo-data';
import './learning-progress-font.css';import './learning-progress-preview.css';
export function LearningAchievementStripPreview(){const state=new URLSearchParams(location.search).get('state');return <main className="lh-learning-progress-demo"><LearningAchievementStrip {...achievementCopy} achievements={state==='empty'?[]:learningAchievements}/></main>;}
createRoot(document.getElementById('root')!).render(<LearningAchievementStripPreview/>);
