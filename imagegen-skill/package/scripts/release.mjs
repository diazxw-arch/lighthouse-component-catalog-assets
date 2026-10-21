import assert from 'node:assert/strict';
import {checkLedger,summarize} from './learning-core.mjs';
import {createHash} from 'node:crypto';
import {nextVersion} from './learning-core.mjs';
import {versionFor} from './statistics.mjs';
export function applyReview(state,r,metadata,digest,now=Date.now()){
 const s=structuredClone(checkLedger(state));
 if(s.schemaVersion===3)return applyHourlyReview(s,r,metadata,digest,now);
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

function applyHourlyReview(s,r,metadata,digest,now){
 const reviewedAt=Date.parse(r.reviewedAt);assert(Number.isFinite(now)&&Number.isFinite(reviewedAt)&&reviewedAt<=now,'Review timestamp is invalid or in the future');
 const q=summarize(s,now);
 assert(s.hourlyReviews.length===0||q.reviewDue,'One hour has not elapsed since the last review');
 assert(Number.isSafeInteger(r.through)&&r.through>=q.windowStartAfter&&r.through<=s.entries.length,'Wrong reviewed window');
 const rowsDigest=createHash('sha256').update(JSON.stringify(s.entries.slice(0,r.through))).digest('hex');
 assert.equal(r.entriesDigest,rowsDigest,'Reviewed entry snapshot differs');
 assert.equal(metadata.reviewIntervalMinutes,60,'Package must use hourly cadence');
 assert.equal(r.version,nextVersion(q.activeVersion),'Revision must increase by exactly0.1');
 assert.equal(metadata.version,r.version,'Package version differs');assert.equal(metadata.completedEntriesAtRelease,r.through,'Package snapshot differs');
 assert.equal(r.packageSha256,digest,'Package bytes differ');
 for(const k of ['errorsReviewed','timingReviewed','qualityReviewed','testsPassed','scanPassed','sourceReviewPassed','websitePublished'])assert.equal(r[k],true,'Unfinished review stage: '+k);
 s.hourlyReviews.push({through:r.through,reviewedAt:r.reviewedAt,entriesDigest:rowsDigest,version:r.version,decision:r.decision,rationale:r.rationale,packageSha256:digest});return checkLedger(s);
}
