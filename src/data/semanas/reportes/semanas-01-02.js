// src/data/semanas/reportes/semanas-01-02.js
export const semanas0102 = [
    {
      id: 1,
      semana: "Semana 1",
      numeroSemana: 1,
      fechas: "4 - 8 de Agosto 2025",
      titulo: "Capacitación y Definición de Roles",
      estado: "completado",
      progreso: 100,
      fechaCreacion: "2025-08-09",
      fechaActualizacion: "2025-08-09",
      // Campos para admin panel (archivos multimedia)
      archivosAdjuntos: [
        // { tipo: "pdf", nombre: "reporte-semana-1.pdf", url: "/uploads/semana1/reporte.pdf" }
      ],
      imagenes: [
        // { descripcion: "Organigrama del equipo", url: "/uploads/semana1/organigrama.png" }
      ],
      objetivos: [
        "Capacitación del equipo en roles específicos",
        "Definición de responsabilidades por área",
        "Establecimiento de metodología Scrum",
        "Configuración inicial del proyecto"
      ],
      logros: [
        "✅ Todos los miembros del equipo capacitados en sus roles",
        "✅ Estructura organizacional definida por áreas",
        "✅ Metodología Scrum implementada",
        "✅ Roles y responsabilidades claros"
      ],
      areas: [
        {
          area: "Liderazgo",
          progreso: 100,
          actividades: ["Definición de roadmap inicial", "Establecimiento de ceremonias Scrum"],
          responsables: ["Product Owner", "Scrum Master", "Arquitecto"]
        },
        {
          area: "Desarrollo",
          progreso: 100,
          actividades: ["Capacitación en tecnologías", "Definición de stack técnico"],
          responsables: ["Líder Frontend", "Líder Backend", "Ingeniero de Datos"]
        },
        {
          area: "Infraestructura",
          progreso: 100,
          actividades: ["Evaluación de servicios Azure", "Planificación de arquitectura cloud"],
          responsables: ["Ingeniero de Nube", "Ingeniero DevSecOps"]
        },
        {
          area: "Calidad y UX",
          progreso: 100,
          actividades: ["Definición de estándares de calidad", "Investigación de usuarios"],
          responsables: ["QA", "Ingeniero UX", "Coordinador de Documentos"]
        }
      ],
      blockers: [],
      proximosPasos: [
        "Iniciar fase de planificación detallada",
        "Definir equipos de trabajo por líder",
        "Establecer cronograma detallado"
      ],
      // Campos adicionales para admin
      notas: "",
      prioridad: "alta",
      tags: ["setup", "capacitacion", "scrum"]
    },
    {
      id: 2,
      semana: "Semana 2",
      numeroSemana: 2,
      fechas: "11 - 15 de Agosto 2025",
      titulo: "Planificación y Organización de Equipos",
      estado: "en_progreso",
      progreso: 75,
      fechaCreacion: "2025-08-16",
      fechaActualizacion: "2025-08-16",
      archivosAdjuntos: [],
      imagenes: [],
      objetivos: [
        "Planificación detallada por equipos",
        "Definición de funciones específicas",
        "Análisis de costos del proyecto",
        "Configuración inicial de herramientas"
      ],
      logros: [
        "✅ QA: Planificación completa con su equipo",
        "✅ UX: Avances en investigación y planificación",
        "✅ Arquitecto: Planificación de estructura del sistema",
        "✅ DevSecOps: Avances en configuración, pendientes por definir",
        "✅ Ingeniero de Nube: Costeo del proyecto completado"
      ],
      areas: [
        {
          area: "Calidad y UX",
          progreso: 90,
          actividades: [
            "Planificación completa del equipo QA",
            "Definición de procesos de testing",
            "Investigación de usuario completada",
            "Wireframes iniciales"
          ],
          responsables: ["QA", "Ingeniero UX"]
        },
        {
          area: "Arquitectura",
          progreso: 85,
          actividades: [
            "Planificación de arquitectura del sistema",
            "Definición de patrones de diseño",
            "Evaluación de tecnologías"
          ],
          responsables: ["Arquitecto"]
        },
        {
          area: "Infraestructura",
          progreso: 70,
          actividades: [
            "Configuración parcial de herramientas",
            "Costeo completo del proyecto en Azure",
            "Evaluación de servicios serverless"
          ],
          responsables: ["Ingeniero de Nube", "Ingeniero DevSecOps"]
        },
        {
          area: "Desarrollo",
          progreso: 60,
          actividades: [
            "Esperando indicaciones de arquitectura",
            "Revisión de tecnologías a usar",
            "Preparación de entorno de desarrollo"
          ],
          responsables: ["Líder Frontend", "Líder Backend"]
        }
      ],
      blockers: [
        "DevSecOps: Pendiente completar configuración",
        "Desarrollo: Esperando definiciones de arquitectura"
      ],
      proximosPasos: [
        "Completar configuración de DevSecOps",
        "Definir equipos específicos para líderes de desarrollo",
        "Iniciar desarrollo de prototipos",
        "Completar documentación técnica inicial"
      ],
      notas: "Semana con buen progreso general, algunos blockers menores",
      prioridad: "alta",
      tags: ["planificacion", "equipos", "configuracion"]
    }
  ];