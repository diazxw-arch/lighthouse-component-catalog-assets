import { useId } from 'react';
import './reading-reflection.css';

export interface ScriptureReflectionProps {
  heading: string;
  scripture: string[];
  attribution: string;
  reflection: string[];
  onMore: () => void;
  disabled?: boolean;
}

export function ScriptureReflection({ heading, scripture, attribution, reflection, onMore, disabled }: ScriptureReflectionProps) {
  const headingId = useId();
  return <article className="lh-scripture-reflection" aria-labelledby={headingId}>
    <header>
      <h2 id={headingId}>{heading}</h2>
      <button type="button" aria-label="振り返りのその他の操作" onClick={onMore} disabled={disabled}>
        <svg viewBox="0 0 20 8" aria-hidden="true"><circle cx="3" cy="4" r="1.5"/><circle cx="10" cy="4" r="1.5"/><circle cx="17" cy="4" r="1.5"/></svg>
      </button>
    </header>
    <blockquote>{scripture.map((line, index) => <span key={index}>{line}</span>)}</blockquote>
    <p className="lh-scripture-reflection__attribution">{attribution}</p>
    <p className="lh-scripture-reflection__body">{reflection.map((line, index) => <span key={index}>{line}</span>)}</p>
    <hr/>
  </article>;
}
