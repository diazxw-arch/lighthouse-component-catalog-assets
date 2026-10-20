import {OpenBookGlyph} from './VocabularyPracticeGlyph';
import './vocabulary-practice.css';
type Props={badge:string;dateLabel:string;dateTime?:string;description:string;chapter:string};
/** Authored informational card; no invented button or navigation behavior. */
export function ReadingMilestoneCard({badge,dateLabel,dateTime,description,chapter}:Props){return <section className="lh-reading-milestone" aria-label="日付と到達章を示す読書の節目"><article><p className="lh-reading-milestone__badge"><OpenBookGlyph/><span>{badge}</span></p><div className="lh-reading-milestone__row"><time dateTime={dateTime}>{dateLabel}</time><div><p>{description}</p><h2>{chapter}</h2></div></div></article></section>;}
