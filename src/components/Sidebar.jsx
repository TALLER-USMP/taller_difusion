import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-60 h-full bg-gray-800 text-white p-4 fixed top-0 left-0">
      <h2 className="text-xl font-bold mb-4">Menú</h2>
      <nav className="flex flex-col space-y-2">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/proyecto" className="hover:text-blue-400">Proyecto</Link>
        <Link to="/equipo" className="hover:text-blue-400">Equipo</Link>
        <Link to="/avances" className="hover:text-blue-400">Avances</Link>
        <Link to="/arquitectura" className="hover:text-blue-400">Arquitectura</Link>
        <Link to="/wiki" className="hover:text-blue-400">Wiki</Link>
      </nav>
    </aside>
  );
}
