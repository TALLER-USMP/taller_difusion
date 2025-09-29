// src/components/charts/software/InfraestructuraFlow.jsx
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

// IMPORTA LOS DATOS DESDE EL ARCHIVO EXTERNO
import { infraestructuraNodes, infraestructuraEdges } from '../../../data/arquitectura/software/infraestructura-nodes';

// Componente personalizado para los nodos - COLORES ORIGINALES DEL CÓDIGO 2
const CustomNode = ({ data }) => {
    const getNodeStyle = (type) => {
        switch (type) {
          case 'client':
            return 'bg-gradient-to-br from-blue-100 to-blue-200 border-blue-500 text-blue-900 shadow-blue-200';
          case 'gateway':
            return 'bg-gradient-to-br from-blue-200 to-blue-300 border-blue-600 text-blue-900 shadow-blue-300';
          case 'compute':
            return 'bg-gradient-to-br from-blue-100 to-blue-150 border-blue-400 text-blue-800 shadow-blue-100';
          case 'serverless':
            return 'bg-gradient-to-br from-cyan-100 to-cyan-200 border-cyan-500 text-cyan-900 shadow-cyan-200';
          case 'database':
            return 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-500 text-gray-900 shadow-gray-200';
          case 'cache':
            return 'bg-gradient-to-br from-cyan-100 to-cyan-200 border-cyan-500 text-cyan-900 shadow-cyan-200';
          case 'storage':
            return 'bg-gradient-to-br from-green-100 to-green-200 border-green-500 text-green-900 shadow-green-200';
          case 'security':
            return 'bg-gradient-to-br from-yellow-100 to-yellow-200 border-yellow-500 text-yellow-900 shadow-yellow-200';
          case 'monitoring':
            return 'bg-gradient-to-br from-yellow-200 to-yellow-300 border-yellow-600 text-yellow-900 shadow-yellow-300';
          default:
            return 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-400 text-gray-800 shadow-gray-200';
        }
    };

  const getIconPlaceholder = (type) => {
    switch (type) {
      case 'client':
        return '💻';
      case 'gateway':
        return '🌐';
      case 'compute':
        return '⚙️';
      case 'serverless':
        return '⚡';
      case 'database':
        return '🗄️';
      case 'cache':
        return '⚡';
      case 'storage':
        return '💾';
      case 'security':
        return '🔒';
      case 'monitoring':
        return '📊';
      default:
        return '📦';
    }
  };

  const getBorderStyle = (type) => {
    switch (type) {
      case 'client':
        return 'border-l-4 border-l-blue-600';
      case 'gateway':
        return 'border-l-4 border-l-blue-700';
      case 'compute':
        return 'border-l-4 border-l-blue-500';
      case 'serverless':
        return 'border-l-4 border-l-cyan-600';
      case 'database':
        return 'border-l-4 border-l-gray-600';
      case 'cache':
        return 'border-l-4 border-l-cyan-600';
      case 'storage':
        return 'border-l-4 border-l-green-600';
      case 'security':
        return 'border-l-4 border-l-yellow-600';
      case 'monitoring':
        return 'border-l-4 border-l-yellow-700';
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
        {data.description && (
          <div className="text-xs text-gray-600 mt-1">{data.description}</div>
        )}
      </div>
    </div>
  );
};

// Componente para contenedores - COLORES ORIGINALES DEL CÓDIGO 2
const ContainerNode = ({ data, selected, id }) => {
  const getContainerStyle = (color) => {
    const colorStyles = {
      '#DAE8FC': { bg: 'bg-blue-100', border: 'border-blue-400', text: 'text-blue-900', shadow: 'shadow-blue-200' },
      '#FFE6CC': { bg: 'bg-orange-100', border: 'border-orange-400', text: 'text-orange-900', shadow: 'shadow-orange-200' },
      '#E1D5E7': { bg: 'bg-purple-100', border: 'border-purple-400', text: 'text-purple-900', shadow: 'shadow-purple-200' },
      '#BAC8D3': { bg: 'bg-slate-100', border: 'border-slate-400', text: 'text-slate-900', shadow: 'shadow-slate-200' },
      '#B1DDF0': { bg: 'bg-sky-100', border: 'border-sky-400', text: 'text-sky-900', shadow: 'shadow-sky-200' },
      '#B0E3E6': { bg: 'bg-teal-100', border: 'border-teal-400', text: 'text-teal-900', shadow: 'shadow-teal-200' },
      '#FFFFFF': { bg: 'bg-white', border: 'border-gray-400', text: 'text-gray-900', shadow: 'shadow-gray-200' },
    };
    return colorStyles[color] || colorStyles['#DAE8FC'];
  };

  const style = getContainerStyle(data.backgroundColor || '#DAE8FC');

  return (
    <div 
      className={`w-full h-full ${style.bg} ${style.border} border-2 border-dashed rounded-xl ${style.shadow} shadow-lg relative`}
    >
      <NodeResizer
        color={data.backgroundColor || '#1e40af'}
        isVisible={selected}
        minWidth={200}
        minHeight={150}
        keepAspectRatio={false}
      />
      
      <Handle type="target" position={Position.Left} id="left" className="w-4 h-4 !bg-blue-500 border-2 border-white shadow-md opacity-75" />
      <Handle type="source" position={Position.Right} id="right" className="w-4 h-4 !bg-blue-500 border-2 border-white shadow-md opacity-75" />
      <Handle type="target" position={Position.Top} id="top" className="w-4 h-4 !bg-blue-500 border-2 border-white shadow-md opacity-75" />
      <Handle type="source" position={Position.Bottom} id="bottom" className="w-4 h-4 !bg-blue-500 border-2 border-white shadow-md opacity-75" />

      {data.label && (
        <div className={`absolute top-2 left-3 ${style.text} font-bold text-sm uppercase tracking-wider px-2 py-1 bg-white/80 rounded-md shadow-sm`}>
          {data.label}
        </div>
      )}

      {selected && (
        <div className="absolute top-2 right-3 text-blue-500 text-xs font-medium bg-white/90 px-2 py-1 rounded-md shadow-sm">
          Redimensionable ↗️
        </div>
      )}
    </div>
  );
};

const InfraestructuraFlow = () => {
  // USA LOS DATOS IMPORTADOS EN LUGAR DE LOS DEFINIDOS LOCALMENTE
  const [nodes, setNodes, onNodesChange] = useNodesState(infraestructuraNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(infraestructuraEdges);
  
  const [containerCounter, setContainerCounter] = useState(1);
  const [nodeCounter, setNodeCounter] = useState(18);
  const [containerName, setContainerName] = useState('');
  const [selectedEdge, setSelectedEdge] = useState(null);
  const [edgeLabel, setEdgeLabel] = useState('');
  const [showEdgeLabelModal, setShowEdgeLabelModal] = useState(false);
  const [containerColor, setContainerColor] = useState('#DAE8FC');
  
  // Estados para añadir nodos
  const [newNodeName, setNewNodeName] = useState('');
  const [newNodeType, setNewNodeType] = useState('compute');
  const [newNodeDescription, setNewNodeDescription] = useState('');

  // Colores disponibles para contenedores
  const containerColorOptions = [
    { value: '#DAE8FC', label: 'Azul', preview: 'bg-blue-200' },
    { value: '#FFE6CC', label: 'Naranja', preview: 'bg-orange-200' },
    { value: '#E1D5E7', label: 'Púrpura', preview: 'bg-purple-200' },
    { value: '#BAC8D3', label: 'Gris', preview: 'bg-slate-200' },
    { value: '#B1DDF0', label: 'Cielo', preview: 'bg-sky-200' },
    { value: '#B0E3E6', label: 'Verde azulado', preview: 'bg-teal-200' },
    { value: '#FFFFFF', label: 'Blanco', preview: 'bg-white border border-gray-300' }
  ];
  
  // Lista de tipos de nodos disponibles
  const nodeTypeOptions = [
    { value: 'client', label: '💻 Cliente', color: 'slate' },
    { value: 'gateway', label: '🌐 Gateway', color: 'purple' },
    { value: 'compute', label: '⚙️ Cómputo', color: 'blue' },
    { value: 'serverless', label: '⚡ Serverless', color: 'cyan' },
    { value: 'database', label: '🗄️ Base de datos', color: 'emerald' },
    { value: 'cache', label: '⚡ Cache', color: 'orange' },
    { value: 'storage', label: '💾 Almacenamiento', color: 'amber' },
    { value: 'security', label: '🔒 Seguridad', color: 'red' },
    { value: 'monitoring', label: '📊 Monitoreo', color: 'indigo' },
  ];
  
  // Callback para conectar nodos
  const onConnect = useCallback((params) => {
    console.log('Conectando:', params);
    const newEdge = {
      ...params,
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#1e40af', strokeWidth: 2 },
      markerEnd: { type: 'arrowclosed', color: '#1e40af' },
      label: '',
      labelStyle: { fontSize: 12, fontWeight: 600 },
    };
    
    setEdges((els) => addEdge(newEdge, els));
  }, [setEdges]);

  // Función para manejar click en edges
  const onEdgeClick = useCallback((event, edge) => {
    event.stopPropagation();
    setSelectedEdge(edge);
    setEdgeLabel(edge.label || '');
    setShowEdgeLabelModal(true);
  }, []);

  // Función para actualizar la etiqueta del edge
  const updateEdgeLabel = useCallback(() => {
    if (selectedEdge) {
      setEdges((eds) =>
        eds.map((edge) =>
          edge.id === selectedEdge.id
            ? { ...edge, label: edgeLabel, labelStyle: { fontSize: 12, fontWeight: 600 } }
            : edge
        )
      );
    }
    setShowEdgeLabelModal(false);
    setSelectedEdge(null);
    setEdgeLabel('');
  }, [selectedEdge, edgeLabel, setEdges]);

  // Función para añadir contenedores con color personalizado
  const addContainer = useCallback(() => {
    const newContainer = {
      id: `container-${containerCounter}`,
      type: 'container',
      position: { x: 100, y: 100 },
      style: { 
        width: 300, 
        height: 200,
        zIndex: -1,
      },
      data: {
        label: containerName.trim() || '',
        backgroundColor: containerColor,
      },
    };

    setNodes((nds) => [...nds, newContainer]);
    setContainerCounter(prev => prev + 1);
    setContainerName('');
  }, [containerCounter, containerName, containerColor, setNodes]);

  // Función para añadir nodos personalizados
  const addCustomNode = useCallback(() => {
    if (!newNodeName.trim()) {
      alert('Por favor, ingresa un nombre para el nodo');
      return;
    }

    const newNode = {
      id: `custom-node-${nodeCounter}`,
      type: 'custom',
      position: { x: 200, y: 200 },
      data: {
        label: newNodeName.trim(),
        type: newNodeType,
        icon: null,
        description: newNodeDescription.trim() || undefined,
      },
    };

    setNodes((nds) => [...nds, newNode]);
    setNodeCounter(prev => prev + 1);
    setNewNodeName('');
    setNewNodeDescription('');
  }, [nodeCounter, newNodeName, newNodeType, newNodeDescription, setNodes]);

  // Definir los tipos de nodos personalizados
  const customNodeTypes = useMemo(() => ({
    custom: CustomNode,
    container: ContainerNode,
  }), []);

  // Función para guardar los cambios
  const saveChanges = useCallback(() => {
    const normalizeIconPath = (iconPath) => {
      if (!iconPath) return iconPath;
      
      if (iconPath.includes('${BASE_URL}')) {
        return iconPath;
      }
      
      if (iconPath.startsWith('/taller_difusion/assets/')) {
        return iconPath.replace('/taller_difusion/', '${BASE_URL}');
      }
      
      if (iconPath.startsWith('assets/')) {
        return `\${BASE_URL}${iconPath}`;
      }
      
      return iconPath;
    };

    const exportData = {
      nodes: nodes.map(node => ({
        id: node.id,
        type: node.type,
        position: node.position,
        data: {
          ...node.data,
          icon: normalizeIconPath(node.data.icon)
        },
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
        style: edge.style || { stroke: '#1e40af', strokeWidth: 2 },
        markerEnd: edge.markerEnd || { type: 'arrowclosed', color: '#1e40af' },
        label: edge.label || '',
        labelStyle: edge.labelStyle || { fontSize: 12, fontWeight: 600 },
      }))
    };
    
    console.log('Datos actualizados Infraestructura:', exportData);
    
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
    
    const code = `// Exportado desde el editor Infraestructura
const BASE_URL = import.meta.env.BASE_URL;

export const infraestructuraNodes = ${formattedNodes};

export const infraestructuraEdges = ${formattedEdges};

export const nodeTypes = {
  custom: 'customNode',
  container: 'containerNode'
};`;
    
    navigator.clipboard.writeText(code);
    alert('¡Datos de Infraestructura copiados al clipboard! Pégalos en tu archivo infraestructura-nodes.js');
  }, [nodes, edges]);

  // Función para resetear a valores originales
  const resetChanges = useCallback(() => {
    // USA LOS DATOS IMPORTADOS PARA RESETEAR
    setNodes(infraestructuraNodes);
    setEdges(infraestructuraEdges);
    setContainerCounter(1);
    setNodeCounter(18);
    setContainerName('');
    setNewNodeName('');
    setNewNodeDescription('');
    setContainerColor('#DAE8FC');
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

        {/* Componentes Principales */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
        <h3 className="font-bold text-base text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></span>
            Componentes Principales
        </h3>
        <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-blue-600 rounded-full shadow-sm"></div>
            <span className="text-slate-700 font-medium">Web App SGA</span>
            </div>
            <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-cyan-600 rounded-full shadow-sm"></div>
            <span className="text-slate-700 font-medium">Azure Functions</span>
            </div>
            <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-green-600 rounded-full shadow-sm"></div>
            <span className="text-slate-700 font-medium">Base de Datos</span>
            </div>
            <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-yellow-600 rounded-full shadow-sm"></div>
            <span className="text-slate-700 font-medium">Almacenamiento</span>
            </div>
        </div>
        </div>

        {/* Roles y Acceso */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
            <div className="text-sm text-slate-700">
                <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <span className="text-lg">👥</span> Roles y Acceso
                </div>
                <div className="space-y-2">
                <div className="flex flex-wrap gap-1">
                    {['Director Admin', 'Usuario 1', 'Usuario 2', 'Usuario 3'].map((role) => (
                    <span key={role} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs font-medium">
                        {role}
                    </span>
                    ))}
                </div>
                <div className="flex flex-wrap gap-1">
                    {['Worker 1', 'Worker 2', 'Worker 3'].map((worker) => (
                    <span key={worker} className="px-2 py-1 bg-cyan-100 text-cyan-800 rounded-md text-xs font-medium">
                        {worker}
                    </span>
                    ))}
                </div>
                <div className="flex flex-wrap gap-1">
                    {['Function Silabo', 'Blob Storage', 'GitHub'].map((service) => (
                    <span key={service} className="px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs font-medium">
                        {service}
                    </span>
                    ))}
                </div>
                </div>
            </div>
            </div>

        {/* Flujo de Datos */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
            <div className="text-sm text-slate-600 font-medium">
                <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <span className="text-lg">🔄</span> Flujo de Datos
                </div>
                <div className="flex items-center gap-2 mb-1">
                <span className="text-blue-600">•</span>
                <span>Usuarios → Web App SGA</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                <span className="text-cyan-600">•</span>
                <span>SGA → Azure Workers</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                <span className="text-green-600">•</span>
                <span>Functions → Base de Datos</span>
                </div>
                <div className="flex items-center gap-2">
                <span className="text-yellow-600">•</span>
                <span>Almacenamiento → GitHub</span>
                </div>
            </div>
        </div>

      </div>

      {/* Modal para editar etiquetas de conexiones */}
      {showEdgeLabelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">Editar Etiqueta de Conexión</h3>
              <button
                onClick={() => setShowEdgeLabelModal(false)}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Texto de la conexión:
                </label>
                <textarea
                  value={edgeLabel}
                  onChange={(e) => setEdgeLabel(e.target.value)}
                  placeholder="Ej: envía datos\n<https>"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Puedes usar saltos de línea (\n) para texto multilínea
                </p>
              </div>
              
              <div className="flex gap-3 pt-2">
                <button
                  onClick={updateEdgeLabel}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  💾 Guardar
                </button>
                <button
                  onClick={() => setShowEdgeLabelModal(false)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contenedor del diagrama con fondo estrellado y animado - FONDO DEL CÓDIGO 1 */}
      <div className="w-full h-[700px] rounded-xl border border-slate-200 overflow-hidden shadow-sm relative stellar-background">
        {/* Fondo estrellado animado */}
        <div className="absolute inset-0 stellar-canvas">
          <div className="stars stars1"></div>
          <div className="stars stars2"></div>
          <div className="stars stars3"></div>
        </div>
        
        {/* Overlay con gradiente sutil - REDUCIDO PARA MENOS BRILLO */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/2 via-blue-900/3 to-indigo-900/5"></div>
        
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onEdgeClick={onEdgeClick}
          nodeTypes={customNodeTypes}
          fitView
          fitViewOptions={{ padding: 80, includeHiddenNodes: false }}
          minZoom={0.3}
          maxZoom={1.2}
          proOptions={{ hideAttribution: true }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          connectionLineType="smoothstep"
          connectionLineStyle={{ stroke: '#1e40af', strokeWidth: 2 }}
          defaultEdgeOptions={{
            type: 'smoothstep',
            animated: true,
            style: { stroke: '#1e40af', strokeWidth: 2 },
            markerEnd: { type: 'arrowclosed', color: '#1e40af' },
          }}
        >
          <Background variant="dots" gap={25} size={1.5} color="#cbd5e1" className="opacity-30" />
          <Controls
            showZoom={true}
            showFitView={true}
            showInteractive={true}
            className="bg-white/95 backdrop-blur-sm border border-slate-300 rounded-lg shadow-lg"
          />
          <MiniMap
            nodeStrokeColor={(n) => {
              if (n.type === 'container') return '#1e40af';
              if (n.data.type === 'client') return '#475569';
              if (n.data.type === 'gateway') return '#7c3aed';
              if (n.data.type === 'compute') return '#1e40af';
              if (n.data.type === 'serverless') return '#0891b2';
              if (n.data.type === 'database') return '#059669';
              if (n.data.type === 'cache') return '#ea580c';
              if (n.data.type === 'storage') return '#d97706';
              if (n.data.type === 'security') return '#dc2626';
              if (n.data.type === 'monitoring') return '#4338ca';
              return '#6b7280';
            }}
            nodeColor={(n) => {
              if (n.type === 'container') return n.data.backgroundColor || '#dbeafe';
              if (n.data.type === 'client') return '#f1f5f9';
              if (n.data.type === 'gateway') return '#f3e8ff';
              if (n.data.type === 'compute') return '#dbeafe';
              if (n.data.type === 'serverless') return '#cffafe';
              if (n.data.type === 'database') return '#d1fae5';
              if (n.data.type === 'cache') return '#fed7aa';
              if (n.data.type === 'storage') return '#fef3c7';
              if (n.data.type === 'security') return '#fee2e2';
              if (n.data.type === 'monitoring') return '#e0e7ff';
              return '#f3f4f6';
            }}
            nodeBorderRadius={12}
            className="bg-white/95 backdrop-blur-sm border border-slate-300 rounded-lg shadow-lg"
          />
        </ReactFlow>

        {/* Estilos CSS para el fondo estrellado - DEL CÓDIGO 1 */}
        <style jsx>{`
          .stellar-background {
            background: linear-gradient(135deg, 
              #1e293b 0%, 
              #334155 25%, 
              #475569 50%, 
              #334155 75%, 
              #1e293b 100%);
            position: relative;
            overflow: hidden;
          }
          
          .stellar-canvas {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
          
          .stars {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-repeat: repeat;
          }
          
          .stars1 {
            background: radial-gradient(2px 2px at 20px 30px, #eee, transparent),
                        radial-gradient(2px 2px at 40px 70px, #fff, transparent),
                        radial-gradient(1px 1px at 90px 40px, #fff, transparent),
                        radial-gradient(1px 1px at 130px 80px, #fff, transparent),
                        radial-gradient(2px 2px at 160px 30px, #ddd, transparent);
            background-size: 200px 100px;
            animation: sparkle 20s linear infinite;
          }
          
          .stars2 {
            background: radial-gradient(1px 1px at 40px 60px, #fff, transparent),
                        radial-gradient(1px 1px at 120px 10px, #fff, transparent),
                        radial-gradient(1px 1px at 80px 80px, #fff, transparent),
                        radial-gradient(1px 1px at 200px 50px, #eee, transparent);
            background-size: 250px 120px;
            animation: sparkle 25s linear infinite reverse;
          }
          
          .stars3 {
            background: radial-gradient(1px 1px at 60px 20px, #fff, transparent),
                        radial-gradient(1px 1px at 180px 90px, #fff, transparent),
                        radial-gradient(2px 2px at 100px 60px, #ddd, transparent);
            background-size: 300px 150px;
            animation: sparkle 30s linear infinite;
          }
          
          @keyframes sparkle {
            0% {
              transform: translateX(0px);
            }
            100% {
              transform: translateX(-200px);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default InfraestructuraFlow;