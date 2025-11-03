// src/data/proyecto-info.js

export const proyectoInfo = {
    nombre: "Sistema de Gestión Académica",
    eslogan: "Automatizando la gestión académica desde una única fuente de verdad",
    
    descripcionCorta: "Plataforma integral que automatiza la generación y actualización de sílabos, esquemas de evaluación, planes de estudio y documentación académica, eliminando redundancias y errores manuales.",
    
    descripcionDetallada: `
      El Sistema de Gestión Académica surge como respuesta a la problemática actual donde la gestión 
      de documentos académicos (sílabos, esquemas de evaluación, planes de estudio) se realiza de forma 
      manual o semiautomática, generando redundancia, riesgo de errores y múltiples versiones desactualizadas 
      entre Word, Excel y PDFs.
  
      Nuestro objetivo es construir un sistema automatizado que gestione estos elementos desde una única 
      fuente de verdad (base de datos), donde todos los documentos se generen automáticamente, manteniendo 
      consistencia y actualización en tiempo real.
    `,
  
    objetivos: [
      "Automatizar la generación y actualización de sílabos",
      "Sincronizar docentes por curso según semestre",
      "Vincular automáticamente sumillas al catálogo de sílabos",
      "Automatizar el uso de esquemas de evaluación por curso",
      "Centralizar y exportar el plan de estudios en múltiples formatos (Word, Excel, PDF)",
      "Evitar trabajo duplicado y múltiples versiones desactualizadas de documentos"
    ],
  
    tecnologias: [
      {
        categoria: "Frontend",
        items: [
          { nombre: "React v18", descripcion: "Framework principal para interfaces de usuario" },
          { nombre: "JavaScript", descripcion: "Lenguaje de programación principal" },
          { nombre: "Tailwind CSS", descripcion: "Framework CSS para estilos responsivos" }
        ]
      },
      {
        categoria: "Backend",
        items: [
          { nombre: "Node.js", descripcion: "Runtime de JavaScript para el servidor" },
          { nombre: "API Gateway", descripcion: "Gestión y enrutamiento de APIs" },
          { nombre: "Serverless Azure", descripcion: "Funciones sin servidor para escalabilidad" }
        ]
      },
      {
        categoria: "Base de Datos",
        items: [
          { nombre: "Azure Cosmos DB", descripcion: "Base de datos NoSQL distribuida globalmente" }
        ]
      }
    ],
  
    metodologia: {
      nombre: "Scrum",
      descripcion: "Metodología ágil para desarrollo iterativo e incremental",
      beneficios: [
        "Entrega continua de valor",
        "Adaptabilidad a cambios",
        "Mejora continua",
        "Transparencia en el proceso",
        "Colaboración efectiva del equipo"
      ]
    },
  
    modulos: [
      {
        nombre: "Gestión de Cursos y Docentes",
        descripcion: "Administración de cursos por semestre y asignación de docentes",
        funcionalidades: [
          "Gestión de cursos por semestre",
          "Gestión de docentes asignados",
          "Actualización automática del docente en el sílabo"
        ]
      },
      {
        nombre: "Módulo de Sílabos",
        descripcion: "CRUD completo de sílabos con generación automática",
        funcionalidades: [
          "CRUD de sílabos",
          "Generación automática de sílabos PDF",
          "Asociación de docentes, sumillas y esquemas",
          "Herencia del sílabo entre semestres",
          "Actualización en lote"
        ]
      },
      {
        nombre: "Catálogo de Sílabos",
        descripcion: "Documento PDF auto-generado con sumillas de cada curso",
        funcionalidades: [
          "Generación automática de catálogo",
          "Actualización automática por cambios en sumillas",
          "Exportación en múltiples formatos"
        ]
      },
      {
        nombre: "Esquemas de Evaluación",
        descripcion: "Gestión de esquemas de evaluación y su asociación con cursos",
        funcionalidades: [
          "Base de esquemas (45, 46, etc)",
          "Asociación curso ↔ esquema",
          "Generación automática de documentos",
          "CRUD de fórmulas y ponderaciones"
        ]
      },
      {
        nombre: "Plan de Estudios",
        descripcion: "Gestión centralizada del plan de estudios",
        funcionalidades: [
          "Base de datos única de plan de estudios",
          "Exportación en múltiples formatos",
          "Control de versiones",
          "Auto-sincronización con malla curricular"
        ]
      },
      {
        nombre: "Malla Curricular",
        descripcion: "Visualización interactiva de la malla curricular",
        funcionalidades: [
          "Visualización de cursos y requisitos",
          "Interfaz drag & drop",
          "Líneas de prerrequisitos",
          "Cambios automáticos por actualizaciones"
        ]
      },
      {
        nombre: "Reportes",
        descripcion: "Sistema de reportería integral",
        funcionalidades: [
          "Reportes de cursos con esquemas asociados",
          "Reportes de docentes por semestre",
          "Historial de cambios",
          "Exportación a Excel, Word, PDF"
        ]
      }
    ],
  
    beneficios: [
      "Eliminación de duplicidad de trabajo",
      "Reducción significativa de errores humanos",
      "Consistencia en toda la documentación",
      "Actualización automática y en tiempo real",
      "Cumplimiento de estándares (SUNEDU, Calidad, Acreditación)",
      "Mejora en la eficiencia operativa",
      "Trazabilidad completa de cambios"
    ],
  
    estadisticas: [
      { label: "Módulos del Sistema", valor: "7", icono: "layers" },
      { label: "Tecnologías Integradas", valor: "8+", icono: "code" },
      { label: "Tipos de Documentos", valor: "5+", icono: "file-text" },
      { label: "Miembros del Equipo", valor: "12", icono: "users" }
    ],

        // Agregar después de fasesDesignThinking o al final del objeto proyectoInfo

    devSecOps: {
      titulo: "DevSecOps: Seguridad y Automatización",
      descripcion: "Implementación de prácticas DevSecOps para establecer un entorno de trabajo ordenado, controlado y seguro entre Desarrollo y Operaciones",
      
      arquitectura: {
        titulo: "Arquitectura de Flujo de Trabajo",
        descripcion: "Diseño elaborado con Isoflow que representa el recorrido completo de commits, PRs, despliegues en la nube y control de versiones",
        herramienta: "Isoflow"
      },

      practicas: [
        {
          nombre: "GitFlow",
          icono: "git-branch",
          descripcion: "Metodología de control de versiones con ramas principales (main, develop) y auxiliares (feature, release, hotfix)",
          color: "blue",
          implementaciones: [
            "Estructura de ramas estandarizada",
            "Revisión obligatoria mediante Pull Requests",
            "Plantillas para PRs",
            "Guía de contribución para el equipo"
          ]
        },
        {
          nombre: "Conventional Commits",
          icono: "message-square",
          descripcion: "Estandarización de mensajes de commit para mejor trazabilidad y claridad",
          color: "purple",
          implementaciones: [
            "Formato consistente de commits",
            "Generación automática de changelogs",
            "Integración con Slack",
            "Notificaciones en tiempo real"
          ]
        },
        {
          nombre: "SAST (Análisis Estático)",
          icono: "shield",
          descripcion: "Análisis de seguridad del código fuente antes de la compilación",
          color: "red",
          implementaciones: [
            "Integración de CodeQL",
            "Complemento con Dependabot",
            "Detección de vulnerabilidades SQL, XSS, buffer overflow",
            "Reportes automáticos en GitHub"
          ]
        },
        {
          nombre: "DAST (Análisis Dinámico)",
          icono: "activity",
          descripcion: "Pruebas de seguridad en la aplicación en ejecución (caja negra)",
          color: "orange",
          implementaciones: [
            "Implementación de OWASP ZAP",
            "Escaneos automatizados en Azure Static Web Apps",
            "Ejecución mediante Docker containers",
            "Artifacts almacenados por 30 días"
          ]
        },
        {
          nombre: "CI/CD Pipeline",
          icono: "zap",
          descripcion: "Flujo de despliegue automatizado hacia Azure con validaciones de seguridad",
          color: "green",
          implementaciones: [
            "Análisis SAST previo al build",
            "Compilación y pruebas automatizadas",
            "Despliegue automático en Azure",
            "Notificaciones en Slack post-deploy"
          ]
        },
        {
          nombre: "Backups Automatizados",
          icono: "database",
          descripcion: "Sistema de respaldo de infraestructura programado al cierre de cada sprint",
          color: "indigo",
          implementaciones: [
            "Exportación automática de Bicep templates",
            "Limpieza de backups antiguos",
            "Creación de releases en GitHub",
            "Resumen y validación de recursos"
          ]
        }
      ],

      integraciones: {
        slack: {
          titulo: "Canal de Comunicación Slack",
          descripcion: "Notificaciones automáticas de commits, PRs y despliegues",
          beneficios: [
            "Visibilidad en tiempo real",
            "Colaboración mejorada entre equipos",
            "Respuesta oportuna ante incidencias",
            "Anuncio automático de actualizaciones"
          ]
        },
        dashboard: {
          titulo: "Dashboard de Monitoreo (Streamlit)",
          descripcion: "Visualización de métricas y actividad del repositorio",
          metricas: [
            "Número de commits por sprint",
            "Actividad individual por desarrollador",
            "Frecuencia de Pull Requests",
            "Volumen de contribuciones fusionadas"
          ]
        }
      },

      beneficiosDevSecOps: [
        "Entorno de trabajo ordenado y controlado",
        "Trazabilidad completa de cambios",
        "Detección temprana de vulnerabilidades",
        "Automatización de despliegues seguros",
        "Comunicación en tiempo real del equipo",
        "Respaldos automáticos de infraestructura",
        "Integración fluida entre Dev, Sec y Ops",
        "Reducción de errores humanos"
      ],

      metricas: [
        { label: "Prácticas Implementadas", valor: "6", icono: "check-circle" },
        { label: "Herramientas Integradas", valor: "8+", icono: "tool" },
        { label: "Análisis de Seguridad", valor: "2 tipos", icono: "shield" },
        { label: "Backups Automáticos", valor: "Por Sprint", icono: "database" }
      ]
    }
  };
  
  
  export default proyectoInfo;