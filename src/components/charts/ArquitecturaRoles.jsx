// src/components/charts/ArquitecturaRoles.jsx
import React, { useState } from 'react';
import { ReactFlowProvider } from '@xyflow/react';
import { Users, UserCheck, MessageCircle, HandHeart } from 'lucide-react';

// Importar los componentes de diagramas
import OrganigramaFlow from './roles/OrganigramaFlow';
// import ResponsabilidadesFlow from './roles/ResponsabilidadesFlow';
// import ComunicacionFlow from './roles/ComunicacionFlow';
// import ColaboracionFlow from './roles/ColaboracionFlow';

const ArquitecturaRoles = () => {
  const [activeSubTab, setActiveSubTab] = useState('organigrama');

  // Configuración de pestañas con sus respectivos componentes
  const subTabs = [
    { 
      id: 'organigrama', 
      label: 'Organigrama', 
      icon: Users,
      description: 'Estructura organizacional del equipo y jerarquías',
      component: OrganigramaFlow,
      roles: ['Project Manager', 'Tech Lead', 'Frontend Dev', 'Backend Dev', 'UI/UX Designer']
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
    const IconComponent = currentTab?.icon;
    return (
      <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
        <div className="text-center">
          <IconComponent className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Diagrama: {currentTab?.label}
          </h3>
          <p className="text-gray-500 mb-4">
            El componente React Flow para "{activeSubTab}" se implementará próximamente
          </p>
          <p className="text-sm text-gray-400">
            Ubicación: /src/components/charts/roles/{activeSubTab.charAt(0).toUpperCase() + activeSubTab.slice(1)}Flow.jsx
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
                    ? 'bg-purple-600 text-white shadow-md'
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
        <div className="bg-purple-50 p-3 rounded-md border border-purple-200">
          <p className="text-purple-700 text-sm">
            <strong>Actual:</strong> {getCurrentTab()?.description}
          </p>
        </div>
      </div>

      {/* Roles/Elementos involucrados */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-wrap items-center gap-4 mb-2">
          <span className="text-sm font-semibold text-gray-600">Roles/Elementos:</span>
          <div className="flex flex-wrap gap-2">
            {getCurrentTab()?.roles?.map((role) => (
              <span key={role} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                {role}
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

export default ArquitecturaRoles;