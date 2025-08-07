import { useState } from 'react';

export default function AdminPanel() {
  const [clave, setClave] = useState('');
  const [acceso, setAcceso] = useState(false);

  function verificarClave(e) {
    e.preventDefault();
    if (clave === 'admin123') {
      setAcceso(true);
    } else {
      alert('Clave incorrecta');
    }
  }

  return (
    <div className="p-6">
      {acceso ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">Panel Administrativo</h1>
          <p>Aquí se podrá gestionar el contenido del proyecto.</p>
        </div>
      ) : (
        <form onSubmit={verificarClave} className="space-y-4">
          <h2 className="text-xl font-bold">Acceso restringido</h2>
          <input
            type="password"
            placeholder="Ingrese la clave"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            className="border p-2 rounded"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Ingresar
          </button>
        </form>
      )}
    </div>
  );
}
