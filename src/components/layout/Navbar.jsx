// src/components/layout/Navbar.jsx - Actualizado con React Router
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Users, TrendingUp, Layers, BookOpen, FolderOpen } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/', icon: Home },
    { name: 'Proyecto', path: '/proyecto', icon: FolderOpen },
    { name: 'Equipo', path: '/equipo', icon: Users },
    { name: 'Avances', path: '/avances', icon: TrendingUp },
    { name: 'Arquitectura', path: '/arquitectura', icon: Layers },
    { name: 'Wiki', path: '/wiki', icon: BookOpen },
  ];

  // Función para determinar si el enlace está activo
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg border-b-2 border-[#A4101A] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo y título */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#A4101A] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SGA</span>
                </div>
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-[#333333]">
                  Sistema de Gestión Académica
                </h1>
              </div>
            </Link>
          </div>

          {/* Navigation items - Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = isActiveLink(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive 
                        ? 'bg-[#A4101A] text-white' 
                        : 'text-[#333333] hover:text-[#A4101A] hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#333333] hover:text-[#A4101A] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#A4101A]"
              aria-expanded="false"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <div className="px-3 py-2 mb-2">
              <h2 className="text-base font-semibold text-[#333333]">
                Sistema de Gestión Académica
              </h2>
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = isActiveLink(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'bg-[#A4101A] text-white' 
                      : 'text-[#333333] hover:text-[#A4101A] hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;