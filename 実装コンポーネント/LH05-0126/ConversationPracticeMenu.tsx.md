import type {ReactNode} from 'react';
import './grammar-practice.css';
export type ConversationPractice={id:string;label:string;artworkSrc:string};
type Props={heading:string;conversations:readonly ConversationPractice[];weaknessHeading:string;mistakeLabel:string;mistakeCount:number;mistakeArtwork:ReactNode;onConversation:(id:string)=>void;onMistakes:()=>void;disabled?:boolean;busyId?:string;error?:string};
export function ConversationPracticeMenu({heading,conversations,weaknessHeading,mistakeLabel,mistakeCount,mistakeArtwork,onConversation,onMistakes,disabled=false,busyId,error}:Props){
 const count=Number.isFinite(mistakeCount)?Math.max(0,Math.floor(mistakeCount)):0,unavailable=disabled||!!busyId;
 return <section className="lh-conversation-practice" aria-label="会話と苦手分野の練習一覧">
  {error&&<p role="alert" className="lh-grammar-message">{error}</p>}<h2>{heading}</h2>
  {conversations.length?<ul>{conversations.map(item=><li key={item.id}><button type="button" disabled={unavailable} aria-busy={busyId===item.id||undefined} onClick={()=>onConversation(item.id)}><span>{busyId===item.id?'準備しています…':item.label}</span><img src={item.artworkSrc} alt=""/></button></li>)}</ul>:<p role="status" className="lh-grammar-message">会話の練習はまだありません。</p>}
  <h2 className="lh-conversation-practice__weakness">{weaknessHeading}</h2><div className="lh-conversation-practice__mistakes"><button type="button" disabled={unavailable||!count} aria-busy={busyId==='mistakes'||undefined} aria-label={`${mistakeLabel}（${count}問）`} onClick={onMistakes}><span>{busyId==='mistakes'?'準備しています…':mistakeLabel}</span><span className="lh-conversation-practice__orange" aria-hidden="true">{mistakeArtwork}</span></button>{count>0&&<span className="lh-conversation-practice__badge" aria-hidden="true">{count}</span>}</div>
  {!count&&<p role="status" className="lh-grammar-message">間違えた問題はありません。</p>}
 </section>;
}
