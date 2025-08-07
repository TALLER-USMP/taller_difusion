import MermaidViewer from '../components/charts/MermaidViewer';
import { diagramaBase } from '../data/arquitectura/diagramas-base';

export default function Arquitectura() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Arquitectura del Sistema</h1>
      <MermaidViewer code={diagramaBase} />
    </div>
  );
}
