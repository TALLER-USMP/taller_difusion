// src/components/charts/roles/OrganigramaFlow.jsx
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
import { organigramaNodes, organigramaEdges } from '../../../data/arquitectura/roles/organigrama-nodes';

// Componente personalizado para los nodos del organigrama
const OrganigramaNode = ({ data }) => {
  const getNodeStyle = (role) => {
    switch (role) {
      // LIDERAZGO ESTRATÉGICO
      case 'owner':
        return 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-500 text-purple-800 shadow-purple-200';
      
      // GESTIÓN Y COORDINACIÓN
      case 'scrum-master':
        return 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-500 text-blue-800 shadow-blue-200';
      
      // ARQUITECTURA Y DISEÑO
      case 'architect':
        return 'bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-500 text-indigo-800 shadow-indigo-200';
      
      // LIDERAZGO TÉCNICO
      case 'lead':
        return 'bg-gradient-to-br from-green-50 to-green-100 border-green-500 text-green-800 shadow-green-200';
      
      // DESARROLLO GENERAL
      case 'developer':
        return 'bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-500 text-cyan-800 shadow-cyan-200';
      
      // ESPECIALISTA UX/DISEÑO
      case 'ux-specialist':
        return 'bg-gradient-to-br from-pink-50 to-pink-100 border-pink-500 text-pink-800 shadow-pink-200';
      
      // INGENIERO DE DATOS
      case 'data-engineer':
        return 'bg-gradient-to-br from-violet-50 to-violet-100 border-violet-500 text-violet-800 shadow-violet-200';
      
      // CALIDAD Y TESTING
      case 'qa':
        return 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-500 text-orange-800 shadow-orange-200';
      
      case 'tester':
        return 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-500 text-amber-800 shadow-amber-200';
      
      // INFRAESTRUCTURA Y DEVOPS
      case 'devops':
        return 'bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-500 text-emerald-800 shadow-emerald-200';
      
      // INGENIERO DE NUBE
      case 'cloud-engineer':
        return 'bg-gradient-to-br from-sky-50 to-sky-100 border-sky-500 text-sky-800 shadow-sky-200';
      
      // EQUIPOS Y GRUPOS
      case 'team':
        return 'bg-gradient-to-br from-slate-50 to-slate-100 border-slate-400 text-slate-800 shadow-slate-200';
      
      default:
        return 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-400 text-gray-800 shadow-gray-200';
    }
  };

  const getBorderStyle = (role) => {
    switch (role) {
      case 'owner':
        return 'border-l-4 border-l-purple-600';
      case 'scrum-master':
        return 'border-l-4 border-l-blue-600';
      case 'architect':
        return 'border-l-4 border-l-indigo-600';
      case 'lead':
        return 'border-l-4 border-l-green-600';
      case 'developer':
        return 'border-l-4 border-l-cyan-600';
      case 'ux-specialist':
        return 'border-l-4 border-l-pink-600';
      case 'data-engineer':
        return 'border-l-4 border-l-violet-600';
      case 'qa':
        return 'border-l-4 border-l-orange-600';
      case 'tester':
        return 'border-l-4 border-l-amber-600';
      case 'devops':
        return 'border-l-4 border-l-emerald-600';
      case 'cloud-engineer':
        return 'border-l-4 border-l-sky-600';
      case 'team':
        return 'border-l-4 border-l-slate-600';
      default:
        return 'border-l-4 border-l-gray-600';
    }
  };

  // Generar iniciales desde el nombre
  const getInitials = (name) => {
    if (!name || name === 'FULL STACK') return 'FS';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className={`px-4 py-3 shadow-lg rounded-xl border-2 min-w-[220px] transition-all duration-300 hover:shadow-xl hover:scale-105 ${getNodeStyle(data.role)} ${getBorderStyle(data.role)}`}>
      {/* HANDLES - Puntos de conexión */}
      <Handle type="target" position={Position.Top} id="top" className="w-3 h-3 !bg-slate-600 border-2 border-white shadow-md" />
      <Handle type="source" position={Position.Bottom} id="bottom" className="w-3 h-3 !bg-slate-600 border-2 border-white shadow-md" />
      <Handle type="target" position={Position.Left} id="left" className="w-3 h-3 !bg-slate-600 border-2 border-white shadow-md" />
      <Handle type="source" position={Position.Right} id="right" className="w-3 h-3 !bg-slate-600 border-2 border-white shadow-md" />
      
      <div className="flex flex-col items-center text-center">
        {/* Iniciales */}
        <div className="mb-3 relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-2xl font-bold border-2 border-white shadow-md">
            {getInitials(data.name)}
          </div>
        </div>
        
        {/* Nombre en mayúsculas */}
        <div className="font-bold text-sm mb-1 uppercase">{data.name}</div>
        
        {/* Rol en mayúsculas */}
        <div className="text-xs opacity-80 uppercase tracking-wider font-medium">{data.position}</div>
      </div>
    </div>
  );
};

// Componente para contenedores de equipos
const TeamContainerNode = ({ data, selected }) => {
  const getContainerStyle = (teamType) => {
    switch (teamType) {
      case 'leadership':
        return {
          bg: 'bg-purple-50/60',
          border: 'border-purple-300',
          text: 'text-purple-800'
        };
      case 'development':
        return {
          bg: 'bg-blue-50/60',
          border: 'border-blue-300',
          text: 'text-blue-800'
        };
      case 'quality':
        return {
          bg: 'bg-orange-50/60',
          border: 'border-orange-300',
          text: 'text-orange-800'
        };
      case 'infrastructure':
        return {
          bg: 'bg-green-50/60',
          border: 'border-green-300',
          text: 'text-green-800'
        };
      case 'design':
        return {
          bg: 'bg-pink-50/60',
          border: 'border-pink-300',
          text: 'text-pink-800'
        };
      default:
        return {
          bg: 'bg-slate-50/60',
          border: 'border-slate-300',
          text: 'text-slate-800'
        };
    }
  };

  const style = getContainerStyle(data.teamType);

  return (
    <div className={`w-full h-full ${style.bg} ${style.border} border-2 border-dashed rounded-xl shadow-lg backdrop-blur-sm relative`}>
      <NodeResizer
        color="#6b7280"
        isVisible={selected}
        minWidth={250}
        minHeight={150}
        keepAspectRatio={false}
      />
      
      {data.label && (
        <div className={`absolute top-3 left-4 ${style.text} font-bold text-sm uppercase tracking-wider px-3 py-1 bg-white/80 rounded-md shadow-sm`}>
          {data.label}
        </div>
      )}

      {selected && (
        <div className="absolute top-3 right-4 text-gray-500 text-xs font-medium bg-white/90 px-2 py-1 rounded-md shadow-sm">
          Redimensionable
        </div>
      )}
    </div>
  );
};

const OrganigramaFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(organigramaNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(organigramaEdges);
  const [containerCounter, setContainerCounter] = useState(1);
  const [containerName, setContainerName] = useState('');
  const [containerType, setContainerType] = useState('development');
  
  // Callback para conectar nodos
  const onConnect = useCallback((params) => {
    setEdges((els) => addEdge({
      ...params,
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#64748b', strokeWidth: 2 },
      markerEnd: { type: 'arrowclosed', color: '#64748b' },
    }, els));
  }, [setEdges]);

  // Función para añadir contenedores de equipos
  const addTeamContainer = useCallback(() => {
    const newContainer = {
      id: `team-container-${containerCounter}`,
      type: 'teamContainer',
      position: { x: 100, y: 100 },
      style: { 
        width: 350, 
        height: 250,
        zIndex: -1,
      },
      data: {
        label: containerName.trim() || `Equipo ${containerCounter}`,
        teamType: containerType,
      },
    };

    setNodes((nds) => [...nds, newContainer]);
    setContainerCounter(prev => prev + 1);
    setContainerName('');
  }, [containerCounter, containerName, containerType, setNodes]);

  // Tipos de nodos personalizados
  const customNodeTypes = useMemo(() => ({
    organigrama: OrganigramaNode,
    teamContainer: TeamContainerNode,
  }), []);

  // Función para guardar cambios
  const saveChanges = useCallback(() => {
    const exportData = {
      nodes: nodes.map(node => ({
        id: node.id,
        type: node.type,
        position: node.position,
        data: node.data,
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
        style: edge.style || { stroke: '#64748b', strokeWidth: 2 },
        markerEnd: edge.markerEnd || { type: 'arrowclosed', color: '#64748b' },
        label: edge.label || '',
        labelStyle: edge.labelStyle || { fontSize: 12, fontWeight: 600 },
      }))
    };
    
    const code = `// src/data/arquitectura/roles/organigrama-nodes.js
export const organigramaNodes = ${JSON.stringify(exportData.nodes, null, 2)};

export const organigramaEdges = ${JSON.stringify(exportData.edges, null, 2)};

export const nodeTypes = {
  organigrama: 'organigramaNode',
  teamContainer: 'teamContainerNode'
};`;
    
    navigator.clipboard.writeText(code);
    alert('Datos del Organigrama copiados al clipboard! Pégalos en organigrama-nodes.js');
  }, [nodes, edges]);

  // Función para resetear
  const resetChanges = useCallback(() => {
    setNodes(organigramaNodes);
    setEdges(organigramaEdges);
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
        {/* Información del organigrama */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <h3 className="font-bold text-base text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
            Organigrama del Equipo
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-purple-600 rounded-full shadow-sm"></div>
              <span className="text-slate-700 font-medium">Liderazgo</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-600 rounded-full shadow-sm"></div>
              <span className="text-slate-700 font-medium">Gestión</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-600 rounded-full shadow-sm"></div>
              <span className="text-slate-700 font-medium">Desarrollo</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-pink-600 rounded-full shadow-sm"></div>
              <span className="text-slate-700 font-medium">UX/Diseño</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-orange-600 rounded-full shadow-sm"></div>
              <span className="text-slate-700 font-medium">Calidad</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-emerald-600 rounded-full shadow-sm"></div>
              <span className="text-slate-700 font-medium">Infraestructura</span>
            </div>
          </div>
        </div>

        {/* Estadísticas del equipo */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="text-sm text-slate-700">
            <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <span className="text-lg">👥</span> Estadísticas
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total Miembros:</span>
                <span className="font-bold">20+</span>
              </div>
              <div className="flex justify-between">
                <span>Equipos:</span>
                <span className="font-bold">6</span>
              </div>
              <div className="flex justify-between">
                <span>Roles:</span>
                <span className="font-bold">10</span>
              </div>
              <div className="flex justify-between">
                <span>Especialidades:</span>
                <span className="font-bold">8</span>
              </div>
            </div>
          </div>
        </div>

        {/* Roles del equipo */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="text-sm text-slate-600 font-medium">
            <div className="font-bold text-slate-800 mb-2">Roles Clave</div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-purple-600">•</span>
              <span>Product Owner</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-indigo-600">•</span>
              <span>Arquitecto</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-blue-600">•</span>
              <span>Scrum Master</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-600">•</span>
              <span>Líderes Técnicos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-pink-600">•</span>
              <span>Especialistas UX</span>
            </div>
          </div>
        </div>

        {/* Panel de contenedores 
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="text-lg">📦</span> Equipos
          </div>
          <div className="space-y-2">
            <input
              type="text"
              value={containerName}
              onChange={(e) => setContainerName(e.target.value)}
              placeholder="Nombre del equipo"
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500"
            />
            <select
              value={containerType}
              onChange={(e) => setContainerType(e.target.value)}
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500"
            >
              <option value="leadership">Liderazgo</option>
              <option value="development">Desarrollo</option>
              <option value="design">UX/Diseño</option>
              <option value="quality">Calidad</option>
              <option value="infrastructure">Infraestructura</option>
            </select>
            <button
              onClick={addTeamContainer}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Añadir Equipo
            </button>
          </div>
          <div className="mt-2 text-xs text-slate-600">
            <p>• Selecciona para redimensionar</p>
            <p>• Arrastra para agrupar</p>
          </div>
        </div>*/}

        {/* Panel de controles 
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="text-lg">⚙️</span> Modo Editor
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
            <p>• Arrastra los miembros</p>
            <p>• Conecta relaciones</p>
            <p>• Redimensiona equipos</p>
            <p>• Guarda para exportar</p>
          </div>
        </div>*/}
      </div>

      {/* Contenedor del diagrama */}
      <div className="w-full h-[700px] bg-gradient-to-br from-slate-50 via-white to-purple-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm relative">
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
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          connectionLineType="smoothstep"
          connectionLineStyle={{ stroke: '#64748b', strokeWidth: 2 }}
          defaultEdgeOptions={{
            type: 'smoothstep',
            animated: true,
            style: { stroke: '#64748b', strokeWidth: 2 },
            markerEnd: { type: 'arrowclosed', color: '#64748b' },
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
              if (n.type === 'teamContainer') return '#64748b';
              if (n.data?.role === 'owner') return '#7c3aed';
              if (n.data?.role === 'scrum-master') return '#2563eb';
              if (n.data?.role === 'architect') return '#4338ca';
              if (n.data?.role === 'lead') return '#16a34a';
              if (n.data?.role === 'developer') return '#0891b2';
              if (n.data?.role === 'ux-specialist') return '#ec4899';
              if (n.data?.role === 'data-engineer') return '#8b5cf6';
              if (n.data?.role === 'qa') return '#ea580c';
              if (n.data?.role === 'tester') return '#d97706';
              if (n.data?.role === 'devops') return '#059669';
              if (n.data?.role === 'cloud-engineer') return '#0284c7';
              return '#6b7280';
            }}
            nodeColor={(n) => {
              if (n.type === 'teamContainer') return '#f1f5f9';
              if (n.data?.role === 'owner') return '#f3e8ff';
              if (n.data?.role === 'scrum-master') return '#dbeafe';
              if (n.data?.role === 'architect') return '#e0e7ff';
              if (n.data?.role === 'lead') return '#dcfce7';
              if (n.data?.role === 'developer') return '#cffafe';
              if (n.data?.role === 'ux-specialist') return '#fce7f3';
              if (n.data?.role === 'data-engineer') return '#f3e8ff';
              if (n.data?.role === 'qa') return '#fed7aa';
              if (n.data?.role === 'tester') return '#fef3c7';
              if (n.data?.role === 'devops') return '#d1fae5';
              if (n.data?.role === 'cloud-engineer') return '#e0f2fe';
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

export default OrganigramaFlow;