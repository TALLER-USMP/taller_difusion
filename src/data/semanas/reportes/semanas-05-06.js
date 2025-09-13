// src/data/semanas/reportes/semanas-05-06.js
export const semanas0506 = [
    {
      id: 5,
      semana: "Semana 5",
      numeroSemana: 5,
      fechas: "1 - 5 de Septiembre 2025",
      titulo: "Refinamiento y Aprobación de Procesos",
      estado: "completado",
      progreso: 100,
      fechaCreacion: "2025-09-06",
      fechaActualizacion: "2025-09-06",
      archivosAdjuntos: [],
      imagenes: [],
      objetivos: [
        "Refinar procesos AS IS y TO BE basados en feedback",
        "Obtener aprobación final del equipo para procesos",
        "Consolidar documentación de procesos",
        "Definir criterios de aceptación para desarrollo"
      ],
      logros: [
        "✅ Múltiples iteraciones de refinamiento de procesos completadas",
        "✅ Procesos AS IS y TO BE aprobados por todo el equipo",
        "✅ Documentación consolidada y validada",
        "✅ Criterios de aceptación definidos para desarrollo"
      ],
      areas: [
        {
          area: "Análisis AS IS",
          progreso: 100,
          actividades: [
            "Refinamiento final de procesos actuales",
            "Validación con stakeholders universitarios",
            "Documentación completa de brechas identificadas",
            "Aprobación final del análisis"
          ],
          responsables: ["Equipo AS IS"]
        },
        {
          area: "Análisis TO BE",
          progreso: 100,
          actividades: [
            "Optimización de procesos objetivo",
            "Definición detallada de automatizaciones",
            "Validación de viabilidad técnica",
            "Aprobación final de procesos objetivo"
          ],
          responsables: ["Equipo TO BE"]
        },
        {
          area: "Validación y Aprobación",
          progreso: 100,
          actividades: [
            "Revisión integral por parte del equipo completo",
            "Sesiones de validación con stakeholders",
            "Aprobación formal de procesos",
            "Documentación de decisiones tomadas"
          ],
          responsables: ["Product Owner", "Scrum Master", "Arquitecto"]
        },
        {
          area: "Preparación para Desarrollo",
          progreso: 100,
          actividades: [
            "Definición de user stories basadas en procesos",
            "Estimación inicial de desarrollo",
            "Preparación de backlog técnico"
          ],
          responsables: ["Líder Frontend", "Líder Backend", "QA"]
        }
      ],
      blockers: [],
      proximosPasos: [
        "Iniciar fase de diseño UX/UI",
        "Comenzar planificación detallada de desarrollo",
        "Preparar prototipos iniciales"
      ],
      notas: "Hito importante: procesos completamente definidos y aprobados",
      prioridad: "alta",
      tags: ["refinamiento", "aprobacion", "procesos", "validacion"]
    },
    {
      id: 6,
      semana: "Semana 6",
      numeroSemana: 6,
      fechas: "8 - 12 de Septiembre 2025",
      titulo: "Diseño UX/UI y Planificación de Desarrollo",
      estado: "en_progreso",
      progreso: 90,
      fechaCreacion: "2025-09-13",
      fechaActualizacion: "2025-09-13",
      archivosAdjuntos: [],
      imagenes: [],
      objetivos: [
        "Completar primeros diseños y prototipos en Figma",
        "Realizar Planning Poker con equipos de desarrollo",
        "Organizar equipos fullstack por líder",
        "Definir herramientas de testing para QA"
      ],
      logros: [
        "✅ Primeros prototipos de Figma completados por equipo UX",
        "✅ Planning Poker realizado con líderes Frontend y Backend",
        "✅ Equipos fullstack organizados y asignados",
        "✅ SonarQube definido como herramienta principal de testing",
        "✅ Planificación completa para inicio de desarrollo"
      ],
      areas: [
        {
          area: "UX/UI",
          progreso: 100,
          actividades: [
            "Diseño completo de wireframes principales",
            "Prototipos interactivos en Figma",
            "Validación de flujos de usuario",
            "Documentación de guía de estilos inicial"
          ],
          responsables: ["Ingeniero UX"]
        },
        {
          area: "Planificación de Desarrollo",
          progreso: 95,
          actividades: [
            "Planning Poker con estimaciones de user stories",
            "Comunicación entre líderes Frontend y Backend",
            "Organización de equipos fullstack",
            "Asignación de tareas por equipo"
          ],
          responsables: ["Líder Frontend", "Líder Backend"]
        },
        {
          area: "Quality Assurance",
          progreso: 90,
          actividades: [
            "Evaluación de herramientas de testing",
            "Selección final de SonarQube",
            "Configuración inicial de herramientas QA",
            "Definición de estándares de calidad"
          ],
          responsables: ["Líder QA"]
        },
        {
          area: "Coordinación de Equipos",
          progreso: 85,
          actividades: [
            "Facilitación de comunicación entre UX y desarrollo",
            "Sincronización de timelines",
            "Preparación para sprint de desarrollo"
          ],
          responsables: ["Scrum Master", "Product Owner"]
        }
      ],
      blockers: [],
      proximosPasos: [
        "Iniciar primer sprint de desarrollo",
        "Implementar configuración completa de SonarQube",
        "Comenzar desarrollo de componentes base",
        "Establecer pipelines de CI/CD iniciales"
      ],
      notas: "Semana de transición exitosa hacia fase de desarrollo activo",
      prioridad: "alta",
      tags: ["ux-ui", "figma", "planning-poker", "sonarqube", "equipos"]
    }
  ];