// src/data/semanas/reportes/semanas-13-14.js
export const semanas1314 = [
    {
      id: 13,
      semana: "Semana 13",
      numeroSemana: 13,
      fechas: "27 - 31 de Octubre 2025",
      titulo: "Pruebas Integrales y Testing Completo del Sistema",
      estado: "completado",
      progreso: 95,
      fechaCreacion: "2025-11-01",
      fechaActualizacion: "2025-11-01",
      archivosAdjuntos: [],
      imagenes: [],
      objetivos: [
        "Ejecutar pruebas integrales de todos los módulos desarrollados",
        "Realizar testing de integración entre microfrontends",
        "Validar flujos de usuario end-to-end",
        "Identificar y documentar bugs finales",
        "Ejecutar pruebas de seguridad y penetración"
      ],
      logros: [
        "✅ Suite completa de pruebas automatizadas ejecutada exitosamente",
        "✅ Testing de integración entre Login, Dashboard y módulos completado",
        "✅ Pruebas end-to-end de todos los flujos críticos realizadas",
        "✅ Pruebas de seguridad y penetración completadas con resultados satisfactorios",
        "✅ Testing de rendimiento bajo carga ejecutado",
        "✅ Validación de compatibilidad en múltiples navegadores completada",
        "✅ Documentación de casos de prueba y resultados finalizada",
        "✅ 95% de cobertura de código alcanzada"
      ],
      areas: [
        {
          area: "Quality Assurance - Testing Funcional",
          progreso: 100,
          actividades: [
            "Ejecución de pruebas funcionales de todos los módulos",
            "Testing de casos de uso principales y alternativos",
            "Validación de reglas de negocio implementadas",
            "Pruebas de formularios y validaciones",
            "Testing de flujos de navegación completos",
            "Validación de mensajes de error y feedback al usuario",
            "Pruebas de roles y permisos de usuario",
            "Testing de funcionalidades CRUD completas"
          ],
          responsables: ["Líder QA", "Equipo QA"]
        },
        {
          area: "Testing de Integración",
          progreso: 95,
          actividades: [
            "Pruebas de comunicación entre microfrontends",
            "Testing de integración frontend-backend",
            "Validación de APIs y endpoints",
            "Pruebas de sincronización de datos",
            "Testing de flujos que cruzan múltiples módulos",
            "Validación de manejo de sesiones entre módulos",
            "Pruebas de integración con base de datos",
            "Testing de servicios externos y dependencias"
          ],
          responsables: ["Equipo QA", "Líderes Frontend y Backend"]
        },
        {
          area: "Pruebas End-to-End (E2E)",
          progreso: 90,
          actividades: [
            "Configuración de Cypress/Playwright para E2E",
            "Creación de scripts de pruebas automatizadas E2E",
            "Testing de flujos completos de usuario",
            "Simulación de escenarios reales de uso",
            "Pruebas de user journeys críticos",
            "Validación de experiencia de usuario completa",
            "Testing de procesos AS IS vs TO BE implementados"
          ],
          responsables: ["Equipo QA", "Ingeniero UX"]
        },
        {
          area: "Pruebas de Seguridad",
          progreso: 95,
          actividades: [
            "Análisis de vulnerabilidades con SonarQube",
            "Pruebas de penetración básicas",
            "Testing de autenticación y autorización",
            "Validación de encriptación de datos sensibles",
            "Pruebas de inyección SQL y XSS",
            "Testing de manejo seguro de tokens",
            "Validación de configuraciones de seguridad",
            "Auditoría de dependencias vulnerables"
          ],
          responsables: ["Líder DevSecOps", "Equipo QA"]
        },
        {
          area: "Pruebas de Rendimiento",
          progreso: 90,
          actividades: [
            "Testing de carga con múltiples usuarios concurrentes",
            "Pruebas de stress del sistema",
            "Análisis de tiempos de respuesta",
            "Testing de performance de queries a BD",
            "Validación de tiempos de carga de páginas",
            "Pruebas de optimización de recursos",
            "Análisis de métricas de rendimiento",
            "Identificación de cuellos de botella"
          ],
          responsables: ["Equipo Backend", "DevSecOps", "QA"]
        },
        {
          area: "Testing de Compatibilidad",
          progreso: 100,
          actividades: [
            "Pruebas en Chrome, Firefox, Safari, Edge",
            "Testing en diferentes versiones de navegadores",
            "Validación en dispositivos móviles (iOS/Android)",
            "Pruebas en diferentes tamaños de pantalla",
            "Testing de responsive design completo",
            "Validación de accesibilidad (WCAG)",
            "Pruebas en diferentes sistemas operativos"
          ],
          responsables: ["Equipo Frontend", "QA"]
        },
        {
          area: "Corrección de Bugs Identificados",
          progreso: 85,
          actividades: [
            "Priorización de bugs encontrados en testing",
            "Corrección de bugs críticos y altos",
            "Validación de correcciones implementadas",
            "Retesting de funcionalidades corregidas",
            "Documentación de bugs y soluciones",
            "Comunicación de issues a equipos de desarrollo"
          ],
          responsables: ["Equipos Frontend y Backend", "QA"]
        },
        {
          area: "Documentación de Pruebas",
          progreso: 95,
          actividades: [
            "Documentación de casos de prueba ejecutados",
            "Reporte de resultados de testing",
            "Matriz de trazabilidad de requisitos",
            "Documentación de bugs y resoluciones",
            "Creación de reportes de cobertura de código",
            "Documentación de pruebas de seguridad",
            "Informe de métricas de calidad"
          ],
          responsables: ["Líder QA", "Coordinador de Documentos"]
        }
      ],
      blockers: [
        "Algunos bugs menores pendientes de corrección - no bloquean avance general",
        "Optimizaciones de rendimiento pendientes en consultas complejas"
      ],
      proximosPasos: [
        "Corregir bugs menores identificados",
        "Realizar retesting de correcciones finales",
        "Preparar ambiente de staging para demo",
        "Iniciar documentación de usuario final",
        "Planificar sesiones de capacitación"
      ],
      notas: "Semana intensiva de testing que validó la calidad y robustez del sistema desarrollado. Se alcanzó una cobertura de pruebas del 95%, identificando y corrigiendo la mayoría de issues. El sistema demostró estabilidad bajo diferentes escenarios de prueba. Las pruebas de seguridad no revelaron vulnerabilidades críticas. El equipo QA realizó un trabajo excepcional documentando todo el proceso.",
      prioridad: "crítica",
      tags: ["testing", "qa", "integracion", "e2e", "seguridad", "rendimiento", "calidad"]
    },
    {
      id: 14,
      semana: "Semana 14",
      numeroSemana: 14,
      fechas: "3 - 7 de Noviembre 2025",
      titulo: "Integración Final y Preparación para Entrega",
      estado: "completado",
      progreso: 100,
      fechaCreacion: "2025-11-08",
      fechaActualizacion: "2025-11-08",
      archivosAdjuntos: [],
      imagenes: [],
      objetivos: [
        "Completar integración final de todos los módulos",
        "Corregir últimos bugs identificados",
        "Optimizar rendimiento general del sistema",
        "Preparar documentación técnica completa",
        "Configurar ambientes de producción"
      ],
      logros: [
        "✅ Integración completa de todos los microfrontends finalizada",
        "✅ Todos los bugs críticos y altos corregidos",
        "✅ Sistema completamente funcional y estable",
        "✅ Rendimiento optimizado según estándares definidos",
        "✅ Documentación técnica completa y actualizada",
        "✅ Ambiente de producción configurado y validado",
        "✅ Pipeline de CI/CD completamente funcional",
        "✅ Sistema listo para demostración y entrega",
        "✅ Backups y estrategias de recuperación implementadas"
      ],
      areas: [
        {
          area: "Integración Final",
          progreso: 100,
          actividades: [
            "Integración completa de todos los microfrontends",
            "Sincronización final de módulos Login, Dashboard y adicionales",
            "Validación de comunicación entre todos los componentes",
            "Integración de servicios backend con frontend",
            "Configuración de módulo principal/orquestador",
            "Pruebas de sistema completo integrado",
            "Validación de flujos end-to-end completos",
            "Resolución de conflictos de integración"
          ],
          responsables: ["Arquitecto", "Líderes Frontend y Backend", "DevSecOps"]
        },
        {
          area: "Corrección Final de Bugs",
          progreso: 100,
          actividades: [
            "Corrección de todos los bugs críticos pendientes",
            "Resolución de bugs de prioridad alta",
            "Corrección de issues menores identificados",
            "Retesting completo de correcciones",
            "Validación de regresión en funcionalidades",
            "Cierre de tickets de bugs en sistema de tracking",
            "Documentación de soluciones implementadas"
          ],
          responsables: ["Equipos Frontend y Backend", "QA"]
        },
        {
          area: "Optimización Final",
          progreso: 100,
          actividades: [
            "Optimización de consultas a base de datos",
            "Mejora de tiempos de carga de componentes",
            "Optimización de bundle sizes",
            "Implementación de estrategias de caché avanzadas",
            "Optimización de imágenes y assets finales",
            "Mejora de lazy loading en módulos",
            "Compresión y minificación de recursos",
            "Validación de métricas de rendimiento"
          ],
          responsables: ["Equipos Frontend y Backend", "DevSecOps"]
        },
        {
          area: "Configuración de Producción",
          progreso: 100,
          actividades: [
            "Configuración completa de ambiente de producción en Azure",
            "Setup de bases de datos productivas",
            "Configuración de variables de entorno de producción",
            "Implementación de monitoreo y logging",
            "Configuración de alertas y notificaciones",
            "Setup de backups automáticos",
            "Implementación de estrategias de disaster recovery",
            "Validación de configuraciones de seguridad productivas"
          ],
          responsables: ["Ingeniero de Nube", "Líder DevSecOps"]
        },
        {
          area: "CI/CD y DevOps",
          progreso: 100,
          actividades: [
            "Finalización de pipelines de CI/CD",
            "Automatización de deployments",
            "Configuración de rollback automático",
            "Testing de pipelines completos",
            "Documentación de procesos de deployment",
            "Configuración de ambientes staging y producción",
            "Implementación de blue-green deployment",
            "Validación de procesos de release"
          ],
          responsables: ["Líder DevSecOps", "Ingeniero de Nube"]
        },
        {
          area: "Documentación Técnica Final",
          progreso: 100,
          actividades: [
            "Completar documentación de arquitectura del sistema",
            "Documentación de APIs y endpoints",
            "Guías de instalación y configuración",
            "Documentación de base de datos (diagramas ER)",
            "Manuales técnicos para desarrolladores",
            "Documentación de procesos DevOps",
            "Guías de troubleshooting",
            "README completos en todos los repositorios",
            "Documentación de decisiones arquitectónicas"
          ],
          responsables: ["Coordinador de Documentos", "Arquitecto", "Líderes Técnicos"]
        },
        {
          area: "Preparación para Demo",
          progreso: 100,
          actividades: [
            "Preparación de datos de demostración",
            "Configuración de ambiente de demo estable",
            "Creación de usuarios de prueba",
            "Preparación de escenarios de demostración",
            "Testing completo en ambiente de demo",
            "Preparación de materiales de presentación",
            "Ensayo de flujos de demostración"
          ],
          responsables: ["Product Owner", "Scrum Master", "Equipo completo"]
        },
        {
          area: "Quality Assurance Final",
          progreso: 100,
          actividades: [
            "Smoke testing completo del sistema integrado",
            "Validación final de todos los módulos",
            "Pruebas de aceptación del usuario (UAT preparation)",
            "Verificación de cumplimiento de requisitos",
            "Testing en ambiente de producción/staging",
            "Validación de métricas de calidad finales",
            "Aprobación final de QA para entrega",
            "Generación de reporte de calidad final"
          ],
          responsables: ["Líder QA", "Equipo QA"]
        }
      ],
      blockers: [],
      proximosPasos: [
        "Iniciar preparación de documentación de usuario final",
        "Crear manuales de usuario y guías de uso",
        "Preparar presentaciones finales del proyecto",
        "Planificar sesión de capacitación para usuarios",
        "Organizar demo final con stakeholders",
        "Preparar materiales para entrega final"
      ],
      notas: "Semana de cierre técnico del proyecto. Se logró la integración completa y exitosa de todos los componentes del sistema. Todos los bugs críticos fueron resueltos y el sistema quedó completamente estable y funcional. Los ambientes de producción están listos y validados. El equipo técnico completó un trabajo excepcional dejando un sistema robusto, bien documentado y listo para ser utilizado. Excelente colaboración entre todas las áreas técnicas.",
      prioridad: "crítica",
      tags: ["integracion-final", "produccion", "optimizacion", "documentacion", "cicd", "preparacion-entrega"]
    }
  ];