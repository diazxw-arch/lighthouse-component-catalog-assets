import { useRef } from 'react';
import './reading-notes.css';

export type ReadingReflectionTab = 'reflection' | 'comments';
export interface ReadingReflectionTabsProps {
  value: ReadingReflectionTab;
  commentCount: number;
  onChange: (value: ReadingReflectionTab) => void;
  panelIds?: Partial<Record<ReadingReflectionTab, string>>;
  disabled?: boolean;
}

/** The host supplies the actual article panels; this component owns only their navigation. */
export function ReadingReflectionTabs({ value, commentCount, onChange, panelIds, disabled }: ReadingReflectionTabsProps) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const keys: ReadingReflectionTab[] = ['reflection', 'comments'];
  return <nav className="lh-reflection-tabs" aria-label="読書の振り返りとコメント"><div role="tablist" aria-label="読書の内容">
    {keys.map((key, index) => <button key={key} ref={el => { buttons.current[index] = el; }} type="button" role="tab" aria-selected={value === key} aria-controls={panelIds?.[key]} tabIndex={value === key ? 0 : -1} disabled={disabled} onClick={() => onChange(key)} onKeyDown={event => {
      if (disabled || !['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? 1 : 1 - index;
      buttons.current[next]?.focus(); onChange(keys[next]);
    }}>{key === 'reflection' ? '振り返り' : `コメント ${commentCount}`}</button>)}
  </div></nav>;
}
