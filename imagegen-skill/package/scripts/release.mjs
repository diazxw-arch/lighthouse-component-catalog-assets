import assert from 'node:assert/strict';
import {checkLedger,summarize} from './learning-core.mjs';
import {versionFor} from './statistics.mjs';
export function applyReview(state,r,metadata,digest){
 const s=structuredClone(checkLedger(state));
assert(summarize(s).reviewDue,'No10-entry review is due');
assert.equal(r.through,summarize(s).dueThrough,'Wrong review boundary');
assert.equal(metadata.entriesPerRevision,10,'Package cadence differs');
assert.equal(r.version,versionFor(r.through),'Revision must increase by exactly0.1');
assert.equal(metadata.version,r.version,'Package version differs');
assert.equal(metadata.completedEntriesAtRelease,r.through,'Package boundary differs');
assert.equal(r.packageSha256,digest,'Package bytes differ from reviewed release');

 for(const k of ['errorsReviewed','timingReviewed','qualityReviewed','testsPassed','scanPassed','sourceReviewPassed','websitePublished'])assert.equal(r[k],true,'Unfinished review stage: '+k);

 assert(['retain','improve'].includes(r.decision),'Invalid method decision');
assert(typeof r.rationale==='string'&&r.rationale.trim().length>=20,'Explain the evidence-based decision');

 s.reviews.push({through:r.through,version:r.version,decision:r.decision,rationale:r.rationale,packageSha256:digest});
return s;

}
