//src/data/semanas/config.js
export const CONFIG_PROYECTO = {
    semanasPlaneadas: 16,
    fechaInicio: "2025-08-04",
    fechaFin: "2025-11-29",
    miembrosEquipo: 12,
    areasActivas: 4,
    version: "1.0.0",
    estado: "En Desarrollo"
  };
  
  export const CONFIGURACION_ADMIN = {
    // Para futuras funcionalidades del admin panel
    rutaSubidaArchivos: "/public/uploads/",
    formatosPermitidos: {
      imagenes: [".jpg", ".jpeg", ".png", ".gif", ".svg"],
      documentos: [".pdf", ".docx", ".md"],
      videos: [".mp4", ".webm", ".avi"]
    },
    tamañoMaximoArchivo: "10MB"
  };