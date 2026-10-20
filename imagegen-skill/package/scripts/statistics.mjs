import {dimensions,defectNames} from './receipt.mjs';
import assert from 'node:assert/strict';
export function versionFor(completed){assert(Number.isSafeInteger(completed)&&completed>=0,'Invalid entry count');
const t=10+Math.floor(completed/10);
return String(Math.floor(t/10))+'.'+String(t%10);
}
const percentile=(a,p)=>a.length?[...a].sort((x,y)=>x-y)[Math.max(0,Math.ceil(p*a.length)-1)]:null;

export function metrics(rows){
 const measure=k=>{const a=rows.map(r=>r[k]).filter(Number.isFinite);
return {samples:a.length,medianMs:percentile(a,.5),p90Ms:percentile(a,.9)};
};

 return {entries:rows.length,elapsed:measure('elapsedMs'),generation:measure('generationMs'),active:measure('activeMs'),firstPassReadyRate:rows.length?rows.filter(r=>r.status==='reviewed'&&r.attempts===1).length/rows.length:null,correctionRate:rows.length?rows.filter(r=>r.status==='needs-correction').length/rows.length:null,attemptsPerEntry:rows.length?rows.reduce((n,r)=>n+r.attempts,0)/rows.length:null,quality:Object.fromEntries(dimensions.map(k=>[k,rows.length?rows.reduce((n,r)=>n+r.quality[k],0)/rows.length:null])),defects:Object.fromEntries([...defectNames].map(k=>[k,rows.filter(r=>r.defects.includes(k)).length]))};

}
