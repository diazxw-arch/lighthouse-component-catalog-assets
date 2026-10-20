import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {UnitGrammarGuide} from './UnitGrammarGuide';
import {OriginalReferenceCrop} from './OriginalReferenceCrop';
import {comparisonColumns,comparisonRows,nounIntro,nounExplanation,grammarExamples,grammarGuideCopy} from './grammar-practice-demo-data';
import owl from './grammar-practice-media/grammar-owl.png';
import source from './grammar-practice-media/grammar-original.webp';
import './grammar-practice-font.css';
import './grammar-practice-preview.css';
export function UnitGrammarGuidePreview(){const state=new URLSearchParams(location.search).get('state'),[nounOpen,setNounOpen]=useState(state!=='collapsed'),[verbOpen,setVerbOpen]=useState(false),[playingId,setPlayingId]=useState<string>(),[message,setMessage]=useState('');return <main className="lh-grammar-demo"><UnitGrammarGuide {...grammarGuideCopy} artworkSrc={owl} lessonIcon={<OriginalReferenceCrop source={source} crop={[59,735,76,77]}/>} nounOpen={nounOpen} onNounOpenChange={setNounOpen} verbOpen={verbOpen} onVerbOpenChange={setVerbOpen} verbContent={<p>動詞の説明は呼び出し元が提供します。</p>} introLines={nounIntro} columns={comparisonColumns} rows={state==='empty'?[]:comparisonRows} explanationLines={nounExplanation} examples={state==='empty'?[]:grammarExamples} onBack={()=>setMessage('学習に戻るリクエストです。')} onVocabulary={id=>setMessage('ことば「'+id+'」の説明を開くリクエストです。')} onAudio={(id,play)=>{setPlayingId(play?id:undefined);setMessage('音声「'+id+'」の'+(play?'再生':'停止')+'リクエストです。音声は呼び出し元が提供します。');}} playingId={playingId} busyId={state==='busy'?'coffee':undefined} disabled={state==='disabled'} error={state==='error'?'文法ガイドを読み込めませんでした。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<UnitGrammarGuidePreview/>);
