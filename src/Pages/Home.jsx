// src/pages/Home.jsx - Tu contenido actual del App.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Users, Target, Code, Calendar, ArrowRight, Zap, Database, Cloud, Settings } from 'lucide-react'

function Home() {
  const [currentNews, setCurrentNews] = useState(0)
  const BASE_URL = import.meta.env.BASE_URL; // ← AGREGADO
  // Datos temporales - estos irán en src/data/proyecto-info.js
  const projectInfo = {
    title: "Sistema de Gestión Académica",
    subtitle: "Automatización integral de la gestión universitaria",
    description: "Transformamos la gestión académica manual en un sistema automatizado que centraliza sílabos, esquemas de evaluación y planes de estudio desde una única fuente de verdad.",
    objetivos: [
      "Automatizar la generación y actualización de sílabos",
      "Sincronizar docentes por curso según semestre", 
      "Centralizar y exportar documentos académicos",
      "Eliminar duplicidad y errores en la documentación"
    ],
    tecnologias: [
      { name: "React v18", icon: <Code className="w-6 h-6" />, color: "#61DAFB" },
      { name: "PostgreSQL", icon: <Database className="w-6 h-6" />, color: "#0078D4" },
      { name: "Node.js", icon: <Settings className="w-6 h-6" />, color: "#339933" },
      { name: "Serverless Azure", icon: <Cloud className="w-6 h-6" />, color: "#0078D4" },
      { name: "API Gateway", icon: <Zap className="w-6 h-6" />, color: "#FF9900" },
      { name: "Tailwind CSS", icon: <Code className="w-6 h-6" />, color: "#06B6D4" }
    ]
  }
  
  const noticias = [
    {
      fecha: "Agosto 2025",
      titulo: "Inicio del Proyecto",
      descripcion: "Comenzamos el desarrollo del Sistema de Gestión Académica con metodología Scrum"
    },
    {
      fecha: "Agosto 2025", 
      titulo: "Definición de Arquitectura",
      descripcion: "Arquitectura serverless definida con PostgreSQL como base de datos principal"
    },
    {
      fecha: "Septiembre 2025",
      titulo: "Desarrollo en Progreso",
      descripcion: "Sprint 1 completado - Módulos de cursos y docentes en desarrollo"
    }
  ]
  
  const stats = [
    { numero: "7", texto: "Módulos del Sistema", icono: <Settings className="w-8 h-8" /> },
    { numero: "6", texto: "Tecnologías Clave", icono: <Code className="w-8 h-8" /> },
    { numero: "100%", texto: "Automatización", icono: <Zap className="w-8 h-8" /> },
    { numero: "∞", texto: "Escalabilidad", icono: <Cloud className="w-8 h-8" /> }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#A4101A] via-[#B91C2C] to-[#DC2626] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        {/* Logo con rotación y ajuste de posición */}
        <div className="absolute inset-0 bg-left bg-no-repeat bg-contain opacity-20"
          style={{ 
            backgroundImage: `url('${BASE_URL}assets/images/logo/usmp_white.png')`,
            backgroundPosition: 'left 40%',
            transform: 'rotate(-5deg) translateY(-50px)'
          }}>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm text-black font-bold">
                <Calendar className="w-4 h-4 mr-2" />
                <span>En desarrollo • Metodología Scrum</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {projectInfo.title}
              </h1>
              
              <p className="text-xl lg:text-2xl text-red-100 max-w-2xl">
                {projectInfo.subtitle}
              </p>
              
              <p className="text-lg text-red-100 max-w-2xl leading-relaxed">
                {projectInfo.description}
              </p>
              
              {/* TEXTO NUEVO AGREGADO */}
              <p className="text-base text-red-50 max-w-2xl leading-relaxed italic">
                Proyecto desarrollado en el curso de "Taller de proyectos" de la Escuela Profesional de Ingeniería de Computación y Sistemas FIA USMP.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/proyecto"
                  className="bg-white text-[#A4101A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Ver Proyecto Completo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/equipo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#A4101A] transition-colors"
                >
                  Conocer el Equipo
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4">
                      <div className="flex justify-center mb-2 text-black">
                        {stat.icono}
                      </div>
                      <div className="text-3xl font-bold text-black">{stat.numero}</div>
                      <div className="text-sm text-black font-bold">{stat.texto}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos Principales */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#333333] mb-4">Objetivos Principales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolucionamos la gestión académica mediante automatización inteligente y centralización de datos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectInfo.objetivos.map((objetivo, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-[#A4101A] rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-[#333333] mb-2">Objetivo {index + 1}</h3>
                <p className="text-gray-600">{objetivo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#333333] mb-4">Stack Tecnológico</h2>
            <p className="text-xl text-gray-600">
              Tecnologías modernas y escalables para máximo rendimiento
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {projectInfo.tecnologias.map((tech, index) => (
              <div key={index} className="group text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex justify-center mb-4" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <h3 className="font-medium text-[#333333] group-hover:text-[#A4101A] transition-colors">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Docentes del Proyecto */}
        <section className="py-20 pt-0 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#333333] mb-4">Docentes del Proyecto</h2>
              <p className="text-xl text-gray-600">
                Profesores guía del curso "Taller de Proyectos"
              </p>
            </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {/* Docente Principal */}
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow w-full sm:w-80">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 border-4 border-[#A4101A]">
                <img 
                  src={`${BASE_URL}assets/docente.jpg`}
                  alt="Norma Virginia León Lescano"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-1">Norma Virginia León Lescano</h3>
              <p className="text-[#A4101A] font-semibold mb-2">Docente Principal</p>
              <p className="text-gray-600 text-sm mb-3">Escuela Profesional de Ingeniería de Computación y Sistemas</p>
              <a 
                href="https://www.linkedin.com/in/norma-le%C3%B3n-519830236/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#0077B5] hover:text-[#005885] transition-colors text-sm font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Ver LinkedIn
              </a>
            </div>

            {/* Decano */}
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow w-full sm:w-80">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 border-4 border-[#A4101A]">
                <img 
                  src={`${BASE_URL}assets/decano.jpg`}
                  alt="Rubén García Farje"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-1">Rubén García Farje</h3>
              <p className="text-[#A4101A] font-semibold mb-2">Decano de la Escuela</p>
              <p className="text-gray-600 text-sm mb-3">Escuela Profesional de Ingeniería de Computación y Sistemas</p>
              <a 
                href="https://www.linkedin.com/in/rub%C3%A9n-garc%C3%ADa-farje-345152bb/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#0077B5] hover:text-[#005885] transition-colors text-sm font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Ver LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Últimas Noticias */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#333333] mb-4">Últimas Actualizaciones</h2>
            <p className="text-xl text-gray-600">
              Mantente al día con el progreso del proyecto
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {noticias.map((noticia, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm text-[#A4101A] font-semibold mb-2">{noticia.fecha}</div>
                <h3 className="text-xl font-bold text-[#333333] mb-3">{noticia.titulo}</h3>
                <p className="text-gray-600">{noticia.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#A4101A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            ¿Quieres saber más?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Explora nuestra documentación completa, conoce al equipo y sigue nuestros avances semanales
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/equipo"
              className="bg-white text-[#A4101A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Ver Equipo de Desarrollo
            </Link>
            <Link 
              to="/avances"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#A4101A] transition-colors flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Seguir Avances
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home