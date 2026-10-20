import {createRoot} from 'react-dom/client';
import {ReadingStartCard} from './ReadingStartCard';
import {readingStartCopy} from './reading-guide-demo-data';
import portraitSrc from './reading-guide-media/facilitator.png';
import './reading-guide-font.css';
import './reading-guide-preview.css';
export function ReadingStartCardPreview(){return <main className="lh-reading-guide-demo"><ReadingStartCard {...readingStartCopy} portraitSrc={portraitSrc}/></main>;}
createRoot(document.getElementById('root')!).render(<ReadingStartCardPreview/>);
