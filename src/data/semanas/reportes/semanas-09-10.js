// src/data/semanas/reportes/semanas-09-10.js
export const semanas0910 = [
  {
    id: 9,
    semana: "Semana 9",
    numeroSemana: 9,
    fechas: "29 de Septiembre - 3 de Octubre 2025",
    titulo: "Implementación de Procesos de Calidad y Comunicación",
    estado: "completado",
    progreso: 85,
    fechaCreacion: "2025-10-04",
    fechaActualizacion: "2025-10-04",
    archivosAdjuntos: [],
    imagenes: [],
    objetivos: [
      "Establecer flujos de trabajo estandarizados",
      "Implementar herramientas de comunicación efectiva",
      "Definir procesos de aprobación y revisión de código",
      "Completar prototipos finales de UX/UI"
    ],
    logros: [
      "✅ Slack implementado como herramienta principal de comunicación",
      "✅ Procesos de aprobación DevSecOps y QA establecidos",
      "✅ Integración GitHub-Slack configurada para notificaciones",
      "✅ Flujos de trabajo y políticas de branches definidos",
      "⚠️ Identificación de necesidad de mejoras en coordinación entre equipos"
    ],
    areas: [
      {
        area: "DevSecOps y Procesos",
        progreso: 100,
        actividades: [
          "Implementación de Slack para comunicación de equipos",
          "Configuración de notificaciones GitHub a Slack",
          "Establecimiento de procesos de aprobación obligatorios",
          "Definición de políticas de pull requests",
          "Documentación de flujos de trabajo estándar"
        ],
        responsables: ["Líder DevSecOps", "Scrum Master"]
      },
      {
        area: "Quality Assurance",
        progreso: 90,
        actividades: [
          "Definición de checkpoints de calidad obligatorios",
          "Establecimiento de criterios de aprobación",
          "Configuración de revisiones automáticas",
          "Capacitación a equipos en procesos QA"
        ],
        responsables: ["Líder QA"]
      },
      {
        area: "UX/UI",
        progreso: 100,
        actividades: [
          "Refinamiento final de prototipos Figma",
          "Validación de componentes con equipos de desarrollo",
          "Ajustes basados en feedback técnico",
          "Preparación de handoff para desarrollo"
        ],
        responsables: ["Ingeniero UX"]
      },
      {
        area: "Coordinación de Equipos Fullstack",
        progreso: 75,
        actividades: [
          "Establecimiento de canales de comunicación por equipo",
          "Sincronización con líderes técnicos",
          "Revisión de trabajo realizado sin aprobaciones previas",
          "Reenfoque en seguir procesos establecidos",
          "Sesiones de alineación sobre flujos de trabajo"
        ],
        responsables: ["Líder Frontend", "Líder Backend", "Equipos Fullstack"]
      },
      {
        area: "Mejora de Procesos",
        progreso: 100,
        actividades: [
          "Análisis de brechas en comunicación identificadas",
          "Implementación de mejoras en coordinación",
          "Establecimiento de daily standups por equipo",
          "Definición de protocolos de escalamiento"
        ],
        responsables: ["Scrum Master", "Product Owner", "Líderes Técnicos"]
      }
    ],
    blockers: [
      "Prototipos UX pendientes de finalización - impacto menor en inicio de algunos módulos frontend",
      "Necesidad de reforzar cultura de comunicación - trabajo sin aprobaciones previas generó retrabajos"
    ],
    proximosPasos: [
      "Finalizar prototipos UX pendientes de alta prioridad",
      "Monitorear adopción de Slack y nuevos procesos",
      "Iniciar desarrollo siguiendo flujos establecidos",
      "Realizar retrospectiva de lecciones aprendidas",
      "Reforzar comunicación proactiva entre equipos"
    ],
    notas: "Retorno a actividades post-exámenes. Semana de aprendizaje importante: implementación de herramientas de comunicación y procesos robustos de calidad. Identificación temprana de áreas de mejora permite corrección de curso efectiva.",
    prioridad: "alta",
    tags: ["slack", "devsecops", "qa", "procesos", "comunicacion", "mejora-continua"]
  },
  {
    id: 10,
    semana: "Semana 10",
    numeroSemana: 10,
    fechas: "13 - 17 de Octubre 2025",
    titulo: "Desarrollo del Módulo de Autenticación (Login)",
    estado: "completado",
    progreso: 95,
    fechaCreacion: "2025-10-11",
    fechaActualizacion: "2025-10-11",
    archivosAdjuntos: [],
    imagenes: [],
    objetivos: [
      "Implementar estructura base del microfrontend de Login",
      "Desarrollar componentes de interfaz de usuario para autenticación",
      "Establecer flujo inicial de autenticación",
      "Configurar routing y navegación básica"
    ],
    logros: [
      "✅ Estructura base del microfrontend Login creada con React",
      "✅ Componentes UI implementados: formularios de login y registro",
      "✅ Diseño responsive aplicado según prototipos UX/UI",
      "✅ Validación de formularios del lado del cliente",
      "✅ Integración inicial con sistema de routing",
      "⚠️ Identificación de problemas en flujo de autenticación a resolver"
    ],
    areas: [
      {
        area: "Frontend - Login",
        progreso: 85,
        actividades: [
          "Creación de estructura del proyecto Login con Vite + React",
          "Implementación de componente LoginForm con validaciones",
          "Desarrollo de componente RegisterForm para nuevos usuarios",
          "Diseño de página de recuperación de contraseña",
          "Configuración de React Router para navegación",
          "Implementación de estados de carga y manejo de errores UI",
          "Aplicación de estilos con Tailwind CSS según diseño UX"
        ],
        responsables: ["Equipo Frontend", "Líder Frontend"]
      },
      {
        area: "Backend - Autenticación",
        progreso: 90,
        actividades: [
          "Configuración inicial de endpoints de autenticación",
          "Implementación de lógica de validación de credenciales",
          "Estructura base para generación de tokens JWT",
          "Definición de modelos de usuario en base de datos",
          "Documentación de APIs de autenticación"
        ],
        responsables: ["Equipo Backend", "Líder Backend"]
      },
      {
        area: "DevSecOps",
        progreso: 100,
        actividades: [
          "Configuración de ambiente de desarrollo para Login",
          "Setup de variables de entorno y secretos",
          "Configuración de CORS para comunicación frontend-backend",
          "Implementación de primeras pruebas de seguridad básicas"
        ],
        responsables: ["Líder DevSecOps"]
      },
      {
        area: "Quality Assurance",
        progreso: 90,
        actividades: [
          "Definición de casos de prueba para flujos de login",
          "Pruebas manuales de componentes UI",
          "Validación de responsive design en diferentes dispositivos",
          "Documentación de bugs encontrados"
        ],
        responsables: ["Líder QA"]
      }
    ],
    blockers: [
      "Problemas de comunicación entre frontend y backend en autenticación - tokens no se generan correctamente",
      "Errores de CORS al intentar consumir APIs desde el frontend",
      "Inconsistencias en el manejo de sesiones y persistencia de estado"
    ],
    proximosPasos: [
      "Resolver problemas de autenticación y generación de tokens",
      "Corregir configuración de CORS",
      "Implementar manejo robusto de sesiones",
      "Iniciar desarrollo del Dashboard",
      "Realizar pruebas de integración completas"
    ],
    notas: "Primera semana de desarrollo activo de microfrontends. Se logró implementar la base del módulo de Login con interfaz funcional, aunque se identificaron problemas técnicos en la autenticación que requieren atención prioritaria la siguiente semana.",
    prioridad: "alta",
    tags: ["login", "autenticacion", "frontend", "backend", "microfrontends", "desarrollo"]
  }
];