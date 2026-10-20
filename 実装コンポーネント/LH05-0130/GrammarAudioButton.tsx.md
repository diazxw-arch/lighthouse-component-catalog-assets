import {StudyUtilityGlyph} from './StudyUtilityGlyph';
type Props={label:string;playing:boolean;onRequest:()=>void;disabled?:boolean;busy?:boolean};
/** Requests host audio. It does not synthesize playback or claim an audio asset exists. */
export function GrammarAudioButton({label,playing,onRequest,disabled=false,busy=false}:Props){return <button type="button" className="lh-grammar-audio" aria-label={`${playing?'音声を停止する':'音声を再生する'}：${label}`} aria-pressed={playing} aria-busy={busy||undefined} disabled={disabled||busy} onClick={onRequest}><StudyUtilityGlyph name="speaker"/></button>;}
