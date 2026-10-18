const controls=['query','category','app','generated'].map(id=>document.getElementById(id));
const [query,category,app,generated]=controls,grid=document.getElementById('component-grid'),count=document.getElementById('count'),empty=document.getElementById('empty');
const previous=document.getElementById('previous-page'),next=document.getElementById('next-page'),pageNumber=document.getElementById('page-number');
const pageSize=48,cache=new Map();let catalog,page=0,epoch=0;
function readLocation(){const p=new URLSearchParams(location.search);for(const c of controls)c.value=p.get(c.id)??'';page=Math.max(0,(Number(p.get('page'))||1)-1);}
function saveLocation(){const p=new URLSearchParams();for(const c of controls)if(c.value)p.set(c.id,c.value);if(page)p.set('page',String(page+1));history.replaceState(null,'',location.pathname+(p.size?'?'+p:'')+location.hash);}
function visibleItems(){const terms=query.value.trim().toLowerCase().split(/\s+/).filter(Boolean);return catalog.items.filter(x=>(!category.value||x.category===category.value)&&(!app.value||x.app===app.value)&&(!generated.value||x.generated===generated.value)&&terms.every(t=>x.search.includes(t)));}
async function card(item){if(!cache.has(item.card)){cache.set(item.card,fetch(item.card).then(async response=>{if(!response.ok)throw Error('card');return response.json();}).catch(error=>{cache.delete(item.card);throw error;}));}const bundle=await cache.get(item.card);if(typeof bundle[item.id]!=='string')throw Error('card missing');return bundle[item.id];}
async function render(){
 const own=++epoch,items=visibleItems(),pages=Math.max(1,Math.ceil(items.length/pageSize));page=Math.min(page,pages-1);saveLocation();
 previous.disabled=page===0;next.disabled=page===pages-1;pageNumber.textContent=`${page+1} / ${pages}`;count.textContent=`${items.length}件 · ${page+1} / ${pages}ページ`;
 empty.hidden=items.length>0;grid.setAttribute('aria-busy','true');grid.innerHTML=items.length?'<p class="catalog-loading" role="status">部品を読み込んでいます…</p>':'';
 try{const html=await Promise.all(items.slice(page*pageSize,(page+1)*pageSize).map(card));if(own!==epoch)return;grid.innerHTML=html.join('');grid.setAttribute('aria-busy','false');if(location.hash){const target=document.getElementById(decodeURIComponent(location.hash.slice(1)));target?.scrollIntoView({block:'start'});}}
 catch{if(own!==epoch)return;grid.innerHTML='<p class="catalog-loading" role="alert">部品を読み込めませんでした。ページを再読み込みしてください。</p>';grid.setAttribute('aria-busy','false');}
}
for(const c of controls)c.addEventListener('input',()=>{page=0;if(catalog)void render();});
previous.addEventListener('click',()=>{page--;void render();});next.addEventListener('click',()=>{page++;void render();});
window.addEventListener('popstate',()=>{readLocation();if(catalog)void render();});
readLocation();
try{const response=await fetch('catalog.json');if(!response.ok)throw Error('catalog');catalog=await response.json();if(location.hash&&!query.value){const id=decodeURIComponent(location.hash.slice(1)),index=visibleItems().findIndex(x=>x.id===id);if(index>=0)page=Math.floor(index/pageSize);}await render();}
catch{grid.setAttribute('aria-busy','false');grid.innerHTML='<p class="catalog-loading" role="alert">目録を読み込めませんでした。接続を確認して再読み込みしてください。</p>';count.textContent='読み込みエラー';}
