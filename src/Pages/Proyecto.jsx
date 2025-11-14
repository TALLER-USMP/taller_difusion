// src/pages/Proyecto.jsx
import React, { useState } from 'react';
import { proyectoInfo } from '../data/proyecto-info';
import { 
  ChevronRight, ChevronDown, Target, Zap, Calendar, FileText, 
  Users, Code, Database, Cloud, Settings, CheckCircle, Clock,
  ArrowRight, PlayCircle, Download, ExternalLink, Lightbulb,
  Eye, MessageSquare, Pencil, TestTube, Shield, Activity, AlertTriangle
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
              { id: 'proceso-devsecops', label: 'Proceso DevSecOps', icon: Shield },
              { id: 'proceso-datos', label: 'Proceso de Datos', icon: Database },
              { id: 'proceso-testing', label: 'Proceso QA', icon: TestTube },
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

          {/* NUEVA SECCIÓN: Proceso DevSecOps */}
          {seccionActiva === 'proceso-devsecops' && (
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Proceso DevSecOps</h2>
                <p className="text-lg text-gray-600 mb-2">
                  Implementamos un <span className="font-semibold text-red-600">flujo de trabajo DevSecOps completo</span> que 
                  integra desarrollo, seguridad y operaciones en un ciclo continuo, automatizado y seguro.
                </p>
                <div className="bg-slate-50 border-l-4 border-slate-500 p-4 mt-4">
                  <p className="text-sm text-slate-800">
                    <strong>🔒 Nota:</strong> Esta documentación está basada en el informe del equipo DevSecOps 
                    y representa el flujo CI/CD implementado en el proyecto.
                  </p>
                </div>
              </div>

              {/* Arquitectura Base */}
              <div className="mb-8 bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Arquitectura del Flujo de Trabajo</h3>
                </div>
                <p className="text-slate-200 mb-3">
                  Se diseñó una arquitectura completa utilizando <strong>Isoflow</strong> que representa el recorrido 
                  de commits, Pull Requests y despliegues en la nube, sirviendo como guía de referencia para todo el equipo.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Control de Versiones (GitFlow)</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Revisión y Aprobación</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Pruebas Automatizadas</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Despliegue en Azure</span>
                </div>
              </div>

              {/* Fases del Proceso DevSecOps */}
              <div className="space-y-6">
                {[
                  {
                    numero: 1,
                    titulo: "Estandarización de Control de Versiones (GitFlow)",
                    descripcion: "Estructura de ramas y flujo de desarrollo organizado",
                    icon: Code,
                    color: "blue",
                    contenido: {
                      implementacion: "Se implementó la metodología GitFlow como estándar de gestión de versiones, estructurando el trabajo en ramas principales y auxiliares.",
                      ramas: [
                        { tipo: "main", descripcion: "Rama principal de producción" },
                        { tipo: "develop", descripcion: "Rama de desarrollo e integración" },
                        { tipo: "feature", descripcion: "Ramas para nuevas funcionalidades" },
                        { tipo: "release", descripcion: "Ramas para preparar releases" },
                        { tipo: "hotfix", descripcion: "Correcciones urgentes en producción" }
                      ],
                      practicas: [
                        "Revisión obligatoria mediante Pull Requests (PRs)",
                        "Plantilla estandarizada para PRs",
                        "Guía de contribución con buenas prácticas",
                        "Conventional Commits para mensajes claros"
                      ],
                      resultado: "Ciclo de desarrollo organizado con flujo claro para creación, validación y liberación de funcionalidades"
                    }
                  },
                  {
                    numero: 2,
                    titulo: "Análisis SAST (Static Application Security Testing)",
                    descripcion: "Análisis estático de seguridad del código fuente",
                    icon: Shield,
                    color: "red",
                    contenido: {
                      objetivo: "Identificar vulnerabilidades en el código antes de la compilación mediante análisis estático profundo.",
                      herramientas: [
                        { nombre: "CodeQL", uso: "Análisis de seguridad profundo del código fuente" },
                        { nombre: "Dependabot", uso: "Monitoreo de dependencias vulnerables" }
                      ],
                      detecciones: [
                        "Inyecciones SQL",
                        "Vulnerabilidades XSS (Cross-Site Scripting)",
                        "Desbordamientos de búfer",
                        "Fallas de seguridad comunes en código"
                      ],
                      integracion: "Ejecutado automáticamente en el pipeline CI/CD antes de cada build",
                      beneficio: "Prevención de vulnerabilidades críticas antes de llegar a producción"
                    }
                  },
                  {
                    numero: 3,
                    titulo: "Build y Pruebas Automatizadas",
                    descripcion: "Compilación, empaquetado y validación del código",
                    icon: Settings,
                    color: "purple",
                    contenido: {
                      fases: [
                        "Compilación del proyecto",
                        "Empaquetado de artefactos",
                        "Ejecución de pruebas unitarias",
                        "Validación de integridad y estabilidad"
                      ],
                      validaciones: [
                        "Verificación de que el código compila sin errores",
                        "Ejecución exitosa de todas las pruebas automáticas",
                        "Validación de cobertura de código",
                        "Comprobación de estándares de calidad"
                      ],
                      resultado: "Artefacto validado y listo para despliegue"
                    }
                  },
                  {
                    numero: 4,
                    titulo: "Análisis DAST (Dynamic Application Security Testing)",
                    descripcion: "Pruebas dinámicas en la aplicación en ejecución",
                    icon: Activity,
                    color: "orange",
                    contenido: {
                      objetivo: "Realizar escaneos de seguridad tipo 'caja negra' contra la aplicación desplegada.",
                      herramienta: "OWASP ZAP (Zed Attack Proxy)",
                      implementacion: "Ejecutado mediante contenedores Docker en GitHub Actions contra Azure Static Web Apps",
                      detecciones: [
                        "Configuraciones incorrectas de seguridad",
                        "Vulnerabilidades de autenticación",
                        "Problemas que solo se manifiestan en tiempo de ejecución",
                        "Exposición de información sensible"
                      ],
                      reportes: "Almacenados automáticamente como artifacts en GitHub Actions por 30 días",
                      colaboracion: "Implementado en conjunto con el Ingeniero de Nube y DevSecOps"
                    }
                  },
                  {
                    numero: 5,
                    titulo: "Despliegue Automatizado en Azure",
                    descripcion: "Deploy continuo en entornos de nube",
                    icon: Cloud,
                    color: "green",
                    contenido: {
                      plataforma: "Microsoft Azure (Azure Static Web Apps)",
                      proceso: [
                        "Autenticación segura mediante Azure Service Principal",
                        "Gestión de secretos a través de GitHub Secrets",
                        "Actualización automática de servicios",
                        "Validación post-despliegue"
                      ],
                      seguridad: [
                        "Credenciales sensibles protegidas y no expuestas",
                        "Conexión cifrada con Azure",
                        "Control de acceso basado en roles (RBAC)"
                      ],
                      resultado: "Despliegue automático bajo condiciones controladas con validaciones de calidad y seguridad"
                    }
                  },
                  {
                    numero: 6,
                    titulo: "Monitoreo y Notificaciones",
                    descripcion: "Visibilidad en tiempo real del pipeline",
                    icon: MessageSquare,
                    color: "indigo",
                    contenido: {
                      slack: {
                        integracion: "Canal central de comunicación con notificaciones automáticas",
                        eventos: [
                          "Nuevos commits realizados",
                          "Creación/actualización de Pull Requests",
                          "Generación de releases",
                          "Ejecución de workflows",
                          "Resultado de despliegues (éxito/error)"
                        ]
                      },
                      dashboard: {
                        tecnologia: "Streamlit",
                        metricas: [
                          "Número total de commits por sprint",
                          "Actividad individual por desarrollador",
                          "Frecuencia y volumen de Pull Requests",
                          "Desempeño del equipo",
                          "Salud del repositorio"
                        ]
                      },
                      beneficio: "Visibilidad completa, respuesta oportuna ante incidencias y análisis de mejora continua"
                    }
                  },
                  {
                    numero: 7,
                    titulo: "Infraestructura de Respaldo (Backups)",
                    descripcion: "Respaldos automáticos de infraestructura",
                    icon: Database,
                    color: "teal",
                    contenido: {
                      workflow: "Backup Infrastructure to GitHub Releases",
                      programacion: "Ejecución automática al cierre de cada sprint",
                      fases: [
                        "Exportar Bicep templates desde Azure",
                        "Limpiar backups antiguos automáticamente",
                        "Crear release en GitHub con el respaldo",
                        "Generar resumen y validación del proceso"
                      ],
                      garantias: [
                        "Trazabilidad de cambios de infraestructura",
                        "Disponibilidad histórica de versiones",
                        "Recuperación ante incidentes",
                        "Continuidad operativa asegurada"
                      ]
                    }
                  }
                ].map((fase, index) => {
                  const colors = {
                    blue: { bg: 'bg-blue-500', light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700' },
                    red: { bg: 'bg-red-500', light: 'bg-red-50', border: 'border-red-200', text: 'text-red-700' },
                    purple: { bg: 'bg-purple-500', light: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700' },
                    orange: { bg: 'bg-orange-500', light: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700' },
                    green: { bg: 'bg-green-500', light: 'bg-green-50', border: 'border-green-200', text: 'text-green-700' },
                    indigo: { bg: 'bg-indigo-500', light: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700' },
                    teal: { bg: 'bg-teal-500', light: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700' }
                  }[fase.color];

                  const Icon = fase.icon;

                  return (
                    <div key={index} className="relative">
                      {index < 6 && (
                        <div className="absolute left-6 top-16 w-0.5 h-20 bg-gray-300 z-0"></div>
                      )}
                      
                      <div className="relative z-10">
                        <button
                          onClick={() => setFaseExpandida(faseExpandida === index ? null : index)}
                          className="w-full"
                        >
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                              {fase.numero}
                            </div>
                            
                            <div className={`flex-1 ${colors.light} border ${colors.border} rounded-lg p-6 text-left hover:shadow-md transition-shadow`}>
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                  <Icon className={`w-6 h-6 ${colors.text}`} />
                                  <h3 className="text-xl font-bold text-gray-900">{fase.titulo}</h3>
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

                        {faseExpandida === index && (
                          <div className="ml-16 mt-4 bg-white border border-gray-200 rounded-lg p-6">
                            <div className="space-y-4">
                              {/* Contenido específico por fase */}
                              {fase.contenido.implementacion && (
                                <div>
                                  <p className="text-gray-700 text-sm mb-3">{fase.contenido.implementacion}</p>
                                </div>
                              )}

                              {fase.contenido.ramas && (
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-3">Estructura de Ramas:</h4>
                                  <div className="grid md:grid-cols-2 gap-3">
                                    {fase.contenido.ramas.map((rama, i) => (
                                      <div key={i} className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                        <span className="font-mono text-blue-800 font-semibold">{rama.tipo}</span>
                                        <p className="text-xs text-blue-700 mt-1">{rama.descripcion}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {fase.contenido.practicas && (
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">Prácticas Implementadas:</h4>
                                  <ul className="space-y-1">
                                    {fase.contenido.practicas.map((practica, i) => (
                                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                        <span>{practica}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {fase.contenido.herramientas && (
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-3">Herramientas:</h4>
                                  <div className="grid md:grid-cols-2 gap-3">
                                    {fase.contenido.herramientas.map((herramienta, i) => (
                                      <div key={i} className="bg-red-50 border border-red-200 rounded-lg p-3">
                                        <h5 className="font-semibold text-red-900 text-sm">{herramienta.nombre}</h5>
                                        <p className="text-xs text-red-700 mt-1">{herramienta.uso}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {fase.contenido.detecciones && (
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">Detecciones:</h4>
                                  <ul className="grid md:grid-cols-2 gap-2">
                                    {fase.contenido.detecciones.map((det, i) => (
                                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                        <div className={`w-1.5 h-1.5 ${colors.bg} rounded-full mt-2`}></div>
                                        <span>{det}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {fase.contenido.fases && (
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">Fases del Proceso:</h4>
                                  <ul className="space-y-1">
                                    {fase.contenido.fases.map((f, i) => (
                                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                        <ArrowRight className="w-4 h-4 text-purple-500 mt-0.5" />
                                        <span>{f}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {fase.contenido.herramienta && (
                                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                                  <h4 className="font-semibold text-orange-900 mb-2">🔧 Herramienta Principal</h4>
                                  <p className="text-orange-800 text-sm">{fase.contenido.herramienta}</p>
                                </div>
                              )}

                              {fase.contenido.proceso && (
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">Proceso:</h4>
                                  <ul className="space-y-1">
                                    {fase.contenido.proceso.map((p, i) => (
                                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                        <span>{p}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {fase.contenido.slack && (
                                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                                  <h4 className="font-semibold text-indigo-900 mb-2">💬 Integración Slack</h4>
                                  <p className="text-indigo-800 text-sm mb-2">{fase.contenido.slack.integracion}</p>
                                  <div className="mt-2">
                                    <h5 className="font-medium text-indigo-800 text-xs mb-1">Eventos Notificados:</h5>
                                    <ul className="grid md:grid-cols-2 gap-1">
                                      {fase.contenido.slack.eventos.map((ev, i) => (
                                        <li key={i} className="flex items-center gap-1 text-indigo-700 text-xs">
                                          <div className="w-1 h-1 bg-indigo-600 rounded-full"></div>
                                          <span>{ev}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              )}

                              {fase.contenido.dashboard && (
                                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                                  <h4 className="font-semibold text-indigo-900 mb-2">📊 Dashboard de Monitoreo</h4>
                                  <p className="text-indigo-800 text-sm mb-2">Tecnología: <strong>{fase.contenido.dashboard.tecnologia}</strong></p>
                                  <div className="mt-2">
                                    <h5 className="font-medium text-indigo-800 text-xs mb-1">Métricas Visualizadas:</h5>
                                    <ul className="space-y-1">
                                      {fase.contenido.dashboard.metricas.map((m, i) => (
                                        <li key={i} className="flex items-start gap-2 text-indigo-700 text-xs">
                                          <Activity className="w-3 h-3 mt-0.5" />
                                          <span>{m}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              )}

                              {fase.contenido.workflow && (
                                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                                  <h4 className="font-semibold text-teal-900 mb-2">⚙️ Workflow Automatizado</h4>
                                  <p className="text-teal-800 text-sm font-mono">{fase.contenido.workflow}</p>
                                </div>
                              )}

                              {fase.contenido.garantias && (
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">Garantías:</h4>
                                  <ul className="grid md:grid-cols-2 gap-2">
                                    {fase.contenido.garantias.map((g, i) => (
                                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                        <Shield className="w-4 h-4 text-teal-500 mt-0.5" />
                                        <span>{g}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {fase.contenido.resultado && (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-3">
                                  <h4 className="font-semibold text-green-900 mb-2">✅ Resultado</h4>
                                  <p className="text-green-800 text-sm">{fase.contenido.resultado}</p>
                                </div>
                              )}

                              {fase.contenido.beneficio && (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-3">
                                  <h4 className="font-semibold text-blue-900 mb-2">💡 Beneficio</h4>
                                  <p className="text-blue-800 text-sm">{fase.contenido.beneficio}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Métricas del Proceso */}
              <div className="mt-12 grid md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-blue-900 mb-2">2 Tipos de Análisis</h4>
                  <p className="text-sm text-blue-700">
                    SAST (Estático) y DAST (Dinámico)
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-green-900 mb-2">Despliegue en Azure</h4>
                  <p className="text-sm text-green-700">
                    Automatizado con validaciones
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-purple-900 mb-2">Monitoreo 24/7</h4>
                  <p className="text-sm text-purple-700">
                    Slack + Dashboard Streamlit
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg border border-teal-200">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-teal-900 mb-2">Backups Automáticos</h4>
                  <p className="text-sm text-teal-700">
                    Al cierre de cada sprint
                  </p>
                </div>
              </div>

              {/* Banner Final */}
              <div className="mt-8 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Pipeline CI/CD Completo y Seguro</h3>
                </div>
                <p className="text-red-100 mb-4">
                  Cada commit atraviesa un proceso completo de validación: desde análisis de seguridad estático (SAST), 
                  compilación y pruebas, análisis dinámico (DAST), hasta el despliegue automatizado en Azure con 
                  notificaciones en tiempo real y respaldos programados.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ GitFlow Estandarizado</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Análisis SAST y DAST</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Deploy Automatizado</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Monitoreo Continuo</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Backups Programados</span>
                </div>
              </div>
            </div>
          )}

          {/* NUEVA SECCIÓN: Proceso de Datos */}
          {seccionActiva === 'proceso-datos' && (
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Proceso de Ingeniería de Datos</h2>
                <p className="text-lg text-gray-600 mb-2">
                  Implementamos un <span className="font-semibold text-red-600">flujo estructurado de gestión de datos</span> que 
                  garantiza la integridad, trazabilidad y calidad de la información en el Sistema de Gestión de Sílabos.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                  <p className="text-sm text-blue-800">
                    <strong>📊 Nota:</strong> Esta documentación está basada en el informe de la Semana 12 
                    del equipo de Ingeniería de Datos (31 de octubre de 2025).
                  </p>
                </div>
              </div>

              {/* Actividades Principales */}
              <div className="space-y-6 mb-8">
                {[
                  {
                    numero: 1,
                    titulo: "Incorporación del Equipo de Datos",
                    descripcion: "Ampliación de capacidad con nuevos miembros",
                    icon: Users,
                    color: "blue",
                    contenido: {
                      objetivo: "Integrar 4 nuevos miembros al equipo para ampliar la capacidad de carga y validación de datos.",
                      actividades: [
                        "Entrega del diccionario de datos actualizado como herramienta de referencia",
                        "Asignación de carga de 5 sílabos por integrante",
                        "Capacitación en relaciones entre tablas (silabo, silabo_unidad, silabo_unidad_contenido, silabo_unidad_semana)",
                        "Familiarización con el flujo completo de registro de información"
                      ],
                      resultado: "Mayor transparencia y control interno del sistema de datos"
                    }
                  },
                  {
                    numero: 2,
                    titulo: "Carga Inicial e Identificación de Errores",
                    descripcion: "Primeras pruebas y detección de problemas",
                    icon: AlertTriangle,
                    color: "yellow",
                    contenido: {
                      objetivo: "Ejecutar pruebas de carga con el nuevo equipo y validar comprensión del modelo.",
                      problemaDetectado: "Mala interpretación del modelo de datos: solo se completó la tabla 'silabo', omitiendo las tablas dependientes.",
                      impacto: [
                        "Estructura incompleta de datos",
                        "Afectación de la integridad referencial",
                        "Pérdida de relaciones entre entidades"
                      ],
                      accion: "Revisión conjunta con el equipo para explicar nuevamente la relación entre entidades"
                    }
                  },
                  {
                    numero: 3,
                    titulo: "Corrección de Duplicados",
                    descripcion: "Intervención no autorizada y limpieza de datos",
                    icon: Shield,
                    color: "red",
                    contenido: {
                      incidente: "Intervención no identificada que sobreescribió registros con información duplicada",
                      accionesTomadas: [
                        "Limpieza completa de las tablas afectadas",
                        "Eliminación de registros repetidos",
                        "Restauración de la consistencia referencial del esquema",
                        "Supervisión directa del líder del equipo de datos"
                      ],
                      prevencion: "Implementación de controles de acceso más estrictos"
                    }
                  },
                  {
                    numero: 4,
                    titulo: "Elaboración de Consultas Guía",
                    descripcion: "Estandarización del proceso de carga",
                    icon: FileText,
                    color: "green",
                    contenido: {
                      objetivo: "Evitar futuros errores mediante la creación de una consulta SQL modelo",
                      caracteristicas: [
                        "Ejemplifica el proceso correcto de inserción en cada tabla",
                        "Considera las relaciones y llaves foráneas",
                        "Incluye variables clave (código de curso, modalidad, ciclo, docente, horas)",
                        "Ejecuta inserciones secuenciadas que evitan duplicados"
                      ],
                      resultado: "Recarga controlada exitosa finalizada el 31 de octubre de 2025",
                      beneficio: "Validación de coherencia del modelo y mejor comprensión del flujo de datos"
                    }
                  },
                  {
                    numero: 5,
                    titulo: "Actualización Estructural",
                    descripcion: "Modificaciones solicitadas por Backend",
                    icon: Settings,
                    color: "purple",
                    contenido: {
                      solicitud: "El equipo backend solicitó modificaciones en la tabla 'silabo_unidad'",
                      cambios: [
                        "Agregación de campos para representar contenidos con mayor detalle",
                        "Actualización del diccionario de datos (v12.1)",
                        "Preservación de relaciones preexistentes"
                      ],
                      garantia: "Futuras integraciones sin conflictos ni pérdida de información"
                    }
                  }
                ].map((actividad, index) => {
                  const colors = {
                    blue: { bg: 'bg-blue-500', light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700' },
                    yellow: { bg: 'bg-yellow-500', light: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700' },
                    red: { bg: 'bg-red-500', light: 'bg-red-50', border: 'border-red-200', text: 'text-red-700' },
                    green: { bg: 'bg-green-500', light: 'bg-green-50', border: 'border-green-200', text: 'text-green-700' },
                    purple: { bg: 'bg-purple-500', light: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700' }
                  }[actividad.color];

                  const Icon = actividad.icon;

                  return (
                    <div key={index} className="relative">
                      {index < 4 && (
                        <div className="absolute left-6 top-16 w-0.5 h-20 bg-gray-300 z-0"></div>
                      )}
                      
                      <div className="relative z-10">
                        <button
                          onClick={() => setFaseExpandida(faseExpandida === index ? null : index)}
                          className="w-full"
                        >
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                              {actividad.numero}
                            </div>
                            
                            <div className={`flex-1 ${colors.light} border ${colors.border} rounded-lg p-6 text-left hover:shadow-md transition-shadow`}>
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                  <Icon className={`w-6 h-6 ${colors.text}`} />
                                  <h3 className="text-xl font-bold text-gray-900">{actividad.titulo}</h3>
                                </div>
                                {faseExpandida === index ? 
                                  <ChevronDown className="w-5 h-5 text-gray-500" /> : 
                                  <ChevronRight className="w-5 h-5 text-gray-500" />
                                }
                              </div>
                              <p className={`${colors.text} font-medium`}>{actividad.descripcion}</p>
                            </div>
                          </div>
                        </button>

                        {faseExpandida === index && (
                          <div className="ml-16 mt-4 bg-white border border-gray-200 rounded-lg p-6">
                            <div className="space-y-4">
                              {actividad.contenido.objetivo && (
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-blue-500" />
                                    Objetivo
                                  </h4>
                                  <p className="text-gray-700 text-sm">{actividad.contenido.objetivo}</p>
                                </div>
                              )}

                              {actividad.contenido.actividades && (
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    Actividades Realizadas
                                  </h4>
                                  <ul className="space-y-1">
                                    {actividad.contenido.actividades.map((act, i) => (
                                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                                        <span>{act}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {actividad.contenido.problemaDetectado && (
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                  <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Problema Detectado</h4>
                                  <p className="text-yellow-800 text-sm">{actividad.contenido.problemaDetectado}</p>
                                </div>
                              )}

                              {actividad.contenido.incidente && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                  <h4 className="font-semibold text-red-900 mb-2">🚨 Incidente</h4>
                                  <p className="text-red-800 text-sm">{actividad.contenido.incidente}</p>
                                </div>
                              )}

                              {actividad.contenido.impacto && (
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">Impacto</h4>
                                  <ul className="space-y-1">
                                    {actividad.contenido.impacto.map((imp, i) => (
                                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></div>
                                        <span>{imp}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {actividad.contenido.accionesTomadas && (
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-blue-500" />
                                    Acciones Tomadas
                                  </h4>
                                  <ul className="space-y-1">
                                    {actividad.contenido.accionesTomadas.map((acc, i) => (
                                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                        <span>{acc}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {actividad.contenido.caracteristicas && (
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">Características</h4>
                                  <ul className="space-y-1">
                                    {actividad.contenido.caracteristicas.map((car, i) => (
                                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                        <div className={`w-1.5 h-1.5 ${colors.bg} rounded-full mt-2`}></div>
                                        <span>{car}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {actividad.contenido.solicitud && (
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">Solicitud</h4>
                                  <p className="text-gray-700 text-sm mb-3">{actividad.contenido.solicitud}</p>
                                  <h5 className="font-medium text-gray-800 mb-2 text-sm">Cambios Implementados:</h5>
                                  <ul className="space-y-1">
                                    {actividad.contenido.cambios.map((cambio, i) => (
                                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                        <div className={`w-1.5 h-1.5 ${colors.bg} rounded-full mt-2`}></div>
                                        <span>{cambio}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {actividad.contenido.resultado && (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-3">
                                  <h4 className="font-semibold text-green-900 mb-2">✅ Resultado</h4>
                                  <p className="text-green-800 text-sm">{actividad.contenido.resultado}</p>
                                </div>
                              )}

                              {actividad.contenido.garantia && (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-3">
                                  <h4 className="font-semibold text-blue-900 mb-2">🔒 Garantía</h4>
                                  <p className="text-blue-800 text-sm">{actividad.contenido.garantia}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Métricas Clave */}
              <div className="mt-12 grid md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-blue-900 mb-2">4 Nuevos Integrantes</h4>
                  <p className="text-sm text-blue-700">
                    Ampliación del equipo de datos
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-green-900 mb-2">5 Sílabos por Usuario</h4>
                  <p className="text-sm text-green-700">
                    Carga de prueba asignada
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-purple-900 mb-2">4 Tablas Principales</h4>
                  <p className="text-sm text-purple-700">
                    silabo, unidad, contenido, semana
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-red-900 mb-2">Carga Exitosa</h4>
                  <p className="text-sm text-red-700">
                    31 de octubre de 2025
                  </p>
                </div>
              </div>

              {/* Banner Final */}
              <div className="mt-8 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Database className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Integridad y Calidad de Datos</h3>
                </div>
                <p className="text-red-100 mb-4">
                  Cada proceso de carga está respaldado por controles de calidad, consultas estandarizadas 
                  y un flujo de trabajo supervisado que garantiza la consistencia de la información académica.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Diccionario de Datos Actualizado</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Consultas SQL Estandarizadas</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Control de Integridad Referencial</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Supervisión Continua</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Trazabilidad Total</span>
                </div>
              </div>
            </div>
          )}
          {/* NUEVA SECCIÓN: Proceso de Testing/QA */}
          {seccionActiva === 'proceso-testing' && (
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Proceso de Testing y Aseguramiento de Calidad</h2>
                <p className="text-lg text-gray-600 mb-2">
                  Implementamos un <span className="font-semibold text-red-600">proceso integral de QA bajo metodología SCRUM</span> que 
                  garantiza la calidad del sistema mediante pruebas continuas, validaciones y control de incidencias.
                </p>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-4">
                  <p className="text-sm text-purple-800">
                    <strong>🧪 Nota:</strong> Esta documentación está basada en el Reporte de Incidencias 
                    del equipo QA durante los Sprints 1-3 del proyecto.
                  </p>
                </div>
              </div>

              {/* Contexto Metodológico */}
              <div className="mb-8 bg-gradient-to-r from-purple-700 to-purple-900 text-white rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <TestTube className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Marco de Trabajo QA</h3>
                </div>
                <p className="text-purple-200 mb-3">
                  El equipo QA opera bajo la <strong>metodología SCRUM</strong>, realizando pruebas continuas 
                  en Frontend y Backend, validando Historias de Usuario y asegurando la calidad del producto 
                  en cada iteración.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Pruebas Continuas</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Validación de HU</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Testing Funcional</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Gestión de Incidencias</span>
                </div>
              </div>

              {/* Incidencias por Sprint */}
              <div className="space-y-6">
                {[
                  {
                    sprint: "Sprint 1",
                    numero: 1,
                    color: "blue",
                    icon: Settings,
                    incidencias: [
                      {
                        titulo: "Selección de herramientas de pruebas",
                        descripcion: "Evaluación de herramientas de testing y gestión de costos",
                        tipo: "decision",
                        detalles: {
                          problema: "Inicialmente se planificó utilizar Azure Test Plans para la gestión de pruebas, pero el costo resultó elevado.",
                          impacto: "Fue necesario buscar alternativas viables para realizar pruebas de manera eficiente sin afectar el presupuesto.",
                          solucion: "Se optó por herramientas gratuitas o de menor costo como Cypress, Selenium y Postman.",
                          herramientas: ["Cypress", "Selenium", "Postman"]
                        }
                      },
                      {
                        titulo: "Documentación de la metodología SCRUM",
                        descripcion: "Consolidación de artefactos SCRUM del proyecto",
                        tipo: "documentacion",
                        detalles: {
                          problema: "El equipo necesitaba consolidar la documentación de Historias de Usuario (HU), Product Backlog, épicas, mapas de empatía y mapas de HU.",
                          impacto: "La falta de documentación completa podía dificultar la planificación y seguimiento de sprints.",
                          solucion: "El equipo QA, junto con el líder del proyecto, apoyó en la elaboración y estructuración de los artefactos SCRUM.",
                          artefactos: ["Historias de Usuario", "Product Backlog", "Épicas", "Mapas de Empatía", "Mapas de HU"]
                        }
                      }
                    ]
                  },
                  {
                    sprint: "Sprint 2",
                    numero: 2,
                    color: "yellow",
                    icon: AlertTriangle,
                    incidencias: [
                      {
                        titulo: "Retrasos en el equipo UX",
                        descripcion: "Problemas en los diseños iniciales y mapeo de procesos",
                        tipo: "coordinacion",
                        detalles: {
                          problema: "Los diseños iniciales no eran convincentes y el equipo UX no tenía correctamente mapeado el proceso.",
                          impacto: "Generó retrasos en las pruebas de los figmas y en la alineación con las Historias de Usuario.",
                          solucion: "Un tester brindó apoyo en UX, se realizaron pruebas de figmas con observaciones y correcciones, y se capacitó al equipo UX para mejorar el mapeo de procesos.",
                          acciones: [
                            "Apoyo de tester en UX",
                            "Pruebas de prototipos Figma",
                            "Observaciones y correcciones",
                            "Capacitación al equipo UX"
                          ]
                        }
                      },
                      {
                        titulo: "Elaboración del diagrama AS IS y entrevistas a stakeholders",
                        descripcion: "Análisis detallado de procesos actuales",
                        tipo: "investigacion",
                        detalles: {
                          problema: "Se requirió un análisis más detallado de los procesos de sílabos en la universidad, incluyendo roles, stakeholders y flujo de procesos.",
                          impacto: "La falta de información completa podía afectar la comprensión del proceso y el desarrollo de funcionalidades.",
                          solucion: "Se realizaron entrevistas a docentes, coordinación académica y director de escuela, además de elaborar el diagrama AS IS.",
                          entrevistados: ["Docentes", "Coordinación Académica", "Director de Escuela"],
                          entregable: "Diagrama AS IS completo"
                        }
                      },
                      {
                        titulo: "Pruebas de aceptación (OK/NOK) no realizadas",
                        descripcion: "Imposibilidad de ejecutar pruebas por cambios continuos",
                        tipo: "bloqueo",
                        detalles: {
                          problema: "Las pruebas de aceptación no se pudieron realizar debido a que el equipo FullStack seguía modificando las Historias de Usuario.",
                          impacto: "La falta de la versión final de las HU impidió evaluar funcionalidades completas.",
                          solucion: "Las pruebas se pospusieron hasta contar con la actualización final de las HU.",
                          decision: "Priorizar estabilización de requisitos antes de testing"
                        }
                      }
                    ]
                  },
                  {
                    sprint: "Sprint 3",
                    numero: 3,
                    color: "orange",
                    icon: Users,
                    incidencias: [
                      {
                        titulo: "Retrasos en los equipos UX y FullStack",
                        descripcion: "Persistencia de retrasos en entregas",
                        tipo: "coordinacion",
                        detalles: {
                          problema: "Persistieron retrasos en la entrega de tareas por parte de los equipos UX y FullStack.",
                          impacto: "Esto generó impedimentos para la ejecución de pruebas y la integración de funcionalidades.",
                          solucion: "Se ajustó la planificación del sprint y se coordinó seguimiento constante para minimizar los retrasos.",
                          medidas: [
                            "Ajuste de planificación del sprint",
                            "Seguimiento constante",
                            "Reuniones de sincronización"
                          ]
                        }
                      },
                      {
                        titulo: "Coordinación interequipos",
                        descripcion: "Mejora en la comunicación entre equipos",
                        tipo: "proceso",
                        detalles: {
                          problema: "Se detectó necesidad de mayor comunicación entre equipos para asegurar la actualización de HU, pruebas y correcciones de diseño UX.",
                          impacto: "Los retrasos y dependencias entre equipos podían afectar la entrega a tiempo de funcionalidades completas.",
                          solucion: "Se implementaron reuniones periódicas de sincronización y revisión conjunta de avances.",
                          implementado: [
                            "Reuniones periódicas de sincronización",
                            "Revisión conjunta de avances",
                            "Canales de comunicación directa"
                          ]
                        }
                      }
                    ]
                  }
                ].map((sprintData, sprintIndex) => {
                  const colors = {
                    blue: { bg: 'bg-blue-500', light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700' },
                    yellow: { bg: 'bg-yellow-500', light: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700' },
                    orange: { bg: 'bg-orange-500', light: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700' }
                  }[sprintData.color];

                  const SprintIcon = sprintData.icon;

                  return (
                    <div key={sprintIndex} className="border border-gray-200 rounded-xl overflow-hidden">
                      {/* Header del Sprint */}
                      <div className={`${colors.light} border-b ${colors.border} px-6 py-4`}>
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center text-white`}>
                            <SprintIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{sprintData.sprint}</h3>
                            <p className={`text-sm ${colors.text}`}>{sprintData.incidencias.length} incidencias identificadas</p>
                          </div>
                        </div>
                      </div>

                      {/* Lista de Incidencias */}
                      <div className="p-6 space-y-4">
                        {sprintData.incidencias.map((incidencia, incIndex) => {
                          const tipoIcons = {
                            decision: { icon: Settings, color: 'blue' },
                            documentacion: { icon: FileText, color: 'purple' },
                            coordinacion: { icon: Users, color: 'yellow' },
                            investigacion: { icon: Eye, color: 'green' },
                            bloqueo: { icon: AlertTriangle, color: 'red' },
                            proceso: { icon: Activity, color: 'indigo' }
                          };

                          const tipoData = tipoIcons[incidencia.tipo];
                          const TipoIcon = tipoData.icon;
                          const tipoColor = {
                            blue: 'bg-blue-100 text-blue-800 border-blue-200',
                            purple: 'bg-purple-100 text-purple-800 border-purple-200',
                            yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
                            green: 'bg-green-100 text-green-800 border-green-200',
                            red: 'bg-red-100 text-red-800 border-red-200',
                            indigo: 'bg-indigo-100 text-indigo-800 border-indigo-200'
                          }[tipoData.color];

                          return (
                            <div key={incIndex} className="relative">
                              <button
                                onClick={() => setFaseExpandida(faseExpandida === `${sprintIndex}-${incIndex}` ? null : `${sprintIndex}-${incIndex}`)}
                                className="w-full"
                              >
                                <div className={`border-2 ${tipoColor} rounded-lg p-4 text-left hover:shadow-md transition-all`}>
                                  <div className="flex items-start justify-between">
                                    <div className="flex items-start gap-3 flex-1">
                                      <TipoIcon className="w-5 h-5 mt-1" />
                                      <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900 mb-1">{incidencia.titulo}</h4>
                                        <p className="text-sm text-gray-600">{incidencia.descripcion}</p>
                                      </div>
                                    </div>
                                    {faseExpandida === `${sprintIndex}-${incIndex}` ? 
                                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 ml-2" /> : 
                                      <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0 ml-2" />
                                    }
                                  </div>
                                </div>
                              </button>

                              {faseExpandida === `${sprintIndex}-${incIndex}` && (
                                <div className="mt-3 ml-8 bg-white border-2 border-gray-200 rounded-lg p-5">
                                  <div className="space-y-4">
                                    {/* Problema */}
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                      <h5 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                                        <AlertTriangle className="w-4 h-4" />
                                        Problema Identificado
                                      </h5>
                                      <p className="text-sm text-red-800">{incidencia.detalles.problema}</p>
                                    </div>

                                    {/* Impacto */}
                                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                                      <h5 className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
                                        <Activity className="w-4 h-4" />
                                        Impacto
                                      </h5>
                                      <p className="text-sm text-orange-800">{incidencia.detalles.impacto}</p>
                                    </div>

                                    {/* Solución */}
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                      <h5 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" />
                                        Solución Implementada
                                      </h5>
                                      <p className="text-sm text-green-800 mb-3">{incidencia.detalles.solucion}</p>

                                      {/* Detalles adicionales según el tipo */}
                                      {incidencia.detalles.herramientas && (
                                        <div className="mt-3">
                                          <p className="text-xs font-medium text-green-800 mb-2">Herramientas seleccionadas:</p>
                                          <div className="flex flex-wrap gap-2">
                                            {incidencia.detalles.herramientas.map((h, i) => (
                                              <span key={i} className="bg-green-100 border border-green-300 px-3 py-1 rounded-full text-xs text-green-900">
                                                {h}
                                              </span>
                                            ))}
                                          </div>
                                        </div>
                                      )}

                                      {incidencia.detalles.artefactos && (
                                        <div className="mt-3">
                                          <p className="text-xs font-medium text-green-800 mb-2">Artefactos documentados:</p>
                                          <ul className="grid grid-cols-2 gap-1">
                                            {incidencia.detalles.artefactos.map((a, i) => (
                                              <li key={i} className="flex items-center gap-2 text-xs text-green-800">
                                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                                {a}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}

                                      {incidencia.detalles.acciones && (
                                        <div className="mt-3">
                                          <p className="text-xs font-medium text-green-800 mb-2">Acciones realizadas:</p>
                                          <ul className="space-y-1">
                                            {incidencia.detalles.acciones.map((a, i) => (
                                              <li key={i} className="flex items-start gap-2 text-xs text-green-800">
                                                <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                                <span>{a}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}

                                      {incidencia.detalles.entrevistados && (
                                        <div className="mt-3">
                                          <p className="text-xs font-medium text-green-800 mb-2">Stakeholders entrevistados:</p>
                                          <div className="flex flex-wrap gap-2">
                                            {incidencia.detalles.entrevistados.map((e, i) => (
                                              <span key={i} className="bg-green-100 border border-green-300 px-3 py-1 rounded-full text-xs text-green-900">
                                                {e}
                                              </span>
                                            ))}
                                          </div>
                                          {incidencia.detalles.entregable && (
                                            <p className="text-xs text-green-800 mt-2">
                                              <strong>Entregable:</strong> {incidencia.detalles.entregable}
                                            </p>
                                          )}
                                        </div>
                                      )}

                                      {incidencia.detalles.medidas && (
                                        <div className="mt-3">
                                          <p className="text-xs font-medium text-green-800 mb-2">Medidas tomadas:</p>
                                          <ul className="space-y-1">
                                            {incidencia.detalles.medidas.map((m, i) => (
                                              <li key={i} className="flex items-start gap-2 text-xs text-green-800">
                                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5"></div>
                                                <span>{m}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}

                                      {incidencia.detalles.implementado && (
                                        <div className="mt-3">
                                          <p className="text-xs font-medium text-green-800 mb-2">Implementado:</p>
                                          <ul className="space-y-1">
                                            {incidencia.detalles.implementado.map((impl, i) => (
                                              <li key={i} className="flex items-start gap-2 text-xs text-green-800">
                                                <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                                <span>{impl}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Resumen de Áreas Principales */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Áreas de Enfoque del Equipo QA</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-blue-900 mb-2">Herramientas de Testing</h4>
                    <p className="text-sm text-blue-700 mb-3">
                      Selección estratégica de herramientas gratuitas y eficientes
                    </p>
                    <div className="space-y-1">
                      <div className="text-xs text-blue-800">✓ Cypress</div>
                      <div className="text-xs text-blue-800">✓ Selenium</div>
                      <div className="text-xs text-blue-800">✓ Postman</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-purple-900 mb-2">Documentación SCRUM</h4>
                    <p className="text-sm text-purple-700 mb-3">
                      Apoyo en la estructuración de artefactos ágiles
                    </p>
                    <div className="space-y-1">
                      <div className="text-xs text-purple-800">✓ Historias de Usuario</div>
                      <div className="text-xs text-purple-800">✓ Product Backlog</div>
                      <div className="text-xs text-purple-800">✓ Mapas de Empatía</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-green-900 mb-2">Coordinación Interequipos</h4>
                    <p className="text-sm text-green-700 mb-3">
                      Facilitación de comunicación y sincronización
                    </p>
                    <div className="space-y-1">
                      <div className="text-xs text-green-800">✓ QA + UX</div>
                      <div className="text-xs text-green-800">✓ QA + FullStack</div>
                      <div className="text-xs text-green-800">✓ Reuniones periódicas</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Métricas del Proceso */}
              <div className="mt-8 grid md:grid-cols-4 gap-6">
                <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                  <div className="text-sm text-gray-600">Sprints Documentados</div>
                </div>

                <div className="bg-white border-2 border-purple-200 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">7</div>
                  <div className="text-sm text-gray-600">Incidencias Gestionadas</div>
                </div>

                <div className="bg-white border-2 border-green-200 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Incidencias Resueltas</div>
                </div>

                <div className="bg-white border-2 border-orange-200 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                  <div className="text-sm text-gray-600">Herramientas Adoptadas</div>
                </div>
              </div>

              {/* Banner Final */}
              <div className="mt-8 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <TestTube className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Calidad Asegurada en Cada Sprint</h3>
                </div>
                <p className="text-red-100 mb-4">
                  El equipo QA ha identificado, documentado y resuelto cada incidencia surgida durante 
                  el desarrollo, garantizando la calidad del sistema mediante pruebas continuas, 
                  coordinación efectiva y mejora constante de procesos.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Testing Continuo</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Gestión de Incidencias</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Validación de Prototipos</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Apoyo en Documentación</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">✓ Coordinación Interequipos</span>
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