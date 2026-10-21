import './reading-guide.css';
export type BibliographyRow={id:string;label:string;value:string};
type Props={category:string;titleLines:readonly string[];illustrationSrc:string;illustrationLabel:string;rows:readonly BibliographyRow[]};
export function ReadingGuideBibliography({category,titleLines,illustrationSrc,illustrationLabel,rows}:Props){return <section className="lh-reading-bibliography" aria-label="読書ガイドの書誌と挿絵"><p className="lh-reading-bibliography__category">{category}</p><h2>{titleLines.map((line,index)=><span key={index}>{line}</span>)}</h2><img src={illustrationSrc} alt={illustrationLabel}/><dl>{rows.map(row=><div key={row.id}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl></section>;}
