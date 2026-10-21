/** Smooth alpha removes measured matte/compression noise without opaque islands. */
function matteTable(opaqueThrough:number,transparentFrom:number){
 return Array.from({length:256},(_,value)=>String(Math.max(0,Math.min(1,(transparentFrom-value)/(transparentFrom-opaqueThrough))))).join(' ');
}
/** The source matte changes from214/215 to196/197 at y=384. */
export function badgeBackgroundTable(lower:boolean){return lower?matteTable(180,190):matteTable(196,208);}
/** Ring pixels bypass the motif key; only the light external matte fades. */
export const badgeRingTable=matteTable(240,250);
/** Bounds fitted to retained source rasters; masks select pixels and do not redraw artwork. */
export function badgeIsolationGeometry(width:number,height:number){
 if(height!==493)return undefined;
 switch(width){
  case 145:return {cx:-71.117,cy:252.426,centerRadius:192,innerRadius:203.8,outerRadius:222};
  case 435:return {cx:223.266,cy:251.45,centerRadius:196,innerRadius:206.5,outerRadius:224};
  case 502:return {cx:259.513,cy:251.392,centerRadius:196,innerRadius:206.5,outerRadius:224};
  default:return undefined;
 }
}
