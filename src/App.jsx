// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Proyecto from './pages/Proyecto'
import Equipo from './pages/Equipo'
import Avances from './pages/Avances'
import Arquitectura from './pages/Arquitectura'
import Wiki from './pages/Wiki'
import AdminPanel from './pages/AdminPanel' // ← Agregar esta importación
import './styles/globals.css'

function App() {
  const location = useLocation(); // ← Agregar esto
  const isAdminPanel = location.pathname.startsWith('/admin'); // ← Y esto

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Solo mostrar Navbar si NO estamos en el panel de admin */}
      {!isAdminPanel && <Navbar />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyecto" element={<Proyecto />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/avances" element={<Avances />}/>
          <Route path="/arquitectura" element={<Arquitectura />}/>
          <Route path="/wiki" element={<Wiki />} />
          {/* ← Agregar esta ruta del AdminPanel */}
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
      
      {/* Solo mostrar Footer si NO estamos en el panel de admin */}
      {!isAdminPanel && <Footer />}
    </div>
  )
}

export default App