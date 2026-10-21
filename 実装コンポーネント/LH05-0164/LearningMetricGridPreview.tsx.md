import {createRoot} from 'react-dom/client';import {LearningMetricGrid} from './LearningMetricGrid';import {statisticsCopy,learningMetrics} from './vocabulary-statistics-demo-data';
import './vocabulary-statistics-font.css';import './vocabulary-statistics-preview.css';
export function LearningMetricGridPreview(){return <main className="lh-vocabulary-statistics-demo"><LearningMetricGrid metrics={new URLSearchParams(location.search).get('state')==='empty'?[]:learningMetrics} emptyLabel={statisticsCopy.emptyMetricsLabel}/></main>;}
createRoot(document.getElementById('root')!).render(<LearningMetricGridPreview/>);
