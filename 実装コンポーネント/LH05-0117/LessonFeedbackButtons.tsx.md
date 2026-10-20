import './reading-study.css';
export type LessonRating='negative'|'positive';
export interface LessonFeedbackButtonsProps { rating?:LessonRating; onRate:(rating:LessonRating)=>void; disabled?:boolean }
export function LessonFeedbackButtons({rating,onRate,disabled}:LessonFeedbackButtonsProps) {
  return <div className="lh-lesson-feedback" role="group" aria-label="添削への評価">{(['negative','positive'] as const).map(value=><button type="button" key={value} aria-label={value==='negative'?'役に立たなかった':'役に立った'} aria-pressed={rating===value} disabled={disabled} onClick={()=>onRate(value)}><svg viewBox="0 0 28 28" aria-hidden="true" style={value==='negative'?{transform:'rotate(180deg)'}:undefined}><path d="M6 13h4l5-9c2-2 4 0 3 4l-1 5h5c2 0 3 1 2 4l-2 7H10l-4-2V13Z"/><rect x="2" y="13" width="4" height="11" rx="1"/></svg></button>)}</div>;
}
