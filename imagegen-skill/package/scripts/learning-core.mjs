import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {receipt} from './receipt.mjs';
import {versionFor,metrics} from './statistics.mjs';
export const entriesPerRevision=10;
const digestRows=rows=>createHash('sha256').update(JSON.stringify(rows)).digest('hex');
export function createLedger(){return {schemaVersion:2,entriesPerRevision,entries:[],reviews:[]};}
export function checkLedger(s){
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
 assert(s.entries.length<(s.reviews.length+1)*10,'10-entry review required before the next entry');
 assert.equal(r.skillVersion,versionFor(s.reviews.length*10),'Receipt uses a different active skill version');
 s.entries.push(r);return {state:s,recorded:true,summary:summarize(s)};
}
export function summarize(state){
 const s=checkLedger(state),count=s.entries.length,through=s.reviews.length*10,dueThrough=through+10;
 const rows=s.entries.slice(through,dueThrough),reviewDue=count>=dueThrough,groups={};
 for(const r of rows)(groups[r.method+':'+r.difficulty]??=[]).push(r);
 return {completedEntries:count,activeVersion:versionFor(through),earnedVersion:versionFor(count),entriesPerRevision:10,entriesUntilReview:Math.max(0,dueThrough-count),reviewDue,dueThrough,carryoverEntries:Math.max(0,count-dueThrough),window:metrics(rows),matchedGroups:Object.fromEntries(Object.entries(groups).map(([k,v])=>[k,metrics(v)])),releasedReviews:s.reviews.length};
}
