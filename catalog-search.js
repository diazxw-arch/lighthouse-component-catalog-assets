export const DEFAULT_STATE = Object.freeze({query:'',category:'',app:'',generated:'',status:'',part:'',original:'',native:'',guide:'',minVersions:'',scope:'all',match:'all',sort:'relevance',page:0});
export const STATUS_LABELS = Object.freeze({finished:'画像生成完了', 'needs-correction':'要修正', 'review-pending':'レビュー待ち', waiting:'未生成', implemented:'実装あり', 'missing-image':'最新画像が不足'});
const choices={generated:['','yes','no'],status:['',...Object.keys(STATUS_LABELS)],original:['','yes','no'],native:['','yes','no'],guide:['','yes','no'],minVersions:['','2','3','5'],scope:['all','name','id','purpose','parts'],match:['all','any'],sort:['relevance','recent','id','id-desc','versions']};
const compareIds=new Intl.Collator('ja',{numeric:true,sensitivity:'base'}).compare;
const prepared=new WeakMap();
export function normalize(value){
  return String(value??'').normalize('NFKC').toLowerCase().replace(/[‐‑‒–—―−]/g,'-').replace(/[ぁ-ゖ]/g,c=>String.fromCharCode(c.charCodeAt(0)+0x60));
}
function canonicalId(value){
  const match=value.match(/^lh(\d{1,2})[-_ ](\d{1,6})$/);
  return match?'lh'+match[1].padStart(2,'0')+'-'+match[2].padStart(4,'0'):value;
}
function termsFor(value){
  return [...String(value??'').slice(0,600).matchAll(/(-?)(?:"([^"]*)"|(\S+))/g)].map(m=>({excluded:m[1]==='-',text:canonicalId(normalize(m[2]??m[3]).trim())})).filter(t=>t.text);
}
function fieldsFor(row){
  if(prepared.has(row))return prepared.get(row);
  const fields={id:normalize(row.id),name:normalize(row.name),purpose:normalize(row.useCase),parts:normalize((row.atoms??[]).join(' ')),app:normalize(row.app)};
  fields.all=normalize([row.id,row.name,row.useCase,row.app,(row.atoms??[]).join(' '),row.search].join(' '));
  prepared.set(row,fields);return fields;
}
function availability(value,actual){return !value||(value==='yes'?Boolean(actual):!actual);}
export function readState(search){
  const params=new URLSearchParams(search),state={...DEFAULT_STATE};
  for(const key of Object.keys(state)){
    if(key==='page')continue;
    const value=params.get(key);
    if(value===null)continue;
    state[key]=choices[key]?(choices[key].includes(value)?value:DEFAULT_STATE[key]):value.slice(0,key==='query'?600:160);
  }
  const page=Number(params.get('page'));
  state.page=Number.isFinite(page)?Math.min(1000000,Math.max(0,Math.floor(page||1)-1)):0;
  return state;
}
export function writeState(value){
  const state={...DEFAULT_STATE,...value},params=new URLSearchParams();
  for(const key of Object.keys(DEFAULT_STATE)){
    if(key==='page')continue;
    if(state[key]!==DEFAULT_STATE[key]&&state[key]!=='')params.set(key,String(state[key]));
  }
  if(Number.isFinite(state.page)&&state.page>0)params.set('page',String(Math.floor(state.page)+1));
  return params.size?'?'+params.toString():'';
}
export function searchCatalog(rows,value={}){
  const state={...DEFAULT_STATE,...value},terms=termsFor(state.query),positive=terms.filter(t=>!t.excluded),negative=terms.filter(t=>t.excluded),app=normalize(state.app.trim()),part=normalize(state.part.trim());
  const matches=[];
  for(const row of rows){
    const f=fieldsFor(row),text=f[state.scope]??f.all;
    if(state.category&&row.category!==state.category)continue;
    if(app&&!f.app.includes(app))continue;
    if(state.generated&&row.generated!==state.generated)continue;
    if(state.status==='implemented'?!row.implemented:state.status==='missing-image'?!row.latestImageMissing:state.status&&row.status!==state.status)continue;
    if(part&&!f.parts.includes(part))continue;
    if(!availability(state.original,row.hasOriginal)||!availability(state.native,row.hasNative)||!availability(state.guide,row.hasGuide))continue;
    if(Number(row.versionCount??0)<Number(state.minVersions||0))continue;
    if(negative.some(t=>text.includes(t.text)))continue;
    if(positive.length&&!(state.match==='any'?positive.some(t=>text.includes(t.text)):positive.every(t=>text.includes(t.text))))continue;
    let score=0;
    for(const term of positive)score+=f.id===term.text?1000:f.name===term.text?240:f.id.startsWith(term.text)?180:f.name.includes(term.text)?120:f.purpose.includes(term.text)?50:f.parts.includes(term.text)?30:f.all.includes(term.text)?10:0;
    matches.push({row,score});
  }
  matches.sort((a,b)=>{
    const id=compareIds(a.row.id,b.row.id);
    if(state.sort==='recent')return (Date.parse(b.row.addedAt)||0)-(Date.parse(a.row.addedAt)||0)||id;
    if(state.sort==='versions')return Number(b.row.versionCount??0)-Number(a.row.versionCount??0)||id;
    if(state.sort==='id-desc')return -id;
    return (state.sort==='relevance'?b.score-a.score:0)||id;
  });
  return matches.map(x=>x.row);
}

export function applyPreset(value,preset){
 const state={...DEFAULT_STATE,...value,page:0};
 if(preset==='recent')return {...state,sort:state.sort==='recent'?'relevance':'recent'};
 if(Object.hasOwn(STATUS_LABELS,preset))return {...state,status:state.status===preset?'':preset,generated:preset==='implemented'?state.generated:''};
 return state;
}
