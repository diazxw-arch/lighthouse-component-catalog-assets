import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {QuantityRatioExercise} from './QuantityRatioExercise';
import type {QuantityKind} from './QuantityToken';
import {quantityRatioCopy} from './learning-challenge-demo-data';
import characterSrc from './learning-challenge-media/bea.png';
import './learning-challenge-font.css';
import './learning-challenge-preview.css';
export function QuantityRatioExercisePreview(){const state=new URLSearchParams(location.search).get('state'),[counts,setCounts]=useState({rice:state==='empty'?0:3,water:state==='empty'?0:1}),[success,setSuccess]=useState(state!=='empty'),[message,setMessage]=useState('');const change=(kind:QuantityKind,delta:number)=>{setCounts(previous=>({...previous,[kind]:Math.max(0,Math.min(kind==='rice'?3:1,previous[kind]+delta))}));setSuccess(false);setMessage('数量を変えるリクエストです。正解判定は呼び出し元が提供します。');};return <main className="lh-learning-challenge-demo"><QuantityRatioExercise {...quantityRatioCopy} {...counts} characterSrc={characterSrc} success={success} onAdd={kind=>change(kind,1)} onRemove={kind=>change(kind,-1)} onNext={()=>setMessage('次の練習へ進むリクエストです。')} disabled={state==='disabled'} busy={state==='busy'} error={state==='error'?'数量を保存できませんでした。':undefined}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<QuantityRatioExercisePreview/>);
