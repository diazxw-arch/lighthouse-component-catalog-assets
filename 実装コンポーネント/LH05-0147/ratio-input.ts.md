export const cleanRatioValue=(value:string,maxLength=15)=>value.replace(/:/g,'：').replace(/[^0-9：]/g,'').slice(0,Math.max(1,Math.min(32,Number.isFinite(maxLength)?Math.floor(maxLength):15)));
