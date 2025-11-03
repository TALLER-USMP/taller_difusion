// RUTA: src/router/index.jsx
import { createBrowserRouter } from 'react-router-dom';

// Layout principal
import App from '../App';

// Páginas principales
import Home from '../pages/Home';
import Proyecto from '../pages/Proyecto';
import Equipo from '../pages/Equipo';
import Avances from '../pages/Avances';
import Arquitectura from '../pages/Arquitectura';
import Wiki from '../pages/Wiki';

// Páginas de error
import NotFound from '../pages/NotFound'; // Esta página necesitarás crearla

// Configuración del router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout principal que contiene Navbar, Footer, etc.
    errorElement: <NotFound />, // Página de error 404
    children: [
      {
        index: true, // Ruta raíz "/"
        element: <Home />
      },
      {
        path: "proyecto",
        element: <Proyecto />
      },
      {
        path: "equipo", 
        element: <Equipo />
      },
      {
        path: "avances",
        element: <Avances />
      },
      {
        path: "arquitectura",
        element: <Arquitectura />
      },
      {
        path: "wiki",
        element: <Wiki />
      },
      // Rutas adicionales que podrías necesitar
      {
        path: "wiki/:articleId", // Para artículos específicos de la wiki
        element: <Wiki />
      }
    ]
  }
]);

export default router;