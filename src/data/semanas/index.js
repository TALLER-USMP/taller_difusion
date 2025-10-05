// src/data/semanas/index.js (ARCHIVO PRINCIPAL ACTUALIZADO)
import { semanas0102 } from './reportes/semanas-01-02.js';
import { semanas0304 } from './reportes/semanas-03-04.js';
import { semanas0506 } from './reportes/semanas-05-06.js';
import { semanas0708 } from './reportes/semanas-07-08.js';
import { semanas0910 } from './reportes/semanas-09-10.js';
// import { semanas1112 } from './reportes/semanas-11-12.js';
// import { semanas1314 } from './reportes/semanas-13-14.js';
// import { semanas1516 } from './reportes/semanas-15-16.js';

import { calcularEstadisticasGenerales, calcularEstadisticasPorArea } from './estadisticas.js';
import { CONFIG_PROYECTO, CONFIGURACION_ADMIN } from './config.js';

// Fases del proyecto actualizadas según el contenido real de las semanas
export const fasesProyecto = [
  {
    id: 1,
    fase: "Capacitación y Planificación",
    descripcion: "Capacitación del equipo, definición de roles y planificación inicial de equipos",
    semanas: "1-2",
    fechaInicio: "4 Ago 2025",
    fechaFin: "15 Ago 2025",
    estado: "completado",
    progreso: 100,
    semanasIncluidas: [1, 2]
  },
  {
    id: 2,
    fase: "Arquitectura y Análisis de Procesos",
    descripcion: "Refinamiento arquitectónico y análisis completo de procesos AS IS/TO BE de sílabos",
    semanas: "3-4",
    fechaInicio: "18 Ago 2025",
    fechaFin: "29 Ago 2025",
    estado: "completado",
    progreso: 100,
    semanasIncluidas: [3, 4]
  },
  {
    id: 3,
    fase: "Diseño UX/UI y Configuración",
    descripcion: "Aprobación de procesos, diseño de prototipos Figma, configuración de herramientas QA y DevSecOps",
    semanas: "5-6",
    fechaInicio: "1 Sep 2025",
    fechaFin: "12 Sep 2025",
    estado: "completado",
    progreso: 100,
    semanasIncluidas: [5, 6]
  },
  {
    id: 4,
    fase: "Pausa Académica y Retorno",
    descripcion: "Periodo de exámenes y retorno a actividades con implementación de procesos de calidad",
    semanas: "7-9",
    fechaInicio: "15 Sep 2025",
    fechaFin: "3 Oct 2025",
    estado: "completado",
    progreso: 95,
    semanasIncluidas: [7, 8, 9]
  },
  {
    id: 5,
    fase: "Desarrollo e Implementación",
    descripcion: "Sprints de desarrollo activo, implementación de módulos del sistema",
    semanas: "10-12",
    fechaInicio: "6 Oct 2025",
    fechaFin: "24 Oct 2025",
    estado: "en_progreso",
    progreso: 10,
    semanasIncluidas: [10, 11, 12]
  },
  {
    id: 6,
    fase: "Testing e Integración",
    descripcion: "Pruebas completas con SonarQube, integración de módulos, corrección de bugs",
    semanas: "13-14",
    fechaInicio: "27 Oct 2025",
    fechaFin: "7 Nov 2025",
    estado: "pendiente",
    progreso: 0,
    semanasIncluidas: [13, 14]
  },
  {
    id: 7,
    fase: "Entrega y Documentación Final",
    descripcion: "Documentación final, presentaciones y cierre del proyecto",
    semanas: "15-16",
    fechaInicio: "10 Nov 2025",
    fechaFin: "21 Nov 2025",
    estado: "pendiente",
    progreso: 0,
    semanasIncluidas: [15, 16]
  }
];

// Función para obtener fase por número de semana
export const obtenerFasePorSemana = (numeroSemana) => {
  return fasesProyecto.find(fase => 
    fase.semanasIncluidas.includes(numeroSemana)
  );
};

// Consolidar todas las semanas (solo las que existen)
export const obtenerTodasLasSemanas = () => {
  return [
    ...semanas0102,
    ...semanas0304,
    ...semanas0506,
    ...semanas0708,
    ...semanas0910,
    // ...semanas1112,
    // ...semanas1314,
    // ...semanas1516,
  ].filter(semana => semana && semana.id); // Filtrar elementos vacíos/undefined
};

// Exportaciones principales
export const avancesSemanas = obtenerTodasLasSemanas();
export const estadisticasGenerales = calcularEstadisticasGenerales();
export const estadisticasPorArea = calcularEstadisticasPorArea();

// Funciones utilitarias (útiles para el admin panel)
export const obtenerSemanaPorId = (id) => {
  return obtenerTodasLasSemanas().find(semana => semana.id === id);
};

export const obtenerSemanasPorEstado = (estado) => {
  return obtenerTodasLasSemanas().filter(semana => semana.estado === estado);
};

export const obtenerSemanasPorBloque = (numeroBloque) => {
  // Bloque 1: semanas 1-2, Bloque 2: semanas 3-4, etc.
  const inicio = (numeroBloque - 1) * 2 + 1;
  const fin = numeroBloque * 2;
  return obtenerTodasLasSemanas().filter(s => s.numeroSemana >= inicio && s.numeroSemana <= fin);
};

export const obtenerSemanasPorFase = (faseName) => {
  const fase = fasesProyecto.find(f => f.fase === faseName);
  if (!fase) return [];
  
  return obtenerTodasLasSemanas().filter(s => 
    fase.semanasIncluidas.includes(s.numeroSemana)
  );
};

// Función para obtener estadísticas por fase
export const obtenerEstadisticasPorFase = () => {
  return fasesProyecto.map(fase => {
    const semanasDeLaFase = obtenerSemanasPorFase(fase.fase);
    const progresoPromedio = semanasDeLaFase.length > 0 
      ? Math.round(semanasDeLaFase.reduce((sum, s) => sum + s.progreso, 0) / semanasDeLaFase.length)
      : 0;
    
    return {
      ...fase,
      cantidadSemanas: semanasDeLaFase.length,
      progresoCalculado: progresoPromedio
    };
  });
};

// Funciones para el futuro admin panel
export const ADMIN_FUNCTIONS = {
  // Crear nueva semana
  crearNuevaSemana: (datosNuevaSemana) => {
    // Esta función se implementará en el admin panel
    console.log("Función para crear semana:", datosNuevaSemana);
  },
  
  // Actualizar semana existente
  actualizarSemana: (id, nuevosDatos) => {
    // Esta función se implementará en el admin panel
    console.log("Función para actualizar semana:", id, nuevosDatos);
  },
  
  // Eliminar semana
  eliminarSemana: (id) => {
    // Esta función se implementará en el admin panel
    console.log("Función para eliminar semana:", id);
  },
  
  // Subir archivo
  subirArchivo: (archivo, tipoArchivo, semanaId) => {
    // Esta función se implementará en el admin panel
    console.log("Función para subir archivo:", archivo, tipoArchivo, semanaId);
  }
};

// Exportar configuraciones para admin
export { CONFIG_PROYECTO, CONFIGURACION_ADMIN };