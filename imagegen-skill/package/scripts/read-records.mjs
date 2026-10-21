export function readRecords(text){
 const out=[];let i=0;
 while(i<text.length){
  while(i<text.length&&/\s/.test(text[i]))i++;
  if(i===text.length)break;
  if(text[i]!=='{')throw Error('Expected JSON object at offset '+i);
  const start=i;let depth=0,inString=false,escaped=false,ended=false;
  for(;i<text.length;i++){
   const c=text[i];
   if(inString){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c==='"')inString=false;continue;}
   if(c==='"')inString=true;
   else if(c==='{')depth++;
   else if(c==='}'&&--depth===0){out.push(JSON.parse(text.slice(start,++i)));ended=true;break;}
  }
  if(!ended)throw Error('Truncated JSON object at offset '+start);
 }
 return out;
}
