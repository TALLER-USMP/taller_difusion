// src/components/charts/software/FrontendFlow.jsx
import React, { useCallback, useMemo, useEffect, useState } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
  Position,
  useReactFlow,
  NodeResizer,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { frontendNodes, frontendEdges } from '../../../data/arquitectura/software/frontend-nodes';

// Componente personalizado para los nodos con colores profesionales
const CustomNode = ({ data }) => {
  const getNodeStyle = (type) => {
    switch (type) {
      case 'person':
        return 'bg-gradient-to-br from-slate-50 to-slate-100 border-slate-400 text-slate-800 shadow-slate-200';
      case 'service':
        return 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-400 text-blue-800 shadow-blue-200';
      case 'application':
        return 'bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-400 text-emerald-800 shadow-emerald-200';
      case 'architecture':
        return 'bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-400 text-indigo-800 shadow-indigo-200';
      case 'ui':
        return 'bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-400 text-cyan-800 shadow-cyan-200';
      case 'tool':
        return 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-400 text-orange-800 shadow-orange-200';
      default:
        return 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-400 text-gray-800 shadow-gray-200';
    }
  };

  const getIconPlaceholder = (type) => {
    switch (type) {
      case 'person':
        return '👨‍💻';
      case 'service':
        return '⚙️';
      case 'application':
        return '🌐';
      case 'architecture':
        return '🏗️';
      case 'ui':
        return '🎨';
      case 'tool':
        return '🛠️';
      default:
        return '📦';
    }
  };

  const getBorderStyle = (type) => {
    switch (type) {
      case 'person':
        return 'border-l-4 border-l-slate-500';
      case 'service':
        return 'border-l-4 border-l-blue-500';
      case 'application':
        return 'border-l-4 border-l-emerald-500';
      case 'architecture':
        return 'border-l-4 border-l-indigo-500';
      case 'ui':
        return 'border-l-4 border-l-cyan-500';
      case 'tool':
        return 'border-l-4 border-l-orange-500';
      default:
        return 'border-l-4 border-l-gray-500';
    }
  };

  return (
    <div className={`px-4 py-3 shadow-lg rounded-xl border-2 min-w-[200px] transition-all duration-300 hover:shadow-xl hover:scale-105 ${getNodeStyle(data.type)} ${getBorderStyle(data.type)}`}>
      {/* HANDLES - Puntos de conexión en los 4 lados */}
      <Handle type="target" position={Position.Left} id="left" className="w-3 h-3 !bg-slate-600 border-2 border-white shadow-md" />
      <Handle type="source" position={Position.Right} id="right" className="w-3 h-3 !bg-slate-600 border-2 border-white shadow-md" />
      <Handle type="target" position={Position.Top} id="top" className="w-3 h-3 !bg-slate-600 border-2 border-white shadow-md" />
      <Handle type="source" position={Position.Bottom} id="bottom" className="w-3 h-3 !bg-slate-600 border-2 border-white shadow-md" />
      
      <div className="flex flex-col items-center text-center">
        <div className={`relative ${data.label ? 'mb-3' : 'mb-0'}`}>
          {data.icon ? (
            <img
              src={data.icon}
              alt={data.label || 'Icon'}
              className={`object-contain ${data.label ? 'w-14 h-14' : 'w-20 h-20'}`}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
          ) : null}
          <div className={`${data.label ? 'text-4xl' : 'text-5xl'}`} style={{ display: data.icon ? 'none' : 'block' }}>
            {getIconPlaceholder(data.type)}
          </div>
        </div>
        {data.label && (
          <div className="font-bold text-sm mb-1 uppercase tracking-wider">{data.label}</div>
        )}
      </div>
    </div>
  );
};

// NUEVO: Componente para contenedores redimensionables
const ContainerNode = ({ data, selected, id }) => {
  // Estilo de contenedor con tema cyan para frontend
  const style = {
    bg: 'bg-black-50/60',
    border: 'border-black-300',
    text: 'text-black-800',
    shadow: 'shadow-black-100'
  };

  return (
    <div className={`w-full h-full ${style.bg} ${style.border} border-2 border-dashed rounded-xl ${style.shadow} shadow-lg backdrop-blur-sm relative`}>
      {/* NodeResizer para hacer el contenedor redimensionable */}
      <NodeResizer
        color="#0891b2"
        isVisible={selected}
        minWidth={200}
        minHeight={150}
        keepAspectRatio={false}
      />
      
      {/* Handles en todos los lados para conexiones */}
      <Handle type="target" position={Position.Left} id="left" className="w-4 h-4 !bg-cyan-500 border-2 border-white shadow-md opacity-75" />
      <Handle type="source" position={Position.Right} id="right" className="w-4 h-4 !bg-cyan-500 border-2 border-white shadow-md opacity-75" />
      <Handle type="target" position={Position.Top} id="top" className="w-4 h-4 !bg-cyan-500 border-2 border-white shadow-md opacity-75" />
      <Handle type="source" position={Position.Bottom} id="bottom" className="w-4 h-4 !bg-cyan-500 border-2 border-white shadow-md opacity-75" />

      {/* Etiqueta del contenedor - solo si tiene nombre */}
      {data.label && (
        <div className={`absolute top-2 left-3 ${style.text} font-bold text-sm uppercase tracking-wider px-2 py-1 bg-white/80 rounded-md shadow-sm`}>
          {data.label}
        </div>
      )}

      {/* Indicador de redimensionable cuando está seleccionado */}
      {selected && (
        <div className="absolute top-2 right-3 text-cyan-500 text-xs font-medium bg-white/90 px-2 py-1 rounded-md shadow-sm">
          Redimensionable ↗️
        </div>
      )}
    </div>
  );
};

const FrontendFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(frontendNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(frontendEdges);
  const [containerCounter, setContainerCounter] = useState(1);
  const [containerName, setContainerName] = useState('');
  
  // Callback para conectar nodos
  const onConnect = useCallback((params) => {
    console.log('Conectando:', params);
    setEdges((els) => addEdge({
      ...params,
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#0891b2', strokeWidth: 2 },
      markerEnd: { type: 'arrowclosed', color: '#0891b2' },
    }, els));
  }, [setEdges]);

  // NUEVO: Función para añadir contenedores
  const addContainer = useCallback(() => {
    const newContainer = {
      id: `container-${containerCounter}`,
      type: 'container',
      position: { x: 100, y: 100 },
      style: { 
        width: 300, 
        height: 200,
        zIndex: -1, // Los contenedores van detrás de los nodos normales
      },
      data: {
        label: containerName.trim() || '', // Usar el nombre ingresado o dejarlo vacío
      },
    };

    setNodes((nds) => [...nds, newContainer]);
    setContainerCounter(prev => prev + 1);
    setContainerName(''); // Limpiar el input después de añadir
  }, [containerCounter, containerName, setNodes]);

  // Definir los tipos de nodos personalizados
  const customNodeTypes = useMemo(() => ({
    custom: CustomNode,
    container: ContainerNode, // NUEVO: Tipo de nodo contenedor
  }), []);

  // Función para normalizar las rutas de los iconos
  const normalizeIconPath = (iconPath) => {
    if (!iconPath) return iconPath;
    
    // Si ya tiene BASE_URL, devolverla tal como está
    if (iconPath.includes('${BASE_URL}')) {
      return iconPath;
    }
    
    // Si es una ruta absoluta que empieza con /taller_difusion/, convertirla
    if (iconPath.startsWith('/taller_difusion/assets/')) {
      return iconPath.replace('/taller_difusion/', '${BASE_URL}');
    }
    
    // Si es una ruta que empieza con assets/, agregar BASE_URL
    if (iconPath.startsWith('assets/')) {
      return `\${BASE_URL}${iconPath}`;
    }
    
    // Si no coincide con ningún patrón, devolverla tal como está
    return iconPath;
  };

  // Función para guardar los cambios
  const saveChanges = useCallback(() => {
    const exportData = {
      nodes: nodes.map(node => ({
        id: node.id,
        type: node.type,
        position: node.position,
        data: {
          ...node.data,
          // Normalizar la ruta del icono
          icon: normalizeIconPath(node.data.icon)
        },
        // IMPORTANTE: Capturar el tamaño actual del nodo (incluyendo redimensiones)
        style: node.style,
        width: node.width,
        height: node.height,
        ...(node.measured && { 
          measured: {
            width: node.measured.width,
            height: node.measured.height
          }
        })
      })),
      edges: edges.map(edge => ({
        id: edge.id,
        source: edge.source,
        target: edge.target,
        sourceHandle: edge.sourceHandle,
        targetHandle: edge.targetHandle,
        type: edge.type || 'smoothstep',
        animated: edge.animated || true,
        style: edge.style || { stroke: '#0891b2', strokeWidth: 2 },
        markerEnd: edge.markerEnd || { type: 'arrowclosed', color: '#0891b2' },
        label: edge.label || '',
        labelStyle: edge.labelStyle || { fontSize: 12, fontWeight: 600 },
      }))
    };
    
    console.log('Datos actualizados Frontend (rutas normalizadas):', exportData);
    
    // Función para convertir JSON a código con template literals
    const formatWithTemplateLiterals = (obj, indent = 0) => {
      const spaces = '  '.repeat(indent);
      
      if (Array.isArray(obj)) {
        if (obj.length === 0) return '[]';
        const items = obj.map(item => formatWithTemplateLiterals(item, indent + 1));
        return '[\n' + items.map(item => '  ' + spaces + item).join(',\n') + '\n' + spaces + ']';
      }
      
      if (obj && typeof obj === 'object') {
        const entries = Object.entries(obj);
        if (entries.length === 0) return '{}';
        
        const props = entries.map(([key, value]) => {
          const formattedValue = formatWithTemplateLiterals(value, indent + 1);
          // Si es la propiedad "icon" y contiene ${BASE_URL}, usar backticks
          if (key === 'icon' && typeof value === 'string' && value.includes('${BASE_URL}')) {
            return `"${key}": \`${value}\``;
          }
          return `"${key}": ${formattedValue}`;
        });
        
        return '{\n' + props.map(prop => '  ' + spaces + prop).join(',\n') + '\n' + spaces + '}';
      }
      
      if (typeof obj === 'string') {
        return `"${obj}"`;
      }
      
      return JSON.stringify(obj);
    };
    
    const formattedNodes = formatWithTemplateLiterals(exportData.nodes);
    const formattedEdges = formatWithTemplateLiterals(exportData.edges);
    
    const code = `// Exportado desde el editor Frontend
const BASE_URL = import.meta.env.BASE_URL;

export const frontendNodes = ${formattedNodes};

export const frontendEdges = ${formattedEdges};

export const nodeTypes = {
  custom: 'customNode',
  container: 'containerNode'
};`;
    
    navigator.clipboard.writeText(code);
    
    alert('¡Datos Frontend copiados al clipboard con template literals correctos! Pégalos en tu archivo frontend-nodes.js');
  }, [nodes, edges]);

  // Función para resetear a valores originales
  const resetChanges = useCallback(() => {
    setNodes(frontendNodes);
    setEdges(frontendEdges);
    setContainerCounter(1);
    setContainerName('');
  }, [setNodes, setEdges]);

  // Fit view automático
  const { fitView } = useReactFlow();
  useEffect(() => {
    setTimeout(() => {
      fitView({ padding: 0.1 });
    }, 100);
  }, [fitView]);

  return (
    <div className="space-y-6">
      {/* Panel de información superior */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Leyenda - Servicios de Azure */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <h3 className="font-bold text-base text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></span>
            Servicios de Azure
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-600 rounded-full shadow-sm"></div>
              <span className="text-slate-700 font-medium">Azure Front Door</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-emerald-600 rounded-full shadow-sm"></div>
              <span className="text-slate-700 font-medium">Web Application</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-indigo-600 rounded-full shadow-sm"></div>
              <span className="text-slate-700 font-medium">Microfrontends</span>
            </div>
          </div>
        </div>

        {/* Herramientas de Desarrollo */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="text-sm text-slate-700">
            <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <span className="text-lg">🛠️</span> Herramientas
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1">
                {['React 18', 'JavaScript (ES2022)', 'Tailwind'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-orange-100 text-orange-800 rounded-md text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {['Visual Studio Code', 'GitHub'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-800 rounded-md text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {['Playwright', 'Cypress'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Arquitectura Frontend */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="text-sm text-slate-600 font-medium">
            <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <span className="text-lg">⚡</span> Arquitectura Frontend
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-cyan-600">•</span>
              <span>Render & UI</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-blue-600">•</span>
              <span>Estado & Data</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600">•</span>
              <span>Routing & Nav</span>
            </div>
          </div>
        </div>

        {/* NUEVO: Panel de contenedores */}
        {/*<div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="text-lg">📦</span> Contenedores
          </div>
          <div className="space-y-2">
            {/* Input para el nombre del contenedor 
            <input
              type="text"
              value={containerName}
              onChange={(e) => setContainerName(e.target.value)}
              placeholder="Nombre del contenedor (opcional)"
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:border-cyan-500"
            />
            <button
              onClick={addContainer}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              ➕ Añadir Contenedor
            </button>
          </div>
          <div className="mt-2 text-xs text-slate-600">
            <p>• Deja el nombre vacío para contenedor sin etiqueta</p>
            <p>• Selecciona para redimensionar</p>
          </div>
        </div>*/}

        {/* Panel de controles del editor
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="text-lg">✏️</span> Modo Editor
          </div>
          <div className="space-y-2">
            <button
              onClick={saveChanges}
              className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              💾 Guardar Cambios
            </button>
            <button
              onClick={resetChanges}
              className="w-full bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              🔄 Resetear
            </button>
          </div>
          <div className="mt-3 text-xs text-slate-600">
            <p>• Arrastra los nodos</p>
            <p>• Selecciona y redimensiona contenedores</p>
            <p>• Conecta desde los handles</p>
            <p>• Guarda para exportar</p>
          </div>
        </div>*/}
      </div>

      {/* Contenedor del diagrama */}
      <div className="w-full h-[700px] bg-gradient-to-br from-slate-50 via-white to-cyan-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={customNodeTypes}
          fitView
          fitViewOptions={{ padding: 80, includeHiddenNodes: false }}
          minZoom={0.3}
          maxZoom={1.2}
          proOptions={{ hideAttribution: true }}
          nodesDraggable={true}
          nodesConnectable={true}
          elementsSelectable={true}
          connectionLineType="smoothstep"
          connectionLineStyle={{ stroke: '#0891b2', strokeWidth: 2 }}
          defaultEdgeOptions={{
            type: 'smoothstep',
            animated: true,
            style: { stroke: '#0891b2', strokeWidth: 2 },
            markerEnd: { type: 'arrowclosed', color: '#0891b2' },
          }}
        >
          <Background variant="dots" gap={25} size={1.5} color="#cbd5e1" />
          <Controls
            showZoom={true}
            showFitView={true}
            showInteractive={true}
            className="bg-white/95 backdrop-blur-sm border border-slate-300 rounded-lg shadow-lg"
          />
          <MiniMap
            nodeStrokeColor={(n) => {
              if (n.type === 'container') return '#0891b2';
              if (n.data.type === 'person') return '#475569';
              if (n.data.type === 'service') return '#1e40af';
              if (n.data.type === 'application') return '#059669';
              if (n.data.type === 'architecture') return '#4338ca';
              if (n.data.type === 'ui') return '#0891b2';
              if (n.data.type === 'tool') return '#ea580c';
              return '#6b7280';
            }}
            nodeColor={(n) => {
              if (n.type === 'container') return '#cffafe';
              if (n.data.type === 'person') return '#f1f5f9';
              if (n.data.type === 'service') return '#dbeafe';
              if (n.data.type === 'application') return '#d1fae5';
              if (n.data.type === 'architecture') return '#e0e7ff';
              if (n.data.type === 'ui') return '#cffafe';
              if (n.data.type === 'tool') return '#fed7aa';
              return '#f3f4f6';
            }}
            nodeBorderRadius={12}
            className="bg-white/95 backdrop-blur-sm border border-slate-300 rounded-lg shadow-lg"
          />
        </ReactFlow>
      </div>
    </div>
  );
};

export default FrontendFlow;