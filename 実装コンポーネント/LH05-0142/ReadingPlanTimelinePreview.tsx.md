import {createRoot} from 'react-dom/client';
import {ReadingPlanTimeline} from './ReadingPlanTimeline';
import {readingStartCopy,readingMilestones} from './reading-guide-demo-data';
import portraitSrc from './reading-guide-media/facilitator.png';
import './reading-guide-font.css';
import './reading-guide-preview.css';
export function ReadingPlanTimelinePreview(){const state=new URLSearchParams(location.search).get('state');return <main className="lh-reading-guide-demo"><ReadingPlanTimeline start={{...readingStartCopy,portraitSrc}} milestones={state==='empty'?[]:readingMilestones} currentId="milestone-1" startId="milestone-1" continuation="次の節目へ続きます" emptyLabel="次の到達点はまだありません。"/></main>;}
createRoot(document.getElementById('root')!).render(<ReadingPlanTimelinePreview/>);
