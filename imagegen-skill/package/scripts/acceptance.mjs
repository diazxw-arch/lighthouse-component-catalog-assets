import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {inflateSync} from 'node:zlib';
import {dimensions} from './receipt.mjs';
export const policy='parent-ready-v1';
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
function bytes(file,max=64*1024*1024){assert(typeof file==='string'&&path.isAbsolute(file),'Absolute file path required');const s=fs.lstatSync(file);assert(s.isFile()&&!s.isSymbolicLink()&&s.size>0&&s.size<=max,'Invalid explicit input file');return fs.readFileSync(file);}
export function readJob(file){return JSON.parse(bytes(file,65536).toString('utf8'));}
function crc32(buf){let c=0xffffffff;for(const byte of buf){c^=byte;for(let k=0;k<8;k++)c=(c>>>1)^((c&1)?0xedb88320:0);}return (c^0xffffffff)>>>0;}
export function inspectPng(file){const b=bytes(file);assert(b.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])),'Raw ImageGen PNG required');let offset=8,header=null,ended=false;const data=[];while(offset<b.length){assert(offset+12<=b.length,'Truncated PNG chunk');const size=b.readUInt32BE(offset),end=offset+12+size;assert(end<=b.length,'Truncated PNG image');const type=b.toString('ascii',offset+4,offset+8),body=b.subarray(offset+8,offset+8+size);assert.equal(crc32(b.subarray(offset+4,offset+8+size)),b.readUInt32BE(offset+8+size),'PNG CRC mismatch');if(!header){assert(type==='IHDR'&&size===13,'Missing PNG IHDR');header=body;}else if(type==='IDAT')data.push(body);else if(type==='IEND'){assert(size===0&&end===b.length,'Invalid PNG end');ended=true;offset=end;break;}offset=end;}assert(header&&ended&&data.length>0,'PNG missing image data or end');const width=header.readUInt32BE(0),height=header.readUInt32BE(4),channels={0:1,2:3,4:2,6:4}[header[9]];assert(width>0&&height>0&&width<=32768&&height<=32768&&header[8]===8&&channels&&header[10]===0&&header[11]===0&&header[12]===0,'Unsupported PNG format');const row=width*channels+1,expected=row*height;assert(expected<=128*1024*1024,'PNG decoded image too large');const pixels=inflateSync(Buffer.concat(data),{maxOutputLength:expected});assert.equal(pixels.length,expected,'PNG decoded size mismatch');for(let y=0;y<height;y++)assert(pixels[y*row]<=4,'Invalid PNG filter');return {width,height,sha256:hash(b)};}
export function checkFrame(actual,target){assert(Number.isInteger(target?.width)&&Number.isInteger(target?.height)&&target.width>0&&target.height>0,'Verified target frame required');const expected=target.width/target.height,observed=actual.width/actual.height;assert(Math.abs(observed/expected-1)<=0.02,'Raw frame aspect differs from verified target by more than2%');return {width:target.width,heightAtTargetWidth:actual.height*target.width/actual.width,aspectRelativeError:Math.abs(observed/expected-1)};}
export function verifyJob(job){
 const assignment=readJob(job.assignmentPath);assert(assignment.status!=='human-production-hold-workflow-upgrade-now'&&assignment.skillReview?.productionHold===false,'Production held by parent');
 assert(path.resolve(job.catalogRoot)===path.resolve(assignment.catalogRoot),'Catalog root differs from assignment');
 assert(assignment.entries.some(e=>e.id===job.entryId),'Entry outside assignment');
 const approvalPath=job.approvalPath.replaceAll('\\','/');assert(approvalPath.includes('/.local/')&&approvalPath.includes('/manager/approvals/'),'Parent private approval required');
 const approvalBytes=bytes(job.approvalPath,65536),a=JSON.parse(approvalBytes);
 assert(a.entryId===job.entryId&&a.parentThreadId===assignment.managerThreadId&&a.parentThreadId!==assignment.workerThreadId,'Parent reviewer/entry mismatch');
 assert(Number.isSafeInteger(a.attempts)&&a.attempts>=1&&a.attempts<=2,'Two-call attempt limit exceeded or unknown');
 assert(a.status==='reviewed'&&Array.isArray(a.defects)&&a.defects.length===0,'Only ready reviewed candidates may register');
 for(const k of dimensions)assert(Number.isInteger(a.quality?.[k])&&a.quality[k]>=3&&a.quality[k]<=4,'Unaccepted quality '+k);
 assert.equal(a.quality.protectedMedia,4,'Protected artwork must match exactly');
 for(const k of ['originalCompared','intendedSizeCompared','enlargedCompared','originalsUnchanged','rawUnmodified','protectedMediaExact'])assert.equal(a.evidence?.[k],true,'Missing parent inspection '+k);
 assert(Array.isArray(a.residuals)&&a.residuals.length===0,'Unresolved corrections remain');
 assert(Array.isArray(a.references)&&a.references.length>0&&a.references.length<=8,'Original/native evidence required');
 for(const r of a.references)assert.equal(hash(bytes(r.path)),r.sha256,'Reference bytes changed');
 const image=inspectPng(job.candidatePath);assert.equal(image.sha256,a.candidateSha256,'Candidate changed after parent review');
 const manifestPath=path.join(job.catalogRoot,'画像生成リデザイン/manifest.json');if(fs.existsSync(manifestPath)){const old=JSON.parse(bytes(manifestPath,128*1024*1024));const duplicate=(old.items?.[job.entryId]?.versions||[]).find(v=>v.sha256===image.sha256);if(duplicate){assert(duplicate.status==='reviewed','Existing duplicate hash is not reviewed; do not promote by replay');storedProvenance(catalogJson(catalogFile(job.catalogRoot,duplicate.metadataFile)),job);}}
 const frame=checkFrame(image,a.targetFrame);assert.equal(hash(bytes(job.promptPath,262144)),a.promptSha256,'Prompt changed after approval');assert.equal(hash(bytes(job.referencesPath,262144)),a.referencesSha256,'Ordered references changed after approval');
 const acceptance={policy,entryId:job.entryId,imageSha256:image.sha256,parentThreadId:a.parentThreadId,approvalSha256:hash(approvalBytes)};
 return {acceptance,image,frame,acceptedQuality:a.quality,acceptedAttempts:a.attempts,helper:path.join(job.catalogRoot,'画像生成を登録.mjs'),args:['--id',job.entryId,'--image',job.candidatePath,'--prompt-file',job.promptPath,'--references-file',job.referencesPath,'--status','reviewed','--notes','Parent approved exact candidate; see private digest-bound approval.','--generator','image_gen']};
}
export function checkAcceptance(r){const a=r.acceptance;assert(r.attempts<=2,'Two-call attempt limit exceeded');assert(r.status==='reviewed','New entries must be ready/reviewed; failures stay private');assert(a?.policy===policy&&a.entryId===r.entryId&&a.imageSha256===r.imageSha256,'Parent acceptance gate required');assert(typeof a.parentThreadId==='string'&&a.parentThreadId.length>0&&/^[a-f0-9]{64}$/.test(a.approvalSha256),'Invalid parent approval receipt');return true;}

function catalogFile(root,relative){assert(typeof relative==='string'&&!path.isAbsolute(relative),'Catalog-relative file required');const resolved=path.resolve(root,relative),rel=path.relative(path.resolve(root),resolved);assert(rel&&!rel.startsWith('..')&&!path.isAbsolute(rel),'Catalog path escapes root');return resolved;}
function catalogJson(file){return JSON.parse(bytes(file,128*1024*1024));}
export function verifyStored(job,verified,receipt){
 const manifest=catalogJson(path.join(job.catalogRoot,'画像生成リデザイン/manifest.json'));
 const versions=manifest.items?.[job.entryId]?.versions;assert(Array.isArray(versions),'Stored manifest entry missing');
 const m=versions.find(v=>v.sha256===verified.image.sha256&&v.version===receipt.imageVersion);assert(m&&m.status==='reviewed','Stored version/hash is not reviewed');
 const metadata=catalogJson(catalogFile(job.catalogRoot,m.metadataFile));storedProvenance(metadata,job);assert(metadata.id===job.entryId&&metadata.sha256===m.sha256&&metadata.status==='reviewed'&&metadata.version===m.version,'Stored metadata mismatch');
 assert.equal(hash(bytes(catalogFile(job.catalogRoot,m.file))),m.sha256,'Stored image bytes differ');
 const full=catalogJson(path.join(job.catalogRoot,'全体目録.json')),item=full.items?.find(x=>x.id===job.entryId),cv=item?.generatedImages?.find(x=>x.sha256===m.sha256&&x.version===m.version);
 assert(cv&&cv.status==='reviewed'&&cv.file===m.file&&item.catalogPresentation?.status==='finished'&&item.catalogPresentation?.displayedVersion===m.version,'Refreshed catalog readback mismatch');
 assert(receipt.status==='reviewed'&&receipt.attempts===verified.acceptedAttempts&&receipt.imageSha256===m.sha256&&dimensions.every(k=>receipt.quality?.[k]===verified.acceptedQuality[k]),'Receipt differs from accepted stored candidate');
 return {stored:true,catalogUpdated:true,catalogReadBack:true,version:m.version,sha256:m.sha256};
}
export function verifyRuntime(job){const a=readJob(job.assignmentPath),r=a.catalogRuntime;assert(r&&/^[a-f0-9]{64}$/.test(r.registrationHelperSha256)&&/^[a-f0-9]{64}$/.test(r.managementHelperSha256),'Reviewed catalog runtime hashes required');assert.equal(hash(bytes(path.join(job.catalogRoot,'画像生成を登録.mjs'))),r.registrationHelperSha256,'Registrar runtime changed');assert.equal(hash(bytes(path.join(job.catalogRoot,'画像生成管理.mjs'))),r.managementHelperSha256,'Management runtime changed');assert(Array.isArray(r.files)&&['画像生成を登録.mjs','画像生成管理.mjs','目録を更新.mjs','実装コンポーネント.mjs','目録カード.mjs','再制作ガイド.mjs','整理アダプター.mjs'].every(n=>r.files.some(f=>f.relativePath===n)),'Reviewed refresh runtime closure required');for(const f of r.files)assert.equal(hash(bytes(catalogFile(job.catalogRoot,f.relativePath))),f.sha256,'Catalog dependency changed');}

export function readManifest(root){return catalogJson(path.join(root,'画像生成リデザイン/manifest.json'));}

function storedProvenance(metadata,job){assert(typeof metadata.prompt==='string'&&hash(Buffer.from(metadata.prompt))===hash(bytes(job.promptPath,262144)),'Stored prompt provenance differs');assert.deepEqual(metadata.inputReferences,JSON.parse(bytes(job.referencesPath,262144)),'Stored reference provenance differs');}
