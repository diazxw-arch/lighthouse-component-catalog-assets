/** Shows an unchanged crop of original media; no filters or replacement paths. */
export function OriginalReferenceCrop({source,crop,sourceSize=[1179,2676]}:{source:string;crop:readonly[number,number,number,number];sourceSize?:readonly[number,number]}){
 const[x,y,width,height]=crop;
 return <svg viewBox={`0 0 ${width} ${height}`} aria-hidden="true" focusable="false"><image href={source} x={-x} y={-y} width={sourceSize[0]} height={sourceSize[1]}/></svg>;
}
