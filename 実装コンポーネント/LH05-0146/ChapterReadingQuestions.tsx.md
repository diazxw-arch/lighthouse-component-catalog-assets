import './reading-guide.css';
export type ChapterQuestion={id:string;chapter:string;question:string};
type Props={heading:string;questions:readonly ChapterQuestion[];emptyLabel:string};
export function ChapterReadingQuestions({heading,questions,emptyLabel}:Props){return <section className="lh-chapter-questions" aria-label="章ごとの読書の問い"><h2>{heading}</h2>{questions.length?<ol>{questions.map(question=><li key={question.id}><h3>{question.chapter}</h3><p>{question.question}</p></li>)}</ol>:<p role="status">{emptyLabel}</p>}</section>;}
