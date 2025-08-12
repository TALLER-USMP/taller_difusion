// src/components/reports/WeeklyReport.jsx
import { Calendar, Target, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import ProgressCard from './ProgressCard';

const WeeklyReport = ({ semana }) => {
  const getEstadoBadge = (estado) => {
    const estados = {
      'completado': {
        color: 'bg-green-100 text-green-800 border-green-200',
        texto: 'Completado'
      },
      'en_progreso': {
        color: 'bg-blue-100 text-blue-800 border-blue-200',
        texto: 'En Progreso'
      },
      'pendiente': {
        color: 'bg-gray-100 text-gray-800 border-gray-200',
        texto: 'Pendiente'
      },
      'bloqueado': {
        color: 'bg-red-100 text-red-800 border-red-200',
        texto: 'Bloqueado'
      }
    };
    
    const estadoConfig = estados[estado] || estados['pendiente'];
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${estadoConfig.color}`}>
        {estadoConfig.texto}
      </span>
    );
  };

  const getProgressBarColor = (progreso) => {
    if (progreso >= 90) return 'bg-green-500';
    if (progreso >= 70) return 'bg-blue-500';
    if (progreso >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden mb-8">
      {/* Header de la semana */}
      <div className="bg-gradient-to-r from-[#A4101A] to-red-700 text-white p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">{semana.semana}</h2>
            <div className="flex items-center gap-2 text-red-100">
              <Calendar className="h-4 w-4" />
              <span>{semana.fechas}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {getEstadoBadge(semana.estado)}
            <div className="text-right">
              <div className="text-2xl font-bold">{semana.progreso}%</div>
              <div className="text-sm text-red-100">Completado</div>
            </div>
          </div>
        </div>
        
        {/* Título de la semana */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold">{semana.titulo}</h3>
        </div>
        
        {/* Barra de progreso general */}
        <div className="mt-4">
          <div className="w-full bg-red-800 rounded-full h-2">
            <div 
              className={`h-2 rounded-full bg-white transition-all duration-500 ease-out`}
              style={{ width: `${semana.progreso}%` }}
            />
          </div>
        </div>
      </div>

      {/* Contenido del reporte */}
      <div className="p-6">
        {/* Objetivos */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-5 w-5 text-[#A4101A]" />
            <h3 className="text-lg font-semibold text-gray-800">Objetivos de la Semana</h3>
          </div>
          <ul className="space-y-2">
            {semana.objetivos.map((objetivo, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#A4101A] mt-1">•</span>
                <span className="text-gray-700">{objetivo}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Logros */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-800">Logros Alcanzados</h3>
          </div>
          <ul className="space-y-2">
            {semana.logros.map((logro, index) => (
              <li key={index} className="text-gray-700">
                {logro}
              </li>
            ))}
          </ul>
        </div>

        {/* Progreso por áreas */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Progreso por Áreas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {semana.areas.map((area, index) => (
              <ProgressCard
                key={index}
                area={area.area}
                progreso={area.progreso}
                actividades={area.actividades}
                responsables={area.responsables}
              />
            ))}
          </div>
        </div>

        {/* Blockers (si existen) */}
        {semana.blockers && semana.blockers.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              <h3 className="text-lg font-semibold text-gray-800">Blockers y Impedimentos</h3>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <ul className="space-y-2">
                {semana.blockers.map((blocker, index) => (
                  <li key={index} className="flex items-start gap-2 text-yellow-800">
                    <AlertTriangle className="h-4 w-4 mt-0.5 text-yellow-600" />
                    {blocker}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Próximos pasos */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <ArrowRight className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-800">Próximos Pasos</h3>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <ul className="space-y-2">
              {semana.proximosPasos.map((paso, index) => (
                <li key={index} className="flex items-start gap-2 text-blue-800">
                  <ArrowRight className="h-4 w-4 mt-0.5 text-blue-600" />
                  {paso}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyReport;