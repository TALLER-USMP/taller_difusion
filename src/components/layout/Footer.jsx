import { Github, Mail, Calendar, Code, Database } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const technologies = [
    { name: 'React v18', icon: Code },
    { name: 'Node.js', icon: Code },
    { name: 'Azure Cosmos', icon: Database },
    { name: 'Tailwind CSS', icon: Code },
  ];

  return (
    <footer className="bg-[#333333] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Información del Proyecto */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-[#A4101A] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SGA</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Sistema de Gestión Académica
                </h3>
                <p className="text-gray-300 text-sm">
                  Automatizando la gestión académica
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Plataforma integral para la automatización de sílabos, planes de estudio, 
              esquemas de evaluación y documentación académica desde una única fuente de verdad.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Calendar className="w-4 h-4" />
              <span>Metodología: Scrum</span>
            </div>
          </div>

          {/* Tecnologías */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Tecnologías
            </h4>
            <ul className="space-y-2">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <li key={index} className="flex items-center space-x-2 text-gray-300 text-sm">
                    <Icon className="w-4 h-4 text-[#A4101A]" />
                    <span>{tech.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/proyecto" className="text-gray-300 hover:text-[#A4101A] transition-colors duration-200 text-sm">
                  Descripción del Proyecto
                </a>
              </li>
              <li>
                <a href="/equipo" className="text-gray-300 hover:text-[#A4101A] transition-colors duration-200 text-sm">
                  Conoce al Equipo
                </a>
              </li>
              <li>
                <a href="/avances" className="text-gray-300 hover:text-[#A4101A] transition-colors duration-200 text-sm">
                  Seguimiento de Avances
                </a>
              </li>
              <li>
                <a href="/arquitectura" className="text-gray-300 hover:text-[#A4101A] transition-colors duration-200 text-sm">
                  Arquitectura del Sistema
                </a>
              </li>
              <li>
                <a href="/wiki" className="text-gray-300 hover:text-[#A4101A] transition-colors duration-200 text-sm">
                  Documentación
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisora */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              © {currentYear} Sistema de Gestión Académica. Todos los derechos reservados.
            </div>

            {/* Links adicionales */}
            <div className="flex items-center space-x-6">
              <a
                href="mailto:info@sga-project.com"
                className="text-gray-300 hover:text-[#A4101A] transition-colors duration-200 flex items-center space-x-1"
                title="Contacto"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Contacto</span>
              </a>
              <a
                href="https://github.com/TALLER-USMP/taller_2025_2"
                className="text-gray-300 hover:text-[#A4101A] transition-colors duration-200 flex items-center space-x-1"
                title="Repositorio"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">Repositorio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;