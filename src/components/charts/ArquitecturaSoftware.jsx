// src/components/charts/ArquitecturaSoftware.jsx
import React, { useState } from 'react';
import { ReactFlowProvider } from '@xyflow/react';
import { Code, Server, Shield, Layers, Cloud } from 'lucide-react';

// Importar los componentes de diagramas
import FrontendFlow from './software/FrontendFlow';
// import BackendFlow from './software/BackendFlow';
// import DevSecOpsFlow from './software/DevSecOpsFlow';
// import MicroserviciosFlow from './software/MicroserviciosFlow';
// import InfraestructuraFlow from './software/InfraestructuraFlow';

const ArquitecturaSoftware = () => {
  const [activeSubTab, setActiveSubTab] = useState('frontend');

  // Configuración de pestañas con sus respectivos componentes
  const subTabs = [
    { 
      id: 'frontend', 
      label: 'Frontend', 
      icon: Code,
      description: 'React 18, microfrontends y componentes UI con Vite',
      component: FrontendFlow,
      technologies: ['React 18', 'Vite', 'Tailwind CSS', 'React Router', 'React Flow']
    },
    { 
      id: 'backend', 
      label: 'Backend', 
      icon: Server,
      description: 'APIs REST, Node.js y lógica de negocio',
      component: null, // Placeholder
      technologies: ['Node.js', 'Express', 'Azure Functions', 'Cosmos DB']
    },
    { 
      id: 'devsecops', 
      label: 'DevSecOps', 
      icon: Shield,
      description: 'Pipeline CI/CD, seguridad y despliegue automático',
      component: null, // Placeholder
      technologies: ['Azure DevOps', 'GitHub Actions', 'Docker', 'Azure AD']
    },
    { 
      id: 'microservicios', 
      label: 'Microservicios', 
      icon: Layers,
      description: 'Arquitectura distribuida y funciones independientes',
      component: null, // Placeholder
      technologies: ['Azure Functions', 'API Gateway', 'Service Bus', 'Redis']
    },
    { 
      id: 'infraestructura', 
      label: 'Infraestructura', 
      icon: Cloud,
      description: 'Servicios Azure, almacenamiento y networking',
      component: null, // Placeholder
      technologies: ['Azure App Service', 'Cosmos DB', 'Azure Storage', 'Front Door']
    }
  ];

  const getCurrentTab = () => {
    return subTabs.find(tab => tab.id === activeSubTab);
  };

  const renderCurrentComponent = () => {
    const currentTab = getCurrentTab();
    
    if (currentTab?.component) {
      const Component = currentTab.component;
      return <Component />;
    }
    
    // Placeholder para componentes no implementados
    return (
      <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
        <div className="text-center">
          <currentTab.icon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Diagrama: {currentTab.label}
          </h3>
          <p className="text-gray-500 mb-4">
            El componente React Flow para "{activeSubTab}" se implementará próximamente
          </p>
          <p className="text-sm text-gray-400">
            Ubicación: /src/components/charts/software/{activeSubTab.charAt(0).toUpperCase() + activeSubTab.slice(1)}Flow.jsx
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Navegación de subtabs */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-wrap gap-2 mb-4">
          {subTabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeSubTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
        
        {/* Descripción del tab actual */}
        <div className="bg-blue-50 p-3 rounded-md border border-blue-200">
          <p className="text-blue-700 text-sm">
            <strong>Actual:</strong> {getCurrentTab()?.description}
          </p>
        </div>
      </div>

      {/* Tecnologías utilizadas */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-wrap items-center gap-4 mb-2">
          <span className="text-sm font-semibold text-gray-600">Tecnologías:</span>
          <div className="flex flex-wrap gap-2">
            {getCurrentTab()?.technologies?.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-gray-600">Estado:</span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            getCurrentTab()?.component 
              ? 'bg-green-100 text-green-700' 
              : 'bg-yellow-100 text-yellow-700'
          }`}>
            {getCurrentTab()?.component ? '✅ Implementado' : '🚧 En desarrollo'}
          </span>
        </div>
      </div>

      {/* Contenedor del diagrama */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <ReactFlowProvider>
          {renderCurrentComponent()}
        </ReactFlowProvider>
      </div>
    </div>
  );
};

export default ArquitecturaSoftware;