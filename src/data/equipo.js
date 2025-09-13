// src/data/equipo.js

export const equipoData = [
    {
      id: 1,
      nombre: "Leonardo Paul Buitrón Farfán",
      rol: "Líder Backend",
      descripcion: "Responsable del diseño y desarrollo de la arquitectura del servidor, APIs y servicios backend del sistema.",
      email: "leonardo.buitron@sga-project.com",
      linkedin: "#",
      avatar: "/assets/images/team/leonardo.jpg", // Placeholder - reemplazar con imagen real
      especialidades: ["Node.js", "Azure", "APIs REST", "Microservicios"]
    },
    {
      id: 2,
      nombre: "Melissa Rocío Chávez Laime",
      rol: "QA (Quality Assurance)",
      descripcion: "Especialista en aseguramiento de calidad, responsable de las pruebas, testing automatizado y validación de funcionalidades del sistema.",
      email: "melissa.chavez@sga-project.com",
      linkedin: "#",
      avatar: "/assets/images/team/melissa.jpg",
      especialidades: ["Testing Automatizado", "Selenium", "Jest", "Control de Calidad"]
    },
    {
      id: 3,
      nombre: "Edison Gutiérrez Córdova",
      rol: "Coordinador de Calidad de Documentos",
      descripcion: "Encargado de supervisar la calidad y consistencia de toda la documentación técnica y funcional del proyecto.",
      email: "edison.gutierrez@sga-project.com",
      linkedin: "#",
      avatar: "/assets/images/team/edison.jpg",
      especialidades: ["Documentación Técnica", "Estándares de Calidad", "Revisión Documental", "Procesos"]
    },
    {
      id: 4,
      nombre: "Oscar Falcón Benites",
      rol: "Ingeniero de Datos",
      descripcion: "Responsable del diseño de bases de datos, modelado de datos y optimización de consultas para el sistema académico.",
      email: "oscar.falcon@sga-project.com",
      linkedin: "#",
      avatar: "/assets/images/team/oscar.jpg",
      especialidades: ["Azure Cosmos DB", "Modelado de Datos", "ETL", "Big Data"]
    },
    {
      id: 5,
      nombre: "Franco Grados Arapa",
      rol: "Ingeniero UX (User Experience)",
      descripcion: "Especialista en experiencia de usuario, responsable del diseño de interfaces intuitivas y la usabilidad del sistema.",
      email: "franco.grados@sga-project.com",
      linkedin: "#",
      avatar: "/assets/images/team/franco.jpg",
      especialidades: ["Diseño UX/UI", "Prototipado", "Investigación de Usuario", "Figma"]
    },
    {
      id: 6,
      nombre: "Piero Alonso Dávila Aguirre",
      rol: "Líder Frontend",
      descripcion: "Encargado del desarrollo y arquitectura del frontend, interfaces de usuario y experiencia interactiva del sistema.",
      email: "piero.davila@sga-project.com",
      linkedin: "#",
      avatar: "/assets/images/team/jesus.jpg",
      especialidades: ["React", "JavaScript", "Tailwind CSS", "Frontend Architecture"]
    },
    {
      id: 7,
      nombre: "Jean Pierre Lobatón Ochoa",
      rol: "Ingeniero DevSecOps",
      descripcion: "Especialista en seguridad, automatización de despliegues y operaciones continuas con enfoque en seguridad.",
      email: "jeanpierre.lobaton@sga-project.com",
      linkedin: "#",
      avatar: "/assets/images/team/jeanpierre.jpg",
      especialidades: ["CI/CD", "Docker", "Kubernetes", "Seguridad", "Azure DevOps"]
    },
    {
      id: 8,
      nombre: "Marko Orihuela Carrasco",
      rol: "Ingeniero de Nube",
      descripcion: "Responsable de la infraestructura cloud, servicios de Azure y optimización de recursos en la nube.",
      email: "marko.orihuela@sga-project.com",
      linkedin: "#",
      avatar: "/assets/images/team/marko.jpg",
      especialidades: ["Azure Cloud", "Serverless", "Infraestructura", "Escalabilidad"]
    },
    {
      id: 9,
      nombre: "Ángel Palomino Falcón",
      rol: "Product Owner",
      descripcion: "Encargado de definir los requisitos del producto, priorizar funcionalidades y ser el enlace con los stakeholders.",
      email: "angel.palomino@sga-project.com",
      linkedin: "#",
      avatar: "/assets/images/team/angel.jpg",
      especialidades: ["Gestión de Producto", "Requisitos", "Stakeholders", "Roadmap"]
    },
    {
      id: 10,
      nombre: "Tatiana Mercedes Suárez Rosas",
      rol: "Scrum Master",
      descripcion: "Facilitadora del proceso Scrum, responsable de asegurar que el equipo siga las mejores prácticas ágiles.",
      email: "tatiana.suarez@sga-project.com",
      linkedin: "#",
      avatar: "/assets/images/team/tatiana.jpg",
      especialidades: ["Metodologías Ágiles", "Scrum", "Facilitación", "Gestión de Equipos"]
    },
    {
      id: 11,
      nombre: "Juan Torvisco Ríos",
      rol: "Arquitecto",
      descripcion: "Responsable del diseño de la arquitectura general del sistema, patrones de diseño y decisiones técnicas estratégicas.",
      email: "juan.torvisco@sga-project.com",
      linkedin: "#",
      avatar: "/assets/images/team/juan.jpg",
      especialidades: ["Arquitectura de Software", "Patrones de Diseño", "Microservicios", "Escalabilidad"]
    },
    {
      id: 12,
      nombre: "José Leonardo Yupán Crúz",
      rol: "Coordinador de Colaboración y Difusión",
      descripcion: "Encargado de la comunicación del proyecto, gestión de la colaboración entre equipos y difusión de avances.",
      email: "jose_yupan@usmp.pe",
      linkedin: "#",
      avatar: "/assets/images/team/jose.jpg",
      especialidades: ["Comunicación", "Gestión de Proyectos", "Marketing", "Colaboración"]
    }
  ];
  
  // Organización por roles para mostrar en diferentes vistas
  export const equipoPorArea = {
    "Liderazgo": [
      equipoData.find(p => p.rol === "Product Owner"),
      equipoData.find(p => p.rol === "Scrum Master"),
      equipoData.find(p => p.rol === "Arquitecto")
    ],
    "Desarrollo": [
      equipoData.find(p => p.rol === "Líder Frontend"),
      equipoData.find(p => p.rol === "Líder Backend"),
      equipoData.find(p => p.rol === "Ingeniero de Datos")
    ],
    "Infraestructura": [
      equipoData.find(p => p.rol === "Ingeniero de Nube"),
      equipoData.find(p => p.rol === "Ingeniero DevSecOps")
    ],
    "Calidad y UX": [
      equipoData.find(p => p.rol === "QA (Quality Assurance)"),
      equipoData.find(p => p.rol === "Ingeniero UX (User Experience)"),
      equipoData.find(p => p.rol === "Coordinador de Calidad de Documentos")
    ],
    "Comunicación": [
      equipoData.find(p => p.rol === "Coordinador de Colaboración y Difusión")
    ]
  };
  
  export default equipoData;