const form=document.getElementById('prompt-form'),id=document.getElementById('component-id'),prompt=document.getElementById('prompt'),status=document.getElementById('prompt-status');
const makePrompt=value=>`Use $lighthouse-catalog-component-builder to implement catalog component ${value}. Follow the latest human scope, preserve reference media, verify the real component in production and the actual catalog, and record measured time and quality. Keep paused workers and automations stopped.`;
const requested=new URL(location.href).searchParams.get('component');
if(/^LH\d{2}-\d{4,6}$/.test(requested??'')){id.value=requested;prompt.value=makePrompt(requested);}
form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;prompt.value=makePrompt(id.value);status.textContent=`${id.value} の依頼文を作成しました。`;});
document.getElementById('copy-prompt').addEventListener('click',async()=>{try{if(!navigator.clipboard?.writeText)throw Error('clipboard unavailable');await navigator.clipboard.writeText(prompt.value);status.textContent='依頼文をコピーしました。';}catch{prompt.focus();prompt.select();status.textContent='自動コピーが使えません。選択した依頼文を手動でコピーしてください。';}});
