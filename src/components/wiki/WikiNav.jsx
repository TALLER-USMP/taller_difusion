import React from 'react';
import { BookOpen, Code, Layers, HelpCircle, ExternalLink, Settings, Users, GitBranch, TrendingUp } from 'lucide-react';

const WikiNav = ({ activeSection, onSectionChange }) => {
  const sections = [
    {
      id: 'metodologia',
      title: 'Metodología',
      icon: Users,
      description: 'Scrum implementado y Planning Poker'
    },
    {
      id: 'tecnologias',
      title: 'Tecnologías',
      icon: Code,
      description: 'Stack confirmado: React, Node.js, Azure'
    },
    {
      id: 'arquitectura',
      title: 'Arquitectura',
      icon: Layers,
      description: 'Diseño refinado y aprobado'
    },
    {
      id: 'avances',
      title: 'Avances del Proyecto',
      icon: TrendingUp,
      description: 'Progreso semanas 1-16 completadas'
    },
    {
      id: 'procesos',
      title: 'Procesos AS IS/TO BE',
      icon: GitBranch,
      description: 'Análisis completado y aprobado'
    },
    {
      id: 'glosario',
      title: 'Glosario',
      icon: BookOpen,
      description: 'Términos técnicos y académicos'
    },
    {
      id: 'faqs',
      title: 'FAQs',
      icon: HelpCircle,
      description: 'Preguntas frecuentes del proyecto'
    },
    {
      id: 'recursos',
      title: 'Recursos',
      icon: ExternalLink,
      description: 'Herramientas y enlaces confirmados'
    }
  ];

  return (
    <nav className="bg-white border-r border-gray-200 w-64 min-h-screen p-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Settings className="w-6 h-6 text-[#A4101A]" />
          <h2 className="text-xl font-bold text-[#333333]">Wiki del Proyecto</h2>
        </div>
        <p className="text-sm text-gray-500">
          Sistema de Gestión Académica
        </p>
        <div className="mt-2 text-xs text-[#A4101A] font-medium">
          ✅ Semana 16/16 - Proyecto Completado
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="space-y-2">
        {sections.map((section) => {
          const IconComponent = section.icon;
          const isActive = activeSection === section.id;
          
          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`
                w-full text-left p-3 rounded-lg transition-all duration-200
                ${isActive 
                  ? 'bg-[#A4101A] text-white shadow-lg' 
                  : 'hover:bg-gray-50 text-[#333333] hover:shadow-sm'
                }
              `}
            >
              <div className="flex items-start gap-3">
                <IconComponent 
                  className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                    isActive ? 'text-white' : 'text-[#A4101A]'
                  }`} 
                />
                <div className="flex-1">
                  <h3 className={`font-semibold text-sm ${
                    isActive ? 'text-white' : 'text-[#333333]'
                  }`}>
                    {section.title}
                  </h3>
                  <p className={`text-xs mt-1 ${
                    isActive ? 'text-gray-200' : 'text-gray-500'
                  }`}>
                    {section.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer Info Actualizado */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="text-xs text-gray-500 space-y-2">
          <div>
            <p className="font-medium text-[#A4101A]">Estado del Proyecto:</p>
            <p className="text-gray-600">✅ Proyecto finalizado exitosamente</p>
            <p className="text-gray-600">🎉 16 semanas completadas</p>
          </div>
          <div className="pt-2 border-t border-gray-100">
            <p className="font-medium">Última actualización:</p>
            <p>31 de Octubre 2025</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default WikiNav;