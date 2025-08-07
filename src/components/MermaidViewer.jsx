import { useEffect, useRef } from "react";
import mermaid from "mermaid";

// Configuración inicial para Mermaid v11
mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
  fontFamily: 'Arial, sans-serif',
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true
  },
  themeVariables: {
    fontSize: '16px'
  }
});

export default function MermaidViewer({ chart }) {
  const containerRef = useRef(null);

  useEffect(() => {
    console.log("🔍 MermaidViewer recibió chart:", chart);
    console.log("🔍 Container disponible:", !!containerRef.current);
    
    if (!chart || !containerRef.current) {
      console.log("⚠️ Falta chart o container");
      return;
    }

    const renderDiagram = async () => {
      try {
        // Mostrar indicador de carga
        containerRef.current.innerHTML = `
          <div class="flex items-center justify-center p-8">
            <div class="text-blue-600">Renderizando diagrama...</div>
          </div>
        `;
        
        // Generar ID único
        const id = `mermaid-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
        console.log("🔍 Generando diagrama con ID:", id);

        // Renderizar usando la API de Mermaid v11
        const { svg } = await mermaid.render(id, chart.trim());
        
        console.log("✅ Diagrama renderizado exitosamente");
        console.log("🔍 SVG generado:", svg ? "Sí" : "No");
        
        // Insertar el SVG en el contenedor
        if (containerRef.current && svg) {
          containerRef.current.innerHTML = svg;
        }
        
      } catch (error) {
        console.error("❌ Error completo:", error);
        console.error("❌ Chart problemático:", chart);
        
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div class="bg-red-50 border-l-4 border-red-400 p-4 my-4">
              <div class="flex">
                <div class="ml-3">
                  <h3 class="text-sm font-medium text-red-800">Error al renderizar diagrama</h3>
                  <div class="mt-2 text-sm text-red-700">
                    <p><strong>Mensaje:</strong> ${error.message || 'Error desconocido'}</p>
                    <details class="mt-2">
                      <summary class="cursor-pointer">Ver diagrama original</summary>
                      <pre class="mt-2 bg-gray-100 p-2 rounded text-xs overflow-auto">${chart}</pre>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          `;
        }
      }
    };

    // Pequeño delay para asegurar que el DOM esté listo
    const timeoutId = setTimeout(renderDiagram, 100);
    
    return () => clearTimeout(timeoutId);
  }, [chart]);

  return (
    <div className="w-full my-6">
      <div 
        ref={containerRef} 
        className="overflow-x-auto border border-gray-200 rounded-lg p-4 bg-white"
        style={{ minHeight: '200px' }}
      >
        <div class="flex items-center justify-center p-8 text-gray-500">
          Cargando componente...
        </div>
      </div>
    </div>
  );
}