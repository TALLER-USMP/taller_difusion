// src/components/charts/metodologia/ScrumFlow.jsx
import React, { useCallback, useState, useEffect, useMemo } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
  Position,
  useReactFlow,
  NodeResizer,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { 
  Calendar, 
  Target, 
  CheckSquare, 
  Settings,
  Users,
  BarChart3,
  GitBranch,
  RefreshCw,
  Code,
  MessageCircle,
  Eye,
  RotateCcw,
  FileEdit
} from 'lucide-react';

// ✅ IMPORTAR LOS DATOS DESDE ARCHIVO EXTERNO (como Frontend)
import { scrumSequentialNodes, scrumSequentialEdges } from '../../../data/arquitectura/metodologia/scrum-nodes';

// Componente personalizado para nodos
const CustomNode = ({ data }) => {
  const getNodeStyle = (type) => {
    switch (type) {
      case 'ceremonia':
        return 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-400 text-blue-800 shadow-blue-200';
      case 'historia':
        return 'bg-gradient-to-br from-green-50 to-green-100 border-green-400 text-green-800 shadow-green-200';
      case 'tarea':
        return 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-400 text-yellow-800 shadow-yellow-200';
      case 'flujo':
        return 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-400 text-orange-800 shadow-orange-200';
      default:
        return 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-400 text-gray-800 shadow-gray-200';
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'ceremonia': return <Calendar className="w-5 h-5" />;
      case 'historia': return <Target className="w-5 h-5" />;
      case 'tarea': return <CheckSquare className="w-5 h-5" />;
      case 'flujo': return <GitBranch className="w-5 h-5" />;
      default: return <Settings className="w-5 h-5" />;
    }
  };

  const getBorderStyle = (type) => {
    switch (type) {
      case 'ceremonia': return 'border-l-4 border-l-blue-500';
      case 'historia': return 'border-l-4 border-l-green-500';
      case 'tarea': return 'border-l-4 border-l-yellow-500';
      case 'flujo': return 'border-l-4 border-l-orange-500';
      default: return 'border-l-4 border-l-gray-500';
    }
  };

  return (
    <div className={`px-4 py-3 shadow-lg rounded-xl border-2 min-w-[250px] max-w-[300px] transition-all duration-300 hover:shadow-xl hover:scale-105 ${getNodeStyle(data.type)} ${getBorderStyle(data.type)}`}>
      <Handle type="target" position={Position.Left} id="left" className="w-3 h-3 !bg-slate-600 border-2 border-white shadow-md" />
      <Handle type="source" position={Position.Right} id="right" className="w-3 h-3 !bg-slate-600 border-2 border-white shadow-md" />
      <Handle type="target" position={Position.Top} id="top" className="w-3 h-3 !bg-slate-600 border-2 border-white shadow-md" />
      <Handle type="source" position={Position.Bottom} id="bottom" className="w-3 h-3 !bg-slate-600 border-2 border-white shadow-md" />
      
      <div className="flex flex-col items-center text-center">
        <div className="mb-2 flex items-center gap-2">
          {getIcon(data.type)}
          <span className="bg-white/80 px-2 py-1 rounded-full text-xs font-bold">
            {data.numero}
          </span>
        </div>
        <div className="font-semibold text-sm leading-tight">{data.label}</div>
      </div>
    </div>
  );
};

// Componente para contenedores redimensionables
const ContainerNode = ({ data, selected, id }) => {
  const style = {
    bg: 'bg-green-50/60',
    border: 'border-green-300',
    text: 'text-green-800',
    shadow: 'shadow-green-100'
  };

  return (
    <div className={`w-full h-full ${style.bg} ${style.border} border-2 border-dashed rounded-xl ${style.shadow} shadow-lg backdrop-blur-sm relative`}>
      <NodeResizer
        color="#10b981"
        isVisible={selected}
        minWidth={200}
        minHeight={150}
        keepAspectRatio={false}
      />
      
      <Handle type="target" position={Position.Left} id="left" className="w-4 h-4 !bg-green-500 border-2 border-white shadow-md opacity-75" />
      <Handle type="source" position={Position.Right} id="right" className="w-4 h-4 !bg-green-500 border-2 border-white shadow-md opacity-75" />
      <Handle type="target" position={Position.Top} id="top" className="w-4 h-4 !bg-green-500 border-2 border-white shadow-md opacity-75" />
      <Handle type="source" position={Position.Bottom} id="bottom" className="w-4 h-4 !bg-green-500 border-2 border-white shadow-md opacity-75" />

      {data.label && (
        <div className={`absolute top-2 left-3 ${style.text} font-bold text-sm uppercase tracking-wider px-2 py-1 bg-white/80 rounded-md shadow-sm`}>
          {data.label}
        </div>
      )}

      {selected && (
        <div className="absolute top-2 right-3 text-green-500 text-xs font-medium bg-white/90 px-2 py-1 rounded-md shadow-sm">
          Redimensionable ↗️
        </div>
      )}
    </div>
  );
};

const ScrumFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(scrumSequentialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(scrumSequentialEdges);
  const [containerCounter, setContainerCounter] = useState(1);
  const [containerName, setContainerName] = useState('');

  const onConnect = useCallback((params) => {
    setEdges((eds) => addEdge({
      ...params,
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#10b981', strokeWidth: 2 },
      markerEnd: { type: 'arrowclosed', color: '#10b981' },
    }, eds));
  }, [setEdges]);

  const addContainer = useCallback(() => {
    const newContainer = {
      id: `scrum-container-${containerCounter}`,
      type: 'container',
      position: { x: 150, y: 150 },
      style: { 
        width: 350, 
        height: 220,
        zIndex: -1,
      },
      data: {
        label: containerName.trim() || '',
      },
    };

    setNodes((nds) => [...nds, newContainer]);
    setContainerCounter(prev => prev + 1);
    setContainerName('');
  }, [containerCounter, containerName, setNodes]);

  const customNodeTypes = useMemo(() => ({
    custom: CustomNode,
    container: ContainerNode,
  }), []);

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

  const saveChanges = useCallback(() => {
    const exportData = {
      nodes: nodes.map(node => ({
        id: node.id,
        type: node.type,
        position: node.position,
        data: {
          ...node.data,
          ...(node.data.icon && { icon: normalizeIconPath(node.data.icon) })
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
        style: edge.style || { stroke: '#10b981', strokeWidth: 2 },
        markerEnd: edge.markerEnd || { type: 'arrowclosed', color: '#10b981' },
        label: edge.label || '',
        labelStyle: edge.labelStyle || { fontSize: 12, fontWeight: 600 },
      }))
    };
    
    console.log('Datos actualizados Scrum (rutas normalizadas):', exportData);
    
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
    
    const code = `// Exportado desde el editor Scrum
const BASE_URL = import.meta.env.BASE_URL;

export const scrumSequentialNodes = ${formattedNodes};

export const scrumSequentialEdges = ${formattedEdges};

export const nodeTypes = {
  custom: 'customNode',
  container: 'containerNode'
};`;
    
    navigator.clipboard.writeText(code);
    
    alert('¡Datos Scrum copiados al clipboard con template literals correctos! Pégalos en tu archivo scrum-nodes.js');
  }, [nodes, edges]);

  const resetChanges = useCallback(() => {
    setNodes(scrumSequentialNodes);
    setEdges(scrumSequentialEdges);
    setContainerCounter(1);
    setContainerName('');
  }, [setNodes, setEdges]);

  const { fitView } = useReactFlow();
  useEffect(() => {
    setTimeout(() => {
      fitView({ padding: 0.1 });
    }, 100);
  }, [fitView]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <h3 className="font-bold text-base text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
            Proceso Scrum
          </h3>
          <p className="text-sm text-slate-600 mb-4">
            Flujo de los 14 pasos fundamentales del proceso Scrum que incluye ceremonias, historias de usuario, tareas y flujos de información.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span className="text-slate-700">Ceremonias</span>
            </div>
            <div className="flex items-center gap-3">
              <Target className="w-4 h-4 text-green-600" />
              <span className="text-slate-700">Historias</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckSquare className="w-4 h-4 text-yellow-600" />
              <span className="text-slate-700">Tareas</span>
            </div>
            <div className="flex items-center gap-3">
              <GitBranch className="w-4 h-4 text-orange-600" />
              <span className="text-slate-700">Flujos</span>
            </div>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="text-lg">📋</span> Elementos Scrum
          </h4>
          <div className="space-y-2 text-xs text-slate-700">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="font-semibold text-blue-600">Ceremonias:</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Sprint Planning</li>
                  <li>Daily Scrum</li>
                  <li>Sprint Review</li>
                  <li>Retrospectiva</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-green-600">Roles:</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Product Owner</li>
                  <li>Scrum Master</li>
                  <li>Equipo Desarrollo</li>
                  <li>Stakeholders</li>
                </ul>
              </div>
            </div>
            <div>
              <p className="font-semibold text-orange-600">Artefactos:</p>
              <p className="text-xs">Historias de usuario, Tareas, Backlog, Incremento</p>
            </div>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <h4 className="font-bold text-slate-800 mb-3">Leyenda</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-500 rounded border-2 border-blue-600"></div>
              <span>Ceremonias</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded border-2 border-green-600"></div>
              <span>Historias Usuario</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-yellow-500 rounded border-2 border-yellow-600"></div>
              <span>Tareas</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-orange-500 rounded border-2 border-orange-600"></div>
              <span>Flujos</span>
            </div>
            <div className="mt-3 text-xs text-slate-500">
              <p>• Arrastra los 14 nodos</p>
              <p>• Conecta manualmente</p>
              <p>• Números = orden proceso</p>
            </div>
          </div>
        </div>

        {/* Contenedor del diagrama 
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="text-lg">📦</span> Contenedores
          </div>
          <div className="space-y-2">
            <input
              type="text"
              value={containerName}
              onChange={(e) => setContainerName(e.target.value)}
              placeholder="Nombre del contenedor (opcional)"
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:border-green-500"
            />
            <button
              onClick={addContainer}
              className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              ➕ Añadir Contenedor
            </button>
          </div>
          <div className="mt-2 text-xs text-slate-600">
            <p>• Deja vacío para sin etiqueta</p>
            <p>• Selecciona para redimensionar</p>
          </div>
        </div>*/}

        {/* Contenedor del modo editor 
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="text-lg">✏️</span> Modo Editor
          </div>
          <div className="space-y-2">
            <button
              onClick={saveChanges}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              💾 Guardar Cambios
            </button>
            <button
              onClick={resetChanges}
              className="w-full bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              🔄 Resetear Todo
            </button>
          </div>
          <div className="mt-3 text-xs text-slate-600">
            <p>• Arrastra los nodos</p>
            <p>• Conecta desde handles</p>
            <p>• Redimensiona contenedores</p>
            <p>• Guarda para exportar</p>
          </div>
        </div> */}
      </div>

      <div className="w-full h-[700px] bg-gradient-to-br from-slate-50 via-white to-green-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm">
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
          maxZoom={1.5}
          proOptions={{ hideAttribution: true }}
          nodesDraggable={true}
          nodesConnectable={true}
          elementsSelectable={true}
          connectionLineType="smoothstep"
          connectionLineStyle={{ stroke: '#10b981', strokeWidth: 3 }}
          defaultEdgeOptions={{
            type: 'smoothstep',
            animated: true,
            style: { stroke: '#10b981', strokeWidth: 3 },
            markerEnd: { type: 'arrowclosed', color: '#10b981' },
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
              if (n.type === 'container') return '#10b981';
              if (n.data?.type === 'ceremonia') return '#1e40af';
              if (n.data?.type === 'historia') return '#059669';
              if (n.data?.type === 'tarea') return '#ca8a04';
              if (n.data?.type === 'flujo') return '#ea580c';
              return '#6b7280';
            }}
            nodeColor={(n) => {
              if (n.type === 'container') return '#d1fae5';
              if (n.data?.type === 'ceremonia') return '#dbeafe';
              if (n.data?.type === 'historia') return '#d1fae5';
              if (n.data?.type === 'tarea') return '#fef3c7';
              if (n.data?.type === 'flujo') return '#fed7aa';
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

export default ScrumFlow;