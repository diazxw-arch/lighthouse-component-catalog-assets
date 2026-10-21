import './visual-search-selection.css';
export interface LimitedPhotoAccessBannerProps{onManage:()=>void;disabled?:boolean}
export function LimitedPhotoAccessBanner({onManage,disabled=false}:LimitedPhotoAccessBannerProps){return <aside className="lh-visual-search lh-limited-photo-access" aria-label="写真のアクセスについて"><p>表示されていない写真があります。写真を追加すると、ここから選べます。</p><button type="button" disabled={disabled} onClick={onManage}>管理</button></aside>;}
