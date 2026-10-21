/* The actual catalog's 320px parent gives these components a 282px iframe.
   Preserve all authored geometry at content widths of 320px and above. */
@media(width < 320px){
 .lh-paired-reflections .lh-reflection-tabs [role=tab]:last-child{flex:1;width:auto;min-width:0}
 .lh-retention-guide .lh-retention-guide__diagram{left:8px;right:8px;width:auto;height:80px}
 .lh-retention-guide .lh-retention-guide__diagram p{left:auto;right:0;top:48px}
 .lh-letter-sound .lh-letter-sound__prompt h2{left:min(178px,calc(100% - 88px));width:clamp(88px,calc(100% - 178px),120px)}
}
