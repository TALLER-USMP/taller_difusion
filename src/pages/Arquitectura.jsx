import MermaidViewer from "../components/MermaidViewer";
import { diagramaInicial, diagramaPrueba } from "../data/arquitectura/diagramas-base";

export default function Arquitectura() {
  console.log("🔍 Arquitectura renderizada");
  console.log("🔍 diagramaInicial:", diagramaInicial);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Diagrama de Arquitectura</h1>
      
      {/* Información de debugging 
      <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6 text-sm">
        <p><strong>Estado:</strong> Componente cargado ✅</p>
        <p><strong>Diagrama disponible:</strong> {diagramaInicial ? "Sí ✅" : "No ❌"}</p>
        <p><strong>Longitud del diagrama:</strong> {diagramaInicial?.length || 0} caracteres</p>
      </div>*/}

      {/* Diagrama principal */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Diagrama Prueba Temporal</h2>
        <MermaidViewer chart={diagramaInicial} />
      </div>

      {/* Diagrama de prueba simple */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Diagrama Principal</h2>
        <MermaidViewer chart={diagramaPrueba} />
      </div>

      {/* Mostrar código fuente para verificar */}
      <details className="bg-gray-50 border rounded p-4">
        <summary className="cursor-pointer font-medium">Ver código del diagrama</summary>
        <pre className="mt-4 bg-white p-4 rounded border text-sm overflow-auto">
            {diagramaInicial}
        </pre>
      </details>
    </div>
  );
}