// src/pages/Equipo.jsx
import React, { useState } from 'react';
import { equipoData, equipoPorArea } from '../data/equipo';
import { Linkedin, Users, Award, Code, Shield, Palette, MessageSquare, TestTube, Workflow, Layers } from 'lucide-react';

const Equipo = () => {
  const [vistaActual, setVistaActual] = useState('todos');
  const [miembroSeleccionado, setMiembroSeleccionado] = useState(null);

  // Función para obtener el icono según el área
  const getAreaIcon = (area) => {
    switch(area) {
      case 'Liderazgo': return <Award className="w-5 h-5" />;
      case 'Desarrollo': return <Code className="w-5 h-5" />;
      case 'Infraestructura': return <Shield className="w-5 h-5" />;
      case 'Calidad y UX': return <Palette className="w-5 h-5" />;
      case 'Comunicación': return <MessageSquare className="w-5 h-5" />;
      case 'Desarrolladores UX': return <Palette className="w-5 h-5" />;
      case 'Testers': return <TestTube className="w-5 h-5" />;
      case 'Full Stack': return <Layers className="w-5 h-5" />;
      default: return <Users className="w-5 h-5" />;
    }
  };

  // Función para obtener el gradiente según el área
  const getAreaGradient = (area) => {
    switch(area) {
      case 'Liderazgo': return 'from-red-600 to-red-800';
      case 'Desarrollo': return 'from-red-500 to-red-700';
      case 'Infraestructura': return 'from-red-400 to-red-600';
      case 'Calidad y UX': return 'from-red-300 to-red-500';
      case 'Comunicación': return 'from-red-200 to-red-400';
      case 'Desarrolladores UX': return 'from-purple-500 to-purple-700';
      case 'Testers': return 'from-green-500 to-green-700';
      case 'Full Stack': return 'from-blue-500 to-blue-700';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const MiembroCard = ({ miembro }) => (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:scale-105"
      onClick={() => setMiembroSeleccionado(miembro)}
    >
    {/* Avatar con imagen */}
    <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
        <div className="relative">
          <img 
            src={miembro.avatar} 
            alt={miembro.nombre}
            className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
            onError={(e) => {
              // Si la imagen no carga, mostrar iniciales
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-200 to-red-400 items-center justify-center text-red-800 font-bold text-2xl shadow-lg border-4 border-white hidden">
            {miembro.nombre.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="text-xs font-medium text-red-600">ID: {miembro.id}</span>
        </div>
      </div>

      {/* Información del miembro */}
      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
          {miembro.nombre}
        </h3>
        <p className="text-red-600 font-semibold text-sm mb-3">{miembro.rol}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{miembro.descripcion}</p>

        {/* Especialidades */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {miembro.especialidades.slice(0, 3).map((esp, index) => (
              <span 
                key={index}
                className="bg-red-50 text-red-700 px-2 py-1 rounded-md text-xs font-medium"
              >
                {esp}
              </span>
            ))}
            {miembro.especialidades.length > 3 && (
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs">
                +{miembro.especialidades.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* LinkedIn únicamente */}
        <div className="flex items-center gap-3">
          {miembro.linkedin && miembro.linkedin !== '#' && (
            <a 
              href={miembro.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const Modal = ({ miembro, onClose }) => {
    if (!miembro) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={onClose}>
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            {/* Header del modal */}
            <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-8 rounded-t-2xl">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors text-2xl"
              >
                ×
              </button>
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
                  <img 
                    src={miembro.avatar} 
                    alt={miembro.nombre}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full items-center justify-center text-white font-bold text-2xl hidden">
                    {miembro.nombre.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">{miembro.nombre}</h2>
                  <p className="text-red-100 text-lg font-medium">{miembro.rol}</p>
                </div>
              </div>
            </div>

            {/* Contenido del modal */}
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descripción del Rol</h3>
                <p className="text-gray-700 leading-relaxed">{miembro.descripcion}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Especialidades</h3>
                <div className="flex flex-wrap gap-2">
                  {miembro.especialidades.map((esp, index) => (
                    <span 
                      key={index}
                      className="bg-red-100 text-red-800 px-3 py-2 rounded-lg text-sm font-medium"
                    >
                      {esp}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contacto</h3>
                <div className="space-y-3">
                  {miembro.linkedin && miembro.linkedin !== '#' && (
                    <a 
                      href={miembro.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <Linkedin className="w-5 h-5 text-blue-600" />
                      </div>
                      <span>Ver Perfil de LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestro Equipo
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Conoce a los profesionales que hacen posible el Sistema de Gestión Académica. 
              Un equipo multidisciplinario comprometido con la excelencia y la innovación.
            </p>
          </div>
        </div>
      </div>

      {/* Filtros de vista */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setVistaActual('todos')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              vistaActual === 'todos' 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
            }`}
          >
            <Users className="w-4 h-4 inline mr-2" />
            Todo el Equipo ({equipoData.length})
          </button>
          {Object.keys(equipoPorArea).map((area) => (
            <button
              key={area}
              onClick={() => setVistaActual(area)}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                vistaActual === area 
                  ? 'bg-red-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
              }`}
            >
              {getAreaIcon(area)}
              {area} ({equipoPorArea[area].length})
            </button>
          ))}
        </div>

        {/* Vista por todos */}
        {vistaActual === 'todos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {equipoData.map((miembro) => (
              <MiembroCard key={miembro.id} miembro={miembro} />
            ))}
          </div>
        )}

        {/* Vista por áreas */}
        {vistaActual !== 'todos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipoPorArea[vistaActual].map((miembro) => (
              <MiembroCard key={miembro.id} miembro={miembro} />
            ))}
          </div>
        )}

        {/* Estadísticas del equipo */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Estadísticas del Equipo</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">{equipoData.length}</div>
              <div className="text-gray-600">Miembros Totales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">{Object.keys(equipoPorArea).length}</div>
              <div className="text-gray-600">Áreas Especializadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">
                {equipoData.reduce((total, m) => total + m.especialidades.length, 0)}
              </div>
              <div className="text-gray-600">Especialidades</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600">Metodología Scrum</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para detalles del miembro */}
      <Modal miembro={miembroSeleccionado} onClose={() => setMiembroSeleccionado(null)} />
    </div>
  );
};

export default Equipo;