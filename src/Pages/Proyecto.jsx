// src/pages/Proyecto.jsx
import React, { useState } from 'react';
import { proyectoInfo } from '../data/proyecto-info';
import { 
  ChevronRight, ChevronDown, Target, Zap, Calendar, FileText, 
  Users, Code, Database, Cloud, Settings, CheckCircle, Clock,
  ArrowRight, PlayCircle, Download, ExternalLink
} from 'lucide-react';

const Proyecto = () => {
  const [moduloExpandido, setModuloExpandido] = useState(null);
  const [seccionActiva, setSeccionActiva] = useState('descripcion');

  // Función para obtener icono por categoría
  const getCategoryIcon = (categoria) => {
    switch(categoria) {
      case 'Frontend': return <Code className="w-5 h-5" />;
      case 'Backend': return <Settings className="w-5 h-5" />;
      case 'Base de Datos': return <Database className="w-5 h-5" />;
      default: return <Cloud className="w-5 h-5" />;
    }
  };

  const toggleModulo = (index) => {
    setModuloExpandido(moduloExpandido === index ? null : index);
  };

  // Roadmap simulado (puedes expandir esto)
  const roadmap = [
    {
      fase: "Fase 1",
      titulo: "Análisis y Diseño",
      periodo: "4 agosto - 24 agosto 2025",
      estado: "completado",
      tareas: [
        "Definición de requerimientos",
        "Diseño de arquitectura",
        "Prototipado de interfaces",
        "Configuración del entorno"
      ]
    },
    {
      fase: "Fase 2", 
      titulo: "Desarrollo Core",
      periodo: "25 agosto - 21 septiembre 2025",
      estado: "en-progreso",
      tareas: [
        "Módulo de Cursos y Docentes",
        "Módulo de Sílabos",
        "Sistema de autenticación",
        "APIs principales"
      ]
    },
    {
      fase: "Fase 3",
      titulo: "Funcionalidades Avanzadas",
      periodo: "22 septiembre - 19 octubre 2025",
      estado: "pendiente",
      tareas: [
        "Catálogo de Sílabos",
        "Esquemas de Evaluación",
        "Plan de Estudios",
        "Malla Curricular visual"
      ]
    },
    {
      fase: "Fase 4",
      titulo: "Testing y Despliegue",
      periodo: "20 octubre - 19 noviembre 2025",
      estado: "pendiente",
      tareas: [
        "Testing integral",
        "Documentación final",
        "Despliegue en producción",
        "Capacitación de usuarios"
      ]
    }
  ];

  const EstadoBadge = ({ estado }) => {
    const configs = {
      'completado': { bg: 'bg-green-100', text: 'text-green-800', label: 'Completado' },
      'en-progreso': { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'En Progreso' },
      'pendiente': { bg: 'bg-gray-100', text: 'text-gray-800', label: 'Pendiente' }
    };
    
    const config = configs[estado];
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de la página */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {proyectoInfo.nombre}
            </h1>
            <p className="text-xl text-red-100 mb-4">
              {proyectoInfo.eslogan}
            </p>
            <p className="text-lg text-red-200 max-w-3xl mx-auto">
              {proyectoInfo.descripcionCorta}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Navegación de secciones */}
        <div className="bg-white rounded-lg shadow-sm mb-8 p-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'descripcion', label: 'Descripción', icon: FileText },
              { id: 'objetivos', label: 'Objetivos', icon: Target },
              { id: 'tecnologias', label: 'Tecnologías', icon: Code },
              { id: 'modulos', label: 'Módulos', icon: Settings },
              { id: 'roadmap', label: 'Roadmap', icon: Calendar },
              { id: 'beneficios', label: 'Beneficios', icon: Zap }
            ].map(seccion => {
              const Icon = seccion.icon;
              return (
                <button
                  key={seccion.id}
                  onClick={() => setSeccionActiva(seccion.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    seccionActiva === seccion.id 
                      ? 'bg-red-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {seccion.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Estadísticas rápidas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {proyectoInfo.estadisticas.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">{stat.valor}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contenido dinámico por sección */}
        <div className="bg-white rounded-xl shadow-lg">
          
          {/* Descripción Detallada */}
          {seccionActiva === 'descripcion' && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Descripción del Proyecto</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {proyectoInfo.descripcionDetallada}
                </p>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Problemática Actual</h3>
                  <p className="text-red-700">
                    La gestión académica actual se caracteriza por procesos manuales, documentos desactualizados 
                    y múltiples fuentes de información que generan inconsistencias y errores.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Nuestra Solución</h3>
                  <p className="text-green-700">
                    Un sistema centralizado que automatiza completamente la gestión académica desde una 
                    única fuente de verdad, garantizando consistencia y actualización en tiempo real.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Objetivos Detallados */}
          {seccionActiva === 'objetivos' && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Objetivos del Sistema</h2>
              <div className="grid gap-4">
                {proyectoInfo.objetivos.map((objetivo, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{objetivo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tecnologías */}
          {seccionActiva === 'tecnologias' && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Stack Tecnológico</h2>
              
              <div className="mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Metodología</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">{proyectoInfo.metodologia.nombre}</h4>
                      <p className="text-blue-700">{proyectoInfo.metodologia.descripcion}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {proyectoInfo.metodologia.beneficios.map((beneficio, index) => (
                      <div key={index} className="flex items-center gap-2 text-blue-700">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">{beneficio}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {proyectoInfo.tecnologias.map((categoria, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-100 px-6 py-4 flex items-center gap-3">
                      {getCategoryIcon(categoria.categoria)}
                      <h3 className="text-xl font-semibold text-gray-900">{categoria.categoria}</h3>
                    </div>
                    <div className="p-6">
                      <div className="grid gap-4">
                        {categoria.items.map((tech, techIndex) => (
                          <div key={techIndex} className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                            <div className="w-3 h-3 bg-red-600 rounded-full mt-2"></div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{tech.nombre}</h4>
                              <p className="text-gray-600">{tech.descripcion}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Módulos */}
          {seccionActiva === 'modulos' && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Módulos del Sistema</h2>
              <div className="space-y-4">
                {proyectoInfo.modulos.map((modulo, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleModulo(index)}
                      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{modulo.nombre}</h3>
                        <p className="text-gray-600 text-sm">{modulo.descripcion}</p>
                      </div>
                      {moduloExpandido === index ? 
                        <ChevronDown className="w-5 h-5 text-gray-500" /> : 
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      }
                    </button>
                    {moduloExpandido === index && (
                      <div className="px-6 py-4 bg-white border-t border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-3">Funcionalidades:</h4>
                        <ul className="space-y-2">
                          {modulo.funcionalidades.map((func, funcIndex) => (
                            <li key={funcIndex} className="flex items-center gap-2 text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {func}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Roadmap */}
          {seccionActiva === 'roadmap' && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cronograma del Proyecto</h2>
              <div className="space-y-6">
                {roadmap.map((fase, index) => (
                  <div key={index} className="relative">
                    {/* Línea de tiempo */}
                    {index < roadmap.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-300"></div>
                    )}
                    
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${
                        fase.estado === 'completado' ? 'bg-green-500 text-white' :
                        fase.estado === 'en-progreso' ? 'bg-yellow-500 text-white' :
                        'bg-gray-300 text-gray-600'
                      }`}>
                        {fase.estado === 'completado' ? <CheckCircle className="w-6 h-6" /> :
                         fase.estado === 'en-progreso' ? <Clock className="w-6 h-6" /> :
                         index + 1}
                      </div>
                      
                      <div className="flex-1 bg-white border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{fase.titulo}</h3>
                            <p className="text-gray-600">{fase.periodo}</p>
                          </div>
                          <EstadoBadge estado={fase.estado} />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {fase.tareas.map((tarea, tareaIndex) => (
                            <div key={tareaIndex} className="flex items-center gap-2 text-sm text-gray-700">
                              <div className={`w-2 h-2 rounded-full ${
                                fase.estado === 'completado' ? 'bg-green-500' :
                                fase.estado === 'en-progreso' ? 'bg-yellow-500' :
                                'bg-gray-300'
                              }`}></div>
                              {tarea}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Beneficios */}
          {seccionActiva === 'beneficios' && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Beneficios del Sistema</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {proyectoInfo.beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{beneficio}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">¿Listo para transformar la gestión académica?</h3>
                <p className="text-red-100 mb-6">
                  Contacta con nuestro equipo para conocer más detalles del proyecto y cómo puede beneficiar a tu institución.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Conocer el Equipo
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Ver Avances
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Proyecto;