// src/data/semanas/index.js (ARCHIVO PRINCIPAL)
import { semanas0102 } from './reportes/semanas-01-02.js';
import { semanas0304 } from './reportes/semanas-03-04.js';
// import { semanas0506 } from './reportes/semanas-05-06.js';
// ... importar el resto cuando se creen

import { fasesProyecto, obtenerFasePorSemana } from './fases.js';
import { calcularEstadisticasGenerales, calcularEstadisticasPorArea } from './estadisticas.js';
import { CONFIG_PROYECTO, CONFIGURACION_ADMIN } from './config.js';

// Consolidar todas las semanas (solo las que existen)
export const obtenerTodasLasSemanas = () => {
  return [
    ...semanas0102,
    ...semanas0304,
    // ...semanas0506,
    // ... agregar el resto conforme se vayan creando
  ].filter(semana => semana && semana.id); // Filtrar elementos vacíos/undefined
};

// Exportaciones principales
export const avancesSemanas = obtenerTodasLasSemanas();
export const estadisticasGenerales = calcularEstadisticasGenerales();
export const estadisticasPorArea = calcularEstadisticasPorArea();
export { fasesProyecto };

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
  
  const [inicio, fin] = fase.semanas.split('-').map(Number);
  return obtenerTodasLasSemanas().filter(s => s.numeroSemana >= inicio && s.numeroSemana <= fin);
};

// Funciones para el futuro admin panel
export const ADMIN_FUNCTIONS = {
  // Crear nueva semana
  crearNuevaSemana: (datosNuevaSemana) => {
    // Esta función se implementará en el admin panel
    console.log("Función para crear semana:", datosNuevaSemana);
  },
  
  // Actualizar semana existente
  actualizarSemana: (id, nuevosdatos) => {
    // Esta función se implementará en el admin panel
    console.log("Función para actualizar semana:", id, nuevosData);
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