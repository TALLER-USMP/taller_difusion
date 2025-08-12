// src/pages/Avances.jsx
import { useState } from 'react';
import { BarChart3, TrendingUp, Users, Clock, ChevronDown, Filter } from 'lucide-react';
import WeeklyReport from '../components/reports/WeeklyReport';
import { avancesSemanas, estadisticasGenerales, fasesProyecto } from '../data/semanas/avances-actuales';

const Avances = () => {
  const [filtroSemana, setFiltroSemana] = useState('todas');
  const [mostrarEstadisticas, setMostrarEstadisticas] = useState(true);

  // Filtrar semanas según el filtro seleccionado
  const semanasFiltradas = filtroSemana === 'todas' 
    ? avancesSemanas 
    : avancesSemanas.filter(semana => semana.estado === filtroSemana);

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
        {mostrarEstadisticas && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Progreso General</p>
                  <p className="text-3xl font-bold text-[#A4101A]">{estadisticasGenerales.progresoGeneral}%</p>
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
                </div>
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Miembros del Equipo</p>
                  <p className="text-3xl font-bold text-green-600">{estadisticasGenerales.miembrosEquipo}</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Áreas Activas</p>
                  <p className="text-3xl font-bold text-purple-600">{estadisticasGenerales.areasActivas}</p>
                </div>
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>
        )}

        {/* Fases del proyecto */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-[#A4101A]" />
            Fases del Proyecto
          </h2>
          <div className="space-y-4">
            {fasesProyecto.map((fase, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{fase.fase}</h3>
                    <span className="text-sm text-gray-600">Semanas {fase.semanas}</span>
                  </div>
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

        {/* Controles de filtrado */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700 font-medium">Filtrar por estado:</span>
          </div>
          <select
            value={filtroSemana}
            onChange={(e) => setFiltroSemana(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A4101A] focus:border-[#A4101A] outline-none"
          >
            <option value="todas">Todas las semanas</option>
            <option value="completado">Semanas completadas</option>
            <option value="en_progreso">En progreso</option>
            <option value="pendiente">Pendientes</option>
          </select>
        </div>

        {/* Lista de reportes semanales */}
        <div className="space-y-6">
          {semanasFiltradas.length > 0 ? (
            semanasFiltradas.map((semana) => (
              <WeeklyReport key={semana.id} semana={semana} />
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No hay reportes que coincidan con el filtro
              </h3>
              <p className="text-gray-500">
                Intenta cambiar el filtro para ver otros reportes semanales.
              </p>
            </div>
          )}
        </div>

        {/* Footer informativo */}
        <div className="mt-12 text-center">
          <div className="bg-[#A4101A] text-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">💡 Información sobre los Avances</h3>
            <p className="text-red-100">
              Los reportes se actualizan semanalmente cada viernes. 
              Si tienes preguntas sobre algún avance específico, contacta al Scrum Master del proyecto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avances;