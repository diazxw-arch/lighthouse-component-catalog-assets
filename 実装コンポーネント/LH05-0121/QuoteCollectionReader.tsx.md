import {ReaderChromeGlyph} from './ReaderChromeGlyph';
import './reader-utility.css';
type Props={collectionLabel:string;quoteLines:readonly string[];author:string;bookmarked:boolean;onBack:()=>void;onCollection:()=>void;onHelp:()=>void;onAdd:()=>void;onShare:()=>void;onBookmark:(bookmarked:boolean)=>void;disabled?:boolean};
export function QuoteCollectionReader({collectionLabel,quoteLines,author,bookmarked,onBack,onCollection,onHelp,onAdd,onShare,onBookmark,disabled=false}:Props){
 return <section className="lh-quote-collection" aria-label="ことばを読んでしおりに残す">
  <header><button type="button" className="lh-quote-collection__back" aria-label="ことばの一覧に戻る" onClick={onBack}><ReaderChromeGlyph kind="back"/></button><button type="button" className="lh-quote-collection__collection" onClick={onCollection} disabled={disabled}>{collectionLabel}<ReaderChromeGlyph kind="down"/></button><button type="button" className="lh-quote-collection__help" aria-label="ことばのヘルプ" onClick={onHelp}><ReaderChromeGlyph kind="help"/></button><button type="button" className="lh-quote-collection__add" aria-label="ことばを追加する" onClick={onAdd} disabled={disabled}><ReaderChromeGlyph kind="plus"/></button></header>
  <article className="lh-quote-collection__card">{quoteLines.length?<><span className="lh-quote-collection__mark" aria-hidden="true">“</span><blockquote>{quoteLines.map((line,index)=><span key={index}>{line}</span>)}</blockquote><p>{author}</p></>:<p className="lh-quote-collection__empty" role="status">表示することばはまだありません。</p>}</article>
  <footer><button type="button" aria-label="ことばを共有する" disabled={disabled||!quoteLines.length} onClick={onShare}><ReaderChromeGlyph kind="share-arrow"/></button><button type="button" aria-label="ことばをしおりに残す" aria-pressed={bookmarked} disabled={disabled||!quoteLines.length} onClick={()=>onBookmark(!bookmarked)}><ReaderChromeGlyph kind="bookmark"/></button></footer>
 </section>;
}
