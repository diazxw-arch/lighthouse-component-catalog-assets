import {useId} from 'react';
import {badgeBackgroundTable,badgeIsolationGeometry,badgeRingTable} from './badge-background';
export type AchievementArt={src:string;width:number;height:number;label:string};
/** Isolate source regions so motif keying cannot cut the native ring contour. */
export function AchievementBadgeArt({src,width,height,label}:AchievementArt){
 const id=useId().replace(/:/g,''),geometry=badgeIsolationGeometry(width,height);
 // Unmeasured replacement art keeps its source rather than inheriting raster-specific masks.
 if(!geometry)return <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={label} className="lh-achievement-art"><image href={src} width={width} height={height}/></svg>;
 const {cx,cy,centerRadius,innerRadius,outerRadius}=geometry;
 return <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={label} className="lh-achievement-art">
  <defs>
   {[false,true].map(lower=><filter key={String(lower)} id={id+(lower?'-lower':'-upper')} x="0" y="0" width={width} height={height} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feColorMatrix in="SourceGraphic" type="luminanceToAlpha" result="luma"/>
    <feComponentTransfer in="luma" result="matte"><feFuncA type="table" tableValues={badgeBackgroundTable(lower)}/></feComponentTransfer>
    <feComposite in="SourceGraphic" in2="matte" operator="in"/>
   </filter>)}
   <filter id={id+'-ring-light-matte'} x="0" y="0" width={width} height={height} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feColorMatrix in="SourceGraphic" type="luminanceToAlpha" result="luma"/>
    <feComponentTransfer in="luma" result="matte"><feFuncA type="table" tableValues={badgeRingTable}/></feComponentTransfer>
    <feComposite in="SourceGraphic" in2="matte" operator="in"/>
   </filter>
   <clipPath id={id+'-center'}><circle cx={cx} cy={cy} r={centerRadius}/></clipPath>
   <clipPath id={id+'-top'}><rect width={width} height="384"/></clipPath>
   <clipPath id={id+'-bottom'}><rect y="384" width={width} height={Math.max(0,height-384)}/></clipPath>
   <mask id={id+'-ring'} x="0" y="0" width={width} height={height} maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" style={{maskType:'luminance'}}>
    <circle cx={cx} cy={cy} r={outerRadius} fill="white"/>
    <circle cx={cx} cy={cy} r={innerRadius} fill="black"/>
   </mask>
  </defs>
  <g clipPath={`url(#${id}-center)`}>
   <image href={src} width={width} height={height} filter={`url(#${id}-upper)`} clipPath={`url(#${id}-top)`}/>
   <image href={src} width={width} height={height} filter={`url(#${id}-lower)`} clipPath={`url(#${id}-bottom)`}/>
  </g>
  <image data-badge-layer="ring" href={src} width={width} height={height} filter={`url(#${id}-ring-light-matte)`} mask={`url(#${id}-ring)`}/>
 </svg>;
}
