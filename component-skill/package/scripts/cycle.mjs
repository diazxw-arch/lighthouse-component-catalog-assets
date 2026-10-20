// Offline receipt ledger. Explicit paths only; no network, shell, timers or installation.
import fs from 'node:fs';
import path from 'node:path';
import {createHash,randomUUID} from 'node:crypto';
import {pathToFileURL} from 'node:url';
export const gates=['visual','interaction','responsive','accessibility','tests','independentReview','ci','production','actualCatalog'];
const sha=x=>createHash('sha256').update(x).digest('hex');
const requireValue=(ok,message)=>{if(!ok)throw Error(message);};
const idPattern=/^LH\d{2}-\d{4,6}$/;
const text=x=>typeof x==='string'&&x.trim().length>0;
const instant=x=>typeof x==='string'&&/^\d{4}-\d\d-\d\dT/.test(x)&&Number.isFinite(Date.parse(x));
export const formatVersion=n=>`${Math.floor(n/10)}.${n%10}`;
function inside(workspace,relative){
 requireValue(text(relative)&&!path.isAbsolute(relative)&&!relative.includes('\\')&&!relative.split('/').some(x=>!x||x==='.'||x==='..')&&!/^[a-z]+:/i.test(relative),'Unsafe evidence path');
 const root=fs.realpathSync(workspace),file=path.resolve(root,relative);
 requireValue(file.startsWith(root+path.sep),'Evidence outside workspace');
 let part=root;for(const segment of relative.split('/')){part=path.join(part,segment);requireValue(!fs.lstatSync(part).isSymbolicLink(),'Evidence symlink rejected');}
 requireValue(fs.statSync(file).isFile(),'Evidence must be a file');return file;
}
function pin(workspace,evidence){
 requireValue(evidence&&/^[a-f0-9]{64}$/.test(evidence.sha256),'Evidence SHA-256 required');
 requireValue(sha(fs.readFileSync(inside(workspace,evidence.path)))===evidence.sha256,'Changed input or evidence hash');
}
export function validateReceipt(r,workspace){
 requireValue(r&&idPattern.test(r.id),'Invalid component ID');
 requireValue(text(r.family)&&text(r.complexity)&&text(r.implementer)&&text(r.reviewer)&&r.reviewer!==r.implementer,'Independent reviewer and component family required');
 requireValue(/^\d+\.\d$/.test(r.skillVersion),'Skill version required');
 requireValue(instant(r.startedAt)&&instant(r.completedAt),'Measured start/completion timestamps required');
 const elapsed=(Date.parse(r.completedAt)-Date.parse(r.startedAt))/60000;
 requireValue(elapsed>0&&Date.parse(r.completedAt)<=Date.now(),'Invalid elapsed timing');
 for(const key of ['activeMinutes','blockedMinutes','reworkMinutes'])if(r[key]!=null)requireValue(Number.isFinite(r[key])&&r[key]>=0&&r[key]<=elapsed,'Invalid measured time');
 if(r.activeMinutes!=null&&r.blockedMinutes!=null)requireValue(r.activeMinutes+r.blockedMinutes<=elapsed+0.001,'Active and blocked time exceeds elapsed');
 if(r.reworkMinutes!=null)requireValue(r.activeMinutes!=null&&r.reworkMinutes<=r.activeMinutes,'Rework must be a subset of measured active time');
 requireValue(Array.isArray(r.inputs)&&r.inputs.length>0,'Input pins required');
 requireValue(new Set(r.inputs.map(x=>x.path)).size===r.inputs.length,'Duplicate input pins');
 r.inputs.forEach(x=>pin(workspace,x));const inputHash=sha(JSON.stringify(r.inputs));
 for(const key of gates){const g=r.gates?.[key];requireValue(g?.status==='passed'&&g.inputHash===inputHash,`Missing or stale ${key} gate`);requireValue(instant(g.observedAt)&&Date.parse(g.observedAt)>=Date.parse(r.startedAt)&&Date.parse(g.observedAt)<=Date.parse(r.completedAt),`Invalid ${key} observation`);pin(workspace,g.evidence);}
 requireValue(r.quality&&typeof r.quality.firstPass==='boolean'&&Number.isInteger(r.quality.reviewRounds)&&r.quality.reviewRounds>=1&&Array.isArray(r.quality.openDefects)&&r.quality.openDefects.length===0&&Array.isArray(r.quality.residuals),'Quality evidence must have no pending defects');
 requireValue(['complete','retained','deferred'].includes(r.cleanup?.status)&&text(r.cleanup.reason),'Explicit cleanup disposition required');
 return {...structuredClone(r),elapsedMinutes:elapsed,receiptHash:sha(JSON.stringify(r))};
}
export function initialState(baselineIds=[]){
 requireValue(Array.isArray(baselineIds)&&baselineIds.every(x=>idPattern.test(x))&&new Set(baselineIds).size===baselineIds.length,'Unique baseline IDs required');
 return {schemaVersion:1,versionTenths:10,cycleSize:30,baselineIds:[...baselineIds],completions:[],reviews:[],events:[{type:'initialized',at:new Date().toISOString()}]};
}
export function status(s){const cycleCompleted=s.completions.length-s.reviews.length*30;return {version:formatVersion(s.versionTenths),completed:s.completions.length,cycleCompleted,cycleSize:30,reviewDue:cycleCompleted===30,nextVersion:formatVersion(s.versionTenths+1),metrics:metrics(s.completions.slice(s.reviews.length*30))};}
export function recordCompletion(s,r,workspace){
 requireValue(!s.baselineIds.includes(r.id),'Component belongs to excluded baseline');
 requireValue(!s.completions.some(x=>x.id===r.id),'Component already counted');
 requireValue(!status(s).reviewDue,'30 complete: workflow review and version release required');
 requireValue(r.skillVersion===formatVersion(s.versionTenths),'Receipt skill version is stale');
 const receipt=validateReceipt(r,workspace),next=structuredClone(s);next.completions.push(receipt);next.events.push({type:'completed',id:r.id,receiptHash:receipt.receiptHash,at:new Date().toISOString()});return next;
}
function distribution(values){const sorted=values.filter(Number.isFinite).sort((a,b)=>a-b),n=sorted.length;return {measured:n,unknown:values.length-n,median:n?(sorted[Math.floor((n-1)/2)]+sorted[Math.ceil((n-1)/2)])/2:null,p90:n?sorted[Math.ceil(n*.9)-1]:null};}
export function metrics(rows){return {samples:rows.length,elapsedMinutes:distribution(rows.map(x=>x.elapsedMinutes)),activeMinutes:distribution(rows.map(x=>x.activeMinutes)),blockedMinutes:distribution(rows.map(x=>x.blockedMinutes)),reworkMinutes:distribution(rows.map(x=>x.reworkMinutes)),firstPass:rows.length?rows.filter(x=>x.quality.firstPass).length/rows.length:null,families:[...new Set(rows.map(x=>x.family))]};}
export function reviewCycle(s,r,workspace){
 requireValue(status(s).reviewDue,'Review requires exactly 30 completed components');
 requireValue(r.from===formatVersion(s.versionTenths)&&r.to===formatVersion(s.versionTenths+1),'Version must increase by exactly 0.1');
 requireValue(['retain','adopt'].includes(r.decision)&&text(r.findings)&&text(r.reviewer)&&Array.isArray(r.knownErrors)&&Array.isArray(r.methods),'Workflow review findings required');pin(workspace,r.evidence);
 if(r.decision==='adopt')requireValue(r.methods.length>0&&r.methods.every(x=>text(x.name)&&Number.isFinite(x.beforeMinutes)&&Number.isFinite(x.afterMinutes)&&x.beforeMinutes>0&&x.afterMinutes>0&&x.afterMinutes<x.beforeMinutes&&Number.isInteger(x.comparableSamples)&&x.comparableSamples>=1&&x.qualityRegression===false&&x.requiredGatesPreserved===true),'Adopt only measured quality-safe improvements');
 const next=structuredClone(s);next.reviews.push({...r,metrics:metrics(s.completions.slice(-30)),ids:s.completions.slice(-30).map(x=>x.id),at:new Date().toISOString()});next.versionTenths++;next.events.push({type:'workflow-reviewed',version:r.to,at:new Date().toISOString()});return next;
}
function safeStore(store){
 const full=path.resolve(store);fs.mkdirSync(full,{recursive:true});requireValue(fs.realpathSync(full)===full,'Store symlink rejected');
 for(const name of ['cycle.json','cycle.lock'])if(fs.existsSync(path.join(full,name)))requireValue(!fs.lstatSync(path.join(full,name)).isSymbolicLink(),'Store file symlink rejected');return full;
}
export const readStore=store=>JSON.parse(fs.readFileSync(path.join(safeStore(store),'cycle.json'),'utf8'));
export function mutateStore(store,mutate){
 const root=safeStore(store),lock=path.join(root,'cycle.lock'),file=path.join(root,'cycle.json'),tmp=path.join(root,`cycle-${randomUUID()}.tmp`);let fd;
 try{fd=fs.openSync(lock,'wx');}catch(e){if(e.code==='EEXIST')throw Error('Ledger locked by another writer; inspect owner, do not delete blindly');throw e;}
 try{const old=fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):null,next=mutate(old);fs.writeFileSync(tmp,JSON.stringify(next,null,2)+'\n',{flag:'wx'});fs.renameSync(tmp,file);return next;}finally{if(fs.existsSync(tmp))fs.unlinkSync(tmp);fs.closeSync(fd);fs.unlinkSync(lock);}
}
function cli(){
 const [command,...args]=process.argv.slice(2),opts={};for(let i=0;i<args.length;i+=2){requireValue(/^--(store|workspace|receipt|review|baseline)$/.test(args[i])&&text(args[i+1]),'Usage: cycle.mjs init|status|record|review --store PATH [--workspace PATH --receipt RELATIVE | --review RELATIVE | --baseline RELATIVE]');requireValue(!opts[args[i]],'Duplicate option');opts[args[i]]=args[i+1];}
 requireValue(text(opts['--store']),'Explicit --store required');const workspace=opts['--workspace'];
 const read=key=>{requireValue(text(workspace)&&text(opts[key]),`--workspace and ${key} required`);return JSON.parse(fs.readFileSync(inside(workspace,opts[key]),'utf8'));};let state;
 if(command==='init')state=mutateStore(opts['--store'],old=>{requireValue(!old,'Ledger already initialized');const baseline=read('--baseline');return initialState(baseline.ids);});
 else if(command==='status')state=readStore(opts['--store']);
 else if(command==='record')state=mutateStore(opts['--store'],s=>{requireValue(s,'Initialize ledger first');return recordCompletion(s,read('--receipt'),workspace);});
 else if(command==='review')state=mutateStore(opts['--store'],s=>{requireValue(s,'Initialize ledger first');return reviewCycle(s,read('--review'),workspace);});
 else throw Error('Unknown command');console.log(JSON.stringify(status(state),null,2));
}
if(process.argv[1]&&pathToFileURL(path.resolve(process.argv[1])).href===import.meta.url){try{cli();}catch(e){console.error(e.message);process.exitCode=1;}}
