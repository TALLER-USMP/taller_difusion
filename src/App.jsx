import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Proyecto from "./pages/Proyecto";
import Equipo from "./pages/Equipo";
import Avances from "./pages/Avances";
import Arquitectura from "./pages/Arquitectura";
import Wiki from "./pages/Wiki";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-4">
          <div className="max-w-7xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/proyecto" element={<Proyecto />} />
              <Route path="/equipo" element={<Equipo />} />
              <Route path="/avances" element={<Avances />} />
              <Route path="/arquitectura" element={<Arquitectura />} />
              <Route path="/wiki" element={<Wiki />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
