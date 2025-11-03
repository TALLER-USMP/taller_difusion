// src/pages/Arquitectura.jsx
import React, { useState } from 'react';
import { Building, Code, Users, GitBranch, Layers } from 'lucide-react';

// Importar los componentes de diagramas
import ArquitecturaSoftware from '../components/charts/ArquitecturaSoftware';
import ArquitecturaRoles from '../components/charts/ArquitecturaRoles';
import ArquitecturaMetodologia from '../components/charts/ArquitecturaMetodologia';

const Arquitectura = () => {
  const [activeMainTab, setActiveMainTab] = useState('software');

  // Configuración de pestañas principales
  const mainTabs = [
    {
      id: 'software',
      label: 'Arquitectura Software',
      icon: Code,
      description: 'Componentes técnicos, infraestructura y flujo de datos del sistema',
      color: 'bg-blue-600',
      subTabs: ['frontend', 'backend', 'devsecops', 'microservicios', 'infraestructura']
    },
    {
      id: 'metodologia',
      label: 'Metodológica Scrum',
      icon: GitBranch,
      description: 'Procesos, metodologías ágiles y flujos de trabajo del equipo',
      color: 'bg-green-600',
      subTabs: ['scrum', 'kanban', 'gitflow', 'testing']
    },
    {
      id: 'roles',
      label: 'Mapa de Roles',
      icon: Users,
      description: 'Organización del equipo, responsabilidades y comunicación',
      color: 'bg-purple-600',
      subTabs: ['organigrama', 'responsabilidades', 'comunicacion', 'colaboracion']
    }
  ];

  const getCurrentMainTab = () => {
    return mainTabs.find(tab => tab.id === activeMainTab);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Building className="w-8 h-8 text-red-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Arquitectura del Sistema
            </h1>
          </div>
          <p className="text-gray-600">
            Sistema de Gestión Académica - Arquitectura técnica, metodológica y organizacional
          </p>
        </div>
      </div>

      {/* Main Navigation Tabs */}
      <div className="bg-white px-6 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {mainTabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveMainTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeMainTab === tab.id
                      ? `${tab.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
          
          {/* Main Tab Description */}
          <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-5 h-5 text-gray-500" />
              <span className="font-semibold text-gray-700">
                {getCurrentMainTab()?.label}
              </span>
            </div>
            <p className="text-gray-600">
              {getCurrentMainTab()?.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeMainTab === 'software' && (
          <ArquitecturaSoftware />
        )}
        {activeMainTab === 'metodologia' && (
          <ArquitecturaMetodologia />
        )}
        {activeMainTab === 'roles' && (
          <ArquitecturaRoles />
        )}
      </div>
    </div>
  );
};

export default Arquitectura;