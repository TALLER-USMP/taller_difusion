import React from 'react';
import { BookOpen, Code, Layers, HelpCircle, ExternalLink, Settings, Users } from 'lucide-react';

const WikiNav = ({ activeSection, onSectionChange }) => {
  const sections = [
    {
      id: 'metodologia',
      title: 'Metodología',
      icon: Users,
      description: 'Scrum y procesos de trabajo'
    },
    {
      id: 'tecnologias',
      title: 'Tecnologías',
      icon: Code,
      description: 'Stack tecnológico del proyecto'
    },
    {
      id: 'arquitectura',
      title: 'Arquitectura del Sistema',
      icon: Layers,
      description: 'Módulos y componentes'
    },
    {
      id: 'glosario',
      title: 'Glosario',
      icon: BookOpen,
      description: 'Términos técnicos'
    },
    {
      id: 'faqs',
      title: 'FAQs',
      icon: HelpCircle,
      description: 'Preguntas frecuentes'
    },
    {
      id: 'recursos',
      title: 'Recursos',
      icon: ExternalLink,
      description: 'Enlaces y referencias'
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
          Documentación del Sistema de Gestión Académica
        </p>
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

      {/* Footer Info */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="text-xs text-gray-500 space-y-1">
          <p className="font-medium">Última actualización:</p>
          <p>{new Date().toLocaleDateString('es-ES', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
        </div>
      </div>
    </nav>
  );
};

export default WikiNav;