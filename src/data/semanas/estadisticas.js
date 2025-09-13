// src/data/semanas/estadisticas.js - VERSIÓN CORREGIDA
import { obtenerTodasLasSemanas } from './index.js';
import { CONFIG_PROYECTO } from './config.js';

export const calcularEstadisticasGenerales = () => {
  const todasLasSemanas = obtenerTodasLasSemanas();
  const semanasCompletadas = todasLasSemanas.filter(s => s.estado === 'completado');
  const semanasEnProgreso = todasLasSemanas.filter(s => s.estado === 'en_progreso');
  const semanasPendientes = todasLasSemanas.filter(s => s.estado === 'pendiente');
  
  // CORRECCIÓN: Calcular progreso basado en semanas transcurridas vs total del proyecto
  const semanasTranscurridas = semanasCompletadas.length + semanasEnProgreso.length;
  
  // Método 1: Progreso basado en tiempo transcurrido (más preciso para proyectos en curso)
  const progresoBasadoEnTiempo = Math.round((semanasTranscurridas / CONFIG_PROYECTO.semanasPlaneadas) * 100);
  
  // Método 2: Progreso ponderado (considera el progreso real de cada semana)
  let progresoTotal = 0;
  
  // Sumar progreso de semanas completadas (100% cada una)
  progresoTotal += semanasCompletadas.length * 100;
  
  // Sumar progreso de semanas en curso (su progreso real)
  semanasEnProgreso.forEach(semana => {
    progresoTotal += semana.progreso || 0;
  });
  
  // Las semanas pendientes aportan 0% al progreso
  // progresoTotal += semanasPendientes.length * 0; // Innecesario pero claro
  
  const progresoWeighted = Math.round(progresoTotal / CONFIG_PROYECTO.semanasPlaneadas);
  
  // Usar el método basado en tiempo para proyectos en desarrollo activo
  // Esto da una perspectiva más realista del avance temporal
  const progresoGeneral = progresoBasadoEnTiempo;

  return {
    // Datos básicos
    semanasTranscurridas,
    semanasPlaneadas: CONFIG_PROYECTO.semanasPlaneadas,
    progresoGeneral,
    
    // Datos del equipo
    miembrosEquipo: CONFIG_PROYECTO.miembrosEquipo,
    areasActivas: CONFIG_PROYECTO.areasActivas,
    
    // Detalles de hitos
    hitos: {
      completados: semanasCompletadas.length,
      enProceso: semanasEnProgreso.length,
      pendientes: CONFIG_PROYECTO.semanasPlaneadas - semanasTranscurridas
    },
    
    // Métricas adicionales útiles
    metricas: {
      progresoBasadoEnTiempo,
      progresoWeighted,
      porcentajeTiempoTranscurrido: Math.round((semanasTranscurridas / CONFIG_PROYECTO.semanasPlaneadas) * 100),
      semanasRestantes: CONFIG_PROYECTO.semanasPlaneadas - semanasTranscurridas,
      progresoPromedioSemanal: todasLasSemanas.length > 0 
        ? Math.round(todasLasSemanas.reduce((acc, semana) => acc + semana.progreso, 0) / todasLasSemanas.length)
        : 0
    },
    
    // Información de actualización
    ultimaActualizacion: new Date().toISOString().split('T')[0],
    semanaActual: semanasTranscurridas + 1 // Próxima semana a trabajar
  };
};

// Estadísticas por área (manteniendo la función original mejorada)
export const calcularEstadisticasPorArea = () => {
  const todasLasSemanas = obtenerTodasLasSemanas();
  const areas = {};
  
  todasLasSemanas.forEach(semana => {
    semana.areas?.forEach(area => {
      if (!areas[area.area]) {
        areas[area.area] = {
          totalSemanas: 0,
          progresoPromedio: 0,
          actividades: 0,
          semanasMasRecientes: []
        };
      }
      areas[area.area].totalSemanas++;
      areas[area.area].progresoPromedio += area.progreso || 0;
      areas[area.area].actividades += area.actividades?.length || 0;
      areas[area.area].semanasMasRecientes.push({
        semana: semana.numeroSemana,
        progreso: area.progreso
      });
    });
  });

  // Calcular promedios y limpiar datos
  Object.keys(areas).forEach(areaKey => {
    const area = areas[areaKey];
    area.progresoPromedio = Math.round(area.progresoPromedio / area.totalSemanas);
    
    // Mantener solo las 3 semanas más recientes
    area.semanasMasRecientes = area.semanasMasRecientes
      .sort((a, b) => b.semana - a.semana)
      .slice(0, 3);
  });

  return areas;
};

// Nueva función: Estadísticas por fase
export const calcularEstadisticasPorFase = (fases) => {
  const todasLasSemanas = obtenerTodasLasSemanas();
  
  return fases.map(fase => {
    const semanasDeLaFase = todasLasSemanas.filter(semana => 
      fase.semanasIncluidas?.includes(semana.numeroSemana)
    );
    
    const semanasCompletadasEnFase = semanasDeLaFase.filter(s => s.estado === 'completado').length;
    const semanasEnProgresoEnFase = semanasDeLaFase.filter(s => s.estado === 'en_progreso').length;
    
    // Calcular progreso real de la fase
    let progresoRealFase = 0;
    if (semanasDeLaFase.length > 0) {
      const progresoTotal = semanasDeLaFase.reduce((acc, semana) => acc + (semana.progreso || 0), 0);
      progresoRealFase = Math.round(progresoTotal / fase.semanasIncluidas.length);
    }
    
    return {
      ...fase,
      cantidadSemanasConDatos: semanasDeLaFase.length,
      semanasCompletadas: semanasCompletadasEnFase,
      semanasEnProgreso: semanasEnProgresoEnFase,
      progresoReal: progresoRealFase,
      estaActiva: semanasEnProgresoEnFase > 0
    };
  });
};