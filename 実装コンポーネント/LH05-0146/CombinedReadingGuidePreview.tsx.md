import {createRoot} from 'react-dom/client';
import {CombinedReadingGuide} from './CombinedReadingGuide';
import {bibliographyCopy,chapterQuestions} from './reading-guide-demo-data';
import illustrationSrc from './reading-guide-media/guide-illustration.png';
import './learning-challenge-font.css';
import './learning-challenge-preview.css';
export function CombinedReadingGuidePreview(){const state=new URLSearchParams(location.search).get('state');return <main className="lh-learning-challenge-demo"><CombinedReadingGuide {...bibliographyCopy} illustrationSrc={illustrationSrc} heading="読書の問い" questions={state==='empty'?[]:chapterQuestions} emptyLabel="読書の問いはまだありません。"/></main>;}
createRoot(document.getElementById('root')!).render(<CombinedReadingGuidePreview/>);
