import {useCallback,useEffect,useLayoutEffect,useRef,type ReactNode} from 'react';
type Owner={kind:'pointer';pointerId:number;element:HTMLButtonElement}|{kind:'keyboard';key:string}|{kind:'toggle'|'assistive'};
type Props={mode:'toggle'|'hold';recording:boolean;label:string;className:string;onStart:()=>void;onStop:()=>void;onCancel:()=>void;disabled?:boolean;busy?:boolean;children:ReactNode};
/** Owns input requests only. The host owns microphone permission, media and recording state. */
export function RecordingRequestButton({mode,recording,label,className,onStart,onStop,onCancel,disabled=false,busy=false,children}:Props){
 const owner=useRef<Owner|null>(null),previousRecording=useRef(recording),callbacks=useRef({onStart,onStop,onCancel,recording});
 useLayoutEffect(()=>{callbacks.current={onStart,onStop,onCancel,recording};},[onStart,onStop,onCancel,recording]);
 const releaseOwnership=useCallback(()=>{const active=owner.current;owner.current=null;if(active?.kind==='pointer'&&active.element.hasPointerCapture?.(active.pointerId))active.element.releasePointerCapture(active.pointerId);return active;},[]);
 const finish=useCallback((action:'onStop'|'onCancel')=>{if(releaseOwnership())callbacks.current[action]();},[releaseOwnership]);
 // A confirmed host recording that ends also ends its input ownership. A still-pending
 // false→false request remains owned so Stop, Escape, blur and teardown can cancel it.
 useLayoutEffect(()=>{const ended=previousRecording.current&&!recording;previousRecording.current=recording;if(ended)releaseOwnership();},[recording,releaseOwnership]);
 useEffect(()=>()=>finish('onCancel'),[finish]);
 useEffect(()=>{if(disabled||busy)finish('onCancel');},[disabled,busy,finish]);
 const toggle=(kind:'toggle'|'assistive')=>{if(owner.current){finish('onStop');return;}if(recording){onStop();return;}owner.current={kind};onStart();};
 return <button type="button" className={className} data-mode={mode} aria-label={label} aria-pressed={recording} aria-busy={busy||undefined} disabled={disabled||busy}
  onClick={event=>{if(mode==='toggle')toggle('toggle');else if(event.detail===0&&!owner.current)toggle('assistive');else if(event.detail===0&&owner.current?.kind==='assistive')finish('onStop');}}
  onPointerDown={event=>{if(mode!=='hold'||disabled||busy||event.button!==0||owner.current)return;event.preventDefault();event.currentTarget.focus();try{event.currentTarget.setPointerCapture?.(event.pointerId);}catch{return;}owner.current={kind:'pointer',pointerId:event.pointerId,element:event.currentTarget};if(!recording)onStart();}}
  onPointerUp={event=>{if(owner.current?.kind==='pointer'&&owner.current.pointerId===event.pointerId)finish('onStop');}}
  onPointerCancel={event=>{if(owner.current?.kind==='pointer'&&owner.current.pointerId===event.pointerId)finish('onCancel');}}
  onLostPointerCapture={event=>{if(owner.current?.kind==='pointer'&&owner.current.pointerId===event.pointerId)finish('onCancel');}}
  onKeyDown={event=>{if(event.key==='Escape'&&owner.current){event.preventDefault();event.stopPropagation();finish('onCancel');return;}if(mode!=='hold'||![' ','Enter'].includes(event.key))return;event.preventDefault();if(disabled||busy||event.repeat||owner.current)return;owner.current={kind:'keyboard',key:event.key};if(!recording)onStart();}}
  onKeyUp={event=>{if(owner.current?.kind==='keyboard'&&owner.current.key===event.key){event.preventDefault();finish('onStop');}}}
  onBlur={()=>finish('onCancel')}>{children}</button>;
}
