import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex justify-center gap-6">
        <li><Link to="/home">Inicio</Link></li>
        <li><Link to="/proyecto">Proyecto</Link></li>
        <li><Link to="/equipo">Equipo</Link></li>
        <li><Link to="/avances">Avances</Link></li>
        <li><Link to="/arquitectura">Arquitectura</Link></li>
        <li><Link to="/wiki">Wiki</Link></li>
      </ul>
    </nav>
  );
}
