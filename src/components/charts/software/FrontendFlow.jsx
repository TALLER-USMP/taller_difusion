// src/components/charts/software/FrontendFlow.jsx
import React, { useCallback, useMemo, useEffect } from 'react';
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
        <div className="mb-3 relative">
          {/* Placeholder para el icono */}
          {data.icon ? (
            <img
              src={data.icon}
              alt={data.label}
              className="w-14 h-14 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
          ) : null}

          {/* Fallback emoji si no hay imagen */}
          <div className="text-4xl" style={{ display: data.icon ? 'none' : 'block' }}>
            {getIconPlaceholder(data.type)}
          </div>
        </div>

        <div className="font-bold text-sm mb-1 uppercase tracking-wider">{data.label}</div>

        {data.description && <div className="text-base opacity-80 leading-tight font-medium">{data.description}</div>}
      </div>
    </div>
  );
};

const FrontendFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(frontendNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(frontendEdges);

  const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), [setEdges]);

  // Definir los tipos de nodos personalizados
  const customNodeTypes = useMemo(() => ({ custom: CustomNode }), []);

  // Fit view automático
  const { fitView } = useReactFlow();
  useEffect(() => {
    setTimeout(() => {
      fitView({ padding: 0.1 });
    }, 100);
  }, [nodes, edges, fitView]);

  return (
    <div className="space-y-6">
      {/* Panel de información superior */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Leyenda */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <h3 className="font-bold text-base text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></span>
            Arquitectura Frontend
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-600 rounded-full shadow-sm"></div>
              <span className="text-slate-700 font-medium">Flujo de desarrollo</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-emerald-600 rounded-full shadow-sm"></div>
              <span className="text-slate-700 font-medium">Flujo de usuarios</span>
            </div>
          </div>
        </div>

        {/* Stack Frontend */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="text-sm text-slate-700">
            <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <span className="text-lg">⚡</span> Stack Frontend
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1">
                {['React 18', 'Vite', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {['React Router', 'React Flow'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-md text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de flujo */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
          <div className="text-sm text-slate-600 font-medium">
            <div className="font-bold text-slate-800 mb-2">Flujos</div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-blue-600">→</span>
              <span>Desarrollo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600">←</span>
              <span>Producción</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contenedor del diagrama */}
      <div className="w-full h-[600px] bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm relative">
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
            nodesDraggable={false}       // nodos bloqueados
            nodesConnectable={false}     // no se pueden conectar
            elementsSelectable={false}   // no se pueden seleccionar
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
              if (n.data.type === 'person') return '#475569';
              if (n.data.type === 'service') return '#1e40af';
              if (n.data.type === 'application') return '#059669';
              if (n.data.type === 'architecture') return '#4338ca';
              return '#6b7280';
            }}
            nodeColor={(n) => {
              if (n.data.type === 'person') return '#f1f5f9';
              if (n.data.type === 'service') return '#dbeafe';
              if (n.data.type === 'application') return '#d1fae5';
              if (n.data.type === 'architecture') return '#e0e7ff';
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
