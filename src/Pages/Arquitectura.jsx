import React, { useState } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Datos para DevSecOps Pipeline
const devSecOpsNodes = [
  {
    id: '1',
    type: 'default',
    position: { x: 50, y: 100 },
    data: { label: 'Developer Frontend' },
    style: { background: '#ffffff', border: '2px solid #A4101A', borderRadius: '8px' }
  },
  {
    id: '2',
    type: 'default',
    position: { x: 200, y: 100 },
    data: { label: 'GitHub' },
    style: { background: '#333333', color: '#ffffff', borderRadius: '8px' }
  },
  {
    id: '3',
    type: 'default',
    position: { x: 350, y: 100 },
    data: { label: 'Azure Repos' },
    style: { background: '#0078d4', color: '#ffffff', borderRadius: '8px' }
  },
  {
    id: '4',
    type: 'default',
    position: { x: 500, y: 100 },
    data: { label: 'Azure Pipelines CI' },
    style: { background: '#0078d4', color: '#ffffff', borderRadius: '8px' }
  },
  {
    id: '5',
    type: 'default',
    position: { x: 650, y: 100 },
    data: { label: 'Azure Pipelines CD' },
    style: { background: '#0078d4', color: '#ffffff', borderRadius: '8px' }
  },
  {
    id: '6',
    type: 'default',
    position: { x: 800, y: 100 },
    data: { label: 'Azure ARM' },
    style: { background: '#0078d4', color: '#ffffff', borderRadius: '8px' }
  },
  {
    id: '7',
    type: 'default',
    position: { x: 500, y: 200 },
    data: { label: 'Azure Test Plans' },
    style: { background: '#7b68ee', color: '#ffffff', borderRadius: '8px' }
  },
  {
    id: '8',
    type: 'default',
    position: { x: 650, y: 200 },
    data: { label: 'Azure AD' },
    style: { background: '#7b68ee', color: '#ffffff', borderRadius: '8px' }
  }
];

const devSecOpsEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
  { id: 'e5-6', source: '5', target: '6', animated: true },
  { id: 'e4-7', source: '4', target: '7', animated: true },
  { id: 'e5-8', source: '5', target: '8', animated: true }
];

// Datos para Arquitectura de Microservicios
const microserviciosNodes = [
  {
    id: 'm1',
    type: 'default',
    position: { x: 100, y: 50 },
    data: { label: 'Frontend React' },
    style: { background: '#61dafb', color: '#000', borderRadius: '8px' }
  },
  {
    id: 'm2',
    type: 'default',
    position: { x: 300, y: 50 },
    data: { label: 'MF-Silabos' },
    style: { background: '#A4101A', color: '#ffffff', borderRadius: '8px' }
  },
  {
    id: 'm3',
    type: 'default',
    position: { x: 450, y: 50 },
    data: { label: 'MF-Reportes' },
    style: { background: '#A4101A', color: '#ffffff', borderRadius: '8px' }
  },
  {
    id: 'm4',
    type: 'default',
    position: { x: 300, y: 150 },
    data: { label: 'MF-PlanEstudio' },
    style: { background: '#A4101A', color: '#ffffff', borderRadius: '8px' }
  },
  {
    id: 'm5',
    type: 'default',
    position: { x: 450, y: 150 },
    data: { label: 'MF-Docentes' },
    style: { background: '#A4101A', color: '#ffffff', borderRadius: '8px' }
  },
  {
    id: 'm6',
    type: 'default',
    position: { x: 375, y: 250 },
    data: { label: 'API Gateway' },
    style: { background: '#333333', color: '#ffffff', borderRadius: '8px' }
  },
  {
    id: 'm7',
    type: 'default',
    position: { x: 200, y: 350 },
    data: { label: 'Azure Functions\nDocentes' },
    style: { background: '#ffb900', color: '#000', borderRadius: '8px' }
  },
  {
    id: 'm8',
    type: 'default',
    position: { x: 350, y: 350 },
    data: { label: 'Azure Functions\nSílabos' },
    style: { background: '#ffb900', color: '#000', borderRadius: '8px' }
  },
  {
    id: 'm9',
    type: 'default',
    position: { x: 500, y: 350 },
    data: { label: 'Azure Functions\nReportes' },
    style: { background: '#ffb900', color: '#000', borderRadius: '8px' }
  },
  {
    id: 'm10',
    type: 'default',
    position: { x: 375, y: 450 },
    data: { label: 'Azure Cosmos DB' },
    style: { background: '#0078d4', color: '#ffffff', borderRadius: '8px' }
  }
];

const microserviciosEdges = [
  { id: 'em1-m2', source: 'm1', target: 'm2' },
  { id: 'em1-m3', source: 'm1', target: 'm3' },
  { id: 'em1-m4', source: 'm1', target: 'm4' },
  { id: 'em1-m5', source: 'm1', target: 'm5' },
  { id: 'em2-m6', source: 'm2', target: 'm6' },
  { id: 'em3-m6', source: 'm3', target: 'm6' },
  { id: 'em4-m6', source: 'm4', target: 'm6' },
  { id: 'em5-m6', source: 'm5', target: 'm6' },
  { id: 'em6-m7', source: 'm6', target: 'm7' },
  { id: 'em6-m8', source: 'm6', target: 'm8' },
  { id: 'em6-m9', source: 'm6', target: 'm9' },
  { id: 'em7-m10', source: 'm7', target: 'm10' },
  { id: 'em8-m10', source: 'm8', target: 'm10' },
  { id: 'em9-m10', source: 'm9', target: 'm10' }
];

// Datos para Infraestructura Azure
const infraestructuraNodes = [
  {
    id: 'i1',
    type: 'default',
    position: { x: 200, y: 50 },
    data: { label: 'Azure Web App' },
    style: { background: '#0078d4', color: '#ffffff', borderRadius: '8px' }
  },
  {
    id: 'i2',
    type: 'default',
    position: { x: 100, y: 150 },
    data: { label: 'Cosmos DB\nProducción' },
    style: { background: '#4285f4', color: '#ffffff', borderRadius: '8px' }
  },
  {
    id: 'i3',
    type: 'default',
    position: { x: 300, y: 150 },
    data: { label: 'Cosmos DB\nPruebas' },
    style: { background: '#4285f4', color: '#ffffff', borderRadius: '8px' }
  },
  {
    id: 'i4',
    type: 'default',
    position: { x: 150, y: 250 },
    data: { label: 'Blob Storage\nDocumentos' },
    style: { background: '#00bcf2', color: '#ffffff', borderRadius: '8px' }
  },
  {
    id: 'i5',
    type: 'default',
    position: { x: 250, y: 250 },
    data: { label: 'Blob Storage\nBackups' },
    style: { background: '#00bcf2', color: '#ffffff', borderRadius: '8px' }
  },
  {
    id: 'i6',
    type: 'default',
    position: { x: 400, y: 200 },
    data: { label: 'Azure Key Vault' },
    style: { background: '#ffb900', color: '#000', borderRadius: '8px' }
  },
  {
    id: 'i7',
    type: 'default',
    position: { x: 50, y: 350 },
    data: { label: 'Office 365\nIntegration' },
    style: { background: '#d83b01', color: '#ffffff', borderRadius: '8px' }
  },
  {
    id: 'i8',
    type: 'default',
    position: { x: 350, y: 350 },
    data: { label: 'SAP Integration' },
    style: { background: '#0f7db8', color: '#ffffff', borderRadius: '8px' }
  }
];

const infraestructuraEdges = [
  { id: 'ei1-i2', source: 'i1', target: 'i2' },
  { id: 'ei1-i3', source: 'i1', target: 'i3' },
  { id: 'ei1-i4', source: 'i1', target: 'i4' },
  { id: 'ei1-i5', source: 'i1', target: 'i5' },
  { id: 'ei1-i6', source: 'i1', target: 'i6' },
  { id: 'ei2-i7', source: 'i2', target: 'i7' },
  { id: 'ei3-i8', source: 'i3', target: 'i8' }
];

const Arquitectura = () => {
  const [activeTab, setActiveTab] = useState('devsecops');
  
  // Estados para cada diagrama
  const [devSecOpsNodesState, setDevSecOpsNodes, onDevSecOpsNodesChange] = useNodesState(devSecOpsNodes);
  const [devSecOpsEdgesState, setDevSecOpsEdges, onDevSecOpsEdgesChange] = useEdgesState(devSecOpsEdges);
  
  const [microNodesState, setMicroNodes, onMicroNodesChange] = useNodesState(microserviciosNodes);
  const [microEdgesState, setMicroEdges, onMicroEdgesChange] = useEdgesState(microserviciosEdges);
  
  const [infraNodesState, setInfraNodes, onInfraNodesChange] = useNodesState(infraestructuraNodes);
  const [infraEdgesState, setInfraEdges, onInfraEdgesChange] = useEdgesState(infraestructuraEdges);

  const tabs = [
    { id: 'devsecops', label: 'DevSecOps Pipeline', description: 'Flujo de integración y despliegue continuo' },
    { id: 'microservicios', label: 'Microservicios', description: 'Arquitectura de microfrontends y funciones' },
    { id: 'infraestructura', label: 'Infraestructura Azure', description: 'Servicios cloud y almacenamiento' }
  ];

  const getCurrentDiagram = () => {
    switch(activeTab) {
      case 'devsecops':
        return {
          nodes: devSecOpsNodesState,
          edges: devSecOpsEdgesState,
          onNodesChange: onDevSecOpsNodesChange,
          onEdgesChange: onDevSecOpsEdgesChange
        };
      case 'microservicios':
        return {
          nodes: microNodesState,
          edges: microEdgesState,
          onNodesChange: onMicroNodesChange,
          onEdgesChange: onMicroEdgesChange
        };
      case 'infraestructura':
        return {
          nodes: infraNodesState,
          edges: infraEdgesState,
          onNodesChange: onInfraNodesChange,
          onEdgesChange: onInfraEdgesChange
        };
      default:
        return {
          nodes: devSecOpsNodesState,
          edges: devSecOpsEdgesState,
          onNodesChange: onDevSecOpsNodesChange,
          onEdgesChange: onDevSecOpsEdgesChange
        };
    }
  };

  const currentDiagram = getCurrentDiagram();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Arquitectura del Sistema
          </h1>
          <p className="text-gray-600">
            Sistema de Gestión Académica - Arquitectura técnica y flujo de datos
          </p>
            <p className="text-sm font-semibold text-red-600 italic">
                ⚠️ Arquitectura temporal / en pruebas - puede cambiar en próximas versiones
            </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-gray-50 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Tab Description */}
          <div className="mt-4 bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-gray-700">
              {tabs.find(tab => tab.id === activeTab)?.description}
            </p>
          </div>
        </div>
      </div>

      {/* Tecnologías Utilizadas */}
      <div className="bg-white px-6 py-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-semibold text-gray-600">Tecnologías:</span>
            <div className="flex flex-wrap gap-2">
              {['Azure Cosmos DB', 'React v18', 'Node.js', 'Tailwind CSS', 'API Gateway', 'Azure Functions'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-sm font-semibold text-gray-600">Metodología:</span>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
              Scrum
            </span>
          </div>
        </div>
      </div>

      {/* React Flow Container Ancho Diagrmas*/} 
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" style={{ height: '600px' }}>
        <ReactFlow
          nodes={currentDiagram.nodes}
          edges={currentDiagram.edges}
          onNodesChange={currentDiagram.onNodesChange}
          onEdgesChange={currentDiagram.onEdgesChange}
          fitView
          className="bg-gray-50"
        >
          <Background color="#e5e7eb" gap={20} />
          <Controls className="bg-white border border-gray-300 rounded-lg shadow-md" />
          <MiniMap 
            className="bg-white border border-gray-300 rounded-lg shadow-md" 
            maskColor="rgba(164, 16, 26, 0.1)"
            nodeColor="#A4101A"
          />
        </ReactFlow>
      </div>

      {/* Legend */}
      <div className="bg-white px-6 py-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Leyenda de Componentes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeTab === 'devsecops' && (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-gray-900 rounded"></div>
                  <span className="text-sm text-gray-600">Desarrollo y Control de Versiones</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  <span className="text-sm text-gray-600">Servicios Azure DevOps</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-purple-600 rounded"></div>
                  <span className="text-sm text-gray-600">Seguridad y Pruebas</span>
                </div>
              </>
            )}
            {activeTab === 'microservicios' && (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-blue-400 rounded"></div>
                  <span className="text-sm text-gray-600">Frontend React</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: '#A4101A' }}></div>
                  <span className="text-sm text-gray-600">Microfrontends</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-yellow-600 rounded"></div>
                  <span className="text-sm text-gray-600">Azure Functions</span>
                </div>
              </>
            )}
            {activeTab === 'infraestructura' && (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  <span className="text-sm text-gray-600">Aplicaciones Web</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-blue-400 rounded"></div>
                  <span className="text-sm text-gray-600">Bases de Datos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-cyan-400 rounded"></div>
                  <span className="text-sm text-gray-600">Almacenamiento</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arquitectura;