import './visual-search-selection.css';
export interface PhotoCandidate{id:string;photo:string;alt:string;disabled?:boolean}
export interface PhotoCandidateStripProps{photos:readonly PhotoCandidate[];selectedId:string|null;onSelect:(id:string)=>void;disabled?:boolean}
export function PhotoCandidateStrip({photos,selectedId,onSelect,disabled=false}:PhotoCandidateStripProps){return <div className="lh-visual-search lh-photo-candidates" role="group" aria-label="画像検索に使う写真">{photos.map(photo=><button key={photo.id} type="button" aria-label={photo.alt} aria-pressed={selectedId===photo.id} disabled={disabled||photo.disabled} onClick={()=>onSelect(photo.id)}><img src={photo.photo} alt={photo.alt}/></button>)}</div>;}
