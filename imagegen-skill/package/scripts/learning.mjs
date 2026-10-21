import fs from 'node:fs';

import path from 'node:path';

import crypto from 'node:crypto';

import assert from 'node:assert/strict';

import {pathToFileURL} from 'node:url';


import {createLedger,recordEntry,summarize,migrateCadence,migrateHourly} from './learning-core.mjs';
import {applyReview} from './release.mjs';
import {readJob,verifyJob,verifyStored} from './acceptance.mjs';
export {createLedger,recordEntry,summarize,migrateCadence,migrateHourly,applyReview};
export {versionFor} from './statistics.mjs';
export function packageDigest(root){
 const absolute=fs.realpathSync(root),files=[];

 function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name<b.name?-1:1)){assert(!e.isSymbolicLink(),'Skill package symlink');
assert(!e.name.startsWith('.'),'Hidden files are not part of the skill package');
const f=path.join(dir,e.name);
if(e.isDirectory())walk(f);
else if(e.isFile())files.push(f);
else throw Error('Unsupported package entry');
}}
 walk(absolute);
const h=crypto.createHash('sha256');
for(const f of files){const relative=path.relative(absolute,f).split(path.sep).join('/');
h.update(relative+'\0');
h.update(crypto.createHash('sha256').update(fs.readFileSync(f)).digest());
}return h.digest('hex');

}
function read(file,limit){assert(fs.statSync(file).size<=limit,'Input too large');
assert(!fs.lstatSync(file).isSymbolicLink(),'Input symlink');
return JSON.parse(fs.readFileSync(file,'utf8'));
}
function transaction(file,fn){
 file=path.resolve(file);
assert(file.split(path.sep).some(p=>p==='.local'),'Keep the learning ledger inside an explicit .local directory');
fs.mkdirSync(path.dirname(file),{recursive:true});
if(fs.existsSync(file))assert(!fs.lstatSync(file).isSymbolicLink(),'Ledger symlink');

 const lock=file+'.lock',token=crypto.randomUUID();
let fd;
try{fd=fs.openSync(lock,'wx',0o600);
}catch(e){if(e.code==='EEXIST')throw Error('Learning ledger is locked; preserve the owner lock');
throw e;
}
 let tmp;
try{fs.writeFileSync(fd,JSON.stringify({token,pid:process.pid,createdAt:new Date().toISOString()}));
const s=fs.existsSync(file)?read(file,16*1024*1024):createLedger(),result=fn(s);
tmp=file+'.'+crypto.randomUUID()+'.tmp';
fs.writeFileSync(tmp,JSON.stringify(result.state,null,2)+'\n',{mode:0o600,flag:'wx'});
fs.renameSync(tmp,file);
tmp=null;
return result.output;
}finally{fs.closeSync(fd);
if(tmp&&fs.existsSync(tmp))fs.unlinkSync(tmp);
if(JSON.parse(fs.readFileSync(lock,'utf8')).token===token)fs.unlinkSync(lock);
}
}
export function main(args){
 const [command,...rest]=args,opts={};
for(let i=0;
i<rest.length;
i+=2){assert(/^--[a-z]+$/.test(rest[i])&&rest[i+1]&&!opts[rest[i]],'Use paired, unique flags');
opts[rest[i]]=rest[i+1];
}assert(['record','report','review','migrate','migrate-hourly'].includes(command),'Use record, report, review or migrate');
assert(opts['--ledger'],'An explicit private --ledger path is required');
const allowed=['migrate','migrate-hourly'].includes(command)?['--ledger','--receipt','--backup']:command==='record'?['--ledger','--receipt']:command==='review'?['--ledger','--receipt','--package']:['--ledger','--package'];
assert(Object.keys(opts).every(k=>allowed.includes(k)),'Unknown flag');

 if(command==='report'){const summary=summarize(fs.existsSync(opts['--ledger'])?read(opts['--ledger'],16*1024*1024):createLedger());
if(opts['--package'])summary.packageSha256=packageDigest(opts['--package']);
return summary;
}
 assert(opts['--receipt'],'--receipt is required');
const r=read(opts['--receipt'],64*1024);

 if(['migrate','migrate-hourly'].includes(command)){assert(opts['--backup'],'Migration requires an original --backup');const backup=read(opts['--backup'],16*1024*1024);return transaction(opts['--ledger'],s=>{assert.deepEqual(backup,s,'Migration backup differs from original ledger');const next=command==='migrate-hourly'?migrateHourly(s,r):migrateCadence(s,r);return {state:next,output:summarize(next)};});}

 if(command==='record'){assert(r.acceptanceJob,'Absolute parent-approved acceptanceJob required');const job=readJob(r.acceptanceJob),verified=verifyJob(job);verifyStored(job,verified,r);r.acceptance=verified.acceptance;}
 if(command==='record')return transaction(opts['--ledger'],s=>{const x=recordEntry(s,r);
return {state:x.state,output:{recorded:x.recorded,...x.summary}};
});

 assert(opts['--package'],'--package is required');
const digest=packageDigest(opts['--package']),metadata=read(path.join(opts['--package'],'VERSION.json'),64*1024);
return transaction(opts['--ledger'],s=>{const next=applyReview(s,r,metadata,digest);
return {state:next,output:summarize(next)};
});

}
if(process.argv[1]&&pathToFileURL(path.resolve(process.argv[1])).href===import.meta.url){try{console.log(JSON.stringify(main(process.argv.slice(2)),null,2));
}catch(e){console.error(e.message);
process.exitCode=1;
}}
