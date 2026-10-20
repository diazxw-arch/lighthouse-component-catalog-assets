import { createRoot } from 'react-dom/client';
import { StreakClubMilestones } from './StreakClubMilestones';

import './learning-exercise-font.css';
import './learning-exercise-preview.css';
export function StreakClubMilestonesPreview(){const state=new URLSearchParams(window.location.search).get('state');
return <main className="lh-learning-exercise-demo"><StreakClubMilestones milestones={state==='empty'?[]:[{days:1,achieved:true},{days:3,achieved:true},{days:5,achieved:false}]} clubLines={['7日間の連続学習で','学習クラブに参加できます。','限定の達成バッジを獲得しましょう。']} locked={true}/></main>;
}
createRoot(document.getElementById('root')!).render(<StreakClubMilestonesPreview/>);
