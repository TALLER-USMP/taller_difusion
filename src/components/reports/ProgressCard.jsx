// src/components/reports/ProgressCard.jsx
import { CheckCircle, AlertCircle, Clock, Users } from 'lucide-react';

const ProgressCard = ({ area, progreso, actividades, responsables, className = "" }) => {
  // Determinar color y estado basado en el progreso
  const getProgressColor = (progress) => {
    if (progress >= 90) return 'bg-green-500';
    if (progress >= 70) return 'bg-blue-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getProgressTextColor = (progress) => {
    if (progress >= 90) return 'text-green-700';
    if (progress >= 70) return 'text-blue-700';
    if (progress >= 50) return 'text-yellow-700';
    return 'text-red-700';
  };

  const getStatusIcon = (progress) => {
    if (progress >= 90) return <CheckCircle className="h-5 w-5 text-green-600" />;
    if (progress >= 70) return <Clock className="h-5 w-5 text-blue-600" />;
    if (progress >= 50) return <AlertCircle className="h-5 w-5 text-yellow-600" />;
    return <AlertCircle className="h-5 w-5 text-red-600" />;
  };

  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {/* Header del card */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {getStatusIcon(progreso)}
          <h3 className="text-lg font-semibold text-gray-800">{area}</h3>
        </div>
        <span className={`text-sm font-medium ${getProgressTextColor(progreso)}`}>
          {progreso}%
        </span>
      </div>

      {/* Barra de progreso */}
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className={`h-3 rounded-full ${getProgressColor(progreso)} transition-all duration-500 ease-out`}
            style={{ width: `${progreso}%` }}
          />
        </div>
      </div>

      {/* Actividades */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-600 mb-2">Actividades realizadas:</h4>
        <ul className="space-y-1">
          {actividades.map((actividad, index) => (
            <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
              <span className="text-[#A4101A] mt-1">•</span>
              {actividad}
            </li>
          ))}
        </ul>
      </div>

      {/* Responsables */}
      <div className="border-t pt-3">
        <div className="flex items-center gap-2 mb-2">
          <Users className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-600">Responsables:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {responsables.map((responsable, index) => (
            <span 
              key={index}
              className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {responsable}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;