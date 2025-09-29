// src/components/charts/software/BackendFlow.jsx
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
import { backendNodes, backendEdges } from '../../../data/arquitectura/software/backend-nodes';

// Componente personalizado para los nodos con colores profesionales
const CustomNode = ({ data }) => {
  // Función simplificada - todos los nodos son blancos con borde negro
  const getNodeStyle = (type) => {
    return 'bg-white border-black text-black shadow-gray-200';
  };

  const getIconPlaceholder = (type) => {
    switch (type) {
      case 'api':
        return '🌐';
      case 'database':
        return '🗄️';
      case 'server':
        return '🖥️';
      case 'process':
        return '⚙️';
      case 'auth':
        return '🔐';
      case 'cache':
        return '💾';
      case 'developer':
        return '👨‍💻';
      case 'microservice':
        return '🔧';
      case 'load-balancer':
        return '⚖️';
      case 'gateway':
        return '🚪';
      case 'storage':
        return '📦';
      case 'monitoring':
        return '📊';
      default:
        return '🔵';
    }
  };

  // Función simplificada - todos los bordes izquierdos son negros
  const getBorderStyle = (type) => {
    return 'border-l-4 border-l-black';
  };

  // Determinar si es un nodo que solo tiene ícono
  const hasOnlyIcon = data.icon && !data.label && !data.description;

  return (
    <div className={`${
      hasOnlyIcon 
        ? 'border-2 border-black rounded-lg p-2 flex items-center justify-center w-full h-full transition-all duration-300 hover:shadow-xl hover:scale-105' 
        : 'px-4 py-3 shadow-lg rounded-xl border-2 min-w-[200px] transition-all duration-300 hover:shadow-xl hover:scale-105'
    } ${getNodeStyle(data.type)} ${hasOnlyIcon ? '' : getBorderStyle(data.type)}`}>
      
      {/* HANDLES - Solo mostrar en nodos con texto */}
      {!hasOnlyIcon && (
        <>
          <Handle type="target" position={Position.Left} id="left" className="w-3 h-3 !bg-black border-2 border-white shadow-md" />
          <Handle type="source" position={Position.Right} id="right" className="w-3 h-3 !bg-black border-2 border-white shadow-md" />
          <Handle type="target" position={Position.Top} id="top" className="w-3 h-3 !bg-black border-2 border-white shadow-md" />
          <Handle type="source" position={Position.Bottom} id="bottom" className="w-3 h-3 !bg-black border-2 border-white shadow-md" />
        </>
      )}
      
      {/* HANDLES para nodos solo con ícono - centrados */}
      {hasOnlyIcon && (
        <>
          <Handle type="target" position={Position.Left} id="left" className="w-3 h-3 !bg-black border-2 border-white shadow-md" />
          <Handle type="source" position={Position.Right} id="right" className="w-3 h-3 !bg-black border-2 border-white shadow-md" />
          <Handle type="target" position={Position.Top} id="top" className="w-3 h-3 !bg-black border-2 border-white shadow-md" />
          <Handle type="source" position={Position.Bottom} id="bottom" className="w-3 h-3 !bg-black border-2 border-white shadow-md" />
        </>
      )}

      {/* Contenido del nodo */}
      {hasOnlyIcon ? (
        // Layout para nodos solo con ícono - ocupa todo el espacio
        data.icon ? (
          <img
            src={data.icon}
            alt="icon"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
        ) : (
          <div className="text-5xl flex items-center justify-center w-full h-full">
            {getIconPlaceholder(data.type)}
          </div>
        )
      ) : (
        // Layout para nodos con texto - diseño original
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
            <div className="font-bold text-sm mb-1 uppercase tracking-wider text-black">{data.label}</div>
          )}
          {data.description && (
            <div className="text-xs text-gray-600 mt-1">{data.description}</div>
          )}
        </div>
      )}
    </div>
  );
};

// Componente para contenedores redimensionables con colores personalizables
const ContainerNode = ({ data, selected, id }) => {
  const getContainerStyle = (color) => {
    const colorStyles = {
      '#DAE8FC': { bg: 'bg-blue-50/60', border: 'border-blue-300', text: 'text-blue-800', shadow: 'shadow-blue-100' },
      '#FFE6CC': { bg: 'bg-orange-50/60', border: 'border-orange-300', text: 'text-orange-800', shadow: 'shadow-orange-100' },
      '#E1D5E7': { bg: 'bg-purple-50/60', border: 'border-purple-300', text: 'text-purple-800', shadow: 'shadow-purple-100' },
      '#BAC8D3': { bg: 'bg-slate-50/60', border: 'border-slate-300', text: 'text-slate-800', shadow: 'shadow-slate-100' },
      '#B1DDF0': { bg: 'bg-sky-50/60', border: 'border-sky-300', text: 'text-sky-800', shadow: 'shadow-sky-100' },
      '#B0E3E6': { bg: 'bg-teal-50/60', border: 'border-teal-300', text: 'text-teal-800', shadow: 'shadow-teal-100' },
      '#FFFFFF': { bg: 'bg-white',  border: 'border-black', text: 'text-black', shadow: 'shadow-gray-200' },
    };
    return colorStyles[color] || colorStyles['#DAE8FC'];
  };

  const style = getContainerStyle(data.backgroundColor || '#DAE8FC');

  return (
    <div 
      className={`w-full h-full ${style.bg} ${style.border} border-2 border-dashed rounded-xl ${style.shadow} shadow-lg backdrop-blur-sm relative`}
      style={{ backgroundColor: data.backgroundColor + '40' || '#DAE8FC40' }}
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

const BackendFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(backendNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(backendEdges);
  const [containerCounter, setContainerCounter] = useState(1);
  const [nodeCounter, setNodeCounter] = useState(1);
  const [containerName, setContainerName] = useState('');
  const [selectedEdge, setSelectedEdge] = useState(null);
  const [edgeLabel, setEdgeLabel] = useState('');
  const [showEdgeLabelModal, setShowEdgeLabelModal] = useState(false);
  const [containerColor, setContainerColor] = useState('#DAE8FC');
  
  // Estados para añadir nodos
  const [newNodeName, setNewNodeName] = useState('');
  const [newNodeType, setNewNodeType] = useState('api');
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
  
  // Lista de tipos de nodos disponibles para backend
  const nodeTypeOptions = [
    { value: 'api', label: '🌐 API', color: 'blue' },
    { value: 'database', label: '🗄️ Database', color: 'green' },
    { value: 'server', label: '🖥️ Server', color: 'slate' },
    { value: 'service', label: '⚙️ Service', color: 'purple' },
    { value: 'auth', label: '🔐 Auth', color: 'red' },
    { value: 'cache', label: '💾 Cache', color: 'orange' },
    { value: 'queue', label: '📋 Queue', color: 'yellow' },
    { value: 'microservice', label: '🔧 Microservice', color: 'cyan' },
    { value: 'load-balancer', label: '⚖️ Load Balancer', color: 'indigo' },
    { value: 'gateway', label: '🚪 Gateway', color: 'pink' },
    { value: 'storage', label: '📦 Storage', color: 'teal' },
    { value: 'monitoring', label: '📊 Monitoring', color: 'emerald' },
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

  // Función para manejar click en edges (para editar etiquetas)
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

  // FUNCIÓN CORREGIDA: Añadir contenedores con posición dinámica
  const addContainer = useCallback(() => {
    // Generar posición aleatoria para evitar superposiciones
    const randomX = Math.random() * 400 + 100; // Entre 100 y 500
    const randomY = Math.random() * 300 + 100; // Entre 100 y 400
    
    // Generar un ID único basado en timestamp para evitar conflictos
    const uniqueId = `container-${Date.now()}-${containerCounter}`;
    
    const newContainer = {
      id: uniqueId,
      type: 'container',
      position: { 
        x: randomX, 
        y: randomY 
      },
      style: { 
        width: 300, 
        height: 200,
        zIndex: -1,
      },
      data: {
        label: containerName.trim() || `Contenedor ${containerCounter}`,
        backgroundColor: containerColor,
      },
    };

    // IMPORTANTE: Usar spread operator para mantener todos los nodos existentes
    setNodes((previousNodes) => {
      console.log('Nodos antes:', previousNodes.length);
      const updatedNodes = [...previousNodes, newContainer];
      console.log('Nodos después:', updatedNodes.length);
      console.log('Nuevo contenedor añadido:', newContainer.id);
      return updatedNodes;
    });
    
    setContainerCounter(prev => prev + 1);
    setContainerName('');
  }, [containerCounter, containerName, containerColor, setNodes]);

  // Función para añadir nodos personalizados (sin cambios, ya estaba bien)
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
    
    console.log('Datos actualizados Backend:', exportData);
    
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
    
    const code = `// Exportado desde el editor Backend
const BASE_URL = import.meta.env.BASE_URL;

export const backendNodes = ${formattedNodes};

export const backendEdges = ${formattedEdges};

export const nodeTypes = {
  custom: 'customNode',
  container: 'containerNode'
};`;
    
    navigator.clipboard.writeText(code);
    alert('¡Datos Backend copiados al clipboard! Pégalos en tu archivo backend-nodes.js');
  }, [nodes, edges]);

  // Función para resetear a valores originales
  const resetChanges = useCallback(() => {
    setNodes(backendNodes);
    setEdges(backendEdges);
    setContainerCounter(1);
    setNodeCounter(1);
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
        {/* Arquitectura Backend */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <h3 className="font-bold text-base text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></span>
            Arquitectura Backend
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-600 rounded-full shadow-sm"></div>
              <span className="text-slate-700 font-medium">Azure Functions</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-600 rounded-full shadow-sm"></div>
              <span className="text-slate-700 font-medium">Supabase Storage</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-purple-600 rounded-full shadow-sm"></div>
              <span className="text-slate-700 font-medium">GitHub Integration</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-orange-600 rounded-full shadow-sm"></div>
              <span className="text-slate-700 font-medium">Secrets Management</span>
            </div>
          </div>
        </div>

        {/* Stack de Infraestructura */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="text-sm text-slate-700">
            <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <span className="text-lg">☁️</span> Stack de Infraestructura
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1">
                {['Azure', 'Supabase', 'GitHub', 'OAuth'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {['Grafana', 'Prometheus', 'GitHub Actions', 'Secrets'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {['REST API', 'Webhooks', 'Authentication', 'Storage'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-md text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Procesos DevOps */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="text-sm text-slate-600 font-medium">
            <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <span className="text-lg">🔄</span> Procesos DevOps
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-blue-600">•</span>
              <span>Git Flow Workflow</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-600">•</span>
              <span>Automated Testing</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-purple-600">•</span>
              <span>Continuous Deployment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-600">•</span>
              <span>Infrastructure Monitoring</span>
            </div>
          </div>
        </div>

        {/* CONTENEDORES
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="text-lg">📦</span> Contenedores
          </div>
          <div className="space-y-3">
            <input
              type="text"
              value={containerName}
              onChange={(e) => setContainerName(e.target.value)}
              placeholder="Nombre del contenedor (opcional)"
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500"
            />
            
            * Selector de color *
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Color de fondo:</label>
              <div className="grid grid-cols-3 gap-1">
                {containerColorOptions.map((colorOption) => (
                  <button
                    key={colorOption.value}
                    onClick={() => setContainerColor(colorOption.value)}
                    className={`p-2 rounded border-2 transition-all duration-200 ${
                      containerColor === colorOption.value 
                        ? 'border-blue-500 shadow-md' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    title={colorOption.label}
                  >
                    <div className={`w-full h-4 rounded ${colorOption.preview}`}></div>
                    <div className="text-xs mt-1 text-center">{colorOption.label}</div>
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={addContainer}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              ➕ Añadir Contenedor
            </button>
          </div>
          <div className="mt-2 text-xs text-slate-600">
            <p>• Escoge el color de fondo</p>
            <p>• Selecciona para redimensionar</p>
          </div>
        </div>*/}

        {/* AÑADIR NODOS
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="text-lg">🎯</span> Añadir Nodos
          </div>
          <div className="space-y-3">
            * Nombre del nodo *
            <input
              type="text"
              value={newNodeName}
              onChange={(e) => setNewNodeName(e.target.value)}
              placeholder="Nombre del nodo"
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500"
            />
            
            * Descripción opcional *
            <input
              type="text"
              value={newNodeDescription}
              onChange={(e) => setNewNodeDescription(e.target.value)}
              placeholder="Descripción (opcional)"
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500"
            />
            
            * Selector de tipo *
            <select
              value={newNodeType}
              onChange={(e) => setNewNodeType(e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500"
            >
              {nodeTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            
            <button
              onClick={addCustomNode}
              disabled={!newNodeName.trim()}
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              ➕ Añadir Nodo
            </button>
          </div>
          <div className="mt-2 text-xs text-slate-600">
            <p>• Nombre obligatorio</p>
            <p>• Todos los nodos serán blancos</p>
            <p>• Arrastra handles para conectar</p>
          </div>
        </div>*/}

        {/* EDITOR 
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="text-lg">✏️</span> Editor
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
            <p>• Haz clic en líneas para editarlas</p>
            <p>• Arrastra nodos para mover</p>
            <p>• Conecta desde los handles circulares</p>
            <p>• Guarda para exportar código</p>
          </div>
        </div>*/}

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
                  placeholder="Ej: HTTP Request\nREST API"
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

      {/* Contenedor del diagrama */}
      <div className="w-full h-[700px] bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm relative">
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
          <Background variant="dots" gap={25} size={1.5} color="#cbd5e1" />
          <Controls
            showZoom={true}
            showFitView={true}
            showInteractive={true}
            className="bg-white/95 backdrop-blur-sm border border-slate-300 rounded-lg shadow-lg"
          />
          <MiniMap
            nodeStrokeColor={(n) => {
              if (n.type === 'container') return '#1e40af';
              return '#000000';
            }}
            nodeColor={(n) => {
              if (n.type === 'container') return n.data.backgroundColor || '#dbeafe';
              return '#ffffff';
            }}
            nodeBorderRadius={12}
            className="bg-white/95 backdrop-blur-sm border border-slate-300 rounded-lg shadow-lg"
          />
        </ReactFlow>
      </div>
    </div>
  );
};

export default BackendFlow;