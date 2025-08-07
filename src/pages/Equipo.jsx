import equipo from '../data/equipo';

export default function Equipo() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Nuestro Equipo</h1>
      <ul className="space-y-2">
        {equipo.map((miembro, idx) => (
          <li key={idx} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{miembro.nombre}</h2>
            <p>Rol: {miembro.rol}</p>
            <p>Responsabilidades: {miembro.responsabilidades}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
