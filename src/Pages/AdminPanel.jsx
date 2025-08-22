import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  FileText, 
  Image, 
  Settings, 
  BarChart3, 
  BookOpen,
  Upload,
  Edit,
  Trash2,
  Plus,
  Eye,
  Menu,
  X,
  Network,
  TrendingUp,
  Activity,
  Clock
} from 'lucide-react';

// Importar el Sidebar mejorado (normalmente sería una importación real)
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

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Datos de ejemplo para mostrar la interfaz
  const [weeklyReports] = useState([
    { id: 1, title: 'Semanas 1-2', date: '2024-01-15', status: 'Completado' },
    { id: 2, title: 'Semanas 3-4', date: '2024-02-01', status: 'En progreso' },
    { id: 3, title: 'Semanas 5-6', date: '2024-02-15', status: 'Pendiente' },
  ]);

  const [teamMembers] = useState([
    { id: 1, name: 'Juan Pérez', role: 'Full Stack Developer', avatar: '/avatars/juan.jpg', status: 'Activo' },
    { id: 2, name: 'María García', role: 'UI/UX Designer', avatar: '/avatars/maria.jpg', status: 'Activo' },
    { id: 3, name: 'Carlos López', role: 'Backend Developer', avatar: '/avatars/carlos.jpg', status: 'Inactivo' },
  ]);

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'weekly-reports', label: 'Avances Semanales', icon: Calendar },
    { id: 'project-info', label: 'Info del Proyecto', icon: FileText },
    { id: 'team', label: 'Equipo', icon: Users },
    { id: 'media', label: 'Recursos Multimedia', icon: Image },
    { id: 'wiki', label: 'Wiki', icon: BookOpen },
    { id: 'diagrams', label: 'Diagramas React Flow', icon: Network },
    { id: 'settings', label: 'Configuración', icon: Settings },
  ];

  const StatCard = ({ title, value, subtitle, icon: Icon, color, bgColor, trend }) => (
    <div className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
      color === 'blue' ? 'border-l-4 border-blue-500' :
      color === 'green' ? 'border-l-4 border-green-500' :
      color === 'purple' ? 'border-l-4 border-purple-500' :
      'border-l-4 border-orange-500'
    }`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{title}</h3>
          <p className={`text-3xl font-bold mt-2 ${
            color === 'blue' ? 'text-blue-600' :
            color === 'green' ? 'text-green-600' :
            color === 'purple' ? 'text-purple-600' :
            'text-orange-600'
          }`}>{value}</p>
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          {trend && (
            <div className="flex items-center mt-2 space-x-1">
              <TrendingUp className={`w-4 h-4 ${
                color === 'blue' ? 'text-blue-500' :
                color === 'green' ? 'text-green-500' :
                color === 'purple' ? 'text-purple-500' :
                'text-orange-500'
              }`} />
              <span className={`text-sm font-medium ${
                color === 'blue' ? 'text-blue-600' :
                color === 'green' ? 'text-green-600' :
                color === 'purple' ? 'text-purple-600' :
                'text-orange-600'
              }`}>{trend}</span>
            </div>
          )}
        </div>
        <div className={`p-4 rounded-xl ${
          color === 'blue' ? 'bg-blue-50' :
          color === 'green' ? 'bg-green-50' :
          color === 'purple' ? 'bg-purple-50' :
          'bg-orange-50'
        }`}>
          <Icon className={`w-8 h-8 ${
            color === 'blue' ? 'text-blue-600' :
            color === 'green' ? 'text-green-600' :
            color === 'purple' ? 'text-purple-600' :
            'text-orange-600'
          }`} />
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Header del Dashboard */}
      <div className="bg-gradient-to-r from-[#A4101A] to-[#8B0D16] rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">¡Bienvenido al Dashboard!</h1>
            <p className="text-white text-opacity-90">Resumen general del Sistema de Gestión Académica</p>
            <div className="flex items-center space-x-4 mt-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Última actualización: Hace 5 min</span>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5" />
                <span className="text-sm">Sistema operativo</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <BarChart3 className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Tarjetas de estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Reportes Semanales"
          value="8"
          subtitle="Total completados"
          icon={Calendar}
          color="blue"
          bgColor="bg-blue-50"
          trend="+12% vs mes anterior"
        />
        <StatCard
          title="Miembros del Equipo"
          value="5"
          subtitle="Activos"
          icon={Users}
          color="green"
          bgColor="bg-green-50"
          trend="2 nuevos este mes"
        />
        <StatCard
          title="Artículos Wiki"
          value="12"
          subtitle="Publicados"
          icon={BookOpen}
          color="purple"
          bgColor="bg-purple-50"
          trend="+3 esta semana"
        />
        <StatCard
          title="Recursos"
          value="24"
          subtitle="Archivos subidos"
          icon={Upload}
          color="orange"
          bgColor="bg-orange-50"
          trend="1.2GB utilizados"
        />
      </div>

      {/* Sección principal con dos columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Actividad Reciente */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#333333]">Actividad Reciente</h3>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div className="space-y-4">
            {[
              { icon: Calendar, title: 'Nuevo reporte semanal creado', time: 'Hace 2 horas', color: 'blue' },
              { icon: Users, title: 'Miembro del equipo actualizado', time: 'Hace 5 horas', color: 'green' },
              { icon: BookOpen, title: 'Artículo de Wiki publicado', time: 'Hace 1 día', color: 'purple' },
              { icon: Upload, title: 'Recursos multimedia subidos', time: 'Hace 2 días', color: 'orange' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className={`p-2 rounded-lg ${
                  activity.color === 'blue' ? 'bg-blue-100' :
                  activity.color === 'green' ? 'bg-green-100' :
                  activity.color === 'purple' ? 'bg-purple-100' :
                  'bg-orange-100'
                }`}>
                  <activity.icon className={`w-5 h-5 ${
                    activity.color === 'blue' ? 'text-blue-600' :
                    activity.color === 'green' ? 'text-green-600' :
                    activity.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-[#333333]">{activity.title}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Acciones Rápidas */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-[#333333] mb-6">Acciones Rápidas</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Plus, label: 'Nuevo Reporte', section: 'weekly-reports', color: 'red' },
              { icon: Users, label: 'Añadir Miembro', section: 'team', color: 'green' },
              { icon: BookOpen, label: 'Nuevo Artículo', section: 'wiki', color: 'purple' },
              { icon: Upload, label: 'Subir Archivo', section: 'media', color: 'orange' }
            ].map((action, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(action.section)}
                className={`group flex flex-col items-center space-y-3 p-6 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 ${
                  action.color === 'red' 
                    ? 'bg-gradient-to-br from-[#A4101A] to-[#8B0D16] text-white hover:from-[#8B0D16] hover:to-[#A4101A]'
                    : action.color === 'green'
                    ? 'bg-green-50 hover:bg-green-100 text-green-600'
                    : action.color === 'purple'
                    ? 'bg-purple-50 hover:bg-purple-100 text-purple-600'
                    : 'bg-orange-50 hover:bg-orange-100 text-orange-600'
                }`}
              >
                <div className={`p-3 rounded-lg ${
                  action.color === 'red' 
                    ? 'bg-white bg-opacity-20'
                    : action.color === 'green'
                    ? 'bg-green-100 group-hover:bg-green-200'
                    : action.color === 'purple'
                    ? 'bg-purple-100 group-hover:bg-purple-200'
                    : 'bg-orange-100 group-hover:bg-orange-200'
                }`}>
                  <action.icon className={`w-6 h-6 ${
                    action.color === 'red' ? 'text-white' : 
                    action.color === 'green' ? 'text-green-600' :
                    action.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`} />
                </div>
                <span className={`font-medium text-sm text-center ${
                  action.color === 'red' ? 'text-white' : 
                  action.color === 'green' ? 'text-green-600' :
                  action.color === 'purple' ? 'text-purple-600' :
                  'text-orange-600'
                }`}>
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderWeeklyReports = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#333333]">Gestionar Avances Semanales</h2>
            <p className="text-gray-600">Administra y visualiza todos los reportes de progreso</p>
          </div>
          <button className="bg-gradient-to-r from-[#A4101A] to-[#8B0D16] hover:from-[#8B0D16] hover:to-[#A4101A] text-white px-6 py-3 rounded-xl flex items-center space-x-2 shadow-lg transform transition-all hover:-translate-y-1">
            <Plus className="w-5 h-5" />
            <span className="font-medium">Nuevo Reporte</span>
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#333333] uppercase tracking-wider">Título</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#333333] uppercase tracking-wider">Fecha</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#333333] uppercase tracking-wider">Estado</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#333333] uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {weeklyReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-semibold text-[#333333]">{report.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{report.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                      report.status === 'Completado' 
                        ? 'bg-green-100 text-green-800' 
                        : report.status === 'En progreso'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <button className="text-blue-600 hover:text-blue-800 p-2 rounded-lg hover:bg-blue-50 transition-all">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-[#A4101A] hover:text-[#8B0D16] p-2 rounded-lg hover:bg-red-50 transition-all">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderTeamManagement = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#333333]">Administrar Equipo</h2>
            <p className="text-gray-600">Gestiona los miembros del equipo de desarrollo</p>
          </div>
          <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl flex items-center space-x-2 shadow-lg transform transition-all hover:-translate-y-1">
            <Plus className="w-5 h-5" />
            <span className="font-medium">Añadir Miembro</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#A4101A] to-[#8B0D16] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-[#333333]">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full mt-1 ${
                    member.status === 'Activo' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {member.status}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-700 px-4 py-3 rounded-xl flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5">
                  <Edit className="w-4 h-4" />
                  <span className="font-medium">Editar</span>
                </button>
                <button className="flex-1 bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5">
                  <Trash2 className="w-4 h-4" />
                  <span className="font-medium">Eliminar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGenericSection = (title, description) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-[#A4101A] to-[#8B0D16] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Settings className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-[#333333] mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <button className="bg-gradient-to-r from-[#A4101A] to-[#8B0D16] hover:from-[#8B0D16] hover:to-[#A4101A] text-white px-6 py-3 rounded-xl shadow-lg transform transition-all hover:-translate-y-1">
          Próximamente
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard();
      case 'weekly-reports':
        return renderWeeklyReports();
      case 'team':
        return renderTeamManagement();
      case 'project-info':
        return renderGenericSection('Información del Proyecto', 'Panel para editar la información general del proyecto y configurar detalles específicos.');
      case 'media':
        return renderGenericSection('Recursos Multimedia', 'Panel para gestionar imágenes, documentos, videos y otros archivos del proyecto.');
      case 'wiki':
        return renderGenericSection('Editor de Wiki', 'Panel para crear y editar artículos de la wiki del proyecto con editor avanzado.');
      case 'diagrams':
        return renderGenericSection('Gestionar Diagramas', 'Panel para editar diagramas React Flow y visualizaciones interactivas del proyecto.');
      case 'settings':
        return renderGenericSection('Configuración', 'Configuración general del panel de administración y preferencias del sistema.');
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      {/* Sidebar Component */}
      <Sidebar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        items={sidebarItems}
      />

      {/* Main content */}
      <div className="flex-1 lg:ml-64">
        {/* Top bar mejorado */}
        <div className="bg-white shadow-lg border-b-2 border-gray-100 backdrop-blur-sm bg-white bg-opacity-95 sticky top-0 z-30">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-500 hover:text-[#A4101A] p-2 rounded-lg hover:bg-gray-100 transition-all"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h2 className="text-xl font-bold text-[#333333]">
                  {sidebarItems.find(item => item.id === activeSection)?.label || 'Dashboard'}
                </h2>
                <p className="text-sm text-gray-500">Sistema de Gestión Académica</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-xl">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Sistema activo</span>
              </div>
              <button className="text-gray-500 hover:text-[#A4101A] p-2 rounded-lg hover:bg-gray-100 transition-all">
                <Settings className="w-6 h-6" />
              </button>
              <div className="w-8 h-8 bg-[#A4101A] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SGA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;