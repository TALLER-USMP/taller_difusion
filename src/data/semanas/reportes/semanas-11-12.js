// src/data/semanas/reportes/semanas-11-12.js
export const semanas1112 = [
    {
      id: 11,
      semana: "Semana 11",
      numeroSemana: 11,
      fechas: "13 - 17 de Octubre 2025",
      titulo: "Resolución de Problemas de Autenticación y Desarrollo del Dashboard",
      estado: "completado",
      progreso: 85,
      fechaCreacion: "2025-10-18",
      fechaActualizacion: "2025-10-18",
      archivosAdjuntos: [],
      imagenes: [],
      objetivos: [
        "Resolver problemas críticos de autenticación del Login",
        "Implementar estructura base del Dashboard",
        "Establecer comunicación entre microfrontends",
        "Realizar pruebas de integración Login-Dashboard"
      ],
      logros: [
        "✅ Problemas de autenticación completamente resueltos",
        "✅ Sistema de tokens JWT funcionando correctamente",
        "✅ Estructura base del Dashboard implementada",
        "✅ Navegación entre Login y Dashboard operativa",
        "✅ Componentes esenciales del Dashboard creados",
        "✅ Pruebas de integración exitosas entre microfrontends",
        "✅ Configuración de CORS corregida y funcional"
      ],
      areas: [
        {
          area: "Frontend - Login (Correcciones)",
          progreso: 95,
          actividades: [
            "Corrección de manejo de respuestas de autenticación",
            "Implementación correcta de almacenamiento de tokens",
            "Mejora en manejo de estados de sesión",
            "Corrección de redirects post-autenticación",
            "Implementación de refresh token automático",
            "Mejora de mensajes de error para usuarios"
          ],
          responsables: ["Equipo Frontend", "Líder Frontend"]
        },
        {
          area: "Frontend - Dashboard",
          progreso: 80,
          actividades: [
            "Creación de estructura del proyecto Dashboard con React",
            "Implementación de layout principal con sidebar y header",
            "Desarrollo de componente de navegación lateral",
            "Creación de vista principal/home del Dashboard",
            "Implementación de componentes de tarjetas estadísticas",
            "Configuración de rutas internas del Dashboard",
            "Diseño responsive del Dashboard según prototipos",
            "Integración de íconos y elementos visuales"
          ],
          responsables: ["Equipo Frontend", "Líder Frontend"]
        },
        {
          area: "Backend - Autenticación (Correcciones)",
          progreso: 90,
          actividades: [
            "Corrección de lógica de generación de tokens JWT",
            "Implementación de verificación de tokens mejorada",
            "Corrección de endpoints de autenticación",
            "Mejora en manejo de errores del servidor",
            "Implementación de middleware de autenticación robusto",
            "Configuración correcta de tiempos de expiración de sesiones"
          ],
          responsables: ["Equipo Backend", "Líder Backend"]
        },
        {
          area: "Integración de Microfrontends",
          progreso: 85,
          actividades: [
            "Configuración de comunicación entre Login y Dashboard",
            "Implementación de paso de contexto de autenticación",
            "Pruebas de flujo completo: login → dashboard",
            "Configuración de protección de rutas en Dashboard",
            "Validación de persistencia de sesión entre recargas"
          ],
          responsables: ["Líderes Frontend y Backend", "DevSecOps"]
        },
        {
          area: "DevSecOps",
          progreso: 90,
          actividades: [
            "Corrección completa de configuración CORS",
            "Optimización de variables de entorno",
            "Configuración de ambientes de desarrollo para Dashboard",
            "Implementación de logs para debugging de autenticación",
            "Mejoras en seguridad de endpoints"
          ],
          responsables: ["Líder DevSecOps"]
        },
        {
          area: "Quality Assurance",
          progreso: 80,
          actividades: [
            "Validación de correcciones en flujo de autenticación",
            "Pruebas de casos de uso completos Login-Dashboard",
            "Testing de seguridad en manejo de tokens",
            "Verificación de responsive en Dashboard",
            "Documentación de pruebas realizadas",
            "Regresión testing de funcionalidades de Login"
          ],
          responsables: ["Líder QA", "Equipo QA"]
        }
      ],
      blockers: [
        "Ningún blocker crítico - todos los problemas de la semana anterior fueron resueltos"
      ],
      proximosPasos: [
        "Expandir funcionalidades del Dashboard con módulos específicos",
        "Implementar más componentes y vistas en el Dashboard",
        "Iniciar desarrollo de otros módulos del sistema",
        "Continuar con pruebas de integración más complejas",
        "Documentar arquitectura de microfrontends para el equipo"
      ],
      notas: "Semana altamente productiva. Se resolvieron todos los problemas críticos de autenticación identificados en la semana anterior, permitiendo un flujo de login completamente funcional. Simultáneamente, se logró implementar la estructura base del Dashboard con interfaz inicial operativa. Las pruebas de integración fueron exitosas, demostrando que la arquitectura de microfrontends funciona correctamente.",
      prioridad: "alta",
      tags: ["login", "dashboard", "autenticacion", "integracion", "microfrontends", "bugfixes", "desarrollo"]
    },
    {
      id: 12,
      semana: "Semana 12",
      numeroSemana: 12,
      fechas: "20 - 24 de Octubre 2025",
      titulo: "Pendiente de Registro",
      estado: "en_progreso",
      progreso: 0,
      fechaCreacion: "2025-10-25",
      fechaActualizacion: "2025-10-25",
      archivosAdjuntos: [],
      imagenes: [],
      objetivos: [
        "Por definir según avances de la semana"
      ],
      logros: [],
      areas: [],
      blockers: [],
      proximosPasos: [],
      notas: "Semana pendiente de documentación. Actualizar con información real una vez completada.",
      prioridad: "media",
      tags: ["pendiente"]
    }
  ];