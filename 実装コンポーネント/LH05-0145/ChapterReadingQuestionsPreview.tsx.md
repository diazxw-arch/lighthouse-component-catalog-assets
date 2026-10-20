import {createRoot} from 'react-dom/client';
import {ChapterReadingQuestions} from './ChapterReadingQuestions';
import {chapterQuestions} from './reading-guide-demo-data';
import './reading-guide-font.css';
import './reading-guide-preview.css';
export function ChapterReadingQuestionsPreview(){const state=new URLSearchParams(location.search).get('state');return <main className="lh-reading-guide-demo"><ChapterReadingQuestions heading="読書の問い" questions={state==='empty'?[]:chapterQuestions} emptyLabel="読書の問いはまだありません。"/></main>;}
createRoot(document.getElementById('root')!).render(<ChapterReadingQuestionsPreview/>);
