// src/components/charts/software/FullStackFlow.jsx
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
import { fullStackNodes, fullStackEdges } from '../../../data/arquitectura/software/fullstack-nodes';

// Componente personalizado para los nodos
const CustomNode = ({ data }) => {
  // Función simplificada - todos los nodos son blancos con borde negro
  const getNodeStyle = (type) => {
    return 'bg-white border-black text-black shadow-gray-200';
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

// Componente para contenedores con bordes animados
const ContainerNode = ({ data, selected, id }) => {
  const getContainerStyle = (color) => {
    const colorStyles = {
      '#DAE8FC': { bg: 'bg-blue-50/30', border: 'border-blue-300', text: 'text-blue-800', shadow: 'shadow-blue-100' },
      '#FFE6CC': { bg: 'bg-orange-50/30', border: 'border-orange-300', text: 'text-orange-800', shadow: 'shadow-orange-100' },
      '#E1D5E7': { bg: 'bg-purple-50/30', border: 'border-purple-300', text: 'text-purple-800', shadow: 'shadow-purple-100' },
      '#BAC8D3': { bg: 'bg-slate-50/30', border: 'border-slate-300', text: 'text-slate-800', shadow: 'shadow-slate-100' },
      '#B1DDF0': { bg: 'bg-sky-50/30', border: 'border-sky-300', text: 'text-sky-800', shadow: 'shadow-sky-100' },
      '#B0E3E6': { bg: 'bg-teal-50/30', border: 'border-teal-300', text: 'text-teal-800', shadow: 'shadow-teal-100' },
      '#FFFFFF': { bg: 'bg-white/30',  border: 'border-gray-300', text: 'text-gray-800', shadow: 'shadow-gray-100' },
    };
    return colorStyles[color] || colorStyles['#DAE8FC'];
  };

  const style = getContainerStyle(data.backgroundColor || '#DAE8FC');

  return (
    <div className="w-full h-full relative">
      {/* Contenedor principal con borde animado */}
      <div 
        className={`w-full h-full ${style.bg} rounded-xl ${style.shadow} shadow-lg backdrop-blur-sm relative overflow-hidden`}
        style={{ backgroundColor: data.backgroundColor + '20' || '#DAE8FC20' }}
      >
        {/* Borde animado usando gradiente rotativo */}
        <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-spin-slow">
          <div className={`w-full h-full ${style.bg} rounded-xl`}
               style={{ backgroundColor: data.backgroundColor + '40' || '#DAE8FC40' }}>
          </div>
        </div>

        {/* Contenido del contenedor */}
        <div className="relative z-10 w-full h-full">
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
      </div>
    </div>
  );
};

const FullStackFlow = () => {
  // USA LOS DATOS IMPORTADOS EN LUGAR DE LOS DEFINIDOS LOCALMENTE
  const [nodes, setNodes, onNodesChange] = useNodesState(fullStackNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(fullStackEdges);
  
  const [containerCounter, setContainerCounter] = useState(1);
  const [nodeCounter, setNodeCounter] = useState(26);
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
      style: { stroke: '#ffffff', strokeWidth: 2 },
      markerEnd: { type: 'arrowclosed', color: '#ffffff' },
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
        style: edge.style || { stroke: '#000000', strokeWidth: 2 },
        markerEnd: edge.markerEnd || { type: 'arrowclosed', color: '#000000' },
        label: edge.label || '',
        labelStyle: edge.labelStyle || { fontSize: 12, fontWeight: 600 },
      }))
    };
    
    console.log('Datos actualizados Full Stack:', exportData);
    
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
    
    const code = `// Exportado desde el editor Full Stack
const BASE_URL = import.meta.env.BASE_URL;

export const fullStackNodes = ${formattedNodes};

export const fullStackEdges = ${formattedEdges};

export const nodeTypes = {
  custom: 'customNode',
  container: 'containerNode'
};`;
    
    navigator.clipboard.writeText(code);
    alert('¡Datos de Full Stack copiados al clipboard! Pégalos en tu archivo fullstack-nodes.js');
  }, [nodes, edges]);

  // Función para resetear a valores originales
  const resetChanges = useCallback(() => {
    // USA LOS DATOS IMPORTADOS PARA RESETEAR
    setNodes(fullStackNodes);
    setEdges(fullStackEdges);
    setContainerCounter(1);
    setNodeCounter(26);
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
      {/* Estilos CSS para animaciones personalizadas */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes matrix-rain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .matrix-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .tech-pattern::after {
          content: '< /> { } [ ] => != === && || ++ -- async await function class import export const let var';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          color: rgba(59, 130, 246, 0.05);
          white-space: pre-wrap;
          word-wrap: break-word;
          overflow: hidden;
          pointer-events: none;
          line-height: 20px;
          padding: 20px;
        }
      `}</style>

      {/* Panel de información superior */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Tecnologías Aprendidas */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <h3 className="font-bold text-base text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse-glow"></span>
            Tecnologías Aprendidas
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-sm"></div>
              <span className="text-slate-700 font-medium">Frontend: React, TypeScript, Vite</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded-full shadow-sm"></div>
              <span className="text-slate-700 font-medium">Backend: Node.js, JavaScript</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-500 rounded-full shadow-sm"></div>
              <span className="text-slate-700 font-medium">Cloud: Microsoft Azure</span>
            </div>
          </div>
        </div>

        {/* Herramientas de Desarrollo */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="text-sm text-slate-700">
            <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <span className="text-lg animate-float">🛠️</span> Herramientas de Desarrollo
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1">
                {['Visual Studio Code', 'GitHub', 'Figma'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-800 rounded-md text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {['Supabase', 'Docker', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {['Cypress', 'Jest', 'Playwright'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-md text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Metodologías y Procesos  */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="text-sm text-slate-600 font-medium">
            <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <span className="text-lg">⚡</span> Metodologías
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-slate-600">•</span>
              <span>CI/CD con GitHub Actions</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-black">•</span>
              <span>Testing Automatizado</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-black">•</span>
              <span>DevOps y Monitoreo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-black">•</span>
              <span>UI/UX Design Thinking</span>
            </div>
          </div>
        </div>

        {/* CONTENEDORES - COMENTADO 
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
            
            * Selector de color*
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
            <p>• Bordes animados automáticos</p>
            <p>• Selecciona para redimensionar</p>
          </div>
        </div>*/}

        {/* AÑADIR NODOS - COMENTADO
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

        {/* EDITOR - COMENTADO 
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
            <p>• 25 nodos iniciales incluidos</p>
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

      {/* Contenedor del diagrama con fondo profesional full stack */}
      <div className="w-full h-[700px] bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-xl border border-slate-700 overflow-hidden shadow-2xl relative matrix-bg tech-pattern">
        {/* Elementos de fondo decorativos */}
        <div className="absolute inset-0 opacity-10">
          {/* Círculos flotantes */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-purple-500 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-cyan-500 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 right-1/3 w-20 h-20 bg-green-500 rounded-full blur-xl animate-float" style={{animationDelay: '0.5s'}}></div>
        </div>

        {/* Grid de puntos tecnológicos */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" 
               style={{
                 backgroundImage: `
                   radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 2px),
                   radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.3) 0%, transparent 2px),
                   radial-gradient(circle at 60% 60%, rgba(34, 197, 94, 0.3) 0%, transparent 2px),
                   radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.3) 0%, transparent 2px)
                 `,
                 backgroundSize: '100px 100px, 150px 150px, 200px 200px, 120px 120px',
                 animation: 'pulse-glow 4s ease-in-out infinite'
               }}>
          </div>
        </div>

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
          connectionLineStyle={{ stroke: '#ffffff', strokeWidth: 2 }}
          defaultEdgeOptions={{
            type: 'smoothstep',
            animated: true,
            style: { stroke: '#ffffff', strokeWidth: 2 },
            markerEnd: { type: 'arrowclosed', color: '#ffffff' },
          }}
        >
          <Background 
            variant="dots" 
            gap={30} 
            size={2} 
            color="rgba(59, 130, 246, 0.3)" 
            className="opacity-50"
          />
          <Controls
            showZoom={true}
            showFitView={true}
            showInteractive={true}
            className="bg-white/95 backdrop-blur-sm border border-slate-300 rounded-lg shadow-lg"
          />
          <MiniMap
            nodeStrokeColor={(n) => '#000000'}
            nodeColor={(n) => {
              if (n.type === 'container') return n.data.backgroundColor || '#dbeafe';
              return '#ffffff';
            }}
            nodeBorderRadius={12}
            className="bg-white/95 backdrop-blur-sm border border-slate-300 rounded-lg shadow-lg"
            maskColor="rgba(15, 23, 42, 0.8)"
          />
        </ReactFlow>
      </div>
    </div>
  );
};

export default FullStackFlow;