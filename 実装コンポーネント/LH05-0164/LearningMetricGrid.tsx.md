import './vocabulary-statistics.css';
export type LearningMetric={id:string;value:string;label:string};
type Props={metrics:readonly LearningMetric[];emptyLabel:string};
export function LearningMetricGrid({metrics,emptyLabel}:Props){return <section className="lh-learning-metrics" aria-label="読んだ語と保存と練習の四指標">{metrics.length?<dl>{metrics.map(metric=><div key={metric.id}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>:<p role="status">{emptyLabel}</p>}</section>;}
