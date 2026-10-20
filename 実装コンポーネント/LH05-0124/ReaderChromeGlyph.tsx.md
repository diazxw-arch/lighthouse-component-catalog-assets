import { ReadingAnnotationGlyph } from './ReadingAnnotationGlyph';

export type ReaderChromeGlyphKind='back'|'chevron-left'|'down'|'help'|'plus'|'share-arrow'|'bookmark'|'chat'|'list'|'highlight'|'note'|'tab'|'repeat';
export function ReaderChromeGlyph({kind}:{kind:ReaderChromeGlyphKind}){
 if(kind==='back')return <ReadingAnnotationGlyph kind="previous"/>;
 return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  {kind==='chevron-left'&&<path d="m15 4-8 8 8 8"/>}
  {kind==='down'&&<path d="m5 8 7 7 7-7"/>}
  {kind==='help'&&<><circle cx="12" cy="12" r="10"/><path d="M9 8a3 3 0 0 1 6 0c0 2-3 2-3 5m0 4h.01"/></>}
  {kind==='plus'&&<path d="M12 2v20M2 12h20"/>}
  {kind==='share-arrow'&&<path d="M12 17V2M5 9l7-7 7 7M4 22h16"/>}
  {kind==='bookmark'&&<path d="M5 2h14v20l-7-5-7 5Z"/>}
  {kind==='chat'&&<><path d="M3 3h14v12H3Z"/><path d="M7 18h11l3 3V7h-1"/></>}
  {kind==='list'&&<><g fill="currentColor" stroke="none"><circle cx="4" cy="6" r="1.2"/><circle cx="4" cy="12" r="1.2"/><circle cx="4" cy="18" r="1.2"/></g><path d="M9 6h12M9 12h12M9 18h12"/></>}
  {kind==='highlight'&&<><path d="m6 14 10-10 5 5-10 10-5-5Zm8-8 5 5M5 15l4 4-4 3-3-3Z"/><path d="m3 20 2 2"/></>}
  {kind==='note'&&<path d="M3 3h18v12l-6 6H3Zm12 18v-6h6"/>}
  {kind==='tab'&&<path d="m3 12 6-8h13v16H9Z"/>}
  {kind==='repeat'&&<><path d="M4 10a8 8 0 0 1 13-6l3 3M15 7h5V2M20 14a8 8 0 0 1-13 6l-3-3m5 0H4v5"/></>}
 </svg>;
}
