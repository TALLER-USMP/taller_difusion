// src/data/semanas/estadisticas.js
import { obtenerTodasLasSemanas } from './index.js';
import { CONFIG_PROYECTO } from './config.js';

export const calcularEstadisticasGenerales = () => {
  const todasLasSemanas = obtenerTodasLasSemanas();
  const semanasCompletadas = todasLasSemanas.filter(s => s.estado === 'completado');
  const semanasEnProgreso = todasLasSemanas.filter(s => s.estado === 'en_progreso');
  
  const progresoGeneral = todasLasSemanas.length > 0 
    ? Math.round(todasLasSemanas.reduce((acc, semana) => acc + semana.progreso, 0) / todasLasSemanas.length)
    : 0;

  return {
    semanasTranscurridas: semanasCompletadas.length + semanasEnProgreso.length,
    semanasPlaneadas: CONFIG_PROYECTO.semanasPlaneadas,
    progresoGeneral,
    miembrosEquipo: CONFIG_PROYECTO.miembrosEquipo,
    areasActivas: CONFIG_PROYECTO.areasActivas,
    hitos: {
      completados: semanasCompletadas.length,
      enProceso: semanasEnProgreso.length,
      pendientes: CONFIG_PROYECTO.semanasPlaneadas - (semanasCompletadas.length + semanasEnProgreso.length)
    },
    ultimaActualizacion: new Date().toISOString().split('T')[0]
  };
};

// Estadísticas por área (útil para dashboards de admin)
export const calcularEstadisticasPorArea = () => {
  const todasLasSemanas = obtenerTodasLasSemanas();
  const areas = {};
  
  todasLasSemanas.forEach(semana => {
    semana.areas?.forEach(area => {
      if (!areas[area.area]) {
        areas[area.area] = {
          totalSemanas: 0,
          progresoPromedio: 0,
          actividades: 0
        };
      }
      areas[area.area].totalSemanas++;
      areas[area.area].progresoPromedio += area.progreso;
      areas[area.area].actividades += area.actividades?.length || 0;
    });
  });

  // Calcular promedios
  Object.keys(areas).forEach(area => {
    areas[area].progresoPromedio = Math.round(areas[area].progresoPromedio / areas[area].totalSemanas);
  });

  return areas;
};