import React, { useState } from 'react';
import WikiNav from '../components/wiki/WikiNav';
import WikiArticle from '../components/wiki/WikiArticle';

// Datos de la Wiki (actualizados hasta Semana 16 - Noviembre 2025 - PROYECTO COMPLETADO)
const wikiData = {
  metodologia: {
    title: 'Metodología de Desarrollo',
    description: 'Implementación exitosa de Scrum en el Sistema de Gestión Académica',
    lastUpdated: '2025-11-22',
    author: 'Equipo de Desarrollo',
    tags: ['Scrum', 'Agile', 'Metodología', 'Planning Poker', 'Proyecto Completado'],
    sections: [
      {
        title: 'Scrum Framework Implementado',
        content: [
          'El proyecto utilizó la metodología Scrum para gestionar el desarrollo del Sistema de Gestión Académica durante 16 semanas completas.',
          'Se establecieron exitosamente todas las ceremonias y roles Scrum desde el inicio.',
          'La metodología nos permitió adaptarnos eficientemente a los cambios arquitectónicos y organizacionales, culminando en una entrega exitosa.'
        ]
      },
      {
        title: 'Roles Activos del Equipo',
        list: [
          'Product Owner: Definió requisitos y validó procesos AS IS/TO BE',
          'Scrum Master: Facilitó comunicación entre equipos y eliminó impedimentos',
          'Arquitecto: Refinó arquitectura del sistema (Semana 3)',
          'Líderes Frontend/Backend: Realizaron Planning Poker y organizaron equipos (Semana 6)',
          'Especialistas UX, QA, DevSecOps: Contribuyeron en sus áreas específicas',
          'Coordinador de Documentos: Gestionó toda la documentación del proyecto'
        ]
      },
      {
        title: 'Ceremonias Realizadas (16 Semanas)',
        list: [
          'Sprint Planning: 8 sprints de 2 semanas completados exitosamente',
          'Daily Standup: Sincronización constante entre áreas durante todo el proyecto',
          'Planning Poker: Realizado en Semana 6 para estimación de desarrollo',
          'Sprint Reviews: Validación de avances cada 2 semanas',
          'Retrospectivas: Mejora continua implementada en cada sprint',
          'Revisiones semanales: Validación de procesos y aprobaciones de equipo'
        ]
      },
      {
        title: 'Logros Metodológicos del Proyecto Completo',
        content: [
          'Semanas 1-2: Establecimiento exitoso de roles y capacitación del equipo.',
          'Semanas 3-4: División eficiente en equipos AS IS/TO BE para análisis paralelo.',
          'Semanas 5-6: Aprobación formal de procesos y transición a desarrollo activo.',
          'Semanas 7-8: Gestión efectiva de pausa académica respetando prioridades del equipo.',
          'Semana 9: Implementación exitosa de herramientas de comunicación (Slack) y procesos DevSecOps/QA.',
          'Semana 10: Inicio estructurado del desarrollo con primer microfrontend (Login) implementado.',
          'Semana 11: Resolución efectiva de problemas técnicos y desarrollo paralelo de Dashboard con integración exitosa.',
          'Semana 12: Estabilización completa del sistema con corrección de todos los errores críticos.',
          'Semana 13: Testing integral con 95% de cobertura de código alcanzada.',
          'Semana 14: Integración final y configuración de producción completada.',
          'Semana 15: Documentación exhaustiva y preparación de presentaciones finalizadas.',
          'Semana 16: Entrega final exitosa y cierre formal del proyecto.'
        ],
        note: '🎉 La metodología Scrum demostró ser altamente efectiva para coordinar 12+ miembros en 6 áreas especializadas, culminando en un proyecto exitoso entregado en tiempo y forma.'
      },
      {
        title: 'Conclusiones de la Metodología (Proyecto Completado)',
        content: [
          'La metodología Scrum fue implementada exitosamente durante las 16 semanas del proyecto.',
          'Se realizaron 8 sprints de 2 semanas cada uno con entregas incrementales.',
          'Todas las ceremonias Scrum fueron ejecutadas consistentemente.',
          'El equipo demostró alta capacidad de adaptación y colaboración.'
        ],
        list: [
          '✅ 8 sprints completados exitosamente',
          '✅ Daily standups mantuvieron comunicación fluida',
          '✅ Sprint reviews validaron avances continuos',
          '✅ Retrospectivas mejoraron procesos continuamente',
          '✅ Planning Poker facilitó estimaciones precisas',
          '🎉 Metodología clave para el éxito del proyecto'
        ],
        note: 'El uso de Scrum permitió entregar un proyecto de alta calidad en tiempo y forma, demostrando la efectividad de las metodologías ágiles en proyectos de desarrollo de software académico.'
      }
    ]
  },
  
  tecnologias: {
    title: 'Stack Tecnológico',
    description: 'Tecnologías implementadas exitosamente en el proyecto',
    lastUpdated: '2025-11-22',
    author: 'Equipos Técnicos',
    tags: ['React', 'Node.js', 'Azure', 'SonarQube', 'Figma', 'Implementado'],
    sections: [
      {
        title: 'Frontend - Implementado',
        content: [
          'React v18 utilizado como framework principal para todos los microfrontends.',
          'JavaScript (ES6+) como lenguaje de programación del lado cliente.',
          'Tailwind CSS para diseño responsive y componentes reutilizables.',
          'Sistema completamente funcional con Login y Dashboard integrados.'
        ],
        list: [
          '✅ React v18: Framework UI principal implementado',
          '✅ JavaScript ES6+: Lenguaje de programación utilizado',
          '✅ Tailwind CSS: Framework de utilidades CSS implementado',
          '✅ Figma: Prototipos completados y utilizados como referencia',
          '✅ Microfrontends: Arquitectura implementada exitosamente'
        ]
      },
      {
        title: 'Backend - Implementado',
        content: [
          'Node.js como entorno de ejecución principal del servidor.',
          'Arquitectura serverless con Azure Functions completamente funcional.',
          'API Gateway y patrones de diseño implementados según arquitectura refinada.'
        ],
        list: [
          '✅ Node.js: Runtime del servidor implementado',
          '✅ Azure Functions: Computación serverless configurada',
          '✅ API Gateway: Gestión de endpoints operativa',
          '✅ JWT: Autenticación con tokens implementada',
          '✅ Patrones de diseño: Implementados según arquitectura'
        ]
      },
      {
        title: 'Base de Datos y Storage - Implementado',
        content: [
          'Azure Cosmos DB implementada como base de datos principal.',
          'Esquema de base de datos alineado con procesos TO BE aprobados.',
          'Single Source of Truth implementado exitosamente.'
        ],
        list: [
          '✅ Azure Cosmos DB: Base de datos principal en producción',
          '✅ Esquema de datos: Diseñado e implementado',
          '✅ Single Source of Truth: Implementado correctamente'
        ]
      },
      {
        title: 'Herramientas de Desarrollo - Implementadas',
        content: [
          'SonarQube utilizado exitosamente para testing y análisis de calidad (95% cobertura).',
          'Azure DevOps configurado con pipelines CI/CD completamente funcionales.',
          'GitHub utilizado para control de versiones durante todo el proyecto.'
        ],
        list: [
          '✅ SonarQube: Testing y análisis con 95% cobertura',
          '✅ Azure DevOps: CI/CD pipelines operativos',
          '✅ GitHub: Repositorio y control de versiones',
          '✅ Slack: Comunicación implementada desde semana 9',
          '✅ Figma: Prototipos utilizados para desarrollo'
        ]
      },
      {
        title: 'Infraestructura Cloud - En Producción',
        content: [
          'Microsoft Azure como plataforma principal completamente configurada.',
          'Costeo realizado y validado (Semana 2).',
          'Ambientes de desarrollo, staging y producción operativos.',
          'Sistema completamente desplegado y funcional.'
        ],
        list: [
          '✅ Microsoft Azure: Plataforma cloud en producción',
          '✅ Ambientes configurados: Dev, Staging, Producción',
          '✅ Monitoreo y logging: Implementados',
          '✅ Backups automáticos: Configurados',
          '✅ Seguridad: DevSecOps implementado'
        ]
      }
    ]
  },
  
  arquitectura: {
    title: 'Arquitectura del Sistema',
    description: 'Diseño refinado e implementado del Sistema de Gestión Académica',
    lastUpdated: '2025-11-22',
    author: 'Arquitecto de Software',
    tags: ['Arquitectura', 'Refinamiento', 'Procesos', 'Módulos', 'Implementado'],
    sections: [
      {
        title: 'Refinamiento Arquitectónico (Semana 3)',
        content: [
          'La arquitectura inicial fue completamente revisada y refinada por el Arquitecto.',
          'Se identificaron desalineamientos con los objetivos del proyecto y se corrigieron.',
          'Nueva estructura arquitectónica aprobada por todo el equipo.',
          'Arquitectura implementada exitosamente durante el desarrollo.'
        ],
        note: 'El refinamiento arquitectónico fue crucial para establecer bases sólidas que permitieron el éxito del proyecto.'
      },
      {
        title: 'Módulos del Sistema (Implementados)',
        content: [
          'Los módulos fueron validados durante el análisis de procesos (Semanas 4-5) e implementados completamente.'
        ],
        list: [
          '✅ Módulo de Autenticación: Login con JWT implementado',
          '✅ Dashboard Principal: Navegación y visualización implementada',
          '✅ Módulo de Cursos y Docentes: Gestión semestral automatizada',
          '✅ Módulo de Sílabos: CRUD con generación PDF automática',
          '✅ Módulo de Catálogo de Sílabos: Auto-sincronización de sumillas',
          '✅ Módulo de Esquemas de Evaluación: Fórmulas y ponderaciones',
          '✅ Módulo de Plan de Estudios: Exportación multi-formato',
          '✅ Módulo de Malla Curricular: Visualización interactiva'
        ]
      },
      {
        title: 'Procesos AS IS vs TO BE (Implementado)',
        content: [
          'Análisis completo de procesos actuales de gestión de sílabos universitarios.',
          'División exitosa del equipo en grupos AS IS y TO BE para análisis paralelo.',
          'Procesos objetivo definidos, aprobados e implementados en el sistema.',
          'Sistema automatiza completamente los procesos TO BE definidos.'
        ],
        list: [
          '✅ AS IS: Procesos actuales identificados y documentados',
          '✅ TO BE: Procesos automatizados implementados en el sistema',
          '✅ Single Source of Truth: Implementado en base de datos',
          '✅ Automatizaciones: Funcionando correctamente'
        ]
      },
      {
        title: 'Diseño UX/UI (Implementado)',
        content: [
          'Prototipos completos en Figma diseñados por el equipo UX (Semana 6).',
          'Wireframes y guía de estilos documentados.',
          'Diseños implementados fielmente en los componentes React.',
          'Interfaz responsive y accesible completamente funcional.'
        ],
        list: [
          '✅ Prototipos Figma: Diseñados y utilizados como referencia',
          '✅ Componentes UI: Implementados con Tailwind CSS',
          '✅ Responsive Design: Validado en múltiples dispositivos',
          '✅ Accesibilidad: Implementada según estándares WCAG'
        ]
      },
      {
        title: 'Arquitectura de Microfrontends (Implementada)',
        content: [
          'Arquitectura de microfrontends implementada exitosamente.',
          'Login y Dashboard funcionan como módulos independientes e integrados.',
          'Comunicación entre microfrontends operativa y estable.',
          'Sistema escalable para futuros módulos adicionales.'
        ],
        list: [
          '✅ Login: Microfrontend independiente funcional',
          '✅ Dashboard: Microfrontend principal implementado',
          '✅ Comunicación: Integración entre módulos operativa',
          '✅ Escalabilidad: Arquitectura preparada para crecimiento'
        ]
      }
    ]
  },

  avances: {
    title: 'Avances del Proyecto (Semanas 1-16) - COMPLETADO',
    description: 'Progreso detallado y logros alcanzados - Proyecto Finalizado Exitosamente',
    lastUpdated: '2025-11-22',
    author: 'Equipo de Desarrollo',
    tags: ['Avances', 'Semanas 1-16', 'Logros', 'Fases', 'Completado'],
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
          '✅ Coordinación entre equipos mejorada'
        ]
      },
      {
        title: 'Fase 5: Desarrollo Activo (Semana 10) ✅',
        content: [
          'Inicio de desarrollo siguiendo flujos establecidos.',
          'Implementación del primer microfrontend (Login).',
          'Sistema de autenticación con JWT funcional.',
          'Validación de arquitectura de microfrontends.'
        ],
        list: [
          '✅ Login implementado completamente',
          '✅ Autenticación JWT funcional',
          '✅ Primer microfrontend operativo',
          '✅ Pipelines CI/CD iniciados'
        ]
      },
      {
        title: 'Fase 6: Desarrollo del Login y Dashboard (Semanas 10-11) ✅',
        content: [
          'Implementación exitosa del primer microfrontend (Login) con autenticación completa.',
          'Resolución de problemas técnicos de autenticación identificados.',
          'Desarrollo paralelo del Dashboard con integración exitosa.',
          'Pruebas de integración entre microfrontends completadas.'
        ],
        list: [
          '✅ Login completamente funcional con JWT',
          '✅ Problemas de autenticación resueltos',
          '✅ Dashboard implementado con estructura base',
          '✅ Navegación entre Login y Dashboard operativa',
          '✅ Componentes esenciales del Dashboard creados',
          '✅ Integración entre microfrontends validada'
        ]
      },
      {
        title: 'Fase 7: Estabilización y Corrección (Semana 12) ✅',
        content: [
          'Semana dedicada a corrección de errores y estabilización del sistema.',
          'Optimización de rendimiento de componentes.',
          'Mejora en comunicación entre microfrontends.',
          'Testing exhaustivo de regresión completado.'
        ],
        list: [
          '✅ Todos los errores críticos solucionados',
          '✅ Sistema de autenticación completamente estable',
          '✅ Rendimiento optimizado',
          '✅ Pruebas de regresión exitosas',
          '✅ Documentación técnica actualizada'
        ]
      },
      {
        title: 'Fase 8: Testing Integral (Semana 13) ✅',
        content: [
          'Ejecución de suite completa de pruebas automatizadas.',
          'Testing de integración, E2E, seguridad y rendimiento.',
          'Validación de compatibilidad en múltiples navegadores.',
          'Alcanzada cobertura de código del 95%.'
        ],
        list: [
          '✅ Pruebas funcionales completas ejecutadas',
          '✅ Testing de integración completado',
          '✅ Pruebas E2E exitosas',
          '✅ Pruebas de seguridad sin vulnerabilidades críticas',
          '✅ Testing de rendimiento bajo carga',
          '✅ 95% de cobertura de código alcanzada'
        ]
      },
      {
        title: 'Fase 9: Integración Final y Producción (Semana 14) ✅',
        content: [
          'Integración completa de todos los microfrontends.',
          'Corrección de últimos bugs identificados.',
          'Configuración de ambientes de producción.',
          'Pipeline CI/CD completamente funcional.'
        ],
        list: [
          '✅ Sistema completamente integrado',
          '✅ Todos los bugs críticos corregidos',
          '✅ Ambiente de producción configurado',
          '✅ CI/CD pipeline operativo',
          '✅ Sistema listo para entrega'
        ]
      },
      {
        title: 'Fase 10: Documentación y Preparación (Semana 15) ✅',
        content: [
          'Documentación completa de usuario final.',
          'Materiales de capacitación desarrollados.',
          'Presentaciones ejecutivas y técnicas preparadas.',
          'Videos tutoriales y material multimedia creado.'
        ],
        list: [
          '✅ Manual de usuario completo',
          '✅ Materiales de capacitación listos',
          '✅ Presentaciones finales preparadas',
          '✅ Videos tutoriales grabados',
          '✅ FAQs y documentación de soporte'
        ]
      },
      {
        title: 'Fase 11: Entrega Final (Semana 16) ✅ 🎉',
        content: [
          'Presentación final exitosa ante stakeholders.',
          'Demostración completa del sistema sin contratiempos.',
          'Entrega de toda la documentación del proyecto.',
          'Cierre formal del proyecto con éxito total.'
        ],
        list: [
          '✅ Presentación final ejecutada exitosamente',
          '✅ Sistema entregado completamente funcional',
          '✅ Stakeholders satisfechos con resultados',
          '✅ Documentación completa entregada',
          '✅ Capacitación inicial realizada',
          '✅ Handover completo',
          '✅ Retrospectiva y lecciones aprendidas documentadas',
          '🎉 PROYECTO COMPLETADO EXITOSAMENTE'
        ]
      },
      {
        title: 'Resumen Final del Proyecto',
        content: [
          'Progreso temporal: 100% (16 de 16 semanas completadas)',
          'Todas las fases completadas exitosamente',
          'Sistema de Gestión Académica completamente funcional y entregado',
          'Equipo de 12+ miembros trabajó con excelencia durante 4 meses',
          'Metodología Scrum demostró ser altamente efectiva'
        ],
        note: '🎉 El Sistema de Gestión Académica fue completado exitosamente en tiempo y forma, cumpliendo todos los objetivos planteados. Proyecto ejemplar en términos de calidad, colaboración y entrega.'
      }
    ]
  },
  
  procesos: {
    title: 'Procesos de Gestión Académica',
    description: 'Análisis AS IS vs TO BE completado, aprobado e implementado',
    lastUpdated: '2025-11-22',
    author: 'Equipos AS IS y TO BE',
    tags: ['AS IS', 'TO BE', 'Procesos', 'Sílabos', 'Automatización', 'Implementado'],
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
        title: 'Procesos TO BE (Estado Objetivo) - IMPLEMENTADO ✅',
        content: [
          'Procesos automatizados diseñados e implementados para eliminar redundancia.',
          'Single Source of Truth implementado en base de datos única.',
          'Generación automática de todos los documentos académicos funcionando.'
        ],
        list: [
          '✅ Base de datos única como fuente de verdad implementada',
          '✅ Generación automática de sílabos PDF funcional',
          '✅ Sincronización automática de sumillas en catálogo operativa',
          '✅ Actualización automática de docentes por semestre implementada',
          '✅ Exportación multi-formato (SUNEDU, Calidad, Acreditación) funcional'
        ]
      },
      {
        title: 'Brechas Identificadas - RESUELTAS ✅',
        content: [
          'Análisis detallado de diferencias entre estado actual y objetivo.',
          'Automatizaciones clave identificadas e implementadas exitosamente.'
        ],
        list: [
          '✅ CRUD automatizado para sílabos implementado',
          '✅ Integración entre módulos del sistema operativa',
          '✅ Herencia automática de sílabos entre semestres funcional',
          '✅ Generación de reportes y exportaciones automáticas implementada',
          '✅ Control de versiones para planes de estudio operativo'
        ]
      },
      {
        title: 'Validación, Aprobación e Implementación',
        content: [
          'Múltiples iteraciones de refinamiento completadas (Semana 5).',
          'Aprobación formal de procesos por todo el equipo.',
          'Criterios de aceptación definidos y cumplidos.',
          'Sistema completamente implementado según procesos TO BE aprobados.',
          'Validación final exitosa por stakeholders.'
        ],
        note: '✅ Los procesos TO BE fueron completamente implementados en el sistema. Todas las automatizaciones funcionan correctamente según lo planificado.'
      }
    ]
  },
  
  glosario: {
    title: 'Glosario de Términos',
    description: 'Definiciones de términos técnicos y académicos del proyecto',
    lastUpdated: '2025-11-22',
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
          'TO BE: Procesos objetivo que se implementaron en el sistema'
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
          'JWT: JSON Web Tokens para autenticación',
          'CI/CD: Integración y despliegue continuo',
          'Microfrontends: Arquitectura de frontend modular'
        ]
      },
      {
        title: 'Términos del Proyecto',
        list: [
          'Refinamiento Arquitectónico: Proceso de mejora de la arquitectura inicial',
          'Equipos AS IS/TO BE: División del equipo para análisis paralelo',
          'Herencia de Sílabos: Copia automática de sílabos entre semestres',
          'Multi-formato: Exportación en diferentes formatos según destinatario',
          'Fullstack Teams: Equipos con capacidades frontend y backend',
          'Handover: Transferencia formal del proyecto al cliente',
          'Retrospectiva: Reunión de reflexión al final de cada sprint'
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
      },
      {
        title: '¿El proyecto ya está terminado?',
        content: [
          '¡SÍ! El proyecto fue completado exitosamente en la Semana 16 (21 de Noviembre 2025).',
          'Se entregó un Sistema de Gestión Académica completamente funcional que cumple con todos los requisitos definidos en el análisis AS IS/TO BE.'
        ],
        list: [
          '✅ Sistema 100% funcional y en producción',
          '✅ Todos los módulos desarrollados e integrados',
          '✅ Documentación completa entregada',
          '✅ Stakeholders satisfechos con los resultados',
          '✅ Equipo capacitado para soporte',
          '🎉 Proyecto cerrado formalmente con éxito'
        ]
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
      },
      {
        title: 'Entregables del Proyecto Completado',
        list: [
          'Sistema de Gestión Académica funcional en producción',
          'Código fuente completo en repositorios GitHub',
          'Documentación técnica exhaustiva',
          'Manuales de usuario y guías de uso',
          'Documentación de arquitectura y APIs',
          'Guías de mantenimiento y soporte',
          'Reportes finales de calidad y métricas'
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