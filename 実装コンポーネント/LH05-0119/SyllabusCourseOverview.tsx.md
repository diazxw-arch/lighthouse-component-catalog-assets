import type { ComponentProps } from 'react';
import { RelatedLearningCourses } from './RelatedLearningCourses';
import { SyllabusChapterList } from './SyllabusChapterList';
import './learning-exercise.css';
type Props={related:ComponentProps<typeof RelatedLearningCourses>;chapters:ComponentProps<typeof SyllabusChapterList>;heading:string;startDate:string;onEnrollment:()=>void;disabled?:boolean};
export function SyllabusCourseOverview({related,chapters,heading,startDate,onEnrollment,disabled=false}:Props){return <section className="lh-syllabus-overview" aria-label="シラバスから講座を選ぶ"><RelatedLearningCourses {...related} disabled={disabled||related.disabled}/><h2>{heading}</h2><SyllabusChapterList {...chapters} disabled={disabled||chapters.disabled}/><footer><button type="button" disabled={disabled} onClick={onEnrollment}>受講方法を見る</button><p>{startDate}</p></footer></section>;}
