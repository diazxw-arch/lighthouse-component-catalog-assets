import { Star } from 'lucide-react';
import type { ReactNode } from 'react';
import './learning-course.css';
export type RelatedLearningCourse={id:string;titleLines:readonly string[];artwork:ReactNode;kind:string;rating:string;disabled?:boolean};
type Props={heading:string;courses:readonly RelatedLearningCourse[];onOpen:(id:string)=>void;disabled?:boolean};
export function RelatedLearningCourses({heading,courses,onOpen,disabled=false}:Props){return <section className="lh-related-courses" aria-label={heading}><h2>{heading}</h2><ul>{courses.map(course=><li key={course.id}><button type="button" disabled={disabled||course.disabled} onClick={()=>onOpen(course.id)}><span className="lh-related-courses__art" aria-hidden="true">{course.artwork}</span><strong>{course.titleLines.map((line,index)=><span key={index}>{line}</span>)}</strong><span className="lh-related-courses__kind">{course.kind}</span><span className="lh-related-courses__rating"><Star aria-hidden="true"/>評価 {course.rating}</span></button></li>)}</ul>{!courses.length&&<p>関連する講座はありません。</p>}</section>;}
