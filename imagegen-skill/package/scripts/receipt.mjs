import assert from 'node:assert/strict';
export const dimensions=['geometryIcons','typography','contentState','paletteSurfaces','protectedMedia'];

const evidenceKeys=['visuallyInspected','stored','catalogUpdated','catalogReadBack','storedImageOpened','promptRecorded','referencesRecorded','checkpointSaved'];

export const defectNames=new Set(['glyph','icon','media-redrawn','crop','state','missing-content','tint','palette','margins','geometry','registration','other']);

export function receipt(r){
 assert(/^LH\d{2}-\d{4,6}$/.test(r.entryId),'Invalid catalog ID');

 assert(typeof r.method==='string'&&/^[a-z0-9][a-z0-9-]{0,79}$/.test(r.method),'Invalid method');

 assert(['simple','standard','complex'].includes(r.difficulty),'Invalid difficulty');

 assert(['reviewed','needs-correction'].includes(r.status),'Only visually inspected completed entries count');

 for(const t of [r.startedAt,r.finishedAt])assert(typeof t==='string'&&/(?:Z|[+-]\d{2}:\d{2})$/.test(t),'Task timestamps need explicit timezone offset');
 const start=Date.parse(r.startedAt),finish=Date.parse(r.finishedAt);
assert(Number.isFinite(start)&&Number.isFinite(finish)&&finish>=start,'Invalid task timestamps');

 const elapsedMs=finish-start;
if(r.elapsedSeconds!==undefined)assert(Number.isFinite(r.elapsedSeconds)&&Math.abs(r.elapsedSeconds*1000-elapsedMs)<=1,'Contradictory elapsedSeconds');
if(r.elapsedMs!==undefined)assert.equal(r.elapsedMs,elapsedMs,'Contradictory elapsedMs');
for(const k of ['generationMs','activeMs'])assert(r[k]===null||(Number.isFinite(r[k])&&r[k]>=0&&r[k]<=elapsedMs),'Invalid measured '+k);

 if(r.skillVersion!=='1.0'){assert(r.timingCoverage&&['full','partial','interrupted'].includes(r.timingCoverage.elapsedScope),'Missing timing coverage');assert.equal(typeof r.timingCoverage.preparationMeasured,'boolean','Missing preparation coverage');assert(Array.isArray(r.timingCoverage.unknownIntervals)&&r.timingCoverage.unknownIntervals.every(x=>typeof x==='string'),'Invalid coverage unknowns');if(r.timingCoverage.elapsedScope==='full')assert(r.timingCoverage.preparationMeasured,'Full coverage excludes unmeasured preparation');}

 assert(Number.isSafeInteger(r.attempts)&&r.attempts>=1,'Invalid attempts');
assert(Number.isSafeInteger(r.imageVersion)&&r.imageVersion>=1,'Invalid image version');
assert(/^[a-f0-9]{64}$/.test(r.imageSha256),'Invalid image hash');

 for(const k of evidenceKeys)assert.equal(r.evidence?.[k],true,'Missing evidence: '+k);

 for(const k of dimensions)assert(Number.isInteger(r.quality?.[k])&&r.quality[k]>=0&&r.quality[k]<=4,'Missing inspected quality: '+k);

 assert(Array.isArray(r.defects)&&r.defects.every(x=>defectNames.has(x)),'Unknown defect');

 if(r.status==='reviewed'){assert.equal(r.defects.length,0,'Reviewed entry has unresolved defects');
assert(dimensions.every(k=>r.quality[k]>=3),'Reviewed entry has a material quality failure');
assert.equal(r.quality.protectedMedia,4,'Protected media must match');
}
 return Object.fromEntries(['entryId','skillVersion','method','difficulty','startedAt','finishedAt','generationMs','activeMs','attempts','status','imageSha256','imageVersion','quality','defects','evidence'].map(k=>[k,r[k]]).concat([['elapsedMs',elapsedMs]],r.timingCoverage?[['timingCoverage',structuredClone(r.timingCoverage)]]:[]));

}
