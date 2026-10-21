export interface PhotoRegion {x:number;y:number;width:number;height:number}
export type PhotoRegionCorner='nw'|'ne'|'sw'|'se';
interface RegionMinimum {width:number;height:number}
const bounded=(value:number,min:number,max:number)=>Math.min(max,Math.max(min,value));
const finite=(value:number,fallback:number)=>Number.isFinite(value)?value:fallback;
export function normalizePhotoRegion(region:PhotoRegion,minimum:RegionMinimum={width:.1,height:.1}):PhotoRegion {
 const minWidth=bounded(finite(minimum.width,.1),.1,1),minHeight=bounded(finite(minimum.height,.1),.1,1);
 const width=bounded(finite(region.width,1),minWidth,1),height=bounded(finite(region.height,1),minHeight,1);
 return{x:bounded(finite(region.x,0),0,1-width),y:bounded(finite(region.y,0),0,1-height),width,height};
}
export function resizePhotoRegion(region:PhotoRegion,corner:PhotoRegionCorner,dx:number,dy:number,minimum:RegionMinimum={width:.1,height:.1}):PhotoRegion {
 const r=normalizePhotoRegion(region,minimum),mw=bounded(finite(minimum.width,.1),.1,1),mh=bounded(finite(minimum.height,.1),.1,1);
 let left=r.x,top=r.y,right=r.x+r.width,bottom=r.y+r.height;dx=finite(dx,0);dy=finite(dy,0);
 if(corner==='nw'||corner==='sw')left=bounded(left+dx,0,right-mw);else right=bounded(right+dx,left+mw,1);
 if(corner==='nw'||corner==='ne')top=bounded(top+dy,0,bottom-mh);else bottom=bounded(bottom+dy,top+mh,1);
 return{x:left,y:top,width:left===r.x&&right===r.x+r.width?r.width:right-left,height:top===r.y&&bottom===r.y+r.height?r.height:bottom-top};
}

export function photoRegionCornerTarget(region:PhotoRegion,corner:PhotoRegionCorner,size:{width:number;height:number}){if(!Number.isFinite(size.width)||!Number.isFinite(size.height)||size.width<88||size.height<88)throw new RangeError('Corner targets require a photo at least88px on each axis');const x=(region.x+(corner.endsWith('e')?region.width:0))*size.width,y=(region.y+(corner.startsWith('s')?region.height:0))*size.height,cx=Math.min(size.width-22,Math.max(22,x)),cy=Math.min(size.height-22,Math.max(22,y));return {left:cx-22,top:cy-22,width:44,height:44,offsetX:cx-x,offsetY:cy-y};}
