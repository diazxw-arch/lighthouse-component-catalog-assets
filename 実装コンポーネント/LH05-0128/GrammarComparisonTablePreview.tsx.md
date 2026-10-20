import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {GrammarComparisonTable} from './GrammarComparisonTable';
import {comparisonColumns,comparisonRows} from './grammar-practice-demo-data';
import './grammar-practice-font.css';
import './grammar-practice-preview.css';
export function GrammarComparisonTablePreview(){const state=new URLSearchParams(location.search).get('state'),[message,setMessage]=useState('');return <main className="lh-grammar-demo"><GrammarComparisonTable label="名詞の性を対比する表" columns={comparisonColumns} rows={state==='empty'?[]:comparisonRows} disabled={state==='disabled'} onVocabulary={id=>setMessage('ことば「'+id+'」の説明を開くリクエストです。')}/><p role="status">{message}</p></main>;}
createRoot(document.getElementById('root')!).render(<GrammarComparisonTablePreview/>);
