import {CourseMasteryReview} from './CourseMasteryReview';
import type {ComponentProps} from 'react';
import {ReviewSpeakerGlyph} from './ReviewSpeakerGlyph';
import './review-practice.css';
type Props={heading:string;description:string;mastery:ComponentProps<typeof CourseMasteryReview>;listeningTitle:string;listeningDescription:string;onListening:()=>void;disabled?:boolean;busy?:boolean};
export function MasteryReviewOverview({heading,description,mastery,listeningTitle,listeningDescription,onListening,disabled=false,busy=false}:Props){return <section className="lh-mastery-overview" aria-label="習得した内容から復習を選ぶ"><h2>{heading}</h2><p>{description}</p><CourseMasteryReview {...mastery} disabled={disabled||mastery.disabled} busy={busy||mastery.busy}/><button type="button" className="lh-mastery-overview__listening" onClick={onListening} disabled={disabled||busy} aria-busy={busy||undefined}><ReviewSpeakerGlyph/><strong>{listeningTitle}</strong><span>{listeningDescription}</span></button></section>;}
