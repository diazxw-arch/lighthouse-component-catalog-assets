import {useRef,useState,type ReactNode} from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import './reader-utility.css';
export type ReaderContentsTab='contents'|'highlights'|'notes'|'bookmarks';
export type ReaderChapter={id:string;label:string;disabled?:boolean};
type Props={open:boolean;onOpenChange:(open:boolean)=>void;tab:ReaderContentsTab;onTabChange:(tab:ReaderContentsTab)=>void;chapters:readonly ReaderChapter[];currentChapterId?:string;onChapter:(id:string)=>void;panels:Record<Exclude<ReaderContentsTab,'contents'>,ReactNode>;disabled?:boolean;busy?:boolean;error?:string;onRetry?:()=>void};
const tabs:readonly {id:ReaderContentsTab;label:string}[]=[{id:'contents',label:'目次'},{id:'highlights',label:'強調'},{id:'notes',label:'ノート'},{id:'bookmarks',label:'しおり'}];
function stops(root:HTMLElement|null){return [...(root?.querySelectorAll<HTMLButtonElement>('button:not(:disabled)')??[])].filter(el=>el.tabIndex>=0&&el.getClientRects().length>0);}
export function ReaderContentsSheet({open,onOpenChange,tab,onTabChange,chapters,currentChapterId,onChapter,panels,disabled=false,busy=false,error,onRetry}:Props){
 const[container,setContainer]=useState<HTMLElement|null>(null),content=useRef<HTMLDivElement>(null);
 return <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}><section ref={setContainer} className="lh-reader-contents" data-open={open} aria-label="書籍の目次を開くシート"><DialogPrimitive.Trigger asChild><button type="button" className="lh-reader-contents__reopen" hidden={open} disabled={disabled}>目次を開く</button></DialogPrimitive.Trigger>
  {container&&<DialogPrimitive.Portal container={container}><DialogPrimitive.Overlay className="lh-reader-contents__overlay"/><DialogPrimitive.Content ref={content} className="lh-reader-contents__sheet" aria-describedby={undefined}
   onOpenAutoFocus={event=>{event.preventDefault();const selected=content.current?.querySelector<HTMLButtonElement>('[role="tab"][aria-selected="true"]:not(:disabled)');(selected??stops(content.current)[0]??content.current)?.focus();}}
   onKeyDown={event=>{if(event.key!=='Tab')return;const all=stops(content.current),first=all[0],last=all[all.length-1];if(!first){event.preventDefault();content.current?.focus();}else if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}}>
   <DialogPrimitive.Title className="lh-reader-sr">書籍の目次</DialogPrimitive.Title><span className="lh-reader-contents__handle" aria-hidden="true"/>
   <Tabs.Root className="lh-reader-contents__tabs" value={tab} onValueChange={value=>{if(!disabled)onTabChange(value as ReaderContentsTab);}}><Tabs.List className="lh-reader-contents__tablist" aria-label="本の内容">{tabs.map(item=><Tabs.Trigger key={item.id} value={item.id} disabled={disabled}>{item.label}</Tabs.Trigger>)}</Tabs.List>
    <Tabs.Content className="lh-reader-contents__panel" value="contents">{busy&&<p role="status">目次を読み込んでいます…</p>}{error&&<p role="alert">{error}{onRetry&&<button type="button" disabled={disabled||busy} onClick={onRetry}>再試行</button>}</p>}<ol aria-busy={busy||undefined}>{chapters.map(chapter=><li key={chapter.id}><button type="button" aria-current={chapter.id===currentChapterId?'location':undefined} disabled={disabled||busy||chapter.disabled} onClick={()=>onChapter(chapter.id)}>{chapter.label}</button></li>)}</ol>{!chapters.length&&!busy&&!error&&<p role="status">章はまだありません。</p>}</Tabs.Content>
    {tabs.filter(item=>item.id!=='contents').map(item=><Tabs.Content key={item.id} className="lh-reader-contents__panel" value={item.id}>{panels[item.id as Exclude<ReaderContentsTab,'contents'>]}</Tabs.Content>)}
   </Tabs.Root><footer><DialogPrimitive.Close asChild><button type="button">閉じる</button></DialogPrimitive.Close></footer>
  </DialogPrimitive.Content></DialogPrimitive.Portal>}
 </section></DialogPrimitive.Root>;
}
