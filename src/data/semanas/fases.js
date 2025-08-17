// src/data/semanas/fases.js
export const fasesProyecto = [
    {
      id: 1,
      fase: "Planificación",
      semanas: "1-3",
      estado: "en_progreso",
      progreso: 75,
      descripcion: "Definición de roles, metodología y planificación inicial",
      fechaInicio: "2025-08-04",
      fechaFin: "2025-08-22"
    },
    {
      id: 2,
      fase: "Diseño y Arquitectura",
      semanas: "4-6",
      estado: "pendiente",
      progreso: 0,
      descripcion: "Diseño de la arquitectura del sistema y definición técnica",
      fechaInicio: "2025-08-25",
      fechaFin: "2025-09-12"
    },
    {
      id: 3,
      fase: "Desarrollo Backend",
      semanas: "7-10",
      estado: "pendiente",
      progreso: 0,
      descripcion: "Desarrollo de APIs, base de datos y lógica de negocio",
      fechaInicio: "2025-09-15",
      fechaFin: "2025-10-10"
    },
    {
      id: 4,
      fase: "Desarrollo Frontend",
      semanas: "8-12",
      estado: "pendiente",
      progreso: 0,
      descripcion: "Desarrollo de interfaces de usuario y experiencia",
      fechaInicio: "2025-09-29",
      fechaFin: "2025-10-31"
    },
    {
      id: 5,
      fase: "Testing y QA",
      semanas: "13-14",
      estado: "pendiente",
      progreso: 0,
      descripcion: "Pruebas de calidad, testing y corrección de errores",
      fechaInicio: "2025-11-03",
      fechaFin: "2025-11-14"
    },
    {
      id: 6,
      fase: "Despliegue",
      semanas: "15-16",
      estado: "pendiente",
      progreso: 0,
      descripcion: "Despliegue en producción y entrega final",
      fechaInicio: "2025-11-17",
      fechaFin: "2025-11-29"
    }
  ];
  
  // Función para obtener fase por semana (útil para el admin)
  export const obtenerFasePorSemana = (numeroSemana) => {
    return fasesProyecto.find(fase => {
      const [inicio, fin] = fase.semanas.split('-').map(Number);
      return numeroSemana >= inicio && numeroSemana <= fin;
    });
  };