import {ReadingGuideBibliography,type BibliographyRow} from './ReadingGuideBibliography';
import {ChapterReadingQuestions,type ChapterQuestion} from './ChapterReadingQuestions';
import './learning-challenge.css';
type Props={category:string;titleLines:readonly string[];illustrationSrc:string;illustrationLabel:string;rows:readonly BibliographyRow[];heading:string;questions:readonly ChapterQuestion[];emptyLabel:string};
export function CombinedReadingGuide({heading,questions,emptyLabel,...bibliography}:Props){return <section className="lh-combined-reading" aria-label="書誌と問いを並べた読書ガイド"><ReadingGuideBibliography {...bibliography}/><ChapterReadingQuestions heading={heading} questions={questions} emptyLabel={emptyLabel}/></section>;}
