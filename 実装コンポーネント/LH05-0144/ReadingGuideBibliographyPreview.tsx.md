import {createRoot} from 'react-dom/client';
import {ReadingGuideBibliography} from './ReadingGuideBibliography';
import {bibliographyCopy} from './reading-guide-demo-data';
import illustrationSrc from './reading-guide-media/guide-illustration.png';
import './reading-guide-font.css';
import './reading-guide-preview.css';
export function ReadingGuideBibliographyPreview(){return <main className="lh-reading-guide-demo"><ReadingGuideBibliography {...bibliographyCopy} illustrationSrc={illustrationSrc}/></main>;}
createRoot(document.getElementById('root')!).render(<ReadingGuideBibliographyPreview/>);
