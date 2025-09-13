// src/pages/Avances.jsx
import { useState } from 'react';
import { BarChart3, TrendingUp, Users, Clock, Filter, Calendar } from 'lucide-react';
import WeeklyReport from '../components/reports/WeeklyReport';
import { 
  avancesSemanas, 
  estadisticasGenerales, 
  fasesProyecto,
  obtenerSemanasPorEstado,
  obtenerSemanasPorFase 
} from '../data/semanas/index';

const Avances = () => {
  const [filtroSemana, setFiltroSemana] = useState('todas');
  const [filtroFase, setFiltroFase] = useState('todas');
  const [filtroSemanaEspecifica, setFiltroSemanaEspecifica] = useState('todas');
  
  // Actualizar fases del proyecto basado en las semanas completadas
  const fasesActualizadas = [
    {
      id: 1,
      fase: "Planificación e Inicio",
      descripcion: "Capacitación del equipo, definición de roles y planificación inicial",
      semanas: "1-2",
      fechaInicio: "4 Ago 2025",
      fechaFin: "15 Ago 2025",
      estado: "completado",
      progreso: 100
    },
    {
      id: 2,
      fase: "Análisis y Arquitectura",
      descripcion: "Refinamiento arquitectónico y análisis de procesos AS IS/TO BE",
      semanas: "3-4",
      fechaInicio: "18 Ago 2025",
      fechaFin: "29 Ago 2025",
      estado: "completado",
      progreso: 100
    },
    {
      id: 3,
      fase: "Diseño y Preparación",
      descripcion: "Aprobación de procesos, diseño UX/UI y planificación de desarrollo",
      semanas: "5-6",
      fechaInicio: "1 Sep 2025",
      fechaFin: "12 Sep 2025",
      estado: "completado",
      progreso: 100
    },
    {
      id: 4,
      fase: "Desarrollo Activo",
      descripcion: "Implementación del sistema, sprints de desarrollo",
      semanas: "7-12",
      fechaInicio: "15 Sep 2025",
      fechaFin: "24 Oct 2025",
      estado: "en_progreso",
      progreso: 15
    },
    {
      id: 5,
      fase: "Pruebas e Integración",
      descripción: "Testing completo, integración de módulos, corrección de bugs",
      semanas: "13-14",
      fechaInicio: "27 Oct 2025",
      fechaFin: "7 Nov 2025",
      estado: "pendiente",
      progreso: 0
    },
    {
      id: 6,
      fase: "Entrega Final",
      descripcion: "Documentación final, presentaciones y cierre del proyecto",
      semanas: "15-16",
      fechaInicio: "10 Nov 2025",
      fechaFin: "21 Nov 2025",
      estado: "pendiente",
      progreso: 0
    }
  ];
  
  // Filtrar semanas según los filtros seleccionados
  const aplicarFiltros = () => {
    let semanasFiltradas = avancesSemanas;
    
    // Filtro por estado
    if (filtroSemana !== 'todas') {
      semanasFiltradas = semanasFiltradas.filter(semana => semana.estado === filtroSemana);
    }
    
    // Filtro por fase
    if (filtroFase !== 'todas') {
      const semanasDeLaFase = obtenerSemanasPorFase(filtroFase);
      const idsSemanasDellaFase = semanasDeLaFase.map(s => s.id);
      semanasFiltradas = semanasFiltradas.filter(semana => 
        idsSemanasDellaFase.includes(semana.id)
      );
    }

    // Filtro por semana específica
    if (filtroSemanaEspecifica !== 'todas') {
      const numeroSemana = parseInt(filtroSemanaEspecifica);
      semanasFiltradas = semanasFiltradas.filter(semana => 
        semana.numeroSemana === numeroSemana
      );
    }
    
    return semanasFiltradas;
  };

  const semanasFiltradas = aplicarFiltros();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la página */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Avances del Proyecto
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seguimiento semanal del desarrollo del Sistema de Gestión Académica. 
            Aquí puedes ver el progreso detallado por equipos, logros alcanzados y próximos objetivos.
          </p>
        </div>

        {/* Estadísticas generales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Progreso General</p>
                <p className="text-3xl font-bold text-[#A4101A]">{estadisticasGenerales.progresoGeneral}%</p>
                <p className="text-xs text-gray-500 mt-1">
                  Actualizado: {estadisticasGenerales.ultimaActualizacion}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-[#A4101A]" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Semanas Transcurridas</p>
                <p className="text-3xl font-bold text-blue-600">
                  {estadisticasGenerales.semanasTranscurridas}/{estadisticasGenerales.semanasPlaneadas}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {Math.round((estadisticasGenerales.semanasTranscurridas / estadisticasGenerales.semanasPlaneadas) * 100)}% del tiempo
                </p>
              </div>
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Miembros del Equipo</p>
                <p className="text-3xl font-bold text-green-600">{estadisticasGenerales.miembrosEquipo}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {estadisticasGenerales.areasActivas} áreas activas
                </p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Hitos del Proyecto</p>
                <p className="text-3xl font-bold text-purple-600">
                  {estadisticasGenerales.hitos.completados + estadisticasGenerales.hitos.enProceso}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {estadisticasGenerales.hitos.pendientes} pendientes
                </p>
              </div>
              <BarChart3 className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Fases del proyecto actualizadas */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-[#A4101A]" />
            Fases del Proyecto
          </h2>
          <div className="space-y-4">
            {fasesActualizadas.map((fase) => (
              <div key={fase.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{fase.fase}</h3>
                    <div className="text-right">
                      <span className="text-sm text-gray-600">Semanas {fase.semanas}</span>
                      <p className="text-xs text-gray-500">
                        {fase.fechaInicio} - {fase.fechaFin}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{fase.descripcion}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        fase.estado === 'completado' ? 'bg-green-500' :
                        fase.estado === 'en_progreso' ? 'bg-blue-500' :
                        'bg-gray-400'
                      }`}
                      style={{ width: `${fase.progreso}%` }}
                    />
                  </div>
                </div>
                <span className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${
                  fase.estado === 'completado' ? 'bg-green-100 text-green-800' :
                  fase.estado === 'en_progreso' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {fase.estado === 'completado' ? 'Completado' :
                   fase.estado === 'en_progreso' ? 'En Progreso' :
                   'Pendiente'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Controles de filtrado simplificados */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Filtros:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              {/* Filtro por estado */}
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">Estado:</label>
                <select
                  value={filtroSemana}
                  onChange={(e) => setFiltroSemana(e.target.value)}
                  className="px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A4101A] focus:border-transparent"
                >
                  <option value="todas">Todas las semanas</option>
                  <option value="completado">Completadas</option>
                  <option value="en_progreso">En progreso</option>
                  <option value="pendiente">Pendientes</option>
                </select>
              </div>

              {/* Filtro por fase */}
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">Fase:</label>
                <select
                  value={filtroFase}
                  onChange={(e) => setFiltroFase(e.target.value)}
                  className="px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A4101A] focus:border-transparent"
                >
                  <option value="todas">Todas las fases</option>
                  {fasesProyecto.map((fase) => (
                    <option key={fase.id} value={fase.fase}>
                      {fase.fase}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtro por semana específica */}
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">Semana:</label>
                <select
                  value={filtroSemanaEspecifica}
                  onChange={(e) => setFiltroSemanaEspecifica(e.target.value)}
                  className="px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A4101A] focus:border-transparent"
                >
                  <option value="todas">Todas</option>
                  {Array.from({length: 16}, (_, i) => i + 1).map(num => (
                    <option key={num} value={num}>Semana {num}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Información de filtros aplicados */}
          {(filtroSemana !== 'todas' || filtroFase !== 'todas' || filtroSemanaEspecifica !== 'todas') && (
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <span className="font-medium">Filtros activos:</span>
                {filtroSemana !== 'todas' && ` Estado: ${filtroSemana}`}
                {filtroFase !== 'todas' && ` Fase: ${filtroFase}`}
                {filtroSemanaEspecifica !== 'todas' && ` Semana: ${filtroSemanaEspecifica}`}
                <span className="ml-2 text-blue-600">
                  ({semanasFiltradas.length} semana{semanasFiltradas.length !== 1 ? 's' : ''} encontrada{semanasFiltradas.length !== 1 ? 's' : ''})
                </span>
              </p>
            </div>
          )}
        </div>

        {/* Reportes semanales */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-[#A4101A]" />
              Reportes Semanales
            </h2>
            <span className="text-sm text-gray-500">
              Mostrando {semanasFiltradas.length} de {avancesSemanas.length} semanas
            </span>
          </div>

          {/* Mostrar mensaje si no hay semanas */}
          {semanasFiltradas.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No se encontraron semanas
                </h3>
                <p className="text-gray-500">
                  No hay semanas que coincidan con los filtros seleccionados.
                </p>
                <button
                  onClick={() => {
                    setFiltroSemana('todas');
                    setFiltroFase('todas');
                    setFiltroSemanaEspecifica('todas');
                  }}
                  className="mt-4 px-4 py-2 bg-[#A4101A] text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Limpiar filtros
                </button>
              </div>
            </div>
          ) : (
            /* Lista de semanas filtradas */
            <div className="grid gap-8">
              {semanasFiltradas
                .sort((a, b) => b.numeroSemana - a.numeroSemana) // Mostrar más recientes primero
                .map((semana) => (
                  <div key={semana.id}>
                    <WeeklyReport semana={semana} />
                  </div>
                ))
              }
            </div>
          )}
        </div>

        {/* Resumen final */}
        <div className="mt-12 bg-gradient-to-r from-[#A4101A] to-red-700 rounded-lg shadow-lg p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2 text-white">Estado Actual del Proyecto</h3>
            <p className="text-white mb-4">
              Sistema de Gestión Académica en desarrollo activo
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold text-black">{estadisticasGenerales.progresoGeneral}%</div>
                <div className="text-sm text-black">Progreso Total</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold text-black">
                  {estadisticasGenerales.semanasTranscurridas}
                </div>
                <div className="text-sm text-black">Semanas Completadas</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold text-black">
                  {estadisticasGenerales.miembrosEquipo}
                </div>
                <div className="text-sm text-black">Miembros Activos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avances;