import {StudyUtilityGlyph} from './StudyUtilityGlyph';
type Kind='download'|'chevron'|'bolt'|'flag'|'bookmark'|'person-waves'|'restart'|'retry'|'check'|'close'|'settings'|'sparkles'|'eye-off'|'eye'|'speaker';
export function PracticeGlyph({kind}:{kind:Kind}){
 if(kind==='speaker')return <StudyUtilityGlyph name="speaker"/>;
 return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  {kind==='download'&&<path d="M12 4v15m-6-6 6 6 6-6"/>}
  {kind==='chevron'&&<path d="m4 8 8 8 8-8"/>}
  {kind==='bolt'&&<path fill="currentColor" stroke="none" d="m14 1-10 13h7l-1 9 10-14h-7Z"/>}
  {kind==='flag'&&<path d="M4 22V3c5-4 9 4 16 0v10c-7 4-11-4-16 0"/>}
  {kind==='bookmark'&&<path d="M5 2h14v20l-7-5-7 5Z"/>}
  {kind==='person-waves'&&<><circle cx="8" cy="7" r="4" fill="currentColor" stroke="none"/><path d="M1 22v-2a7 7 0 0 1 14 0v2Z" fill="currentColor" stroke="none"/><path d="M17 4a6 6 0 0 1 0 9m4-12a11 11 0 0 1 0 15"/></>}
  {kind==='restart'&&<path d="M8 3 3 7l5 4M3 7h9a8 8 0 1 1-8 8"/>}
  {kind==='retry'&&<path d="m13 2 5 4-5 4m5-4h-6a8 8 0 1 0 8 8"/>}
  {kind==='check'&&<path d="m4 12 5 5L20 5"/>}
  {kind==='close'&&<path d="m4 4 16 16M20 4 4 20"/>}
  {kind==='settings'&&<><path d="M2 5h20M2 12h20M2 19h20"/><circle cx="8" cy="5" r="2.5" fill="white"/><circle cx="16" cy="12" r="2.5" fill="white"/><circle cx="8" cy="19" r="2.5" fill="white"/></>}
  {kind==='sparkles'&&<g fill="currentColor" stroke="none"><path d="m8 4 2.5 6L17 12l-6.5 2.5L8 21l-2.5-6.5L0 12l5.5-2Z"/><path d="m19 0 1.5 4 3.5 1.5-3.5 1.5L19 11l-1.5-4L14 5.5 17.5 4Z"/><path d="m20 16 1 2 2 1-2 1-1 2-1-2-2-1 2-1Z"/></g>}
  {(kind==='eye-off'||kind==='eye')&&<><path d="M1 12c5-8 17-8 22 0-5 8-17 8-22 0Z"/><circle cx="12" cy="12" r="3"/>{kind==='eye-off'&&<path d="M2 22 22 2"/>}</>}
 </svg>;
}
