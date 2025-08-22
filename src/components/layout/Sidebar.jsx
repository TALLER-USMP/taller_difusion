import React from 'react';
import { X } from 'lucide-react';

const Sidebar = ({ 
  activeSection, 
  setActiveSection, 
  sidebarOpen, 
  setSidebarOpen, 
  items = [] 
}) => {
  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 border-r border-gray-100 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Header con logo */}
        <div className="flex items-center justify-between h-16 px-6 border-b-2 border-[#A4101A] bg-gradient-to-r from-white to-gray-50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#A4101A] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">SGA</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#333333]">Admin Panel</h1>
              <p className="text-xs text-gray-500">Sistema de Gestión</p>
            </div>
          </div>
          
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-[#A4101A] transition-colors p-1 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full group flex items-center space-x-3 px-4 py-3 text-left rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#A4101A] to-[#8B0D16] text-white shadow-lg transform scale-[1.02]' 
                      : 'text-[#333333] hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-[#A4101A]'
                  }`}
                >
                  <div className={`p-1 rounded-lg transition-all ${
                    isActive 
                      ? 'bg-white bg-opacity-20' 
                      : 'group-hover:bg-[#A4101A] group-hover:bg-opacity-10'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-600 group-hover:text-[#A4101A]'
                    }`} />
                  </div>
                  <span className={`font-medium ${
                    isActive 
                      ? 'text-white' 
                      : 'group-hover:text-[#A4101A]'
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* Indicador activo */}
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full shadow-sm"></div>
                  )}
                </button>
              );
            })}
          </div>
        </nav>
        
        {/* Footer del sidebar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
          <div className="text-center text-xs text-gray-400">
            <p>© 2024 SGA</p>
            <p>Sistema de Gestión Académica</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;