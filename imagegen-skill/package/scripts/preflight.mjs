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
  assert(['references','draft','records'].includes(mode)&&flag==='--input'&&file&&!extra.length,'Usage:node preflight.mjs references|draft|records --input <absolute-private-file>');
  const text=localFile(file,4*1024*1024).toString('utf8');
  const result=mode==='references'?{references:auditReferences(JSON.parse(text))}:mode==='draft'?{valid:auditDraft(JSON.parse(text))}:{records:readRecords(text).map(x=>({entryId:x.entryId??null}))};
  console.log(JSON.stringify(result,null,2));
 }catch(error){console.error(error.message);process.exitCode=1;}
}
