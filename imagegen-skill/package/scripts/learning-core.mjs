import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {receipt} from './receipt.mjs';
import {checkAcceptance} from './acceptance.mjs';
import {versionFor,metrics} from './statistics.mjs';
export const entriesPerRevision=10;
const digestRows=rows=>createHash('sha256').update(JSON.stringify(rows)).digest('hex');
export function createLedger(){return {schemaVersion:2,entriesPerRevision,entries:[],reviews:[]};}
export function checkLedger(s){
 if(s.schemaVersion===3)return checkHourlyLedger(s);
 assert.equal(s.schemaVersion,2,'Ledger needs explicit owner cadence migration');
 assert.equal(s.entriesPerRevision,10,'Unexpected review cadence');
 assert(Array.isArray(s.entries)&&Array.isArray(s.reviews),'Invalid ledger');
 assert.equal(new Set(s.entries.map(r=>r.entryId)).size,s.entries.length,'Duplicate ledger entry IDs');
 const legacy=s.cadenceMigration;
 if(legacy){
  assert.equal(legacy.from,30);assert.equal(legacy.to,10);
  assert(Number.isSafeInteger(legacy.expectedCount)&&legacy.expectedCount>=10&&legacy.expectedCount<=30,'Invalid migration count');
  assert.equal(digestRows(s.entries.slice(0,legacy.expectedCount)),legacy.expectedEntriesDigest,'Historical migration bytes differ');
  assert(typeof legacy.reason==='string'&&legacy.reason.trim().length>=20,'Missing migration reason');
 }
 assert(s.entries.length>=s.reviews.length*10,'Ledger claims a future review');
 assert(s.entries.length<=Math.max(s.reviews.length*10+10,legacy?.expectedCount??0),'Ledger crossed an unreviewed boundary');
 for(let n=0;n<s.entries.length;n++){
  const row=receipt(s.entries[n]);
  const expected=n<(legacy?.expectedCount??0)?'1.0':versionFor(Math.floor(n/10)*10);
  assert.equal(row.skillVersion,expected,'Stored row version differs');
  assert.equal(row.elapsedMs,s.entries[n].elapsedMs,'Stored elapsed time differs');
 }
 for(let i=0;i<s.reviews.length;i++){
  const r=s.reviews[i];assert.equal(r.through,(i+1)*10);assert.equal(r.version,versionFor(r.through));
  assert(/^[a-f0-9]{64}$/.test(r.packageSha256),'Missing reviewed package digest');
  assert(['retain','improve'].includes(r.decision),'Missing review decision');
  assert(typeof r.rationale==='string'&&r.rationale.trim().length>=20,'Missing review rationale');
 }
 return s;
}
export function migrateCadence(state,m){
 assert.equal(state.schemaVersion,1,'Only the initial30-entry ledger can migrate');
 assert(Array.isArray(state.entries)&&Array.isArray(state.reviews)&&state.reviews.length===0,'Migration requires unreleased initial ledger');
 assert.equal(m.from,30);assert.equal(m.to,10);assert.equal(m.expectedCount,state.entries.length,'Migration count differs');
 assert.equal(m.expectedEntriesDigest,digestRows(state.entries),'Migration evidence differs');
 const next={...structuredClone(state),schemaVersion:2,entriesPerRevision:10,cadenceMigration:structuredClone(m)};
 return checkLedger(next);
}
export function recordEntry(state,input){
 const s=structuredClone(checkLedger(state)),r=receipt(input);
 if(s.entries.some(e=>e.entryId===r.entryId))return {state:s,recorded:false,summary:summarize(s)};
 checkAcceptance(input);
 if(s.schemaVersion===3){checkHourlyVersion(s,r);s.entries.push(r);return {state:checkLedger(s),recorded:true,summary:summarize(s)};}
 assert(s.entries.length<(s.reviews.length+1)*10,'10-entry review required before the next entry');
 assert.equal(r.skillVersion,versionFor(s.reviews.length*10),'Receipt uses a different active skill version');
 s.entries.push(r);return {state:s,recorded:true,summary:summarize(s)};
}
export function summarize(state,now=Date.now()){
 if(state.schemaVersion===3)return summarizeHourly(checkLedger(state),now);
 const s=checkLedger(state),count=s.entries.length,through=s.reviews.length*10,dueThrough=through+10;
 const rows=s.entries.slice(through,dueThrough),reviewDue=count>=dueThrough,groups={};
 for(const r of rows)(groups[r.method+':'+r.difficulty]??=[]).push(r);
 return {completedEntries:count,activeVersion:versionFor(through),earnedVersion:versionFor(count),entriesPerRevision:10,entriesUntilReview:Math.max(0,dueThrough-count),reviewDue,dueThrough,carryoverEntries:Math.max(0,count-dueThrough),window:metrics(rows),matchedGroups:Object.fromEntries(Object.entries(groups).map(([k,v])=>[k,metrics(v)])),releasedReviews:s.reviews.length};
}

const hourMs=3600000;
const timestamp=s=>{assert(typeof s==='string'&&/(?:Z|[+-]\d{2}:\d{2})$/.test(s),'Explicit review timezone required');const n=Date.parse(s);assert(Number.isFinite(n),'Invalid review timestamp');return n;};
export function nextVersion(version){assert(/^\d+\.\d$/.test(version),'Invalid version');const [a,b]=version.split('.').map(Number),n=a*10+b+1;return Math.floor(n/10)+'.'+n%10;}
export function migrateHourly(state,m){
 assert.equal(state.schemaVersion,2,'Only explicit legacy schema2 can migrate hourly');checkLedger(state);
 assert.equal(m.expectedLedgerDigest,digestRows(state),'Historical ledger digest differs');timestamp(m.at);
 assert(typeof m.reason==='string'&&m.reason.trim().length>=20,'Missing human cadence reason');
 return checkLedger({schemaVersion:3,entriesPerRevision:null,reviewIntervalMinutes:60,entries:structuredClone(state.entries),reviews:structuredClone(state.reviews),hourlyMigration:{...structuredClone(m),historicalLedger:structuredClone(state),initialVersion:summarize(state).activeVersion},hourlyReviews:[]});
}
function checkHourlyLedger(s){
 assert.equal(s.reviewIntervalMinutes,60);assert.equal(s.entriesPerRevision,null);
 const m=s.hourlyMigration;assert(m&&m.historicalLedger?.schemaVersion===2,'Missing historical ledger');checkLedger(m.historicalLedger);
 assert.equal(digestRows(m.historicalLedger),m.expectedLedgerDigest,'Historical ledger bytes differ');timestamp(m.at);
 assert.equal(m.initialVersion,summarize(m.historicalLedger).activeVersion,'Historical active version differs');
 assert.deepEqual(s.reviews,m.historicalLedger.reviews,'Historical reviews differ');
 assert(Array.isArray(s.entries)&&Array.isArray(s.hourlyReviews),'Invalid hourly arrays');
 assert.deepEqual(s.entries.slice(0,m.historicalLedger.entries.length),m.historicalLedger.entries,'Historical rows differ');
 assert.equal(new Set(s.entries.map(r=>r.entryId)).size,s.entries.length,'Duplicate ledger entry IDs');
 let version=m.initialVersion,previousTime=timestamp(m.at),through=m.historicalLedger.entries.length;
 for(let i=0;i<s.hourlyReviews.length;i++){
  const r=s.hourlyReviews[i],t=timestamp(r.reviewedAt);assert(t>=previousTime+(i?hourMs:0),'Hourly releases must be chronological and one hour apart');
  assert.equal(r.version,nextVersion(version),'Hourly version differs');assert(Number.isSafeInteger(r.through)&&r.through>=through&&r.through<=s.entries.length,'Invalid hourly window');
  assert.equal(r.entriesDigest,digestRows(s.entries.slice(0,r.through)),'Reviewed rows differ');
  assert(/^[a-f0-9]{64}$/.test(r.packageSha256),'Missing hourly package digest');
  assert(['retain','improve'].includes(r.decision)&&typeof r.rationale==='string'&&r.rationale.trim().length>=20,'Missing hourly rationale');
  version=r.version;previousTime=t;through=r.through;
 }
 for(const r of s.entries.slice(m.historicalLedger.entries.length)){
  const normalized=receipt(r);assert.equal(normalized.elapsedMs,r.elapsedMs,'Stored elapsed time differs');checkAcceptance(r);
  const versions=[{version:m.initialVersion,retiredAt:s.hourlyReviews[0]?.reviewedAt},...s.hourlyReviews.map((v,i)=>({version:v.version,activatedAt:v.reviewedAt,retiredAt:s.hourlyReviews[i+1]?.reviewedAt}))];
  assert(versions.some(v=>v.version===r.skillVersion&&(!v.activatedAt||Date.parse(r.startedAt)>=timestamp(v.activatedAt))&&(!v.retiredAt||Date.parse(r.startedAt)<=timestamp(v.retiredAt))),'Stored hourly version differs');
 }
 return s;
}
function checkHourlyVersion(s,r){const last=s.hourlyReviews.at(-1),active=last?.version??s.hourlyMigration.initialVersion;
 const previous=s.hourlyReviews.at(-2)?.version??s.hourlyMigration.initialVersion;
 const start=Date.parse(r.startedAt),prior=s.hourlyReviews.at(-2);
 assert((r.skillVersion===active&&(!last||start>=timestamp(last.reviewedAt)))||(last&&r.skillVersion===previous&&(!prior||start>=timestamp(prior.reviewedAt))&&start<=timestamp(last.reviewedAt)),'Receipt uses a different active skill version');
}
function summarizeHourly(s,now){
 assert(Number.isFinite(now),'Invalid report clock');const last=s.hourlyReviews.at(-1),at=last?.reviewedAt??s.hourlyMigration.at;
 const through=last?.through??s.hourlyMigration.historicalLedger.entries.length,rows=s.entries.slice(through),groups={};for(const r of rows)(groups[r.method+':'+r.difficulty]??=[]).push(r);
 return {completedEntries:s.entries.length,readyEntries:s.entries.filter(r=>r.status==='reviewed').length,historicalProcessedEntries:s.hourlyMigration.historicalLedger.entries.length,activeVersion:last?.version??s.hourlyMigration.initialVersion,earnedVersion:null,entriesPerRevision:null,entriesUntilReview:null,reviewIntervalMinutes:60,lastHourlyReviewAt:at,nextHourlyReviewAt:new Date(timestamp(at)+hourMs).toISOString(),reviewDue:now>=timestamp(at)+hourMs,dueThrough:null,windowStartAfter:through,window:metrics(rows),matchedGroups:Object.fromEntries(Object.entries(groups).map(([k,v])=>[k,metrics(v)])),releasedReviews:s.reviews.length+s.hourlyReviews.length,productionBlockedByReview:false};
}
