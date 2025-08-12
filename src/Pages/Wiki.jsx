import React, { useState } from 'react';
import WikiNav from '../components/wiki/WikiNav';
import WikiArticle from '../components/wiki/WikiArticle';

// Datos temporales de ejemplo - estos después los moverás a src/data/wiki/
const wikiData = {
  metodologia: {
    title: 'Metodología de Desarrollo',
    description: 'Implementación de Scrum en el Sistema de Gestión Académica',
    lastUpdated: '2025-01-15',
    author: 'Equipo de Desarrollo',
    tags: ['Scrum', 'Agile', 'Metodología'],
    sections: [
      {
        title: 'Scrum Framework',
        content: [
          'El proyecto utiliza la metodología Scrum para gestionar el desarrollo del Sistema de Gestión Académica.',
          'Scrum nos permite entregar valor de manera incremental y adaptarnos a los cambios de requisitos de manera eficiente.'
        ]
      },
      {
        title: 'Roles del Equipo',
        list: [
          'Product Owner: Define los requisitos y prioridades del backlog',
          'Scrum Master: Facilita el proceso y elimina impedimentos',
          'Development Team: Desarrolla las funcionalidades del sistema'
        ]
      },
      {
        title: 'Ceremonias',
        list: [
          'Sprint Planning: Planificación de objetivos cada 2 semanas',
          'Daily Standup: Sincronización diaria del equipo',
          'Sprint Review: Demostración de funcionalidades completadas',
          'Sprint Retrospective: Mejora continua del proceso'
        ]
      },
      {
        note: 'Cada sprint tiene una duración de 2 semanas con entregas incrementales funcionales.'
      }
    ],
    relatedLinks: [
      {
        title: 'Guía Oficial de Scrum',
        url: 'https://scrumguides.org/'
      },
      {
        title: 'Tablero de Proyecto (Trello/Jira)',
        url: '#'
      }
    ]
  },
  
  tecnologias: {
    title: 'Stack Tecnológico',
    description: 'Tecnologías utilizadas en el desarrollo del sistema',
    lastUpdated: '2025-01-15',
    author: 'Equipo Técnico',
    tags: ['Backend', 'Frontend', 'Database', 'Cloud'],
    sections: [
      {
        title: 'Frontend',
        content: [
          'React v18 como framework principal para la interfaz de usuario.',
          'JavaScript (ES6+) como lenguaje de programación.',
          'Tailwind CSS para el diseño y estilos responsivos.'
        ],
        list: [
          'React v18: Framework para interfaces de usuario',
          'JavaScript: Lenguaje de programación principal',
          'Tailwind CSS: Framework de utilidades CSS'
        ]
      },
      {
        title: 'Backend',
        content: [
          'Node.js como entorno de ejecución del servidor.',
          'API Gateway para gestionar las peticiones y enrutamiento.',
          'Arquitectura serverless con Azure Functions.'
        ],
        list: [
          'Node.js: Entorno de ejecución JavaScript del servidor',
          'API Gateway: Gestión de APIs y enrutamiento',
          'Azure Functions: Funciones serverless'
        ]
      },
      {
        title: 'Base de Datos',
        content: [
          'Azure Cosmos DB como base de datos principal.',
          'Base de datos relacional para gestión académica.'
        ],
        note: 'Azure Cosmos DB ofrece escalabilidad global y alta disponibilidad para nuestro sistema.'
      },
      {
        title: 'Infraestructura',
        list: [
          'Microsoft Azure: Plataforma de nube',
          'Azure Functions: Computación serverless',
          'Azure Cosmos DB: Base de datos distribuida',
          'GitHub: Control de versiones y CI/CD'
        ]
      }
    ]
  },
  
  arquitectura: {
    title: 'Arquitectura del Sistema',
    description: 'Diseño y componentes del Sistema de Gestión Académica',
    lastUpdated: '2025-01-15',
    author: 'Arquitecto de Software',
    tags: ['Arquitectura', 'Módulos', 'Componentes'],
    sections: [
      {
        title: 'Módulos Principales',
        content: [
          'El sistema está dividido en módulos funcionales que gestionan diferentes aspectos académicos.'
        ],
        list: [
          'Módulo de Cursos y Docentes: Gestión semestral',
          'Módulo de Sílabos: CRUD y generación automática',
          'Módulo de Catálogo: Documentos PDF auto-generados',
          'Módulo de Esquemas de Evaluación: Fórmulas y ponderaciones',
          'Módulo de Plan de Estudios: Control de versiones',
          'Módulo de Malla Curricular: Visualización interactiva'
        ]
      },
      {
        title: 'Flujo de Datos',
        content: [
          'Los datos fluyen desde la base de datos única hacia los diferentes módulos.',
          'Cada cambio en la fuente se propaga automáticamente a todos los documentos relacionados.'
        ]
      },
      {
        warning: 'Los diagramas detallados de arquitectura se agregarán cuando estén disponibles con React Flow.'
      }
    ]
  },
  
  glosario: {
    title: 'Glosario de Términos',
    description: 'Definiciones de términos técnicos y académicos utilizados en el proyecto',
    lastUpdated: '2025-01-15',
    tags: ['Glosario', 'Términos'],
    sections: [
      {
        title: 'Términos Académicos',
        list: [
          'Sílabo: Documento que describe el contenido, objetivos y metodología de un curso',
          'Sumilla: Resumen breve del contenido de una asignatura',
          'Malla Curricular: Estructura que organiza las asignaturas por semestres',
          'Plan de Estudios: Documento oficial que define la estructura académica',
          'Esquema de Evaluación: Sistema de ponderaciones para calificar un curso'
        ]
      },
      {
        title: 'Términos Técnicos',
        list: [
          'CRUD: Create, Read, Update, Delete - Operaciones básicas de datos',
          'API Gateway: Punto de entrada para todas las peticiones de la aplicación',
          'Serverless: Arquitectura donde no gestionamos servidores directamente',
          'Single Source of Truth: Una única fuente de datos confiable',
          'React Flow: Librería para crear diagramas interactivos'
        ]
      }
    ]
  },
  
  faqs: {
    title: 'Preguntas Frecuentes',
    description: 'Respuestas a las preguntas más comunes sobre el proyecto',
    lastUpdated: '2025-01-15',
    tags: ['FAQ', 'Ayuda'],
    sections: [
      {
        title: '¿Qué problema resuelve el sistema?',
        content: [
          'El sistema automatiza la gestión académica eliminando redundancia, errores y múltiples versiones de documentos.',
          'Centraliza toda la información académica en una única base de datos.'
        ]
      },
      {
        title: '¿Qué documentos se generan automáticamente?',
        list: [
          'Sílabos en formato PDF',
          'Catálogo de sílabos con sumillas',
          'Esquemas de evaluación',
          'Planes de estudio en múltiples formatos',
          'Reportes de seguimiento'
        ]
      },
      {
        title: '¿Cómo se actualiza la información?',
        content: [
          'Los cambios se realizan una sola vez en la base de datos y se propagan automáticamente a todos los documentos relacionados.'
        ]
      },
      {
        title: '¿Qué formatos de exportación están disponibles?',
        list: [
          'PDF para sílabos y catálogos',
          'Word (DOCX) para documentos oficiales',
          'Excel (XLSX) para reportes y datos',
          'Formatos específicos para SUNEDU, Calidad y Acreditación'
        ]
      }
    ]
  },
  
  recursos: {
    title: 'Recursos y Referencias',
    description: 'Enlaces útiles, documentación externa y recursos de apoyo',
    lastUpdated: '2025-01-15',
    tags: ['Recursos', 'Enlaces'],
    sections: [
      {
        title: 'Documentación Técnica',
        list: [
          'React v18 - Documentación oficial',
          'Tailwind CSS - Guías y componentes',
          'Azure Cosmos DB - Documentación de la base de datos',
          'Node.js - Documentación del runtime'
        ]
      },
      {
        title: 'Herramientas de Desarrollo',
        list: [
          'Vite - Build tool para desarrollo rápido',
          'React Flow - Librería para diagramas interactivos',
          'GitHub - Repositorio del código fuente'
        ]
      }
    ],
    relatedLinks: [
      {
        title: 'React Documentation',
        url: 'https://react.dev/'
      },
      {
        title: 'Tailwind CSS',
        url: 'https://tailwindcss.com/'
      },
      {
        title: 'Azure Cosmos DB',
        url: 'https://docs.microsoft.com/azure/cosmos-db/'
      },
      {
        title: 'Scrum Guide',
        url: 'https://scrumguides.org/'
      }
    ]
  }
};

const Wiki = () => {
  const [activeSection, setActiveSection] = useState('metodologia');
  
  const currentArticle = wikiData[activeSection];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="hidden md:block">
          <WikiNav 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
        </div>
        
        {/* Mobile Navigation Toggle - Para después */}
        <div className="md:hidden">
          {/* Aquí puedes agregar un botón hamburguesa para móviles después */}
        </div>
        
        {/* Main Content */}
        <main className="flex-1 bg-white min-h-screen">
          <WikiArticle article={currentArticle} />
        </main>
      </div>
    </div>
  );
};

export default Wiki;