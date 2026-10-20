/** Editable outlines preserve the original small utility glyph anatomy. */
export function ReadingAnnotationGlyph({ kind }: { kind: 'navigate' | 'copy' | 'delete' | 'edit' | 'more' | 'previous' | 'next' }) {
  let viewBox='2 2 20 20';
  if(kind==='previous'||kind==='next')viewBox='3 5 18 14';
  else if(kind==='more')viewBox='0 0 24 24';
  return <svg viewBox={viewBox} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {kind === 'navigate' && <path d="m21 3-6.5 18-3.5-8-8-3.5L21 3Zm0 0-10 10"/>}
    {kind === 'copy' && <><rect x="8" y="8" width="12" height="13" rx="2.5"/><path d="M15 8V5.5A2.5 2.5 0 0 0 12.5 3h-7A2.5 2.5 0 0 0 3 5.5v7A2.5 2.5 0 0 0 5.5 15H8"/></>}
    {kind === 'delete' && <><path d="M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7m4-7v7"/></>}
    {kind === 'edit' && <path d="m4 15 11-11a2.4 2.4 0 0 1 3.5 0L20 5.5a2.4 2.4 0 0 1 0 3.5L9 20l-6 1 1-6Zm9-9 5 5M4 15l5 5"/>}
    {kind === 'more' && <g fill="currentColor" stroke="none"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></g>}
    {kind === 'previous' && <path d="M20 12H4m6-6-6 6 6 6"/>}
    {kind === 'next' && <path d="M4 12h16m-6-6 6 6-6 6"/>}
  </svg>;
}
