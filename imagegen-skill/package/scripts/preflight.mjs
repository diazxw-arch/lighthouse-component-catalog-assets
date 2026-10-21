import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {pathToFileURL} from 'node:url';
import {dimensions,defectNames} from './receipt.mjs';
import {readRecords} from './read-records.mjs';
export {readRecords};

// Read only explicitly supplied local files. This helper does not generate,
// register, install, upload, start timers or certify visual fidelity.
function localFile(file,maxBytes){
 assert(typeof file==='string'&&path.isAbsolute(file),'Explicit absolute file path required');
 const stat=fs.lstatSync(file);
 assert(!stat.isSymbolicLink(),'Symbolic file reference refused');
 assert(stat.isFile()&&stat.size>0&&stat.size<=maxBytes,'Invalid file size or type');
 return fs.readFileSync(file);
}
function imageKind(bytes){
 if(bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])))return 'png';
 if(bytes[0]===255&&bytes[1]===216&&bytes[2]===255)return 'jpeg';
 if(bytes.toString('ascii',0,4)==='RIFF'&&bytes.toString('ascii',8,12)==='WEBP')return 'webp';
 throw Error('Unsupported image signature; use viewed PNG/JPEG/WebP bytes');
}
export function auditReferences(input){
 const refs=Array.isArray(input)?input:input?.references;
 assert(Array.isArray(refs)&&refs.length>0&&refs.length<=5,'Expected1–5 ordered references');
 return refs.map((ref,index)=>{
  assert(ref&&typeof ref.role==='string'&&ref.role.trim().length>0,'Reference role required');
  const bytes=localFile(ref.path,64*1024*1024),kind=imageKind(bytes);
  const digest=crypto.createHash('sha256').update(bytes).digest('hex');
  if(ref.sha256!==undefined){
   assert(typeof ref.sha256==='string'&&/^[a-f0-9]{64}$/.test(ref.sha256),'Malformed reference digest at order'+(index+1));
   assert.equal(ref.sha256,digest,'Reference digest mismatch at order'+(index+1));
  }
  return {order:index+1,role:ref.role,path:ref.path,sha256:digest,bytes:bytes.length,detectedFormat:kind};
 });
}

// Request mode accepts ordinary local paths only. This is preflight, not an OS
// sandbox: callers still must not mutate files between this check and ImageGen.
function requestLocalPath(file){
 assert(typeof file==='string'&&path.isAbsolute(file),'Explicit absolute local path required');
 assert(!/^[\\/]{2}/.test(file)&&!file.includes('\0'),'UNC/device paths refused');
 if(process.platform==='win32')assert(/^[A-Za-z]:[\\/]/.test(file)&&!file.slice(2).includes(':'),'Local drive path required');
 return path.resolve(file);
}
function canonicalRequestPath(file){
 const absolute=requestLocalPath(file),root=path.parse(absolute).root;
 let current=root;
 assert(!fs.lstatSync(root).isSymbolicLink(),'Symbolic ancestor refused');
 for(const part of absolute.slice(root.length).split(path.sep).filter(Boolean)){
  current=path.join(current,part);
  assert(!fs.lstatSync(current).isSymbolicLink(),'Symbolic ancestor refused');
 }
 return fs.realpathSync.native(absolute);
}
function withinRequestRoot(file,roots){
 const absolute=canonicalRequestPath(file);
 assert(roots.some(root=>{const relative=path.relative(root,absolute);return relative===''||(!relative.startsWith('..'+path.sep)&&relative!=='..'&&!path.isAbsolute(relative));}),'Request path outside approved local roots');
 return absolute;
}
export function prepareImageGenRequest(input){
 assert(input&&typeof input==='object'&&!Array.isArray(input),'Expected request object');
 const fields=['entryId','promptPath','promptSha256','referencesPath','referencesSha256','allowedRoots'];
 assert(Object.keys(input).every(k=>fields.includes(k)),'Unknown request field');
 assert(typeof input.entryId==='string'&&/^LH[0-9]{2}-[0-9]{4}$/.test(input.entryId),'Invalid catalog entry ID');
 assert(typeof input.promptSha256==='string'&&/^[a-f0-9]{64}$/.test(input.promptSha256),'Expected prompt digest');
 assert(typeof input.referencesSha256==='string'&&/^[a-f0-9]{64}$/.test(input.referencesSha256),'Expected reference manifest digest');
 assert(Array.isArray(input.allowedRoots)&&input.allowedRoots.length>0&&input.allowedRoots.length<=5,'Approved local roots required');
 const roots=input.allowedRoots.map(root=>{const canonical=canonicalRequestPath(root);assert(fs.statSync(canonical).isDirectory(),'Approved local root must be a directory');return canonical;});
 withinRequestRoot(input.promptPath,roots);
 withinRequestRoot(input.referencesPath,roots);
 const promptBytes=localFile(input.promptPath,64*1024);
 assert.equal(crypto.createHash('sha256').update(promptBytes).digest('hex'),input.promptSha256,'Prompt digest mismatch');
 const refsBytes=localFile(input.referencesPath,64*1024);
 assert.equal(crypto.createHash('sha256').update(refsBytes).digest('hex'),input.referencesSha256,'Reference manifest digest mismatch');
 const sourceRefs=JSON.parse(refsBytes.toString('utf8'));
 const refs=Array.isArray(sourceRefs)?sourceRefs:sourceRefs?.references;
 assert(Array.isArray(refs)&&refs.every(ref=>typeof ref?.sha256==='string'&&/^[a-f0-9]{64}$/.test(ref.sha256)),'Expected reference digest');
 for(const ref of refs)withinRequestRoot(ref.path,roots);
 const checked=auditReferences(sourceRefs);
 const prompt=promptBytes.toString('utf8');
 assert(Buffer.from(prompt,'utf8').equals(promptBytes),'Prompt must be valid UTF-8');
 assert(prompt.trim().length>0,'Empty prompt');
 return {entryId:input.entryId,toolArguments:{prompt,referenced_image_paths:checked.map(ref=>ref.path),transparent_background:false},evidence:{promptSha256:input.promptSha256,referencesSha256:input.referencesSha256,references:checked}};
}

export function auditDraft(draft){
 for(const name of dimensions)assert(Number.isInteger(draft?.quality?.[name])&&draft.quality[name]>=0&&draft.quality[name]<=4,'Invalid draft quality '+name);
 assert(Array.isArray(draft.defects)&&draft.defects.every(x=>defectNames.has(x)),'Unknown draft defect; retain specific observations in prose');
 if(draft.status==='reviewed'){
  assert(draft.defects.length===0&&dimensions.every(k=>draft.quality[k]>=3)&&draft.quality.protectedMedia===4,'Reviewed draft has unresolved defects');
 }
 return true;
}
if(process.argv[1]&&pathToFileURL(path.resolve(process.argv[1])).href===import.meta.url){
 try{
  const [mode,flag,file,...extra]=process.argv.slice(2);
  assert(['references','draft','records','request'].includes(mode)&&flag==='--input'&&file&&!extra.length,'Usage:node preflight.mjs references|draft|records|request --input <absolute-private-file>');
  // Request configuration itself must not traverse a share/device or junction.
  if(mode==='request')canonicalRequestPath(file);
  const text=localFile(file,4*1024*1024).toString('utf8');
  const result=mode==='request'?prepareImageGenRequest(JSON.parse(text)):mode==='references'?{references:auditReferences(JSON.parse(text))}:mode==='draft'?{valid:auditDraft(JSON.parse(text))}:{records:readRecords(text).map(x=>({entryId:x.entryId??null}))};
  console.log(JSON.stringify(result,null,2));
 }catch(error){console.error(error.message);process.exitCode=1;}
}
