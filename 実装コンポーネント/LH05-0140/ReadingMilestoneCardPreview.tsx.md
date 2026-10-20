import {createRoot} from 'react-dom/client';
import {ReadingMilestoneCard} from './ReadingMilestoneCard';
import {milestoneCopy} from './vocabulary-practice-demo-data';
import './vocabulary-practice-font.css';
import './vocabulary-practice-preview.css';
export function ReadingMilestoneCardPreview(){return <main className="lh-vocabulary-practice-demo"><ReadingMilestoneCard {...milestoneCopy}/></main>;}
createRoot(document.getElementById('root')!).render(<ReadingMilestoneCardPreview/>);
