// src/pages/Proyecto.jsx
import React, { useState } from 'react';
import { proyectoInfo } from '../data/proyecto-info';
import { 
  ChevronRight, ChevronDown, Target, Zap, Calendar, FileText, 
  Users, Code, Database, Cloud, Settings, CheckCircle, Clock,
  ArrowRight, PlayCircle, Download, ExternalLink, Lightbulb,
  Eye, MessageSquare, Pencil, TestTube, Shield, Activity
} from 'lucide-react';

const Proyecto = () => {
  const [moduloExpandido, setModuloExpandido] = useState(null);
  const [seccionActiva, setSeccionActiva] = useState('descripcion');
  const [faseExpandida, setFaseExpandida] = useState(null);

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

  const toggleFase = (index) => {
    setFaseExpandida(faseExpandida === index ? null : index);
  };

  // Fases de Design Thinking
  const fasesDesignThinking = [
    {
      numero: 1,
      nombre: "Empatizar",
      descripcion: "Comprender las necesidades reales de los usuarios",
      icon: Eye,
      color: "blue",
      actividades: [
        "Entrevistas con docentes, coordinadores y directores",
        "Análisis de comentarios y observaciones",
        "Creación de mapas de empatía",
        "Construcción de User Personas"
      ],
      entregables: [
        "Mapas de Empatía (Director, Coordinador, Docentes)",
        "User Personas detalladas",
        "Registro de observaciones de usuarios"
      ]
    },
    {
      numero: 2,
      nombre: "Definir",
      descripcion: "Traducir información en problemas concretos a resolver",
      icon: Target,
      color: "purple",
      actividades: [
        "Organización de información recopilada",
        "Priorización de Historias de Usuario",
        "Estructuración de flujos por perfil",
        "Creación de User Journey Maps"
      ],
      entregables: [
        "User Journey Maps",
        "Historias de Usuario priorizadas",
        "Alcance de diseño definido"
      ]
    },
    {
      numero: 3,
      nombre: "Idear",
      descripcion: "Generar soluciones creativas a los problemas identificados",
      icon: Lightbulb,
      color: "yellow",
      actividades: [
        "Sesiones de brainstorming en equipo",
        "Análisis de viabilidad técnica",
        "Priorización de funcionalidades",
        "Categorización de propuestas por relevancia"
      ],
      entregables: [
        "Lluvia de ideas documentada",
        "Propuestas categorizadas",
        "Lista de mejoras priorizadas"
      ]
    },
    {
      numero: 4,
      nombre: "Prototipar",
      descripcion: "Transformar ideas en representaciones visuales concretas",
      icon: Pencil,
      color: "green",
      actividades: [
        "Bocetado de baja fidelidad (manual y digital)",
        "Diseño de interfaces en Figma",
        "Desarrollo de flujos interactivos",
        "Validación interna del equipo UX"
      ],
      entregables: [
        "Bocetos de baja fidelidad",
        "Prototipos en Figma",
        "Flujos completos (Docente, Coordinador, Director)",
        "Documento de validación interna"
      ]
    },
    {
      numero: 5,
      nombre: "Validar",
      descripcion: "Comprobar que las soluciones responden a necesidades reales",
      icon: TestTube,
      color: "red",
      actividades: [
        "Validación con Product Owner",
        "Sesiones con usuarios finales",
        "Revisión con equipo QA",
        "Registro sistemático de observaciones"
      ],
      entregables: [
        "Documentos de validación por perfil",
        "Observaciones y recomendaciones",
        "Ajustes implementados",
        "Aprobación de usuarios"
      ]
    }
  ];

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
      estado: "completado",
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
      estado: "completado",
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
      estado: "completado",
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

  // Función para obtener colores según la fase
  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: 'bg-blue-500', light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700' },
      purple: { bg: 'bg-purple-500', light: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700' },
      yellow: { bg: 'bg-yellow-500', light: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700' },
      green: { bg: 'bg-green-500', light: 'bg-green-50', border: 'border-green-200', text: 'text-green-700' },
      red: { bg: 'bg-red-500', light: 'bg-red-50', border: 'border-red-200', text: 'text-red-700' }
    };
    return colors[color];
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
              { id: 'proceso-ux', label: 'Proceso UX', icon: Users },
              { id: 'devSecOps', label: 'DevSecOps', icon: Shield },
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

          {/* NUEVA SECCIÓN: Proceso UX - Design Thinking */}
          {seccionActiva === 'proceso-ux' && (
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Proceso de Diseño UX</h2>
                <p className="text-lg text-gray-600 mb-2">
                  Aplicamos la metodología <span className="font-semibold text-red-600">Design Thinking</span> para 
                  garantizar que cada decisión de diseño responda a las necesidades reales de los usuarios.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                  <p className="text-sm text-yellow-800">
                    <strong>📋 Nota:</strong> Esta documentación está basada en el informe de Design Thinking 
                    y se encuentra en proceso de revisión final.
                  </p>
                </div>
              </div>

              {/* Timeline de Fases */}
              <div className="space-y-6">
                {fasesDesignThinking.map((fase, index) => {
                  const colors = getColorClasses(fase.color);
                  const Icon = fase.icon;
                  
                  return (
                    <div key={index} className="relative">
                      {/* Línea conectora */}
                      {index < fasesDesignThinking.length - 1 && (
                        <div className="absolute left-6 top-16 w-0.5 h-20 bg-gray-300 z-0"></div>
                      )}
                      
                      <div className="relative z-10">
                        <button
                          onClick={() => toggleFase(index)}
                          className="w-full"
                        >
                          <div className="flex items-start gap-4">
                            {/* Círculo numerado */}
                            <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                              {fase.numero}
                            </div>
                            
                            {/* Contenido de la fase */}
                            <div className={`flex-1 ${colors.light} border ${colors.border} rounded-lg p-6 text-left hover:shadow-md transition-shadow`}>
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                  <Icon className={`w-6 h-6 ${colors.text}`} />
                                  <h3 className="text-xl font-bold text-gray-900">{fase.nombre}</h3>
                                </div>
                                {faseExpandida === index ? 
                                  <ChevronDown className="w-5 h-5 text-gray-500" /> : 
                                  <ChevronRight className="w-5 h-5 text-gray-500" />
                                }
                              </div>
                              <p className={`${colors.text} font-medium`}>{fase.descripcion}</p>
                            </div>
                          </div>
                        </button>

                        {/* Contenido expandible */}
                        {faseExpandida === index && (
                          <div className="ml-16 mt-4 bg-white border border-gray-200 rounded-lg p-6">
                            <div className="grid md:grid-cols-2 gap-6">
                              {/* Actividades */}
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                  <CheckCircle className="w-5 h-5 text-green-500" />
                                  Actividades Realizadas
                                </h4>
                                <ul className="space-y-2">
                                  {fase.actividades.map((actividad, actIndex) => (
                                    <li key={actIndex} className="flex items-start gap-2 text-gray-700">
                                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                                      <span className="text-sm">{actividad}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Entregables */}
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                  <FileText className="w-5 h-5 text-blue-500" />
                                  Entregables
                                </h4>
                                <ul className="space-y-2">
                                  {fase.entregables.map((entregable, entIndex) => (
                                    <li key={entIndex} className="flex items-start gap-2 text-gray-700">
                                      <div className={`w-1.5 h-1.5 ${colors.bg} rounded-full mt-2`}></div>
                                      <span className="text-sm">{entregable}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Sección de resultados clave */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-blue-900 mb-2">3 Perfiles Validados</h4>
                  <p className="text-sm text-blue-700">
                    Docente, Coordinador Académico y Director de Escuela
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Pencil className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-purple-900 mb-2">11 Historias de Usuario</h4>
                  <p className="text-sm text-purple-700">
                    Prototipadas y validadas en Sprint 3
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <TestTube className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-green-900 mb-2">Múltiples Validaciones</h4>
                  <p className="text-sm text-green-700">
                    Con usuarios reales en cada iteración
                  </p>
                </div>
              </div>

              {/* Call to action */}
              <div className="mt-8 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <MessageSquare className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Diseño Centrado en el Usuario</h3>
                </div>
                <p className="text-red-100 mb-4">
                  Cada pantalla, cada flujo y cada decisión de diseño está fundamentada en 
                  investigación real con los usuarios del sistema académico de la USMP.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Mapas de Empatía</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ User Personas</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Journey Maps</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Prototipos en Figma</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Validaciones Iterativas</span>
                </div>
              </div>
            </div>
          )}

          {/* NUEVA SECCIÓN: DevSecOps */}
          {seccionActiva === 'devSecOps' && (
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {proyectoInfo.devSecOps.titulo}
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  {proyectoInfo.devSecOps.descripcion}
                </p>
                
                {/* Banner de Arquitectura */}
                <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Settings className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">
                      {proyectoInfo.devSecOps.arquitectura.titulo}
                    </h3>
                  </div>
                  <p className="text-slate-200 mb-2">
                    {proyectoInfo.devSecOps.arquitectura.descripcion}
                  </p>
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm">
                    🛠️ Herramienta: {proyectoInfo.devSecOps.arquitectura.herramienta}
                  </span>
                </div>
              </div>

              {/* Métricas DevSecOps */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {proyectoInfo.devSecOps.metricas.map((metrica, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-lg border border-slate-200 text-center">
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      {metrica.valor}
                    </div>
                    <div className="text-xs text-slate-600">{metrica.label}</div>
                  </div>
                ))}
              </div>

              {/* Prácticas Implementadas */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Prácticas y Herramientas Implementadas
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {proyectoInfo.devSecOps.practicas.map((practica, index) => {
                  const colorClasses = {
                    blue: 'from-blue-50 to-blue-100 border-blue-200',
                    purple: 'from-purple-50 to-purple-100 border-purple-200',
                    red: 'from-red-50 to-red-100 border-red-200',
                    orange: 'from-orange-50 to-orange-100 border-orange-200',
                    green: 'from-green-50 to-green-100 border-green-200',
                    indigo: 'from-indigo-50 to-indigo-100 border-indigo-200'
                  };

                  const iconMap = {
                    'git-branch': <Code className="w-6 h-6" />,
                    'message-square': <MessageSquare className="w-6 h-6" />,
                    'shield': <Shield className="w-6 h-6" />,
                    'activity': <Activity className="w-6 h-6" />,
                    'zap': <Zap className="w-6 h-6" />,
                    'database': <Database className="w-6 h-6" />
                  };

                  return (
                    <div 
                      key={index}
                      className={`bg-gradient-to-br ${colorClasses[practica.color]} border rounded-xl p-6`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 bg-${practica.color}-600 rounded-lg flex items-center justify-center text-white`}>
                          {iconMap[practica.icono]}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">
                          {practica.nombre}
                        </h4>
                      </div>
                      
                      <p className="text-gray-700 text-sm mb-4">
                        {practica.descripcion}
                      </p>
                      
                      <div className="space-y-2">
                        {practica.implementaciones.map((impl, implIndex) => (
                          <div key={implIndex} className="flex items-start gap-2">
                            <CheckCircle className={`w-4 h-4 text-${practica.color}-600 mt-0.5 flex-shrink-0`} />
                            <span className="text-sm text-gray-700">{impl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Integraciones */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Integraciones y Monitoreo
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Slack */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {proyectoInfo.devSecOps.integraciones.slack.titulo}
                    </h4>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    {proyectoInfo.devSecOps.integraciones.slack.descripcion}
                  </p>
                  <div className="space-y-2">
                    {proyectoInfo.devSecOps.integraciones.slack.beneficios.map((beneficio, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{beneficio}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dashboard */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {proyectoInfo.devSecOps.integraciones.dashboard.titulo}
                    </h4>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    {proyectoInfo.devSecOps.integraciones.dashboard.descripcion}
                  </p>
                  <div className="space-y-2">
                    {proyectoInfo.devSecOps.integraciones.dashboard.metricas.map((metrica, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{metrica}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Beneficios */}
              <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8" />
                  Beneficios de DevSecOps
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {proyectoInfo.devSecOps.beneficiosDevSecOps.map((beneficio, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-100">{beneficio}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-slate-200 text-center">
                    <strong>🔒 Seguridad, 🤖 Automatización y 🚀 Eficiencia</strong> en cada etapa del desarrollo
                  </p>
                </div>
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