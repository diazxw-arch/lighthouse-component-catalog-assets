import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { PairedReadingReflections } from './PairedReadingReflections';
import type { ReadingReflectionTab } from './ReadingReflectionTabs';
import './learning-exercise-font.css';
import './learning-exercise-preview.css';
export function PairedReadingReflectionsPreview(){const state=new URLSearchParams(window.location.search).get('state'),disabled=state==='disabled';
const[tab,setTab]=useState<ReadingReflectionTab>('reflection'),[message,setMessage]=useState('');return <main className="lh-learning-exercise-demo"><PairedReadingReflections tab={tab} commentCount={state==='invalid'?NaN:12} onTabChange={value=>{setTab(value);setMessage(value==='comments'?'コメントを表示するリクエストです。':'振り返りを表示しています。');}} reflections={state==='empty'?[]:[{heading:'キリスト教',scripture:['「主を待ち望む者は新たな力を受け、','鷲のように翼を広げて上る。','走っても疲れず、歩いても弱らない。」'],attribution:'聖書・イザヤ書40章31節',reflection:['信頼することは、私たちの力を新たにし、','自分で決めた限界を越える助けになります。','小さな思い込みを手放し、今日の自分に','できる一歩を静かに考えてみましょう。'],onMore:()=>setMessage('キリスト教の振り返りの操作を開くリクエストです。')},{heading:'仏教',scripture:['「何もせず怠って百年を生きるより、','力を尽くして一日を生きる方がよい。」'],attribution:'法句経',reflection:['一日をどのように使うかを考えることは、','日々に意味を与えてくれます。','今日できる小さな一歩を、','落ち着いて選んでみましょう。'],onMore:()=>setMessage('仏教の振り返りの操作を開くリクエストです。')}]} comments={<p role="status">コメントの内容は呼び出し元が提供します。</p>} disabled={disabled}/><p role="status">{message}</p></main>;
}
createRoot(document.getElementById('root')!).render(<PairedReadingReflectionsPreview/>);
