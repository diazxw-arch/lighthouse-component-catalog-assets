type Props={source:string;kind:'programming'|'projector'};
/** Clip only the protected artwork region; the source JPEG bytes remain unchanged. */
export function OriginalCourseThumbnail({source,kind}:Props){return <svg viewBox={kind==='programming'?'68 524 114 114':'787 524 114 114'} aria-hidden="true" focusable="false"><image href={source} width="1179" height="2676"/></svg>;}
