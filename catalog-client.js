import {DEFAULT_STATE,STATUS_LABELS,readState,writeState,searchCatalog,applyPreset} from './catalog-search.js';
const keys=Object.keys(DEFAULT_STATE).filter(key=>key!=='page');
const controls=Object.fromEntries(keys.map(key=>[key,document.getElementById(key)]));
const grid=document.getElementById('component-grid'),count=document.getElementById('count'),empty=document.getElementById('empty');
const previous=document.getElementById('previous-page'),next=document.getElementById('next-page'),pageNumber=document.getElementById('page-number');
const active=document.getElementById('active-filters'),feedback=document.getElementById('filter-feedback'),reset=document.getElementById('reset-filters');
const cache=new Map(),pageSize=48,categoryNames=new Map();
let catalog,state=readState(location.search),epoch=0,editingControl=null;
const labels={query:'検索語',category:'分野',app:'参考アプリ',generated:'画像生成版',status:'状態',part:'パーツ',original:'原画',native:'ネイティブ',guide:'ガイド',minVersions:'画像の版数',scope:'検索項目',match:'一致条件',sort:'並び順'};
const advancedKeys=['generated','part','original','native','guide','minVersions','scope','match'];
function writeControls(){for(const key of keys)controls[key].value=state[key];}
function saveLocation(push=false){const url=location.pathname+writeState(state)+location.hash;if(url!==location.pathname+location.search+location.hash)history[push?'pushState':'replaceState'](null,'',url);}
function valueLabel(key){
 if(key==='category')return categoryNames.get(state[key])??state[key];
 if(key==='status')return STATUS_LABELS[state[key]]??state[key];
 const control=controls[key];return control.tagName==='SELECT'?control.selectedOptions[0]?.textContent??state[key]:state[key];
}
function presetIsActive(preset){return preset==='recent'?state.sort==='recent':state.status===preset;}
function updateFilterSummary(){
 active.replaceChildren();
 for(const key of keys){
  if(state[key]===DEFAULT_STATE[key])continue;
  const li=document.createElement('li'),button=document.createElement('button');button.type='button';
  button.textContent=labels[key]+'：'+valueLabel(key)+'　解除';button.setAttribute('aria-label',labels[key]+'「'+valueLabel(key)+'」を解除');
  button.addEventListener('click',()=>{commit({...state,[key]:DEFAULT_STATE[key],page:0},true);controls.query.focus();});li.append(button);active.append(li);
 }
 reset.hidden=active.childElementCount===0;
 const n=advancedKeys.filter(key=>state[key]!==DEFAULT_STATE[key]).length;
 document.getElementById('advanced-count').textContent=n?'（'+n+'件選択中）':'';
 for(const button of document.querySelectorAll('[data-preset]'))button.setAttribute('aria-pressed',String(presetIsActive(button.dataset.preset)));
 document.getElementById('clear-query').disabled=!state.query;
}
function commit(value,push=false){state=readState(writeState(value));writeControls();saveLocation(push);feedback.textContent='';if(catalog)void render();else updateFilterSummary();}
function addOption(select,value,label){const option=document.createElement('option');option.value=value;option.textContent=label;select.append(option);}
function populateFacets(){
 const categories=new Map(),apps=new Map(),parts=new Map(),statuses=new Map();
 for(const item of catalog.items){
  categoryNames.set(item.category,item.categoryName??item.category);
  for(const [map,value] of [[categories,item.category],[apps,item.app],[statuses,item.status==='implemented'?'':item.status]])if(value)map.set(value,(map.get(value)??0)+1);
  if(item.implemented)statuses.set('implemented',(statuses.get('implemented')??0)+1);
  if(item.latestImageMissing)statuses.set('missing-image',(statuses.get('missing-image')??0)+1);
  for(const part of new Set(item.atoms??[]))parts.set(part,(parts.get(part)??0)+1);
 }
 controls.category.replaceChildren();addOption(controls.category,'','すべての分野');
 for(const [value,total] of [...categories].sort(([a],[b])=>a.localeCompare(b)))addOption(controls.category,value,categoryNames.get(value)+'（'+total+'）');
 if(state.category&&!categories.has(state.category))addOption(controls.category,state.category,'指定された分野：'+state.category);
 for(const id of ['app-options','part-options'])document.getElementById(id).replaceChildren();
 for(const [value,total] of [...apps].sort(([a],[b])=>a.localeCompare(b,'ja')))addOption(document.getElementById('app-options'),value,value+'（'+total+'）');
 for(const [value,total] of [...parts].sort((a,b)=>b[1]-a[1]).slice(0,40))addOption(document.getElementById('part-options'),value,value+'（'+total+'）');
 for(const option of controls.status.options)if(option.value)option.textContent=STATUS_LABELS[option.value]+'（'+(statuses.get(option.value)??0)+'）';
 writeControls();
}
async function loadBundle(file){
 if(!cache.has(file)){
  const entry={data:null,promise:null};
  entry.promise=fetch(file).then(async response=>{if(!response.ok)throw Error('bundle');entry.data=await response.json();return entry.data;}).catch(error=>{cache.delete(file);throw error;});
  cache.set(file,entry);
 }
 return cache.get(file).promise;
}
function errorMessage(message,retry){
 grid.replaceChildren();const panel=document.createElement('div'),text=document.createElement('p'),button=document.createElement('button');
 panel.className='catalog-error';panel.setAttribute('role','alert');text.textContent=message;button.type='button';button.textContent='再試行';button.addEventListener('click',retry);panel.append(text,button);grid.append(panel);grid.setAttribute('aria-busy','false');
}
function paint(items){
 grid.innerHTML=items.map(item=>{const html=cache.get(item.card)?.data?.[item.id];if(typeof html!=='string')throw Error('missing card');return html;}).join('');
 if(state.sort==='recent')for(const item of items){
  const body=document.getElementById(item.id)?.querySelector('.body');if(!body||!Number.isFinite(Date.parse(item.addedAt)))continue;
  const date=document.createElement('p');date.className='catalog-added';date.textContent='目録の初回記録：'+new Date(item.addedAt).toLocaleDateString('ja-JP',{year:'numeric',month:'2-digit',day:'2-digit',timeZone:'Asia/Tokyo'});body.prepend(date);
 }
 grid.setAttribute('aria-busy','false');
 if(location.hash){let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}document.getElementById(id)?.scrollIntoView({block:'start'});}
}
async function render(){
 const own=++epoch,items=searchCatalog(catalog.items,state),pages=Math.max(1,Math.ceil(items.length/pageSize));state.page=Math.min(state.page,pages-1);saveLocation();updateFilterSummary();
 previous.disabled=state.page===0;next.disabled=state.page===pages-1;pageNumber.textContent=(state.page+1)+' / '+pages;
 count.textContent=items.length.toLocaleString('ja-JP')+'件 / '+catalog.total.toLocaleString('ja-JP')+'件 · '+(state.page+1)+' / '+pages+'ページ';
 empty.hidden=items.length>0;grid.setAttribute('aria-busy','true');
 const selected=items.slice(state.page*pageSize,(state.page+1)*pageSize),files=[...new Set(selected.map(item=>item.card))];
 try{
  if(files.some(file=>!cache.get(file)?.data)){grid.innerHTML='<p class="catalog-loading" role="status">部品を読み込んでいます…</p>';await Promise.all(files.map(loadBundle));}
  if(own!==epoch)return;paint(selected);
 }catch{if(own===epoch)errorMessage('部品を読み込めませんでした。接続を確認して再試行してください。',()=>void render());}
}
async function loadCatalog(){
 grid.setAttribute('aria-busy','true');count.textContent='目録を読み込んでいます…';
 try{
  const response=await fetch('catalog.json');if(!response.ok)throw Error('catalog');catalog=await response.json();populateFacets();
  if(location.hash&&!state.query){let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{id='';}const index=searchCatalog(catalog.items,state).findIndex(x=>x.id===id);if(index>=0)state.page=Math.floor(index/pageSize);}
  await render();
 }catch{count.textContent='目録を読み込めませんでした';errorMessage('目録を読み込めませんでした。接続を確認して再試行してください。',()=>void loadCatalog());}
}
for(const key of keys){
 const control=controls[key],event=control.tagName==='SELECT'?'change':'input';
 const change=e=>{if(e.isComposing)return;const push=event==='change'||editingControl!==control;editingControl=control;commit({...state,[key]:control.value,page:0},push);};
 control.addEventListener(event,change);control.addEventListener('compositionend',change);control.addEventListener('blur',()=>{editingControl=null;});
}
document.getElementById('catalog-filters').addEventListener('submit',event=>event.preventDefault());
document.getElementById('clear-query').addEventListener('click',()=>{commit({...state,query:'',page:0},true);controls.query.focus();});
reset.addEventListener('click',()=>{commit({...DEFAULT_STATE},true);controls.query.focus();});
for(const button of document.querySelectorAll('[data-preset]'))button.addEventListener('click',()=>{
 commit(applyPreset(state,button.dataset.preset),true);
});
previous.addEventListener('click',()=>commit({...state,page:Math.max(0,state.page-1)},true));next.addEventListener('click',()=>commit({...state,page:state.page+1},true));
window.addEventListener('popstate',()=>{state=readState(location.search);writeControls();if(catalog)void render();else updateFilterSummary();});
document.getElementById('copy-search').addEventListener('click',async()=>{
 const url=new URL(location.pathname+writeState(state)+location.hash,location.origin).href;
 try{if(!navigator.clipboard?.writeText)throw Error('clipboard');await navigator.clipboard.writeText(url);feedback.textContent='検索リンクをコピーしました。';}
 catch{feedback.textContent='コピーできませんでした。アドレス欄のURLをコピーしてください。';}
});
writeControls();updateFilterSummary();void loadCatalog();
