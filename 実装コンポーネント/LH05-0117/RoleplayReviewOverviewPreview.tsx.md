import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { RoleplayReviewOverview } from './RoleplayReviewOverview';
import type { LessonRating } from './LessonFeedbackButtons';
import partner from './exercise-media/purple-partner.png';
import './learning-exercise-font.css';
import './learning-exercise-preview.css';
export function RoleplayReviewOverviewPreview(){const state=new URLSearchParams(window.location.search).get('state'),disabled=state==='disabled';
const[rating,setRating]=useState<LessonRating>(),[message,setMessage]=useState('');return <main className="lh-learning-exercise-demo"><RoleplayReviewOverview titleLines={['会話練習を','振り返りましょう']} takeawayLines={['数えられない名詞の量を表すときは、','数量を表すことばを添えましょう。']} expression="数量を表すことば ＋ 名詞" example="一杯の水" partnerSrc={partner} partnerLines={['こんにちは。','鶏肉の料理はいかがですか？']} feedback={state==='empty'?undefined:{heading:'よくできました',reply:'はい、お願いします。',lines:['句読点を正しく使って、','お願いを明確に伝えられました。']}} rating={rating} onRate={value=>{setRating(value);setMessage('添削への評価「'+value+'」を送るリクエストです。');}} onVocabulary={line=>setMessage('文章「'+line+'」の語句を調べるリクエストです。')} onNext={()=>setMessage('次の会話練習に進むリクエストです。')} disabled={disabled}/><p role="status">{message}</p></main>;
}
createRoot(document.getElementById('root')!).render(<RoleplayReviewOverviewPreview/>);
