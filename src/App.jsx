// src/App.jsx
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Proyecto from './pages/Proyecto'
import Equipo from './pages/Equipo'
import Avances from './pages/Avances'
import Arquitectura from './pages/Arquitectura'
import Wiki from './pages/Wiki'
import './styles/globals.css'
import { validateFooter } from './utils/footer' 

function App() {
  useEffect(() => {
    validateFooter();

    const intervalId = setInterval(() => {
      const Exists = document.querySelector('footer');
      const LinkExists = document.querySelector('[data-author="true"]');
      
      if (!Exists || !LinkExists) {
        console.error('🚨 Integridad del sistema comprometida');
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyecto" element={<Proyecto />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/avances" element={<Avances />} />
          <Route path="/arquitectura" element={<Arquitectura />} />
          <Route path="/wiki" element={<Wiki />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App