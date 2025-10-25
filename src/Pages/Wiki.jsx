import React, { useState } from 'react';
import WikiNav from '../components/wiki/WikiNav';
import WikiArticle from '../components/wiki/WikiArticle';

// Datos de la Wiki (actualizados hasta Semana 6 - Septiembre 2025)
const wikiData = {
  metodologia: {
    title: 'Metodología de Desarrollo',
    description: 'Implementación de Scrum en el Sistema de Gestión Académica',
    lastUpdated: '2025-09-13',
    author: 'Equipo de Desarrollo',
    tags: ['Scrum', 'Agile', 'Metodología', 'Planning Poker'],
    sections: [
      {
        title: 'Scrum Framework Implementado',
        content: [
          'El proyecto utiliza la metodología Scrum para gestionar el desarrollo del Sistema de Gestión Académica.',
          'Durante las primeras 6 semanas hemos establecido exitosamente todas las ceremonias y roles Scrum.',
          'La metodología nos ha permitido adaptarnos eficientemente a los cambios arquitectónicos y organizacionales.'
        ]
      },
      {
        title: 'Roles Activos del Equipo',
        list: [
          'Product Owner: Define requisitos y valida procesos AS IS/TO BE',
          'Scrum Master: Facilita comunicación entre equipos y elimina impedimentos',
          'Arquitecto: Refinó arquitectura del sistema (Semana 3)',
          'Líderes Frontend/Backend: Realizaron Planning Poker y organizaron equipos (Semana 6)',
          'Especialistas UX, QA, DevSecOps: Contribuyen en sus áreas específicas'
        ]
      },
      {
        title: 'Ceremonias Realizadas',
        list: [
          'Sprint Planning: Completado cada 2 semanas con planificación detallada',
          'Daily Standup: Sincronización constante entre áreas',
          'Planning Poker: Realizado en Semana 6 para estimación de desarrollo',
          'Revisiones semanales: Validación de procesos y aprobaciones de equipo'
        ]
      },
      {
        title: 'Logros Metodológicos',
        content: [
          'Semanas 1-2: Establecimiento exitoso de roles y capacitación del equipo.',
          'Semanas 3-4: División eficiente en equipos AS IS/TO BE para análisis paralelo.',
          'Semanas 5-6: Aprobación formal de procesos y transición a desarrollo activo.',
          'Semanas 7-8: Gestión efectiva de pausa académica respetando prioridades del equipo.',
          'Semana 9: Implementación exitosa de herramientas de comunicación (Slack) y procesos DevSecOps/QA.',
          'Semana 10: Inicio estructurado del desarrollo con primer microfrontend (Login) implementado.',
          'Semana 11: Resolución efectiva de problemas técnicos y desarrollo paralelo de Dashboard con integración exitosa.'
        ],
        note: 'La metodología Scrum ha demostrado ser efectiva para coordinar 12+ miembros en 6 áreas especializadas.'
      }
    ]
  },
  
  tecnologias: {
    title: 'Stack Tecnológico',
    description: 'Tecnologías definidas y configuradas durante el proyecto',
    lastUpdated: '2025-09-13',
    author: 'Equipos Técnicos',
    tags: ['React', 'Node.js', 'Azure', 'SonarQube', 'Figma'],
    sections: [
      {
        title: 'Frontend - Definido',
        content: [
          'React v18 confirmado como framework principal tras evaluación técnica.',
          'JavaScript (ES6+) como lenguaje de programación del lado cliente.',
          'Tailwind CSS para diseño responsive y componentes reutilizables.'
        ],
        list: [
          'React v18: Framework UI principal',
          'JavaScript ES6+: Lenguaje de programación',
          'Tailwind CSS: Framework de utilidades CSS',
          'Figma: Herramienta de diseño UX/UI (prototipos completados Semana 6)'
        ]
      },
      {
        title: 'Backend - Planificado',
        content: [
          'Node.js como entorno de ejecución principal del servidor.',
          'Arquitectura refinada en Semana 3 por el Arquitecto.',
          'API Gateway y patrones serverless con Azure Functions.'
        ],
        list: [
          'Node.js: Runtime del servidor',
          'Azure Functions: Computación serverless',
          'API Gateway: Gestión de endpoints',
          'Patrones de diseño: Definidos por Arquitecto'
        ]
      },
      {
        title: 'Base de Datos y Storage',
        content: [
          'Azure Cosmos DB como base de datos principal.',
          'Diseño de esquema alineado con procesos TO BE aprobados.',
          'Single Source of Truth implementado para evitar duplicaciones.'
        ]
      },
      {
        title: 'Herramientas de Desarrollo',
        content: [
          'SonarQube: Seleccionado como herramienta principal de testing y calidad (Semana 6).',
          'Azure DevOps: Para pipelines CI/CD (configuración en progreso).',
          'GitHub: Control de versiones y colaboración.'
        ],
        list: [
          'SonarQube: Testing y análisis de calidad de código',
          'Azure DevOps: CI/CD pipelines',
          'GitHub: Repositorio y control de versiones',
          'Figma: Prototipos y diseño UX/UI'
        ]
      },
      {
        title: 'Infraestructura Cloud',
        content: [
          'Microsoft Azure como plataforma principal.',
          'Costeo completo realizado por Ingeniero de Nube (Semana 2).',
          'Configuración de herramientas DevSecOps en progreso.'
        ]
      }
    ]
  },
  
  arquitectura: {
    title: 'Arquitectura del Sistema',
    description: 'Diseño refinado y aprobado del Sistema de Gestión Académica',
    lastUpdated: '2025-09-13',
    author: 'Arquitecto de Software',
    tags: ['Arquitectura', 'Refinamiento', 'Procesos', 'Módulos'],
    sections: [
      {
        title: 'Refinamiento Arquitectónico (Semana 3)',
        content: [
          'La arquitectura inicial fue completamente revisada y refinada por el Arquitecto.',
          'Se identificaron desalineamientos con los objetivos del proyecto y se corrigieron.',
          'Nueva estructura arquitectónica aprobada por todo el equipo.'
        ],
        note: 'El refinamiento arquitectónico fue crucial para establecer bases sólidas antes del desarrollo.'
      },
      {
        title: 'Módulos del Sistema (Validados)',
        content: [
          'Los módulos fueron validados durante el análisis de procesos (Semanas 4-5).'
        ],
        list: [
          'Módulo de Cursos y Docentes: Gestión semestral automatizada',
          'Módulo de Sílabos: CRUD con generación PDF automática',
          'Módulo de Catálogo de Sílabos: Auto-sincronización de sumillas',
          'Módulo de Esquemas de Evaluación: Fórmulas y ponderaciones',
          'Módulo de Plan de Estudios: Exportación multi-formato',
          'Módulo de Malla Curricular: Visualización interactiva'
        ]
      },
      {
        title: 'Procesos AS IS vs TO BE (Completado)',
        content: [
          'Análisis completo de procesos actuales de gestión de sílabos universitarios.',
          'División exitosa del equipo en grupos AS IS y TO BE para análisis paralelo.',
          'Procesos objetivo definidos y aprobados formalmente por el equipo.',
          'Documentación consolidada de brechas y automatizaciones necesarias.'
        ],
        list: [
          'AS IS: Procesos actuales manuales identificados y documentados',
          'TO BE: Procesos automatizados diseñados y validados',
          'Criterios de aceptación: Definidos para desarrollo',
          'Single Source of Truth: Implementación planificada'
        ]
      },
      {
        title: 'Diseño UX/UI (En Progreso)',
        content: [
          'Primeros prototipos completados en Figma por el equipo UX (Semana 6).',
          'Wireframes principales diseñados y validados.',
          'Guía de estilos inicial documentada.',
          'Flujos de usuario optimizados basados en procesos TO BE.'
        ]
      },
      {
        title: 'Patrones de Desarrollo',
        content: [
          'Equipos fullstack organizados por líderes Frontend y Backend.',
          'Estimaciones realizadas mediante Planning Poker.',
          'Estándares de calidad definidos con SonarQube.'
        ]
      }
    ]
  },

  avances: {
    title: 'Avances del Proyecto (Semanas 1-9)',
    description: 'Progreso detallado y logros alcanzados hasta la Semana 9',
    lastUpdated: '2025-10-04',
    author: 'Equipo de Desarrollo',
    tags: ['Avances', 'Semanas 1-9', 'Logros', 'Fases'],
    sections: [
      {
        title: 'Fase 1: Capacitación y Planificación (Semanas 1-2) ✅',
        content: [
          'Capacitación completa del equipo en roles específicos y metodología Scrum.',
          'Estructura organizacional establecida con 12+ miembros en 6 áreas.',
          'Costeo completo del proyecto realizado por Ingeniero de Nube.',
          'Planificación detallada por equipos y definición de responsabilidades.'
        ],
        list: [
          '✅ Roles y responsabilidades definidos claramente',
          '✅ Metodología Scrum implementada exitosamente',
          '✅ Stack tecnológico evaluado y confirmado',
          '✅ Costeo del proyecto completado en Azure'
        ]
      },
      {
        title: 'Fase 2: Arquitectura y Análisis (Semanas 3-4) ✅',
        content: [
          'Refinamiento completo de la arquitectura del sistema por el Arquitecto.',
          'División eficiente del equipo en grupos AS IS y TO BE.',
          'Análisis completo de procesos actuales de gestión de sílabos.',
          'Definición de procesos objetivo y automatizaciones clave.'
        ],
        list: [
          '✅ Arquitectura refinada y aprobada por el equipo',
          '✅ Procesos AS IS completamente documentados',
          '✅ Procesos TO BE diseñados y validados',
          '✅ Análisis paralelo exitoso entre equipos'
        ]
      },
      {
        title: 'Fase 3: Diseño y Preparación (Semanas 5-6) ✅',
        content: [
          'Múltiples iteraciones de refinamiento de procesos completadas.',
          'Aprobación formal de procesos AS IS y TO BE por todo el equipo.',
          'Primeros prototipos de Figma completados por equipo UX.',
          'Planning Poker realizado y equipos fullstack organizados.'
        ],
        list: [
          '✅ Procesos refinados y aprobados formalmente',
          '✅ Criterios de aceptación definidos para desarrollo',
          '✅ Prototipos interactivos en Figma completados',
          '✅ SonarQube seleccionado como herramienta de testing',
          '✅ Equipos fullstack organizados y listos para desarrollo'
        ]
      },
      {
        title: 'Fase 4: Pausa Académica y Retorno (Semanas 7-9) ✅',
        content: [
          'Semanas 7-8: Período de exámenes sin actividades del proyecto (decisión de la profesora).',
          'Semana 9: Retorno exitoso con implementación de procesos de calidad y comunicación.',
          'Slack implementado como herramienta principal de comunicación.',
          'Procesos DevSecOps y QA establecidos con aprobaciones obligatorias.'
        ],
        list: [
          '✅ Período académico respetado (semanas 7-8)',
          '✅ Slack configurado con integración GitHub',
          '✅ Flujos de trabajo y políticas de branches definidos',
          '✅ Checkpoints de calidad establecidos',
          '⚠️ Identificadas mejoras en coordinación entre equipos'
        ]
      },
      {
        title: 'Fase 5: Desarrollo Activo (Semana 10+) 🚧',
        content: [
          'Inicio de desarrollo siguiendo flujos establecidos.',
          'Monitoreo de adopción de nuevas herramientas y procesos.',
          'Refinamiento continuo de prototipos UX pendientes.'
        ],
        list: [
          '🔄 Desarrollo de módulos prioritarios',
          '🔄 Implementación de pipelines CI/CD completos',
          '🔄 Retrospectivas y mejora continua',
          '🔄 Finalización de prototipos UX de alta prioridad'
        ]
      },
      {
        title: 'Métricas de Progreso Actual',
        content: [
          'Progreso temporal: 56.25% (9 de 16 semanas completadas)',
          'Fases completadas: 4 de 7 fases (57%)',
          'Equipo activo: 12+ miembros en 6 áreas especializadas',
          'Herramientas clave implementadas: Slack, SonarQube, GitHub'
        ],
        note: 'Pausa académica permitió al equipo renovar energías. Retorno en Semana 9 con procesos robustos de comunicación y calidad.'
      }
    ]
  },
  
  procesos: {
    title: 'Procesos de Gestión Académica',
    description: 'Análisis AS IS vs TO BE completado y aprobado',
    lastUpdated: '2025-09-13',
    author: 'Equipos AS IS y TO BE',
    tags: ['AS IS', 'TO BE', 'Procesos', 'Sílabos', 'Automatización'],
    sections: [
      {
        title: 'Procesos AS IS (Estado Actual)',
        content: [
          'Análisis completo de procesos actuales de gestión de sílabos universitarios.',
          'Identificación de redundancias, trabajo manual y múltiples versiones desactualizadas.',
          'Documentación de flujos existentes y puntos de dolor.'
        ],
        list: [
          'Gestión manual de sílabos en Word/Excel/PDF',
          'Múltiples versiones desactualizadas de documentos',
          'Redundancia en entrada de datos',
          'Falta de sincronización entre documentos',
          'Riesgo alto de errores humanos'
        ]
      },
      {
        title: 'Procesos TO BE (Estado Objetivo)',
        content: [
          'Procesos automatizados diseñados para eliminar redundancia.',
          'Single Source of Truth implementado en base de datos única.',
          'Generación automática de todos los documentos académicos.'
        ],
        list: [
          'Base de datos única como fuente de verdad',
          'Generación automática de sílabos PDF',
          'Sincronización automática de sumillas en catálogo',
          'Actualización automática de docentes por semestre',
          'Exportación multi-formato (SUNEDU, Calidad, Acreditación)'
        ]
      },
      {
        title: 'Brechas Identificadas',
        content: [
          'Análisis detallado de diferencias entre estado actual y objetivo.',
          'Automatizaciones clave identificadas para implementación.'
        ],
        list: [
          'Necesidad de CRUD automatizado para sílabos',
          'Integración requerida entre módulos del sistema',
          'Herencia automática de sílabos entre semestres',
          'Generación de reportes y exportaciones automáticas',
          'Control de versiones para planes de estudio'
        ]
      },
      {
        title: 'Validación y Aprobación',
        content: [
          'Múltiples iteraciones de refinamiento completadas (Semana 5).',
          'Aprobación formal de procesos por todo el equipo.',
          'Criterios de aceptación definidos para desarrollo.',
          'Documentación consolidada y lista para implementación.'
        ],
        note: 'Los procesos están completamente validados y listos para la fase de desarrollo.'
      }
    ]
  },
  
  glosario: {
    title: 'Glosario de Términos',
    description: 'Definiciones actualizadas de términos técnicos y académicos',
    lastUpdated: '2025-09-13',
    tags: ['Glosario', 'Términos', 'Definiciones'],
    sections: [
      {
        title: 'Términos Académicos',
        list: [
          'Sílabo: Documento que describe contenido, objetivos y metodología de un curso',
          'Sumilla: Resumen breve del contenido de una asignatura para catálogos',
          'Malla Curricular: Estructura visual que organiza asignaturas por semestres',
          'Plan de Estudios: Documento oficial que define la estructura académica',
          'Esquema de Evaluación: Sistema de ponderaciones para calificar cursos',
          'AS IS: Procesos actuales tal como se realizan hoy',
          'TO BE: Procesos objetivo que se quieren implementar'
        ]
      },
      {
        title: 'Términos Técnicos',
        list: [
          'CRUD: Create, Read, Update, Delete - Operaciones básicas de datos',
          'Single Source of Truth: Una única fuente de datos confiable (base de datos)',
          'API Gateway: Punto de entrada para todas las peticiones',
          'Serverless: Arquitectura sin gestión directa de servidores',
          'Planning Poker: Técnica de estimación ágil usando cartas',
          'SonarQube: Herramienta de análisis de calidad de código',
          'React Flow: Librería para diagramas interactivos'
        ]
      },
      {
        title: 'Términos del Proyecto',
        list: [
          'Refinamiento Arquitectónico: Proceso de mejora de la arquitectura inicial',
          'Equipos AS IS/TO BE: División del equipo para análisis paralelo',
          'Herencia de Sílabos: Copia automática de sílabos entre semestres',
          'Multi-formato: Exportación en diferentes formatos según destinatario',
          'Fullstack Teams: Equipos con capacidades frontend y backend'
        ]
      }
    ]
  },
  
  faqs: {
    title: 'Preguntas Frecuentes',
    description: 'Respuestas a las preguntas más comunes sobre el proyecto',
    lastUpdated: '2025-09-13',
    author: 'Equipo de Desarrollo',
    tags: ['FAQ', 'Ayuda', 'Sistema', 'Procesos'],
    sections: [
      {
        title: '¿Qué problema resuelve el sistema?',
        content: [
          'El sistema automatiza la gestión académica eliminando la redundancia, errores humanos y múltiples versiones desactualizadas de documentos.',
          'Centraliza toda la información académica en una única base de datos (Single Source of Truth).',
          'Basado en el análisis AS IS completado en las semanas 3-4, identificamos que los procesos manuales actuales generan trabajo duplicado y riesgo de inconsistencias.'
        ]
      },
      {
        title: '¿En qué fase está el proyecto actualmente?',
        content: [
          'Estamos en la Semana 9 de 16, en plena Fase 5: Desarrollo Activo.',
          'Las primeras 4 fases están completadas, incluyendo el período de exámenes y retorno con implementación de herramientas de calidad.',
          'Acabamos de implementar Slack, procesos DevSecOps y estándares QA en la Semana 9.'
        ],
        list: [
          '✅ Procesos AS IS y TO BE aprobados (Semanas 4-5)',
          '✅ Arquitectura refinada y prototipos Figma (Semanas 3-6)',
          '✅ Pausa académica respetada (Semanas 7-8)',
          '✅ Slack y procesos de calidad implementados (Semana 9)',
          '🚧 Desarrollo de módulos en progreso'
        ]
      },
      {
        title: '¿Qué documentos se generan automáticamente?',
        content: [
          'Todos los documentos académicos se generarán automáticamente desde la base de datos única:'
        ],
        list: [
          'Sílabos individuales en formato PDF con información actualizada',
          'Catálogo de sílabos con sumillas sincronizadas automáticamente',
          'Esquemas de evaluación con fórmulas y ponderaciones',
          'Planes de estudio en múltiples formatos (SUNEDU, Calidad, Acreditación)',
          'Malla curricular visual con prerrequisitos y créditos',
          'Reportes de seguimiento y estadísticas'
        ]
      },
      {
        title: '¿Cómo funciona la "Single Source of Truth"?',
        content: [
          'Una base de datos única contiene toda la información académica.',
          'Cualquier cambio se realiza una sola vez y se propaga automáticamente.',
          'Ejemplo: Si cambia un docente, se actualiza automáticamente en el sílabo, reportes y documentos oficiales.'
        ],
        note: 'Este concepto fue validado durante el análisis TO BE y elimina la redundancia identificada en procesos AS IS.'
      },
      {
        title: '¿Qué tecnologías se confirmaron para el desarrollo?',
        content: [
          'El stack tecnológico fue evaluado y confirmado durante las primeras semanas:'
        ],
        list: [
          'Frontend: React v18 con JavaScript ES6+ y Tailwind CSS',
          'Backend: Node.js con arquitectura serverless en Azure Functions',
          'Base de Datos: Azure Cosmos DB para escalabilidad',
          'Testing: SonarQube (seleccionado en Semana 6)',
          'Diseño: Figma para prototipos UX/UI',
          'Cloud: Microsoft Azure con costeo completo realizado'
        ]
      },
      {
        title: '¿Cómo se organizó el equipo para el desarrollo?',
        content: [
          'El equipo se organizó en 6 áreas especializadas con más de 12 miembros.',
          'En la Semana 6 se realizó la organización de equipos fullstack:'
        ],
        list: [
          'Líderes Frontend y Backend realizaron Planning Poker',
          'Equipos fullstack organizados por especialidad',
          'Roles claramente definidos desde la Semana 1',
          'Metodología Scrum implementada exitosamente',
          'Comunicación fluida entre áreas especializadas'
        ]
      },
      {
        title: '¿Cuándo estará listo el sistema?',
        content: [
          'El proyecto está planificado para 16 semanas total (Agosto - Noviembre 2025).',
          'Cronograma actual basado en las fases completadas:'
        ],
        list: [
          'Semanas 7-12: Desarrollo e implementación de módulos',
          'Semanas 13-14: Testing completo con SonarQube e integración',
          'Semanas 15-16: Entrega final y documentación',
          'Entregas incrementales cada 2 semanas (sprints)'
        ]
      },
      {
        title: '¿Qué módulos incluye el sistema?',
        content: [
          'El sistema incluye 6 módulos principales validados durante el análisis:'
        ],
        list: [
          'Módulo de Cursos y Docentes: Gestión por semestre',
          'Módulo de Sílabos: CRUD con generación PDF automática', 
          'Módulo de Catálogo: Auto-sincronización de sumillas',
          'Módulo de Esquemas de Evaluación: Fórmulas y ponderaciones',
          'Módulo de Plan de Estudios: Exportación multi-formato',
          'Módulo de Malla Curricular: Visualización interactiva'
        ]
      },
      {
        title: '¿Cómo se validaron los procesos?',
        content: [
          'Se siguió un proceso riguroso de análisis y validación:',
          '1. División del equipo en grupos AS IS y TO BE (Semana 4)',
          '2. Análisis paralelo de procesos actuales vs objetivos',  
          '3. Múltiples iteraciones de refinamiento (Semana 5)',
          '4. Aprobación formal por todo el equipo',
          '5. Definición de criterios de aceptación para desarrollo'
        ],
        note: 'Este proceso aseguró que los procesos estén completamente validados antes del desarrollo.'
      }
    ]
  },
  
  recursos: {
    title: 'Recursos y Herramientas',
    description: 'Herramientas confirmadas y recursos utilizados en el proyecto',
    lastUpdated: '2025-09-13',
    tags: ['Recursos', 'Herramientas', 'Enlaces'],
    sections: [
      {
        title: 'Herramientas de Desarrollo Confirmadas',
        list: [
          'React v18 - Framework frontend principal',
          'Node.js - Runtime del servidor',
          'Azure Cosmos DB - Base de datos principal',
          'SonarQube - Testing y calidad de código',
          'Figma - Diseño UX/UI y prototipos',
          'GitHub - Control de versiones'
        ]
      },
      {
        title: 'Plataforma Cloud',
        list: [
          'Microsoft Azure - Plataforma cloud principal',
          'Azure Functions - Computación serverless',
          'Azure DevOps - CI/CD pipelines',
          'Costeo completado para servicios Azure'
        ]
      },
      {
        title: 'Metodología y Organización',
        list: [
          'Scrum Framework - Metodología ágil implementada',
          'Planning Poker - Estimación de desarrollo',
          'Equipos especializados - 6 áreas de trabajo',
          'Ceremonias regulares - Sprint planning y reviews'
        ]
      }
    ],
    relatedLinks: [
      {
        title: 'React Documentation',
        url: 'https://react.dev/'
      },
      {
        title: 'Azure Cosmos DB Docs',
        url: 'https://docs.microsoft.com/azure/cosmos-db/'
      },
      {
        title: 'SonarQube Documentation',
        url: 'https://docs.sonarqube.org/'
      },
      {
        title: 'Figma Design Tool',
        url: 'https://www.figma.com/'
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