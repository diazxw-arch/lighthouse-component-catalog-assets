import { useId } from 'react';
import './reading-reader.css';

export interface QuoteTagNoteEditorProps {
  note: string;
  onNoteChange: (note: string) => void;
  onAddTag: () => void;
  onTag: (tag: 'excerpt' | 'reading-note') => void;
  disabled?: boolean;
  error?: string;
}

export function QuoteTagNoteEditor({ note, onNoteChange, onAddTag, onTag, disabled, error }: QuoteTagNoteEditorProps) {
  const id=useId();
  return <section className="lh-quote-editor" aria-label="引用のタグとメモ">
    <p className="lh-quote-editor__label">この引用のタグ</p>
    <div className="lh-quote-editor__tags">
      <button type="button" className="lh-quote-editor__add" onClick={onAddTag} disabled={disabled}><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10M3 8h10"/></svg>タグを追加</button>
      <button type="button" onClick={()=>onTag('excerpt')} disabled={disabled}><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 3h12M2 6.3h10M2 9.7h7M2 13h4"/></svg>抜粋</button>
      <button type="button" onClick={()=>onTag('reading-note')} disabled={disabled}><svg viewBox="0 0 16 16" aria-hidden="true"><path d="m6 2-2 12M12 2l-2 12M2 6h12M1 10h12"/></svg>読書メモ</button>
    </div>
    <label className="lh-quote-editor__note-label" htmlFor={id}>引用につけるメモ</label>
    <textarea id={id} value={note} onChange={event=>onNoteChange(event.target.value)} disabled={disabled} aria-invalid={!!error} aria-describedby={error?id+'-error':undefined}/>
    {error&&<p id={id+'-error'} role="alert" className="lh-reader-error">{error}</p>}
  </section>;
}
