// src/data/equipo.js

const BASE_URL = import.meta.env.BASE_URL;

export const equipoData = [
  // LIDERAZGO
  {
    id: 1,
    nombre: "Andrea Nikole Alva Chávez",
    rol: "Product Owner",
    descripcion: "Encargada de definir los requisitos del producto, priorizar funcionalidades y ser el enlace con los stakeholders.",
    linkedin: "https://www.linkedin.com/in/andrea-nikole-alva-ch%C3%A1vez-50b44a1b4/",
    avatar: `${BASE_URL}assets/images/integrantes/AndreaAlvaChavez.jpg`,
    especialidades: ["Gestión de Producto", "Requisitos", "Stakeholders", "Roadmap"]
  },
  {
    id: 2,
    nombre: "Tatiana Mercedes Suárez Rosas",
    rol: "Scrum Master",
    descripcion: "Facilitadora del proceso Scrum, responsable de asegurar que el equipo siga las mejores prácticas ágiles.",
    linkedin: "https://www.linkedin.com/in/tatianasuarez17/",
    avatar: `${BASE_URL}assets/images/integrantes/TatianaMercedesSuarezRosas.png`,
    especialidades: ["Metodologías Ágiles", "Scrum", "Facilitación", "Gestión de Equipos"]
  },
  {
    id: 3,
    nombre: "Juan Marcial Torvisco Ríos",
    rol: "Arquitecto",
    descripcion: "Responsable del diseño de la arquitectura general del sistema, patrones de diseño y decisiones técnicas estratégicas.",
    linkedin: "https://www.linkedin.com/in/juan-torvisco/",
    avatar: `${BASE_URL}assets/images/integrantes/JuanMarcialTorviscoRios.jpeg`,
    especialidades: ["Arquitectura de Software", "Patrones de Diseño", "Microservicios", "Escalabilidad"]
  },
  
  // DESARROLLO
  {
    id: 4,
    nombre: "Piero Alonso Francesco Dávila Aguirre",
    rol: "Líder Frontend",
    descripcion: "Encargado del desarrollo y arquitectura del frontend, interfaces de usuario y experiencia interactiva del sistema.",
    linkedin: "https://www.linkedin.com/in/piero-davila/",
    avatar: `${BASE_URL}assets/images/integrantes/PieroDavilaAguirre.jpeg`,
    especialidades: ["React", "JavaScript", "Tailwind CSS", "Frontend Architecture"]
  },
  {
    id: 5,
    nombre: "Leonardo Paul Buitrón Farfán",
    rol: "Líder Backend",
    descripcion: "Responsable del diseño y desarrollo de la arquitectura del servidor, APIs y servicios backend del sistema.",
    linkedin: "https://www.linkedin.com/in/leonardo-paul-buitron-farfan-159949206/",
    avatar: `${BASE_URL}assets/images/integrantes/LeonardoPaulBuitronFarfan.png`,
    especialidades: ["Node.js", "Azure", "APIs REST", "Microservicios"]
  },
  {
    id: 6,
    nombre: "Oscar Falcón Benites",
    rol: "Ingeniero de Datos",
    descripcion: "Responsable del diseño de bases de datos, modelado de datos y optimización de consultas para el sistema académico.",
    linkedin: "https://www.linkedin.com/in/oscarfalconb/",
    avatar: `${BASE_URL}assets/images/integrantes/sebasteanfalcon.jpg`,
    especialidades: ["Azure Cosmos DB", "Modelado de Datos", "ETL", "Big Data"]
  },
  
  // INFRAESTRUCTURA
  {
    id: 7,
    nombre: "Marko Orihuela Carrasco",
    rol: "Ingeniero de Nube",
    descripcion: "Responsable de la infraestructura cloud, servicios de Azure y optimización de recursos en la nube.",
    linkedin: "https://www.linkedin.com/in/marko-orihuela-carrasco-750912150/",
    avatar: `${BASE_URL}assets/images/integrantes/MarkoOrihuelaCarrasco.jpg`,
    especialidades: ["Azure Cloud", "Serverless", "Infraestructura", "Escalabilidad"]
  },
  {
    id: 8,
    nombre: "Jean Pierre Lobatón Ochoa",
    rol: "Ingeniero DevSecOps",
    descripcion: "Especialista en seguridad, automatización de despliegues y operaciones continuas con enfoque en seguridad.",
    linkedin: "https://www.linkedin.com/in/jeanlobaton/",
    avatar: `${BASE_URL}assets/images/integrantes/JeanPierreLobatonOchoa.jpg`,
    especialidades: ["CI/CD", "Docker", "Kubernetes", "Seguridad", "Azure DevOps"]
  },
  
  // CALIDAD Y UX
  {
    id: 9,
    nombre: "Melissa Rocío Chávez Laime",
    rol: "QA (Quality Assurance)",
    descripcion: "Especialista en aseguramiento de calidad, responsable de las pruebas, testing automatizado y validación de funcionalidades del sistema.",
    linkedin: "https://www.linkedin.com/in/melissa-rocio-chavez-laime-603048155/",
    avatar: `${BASE_URL}assets/images/integrantes/MelissaChavezLaime.jpeg`,
    especialidades: ["Testing Automatizado", "Selenium", "Jest", "Control de Calidad"]
  },
  {
    id: 10,
    nombre: "Franco Grados Arapa",
    rol: "Ingeniero UX (User Experience)",
    descripcion: "Especialista en experiencia de usuario, responsable del diseño de interfaces intuitivas y la usabilidad del sistema.",
    linkedin: "https://www.linkedin.com/in/franco-hector-grados-arapa-654731390/",
    avatar: `${BASE_URL}assets/images/integrantes/FrancoGradosArapa.jpeg`,
    especialidades: ["Diseño UX/UI", "Prototipado", "Investigación de Usuario", "Figma"]
  },
  {
    id: 11,
    nombre: "Edison Gutiérrez Córdova",
    rol: "Coordinador de Calidad de Documentos",
    descripcion: "Encargado de supervisar la calidad y consistencia de toda la documentación técnica y funcional del proyecto.",
    linkedin: "https://www.linkedin.com/in/edison-gutierrez-cordova-b72819236/",
    avatar: `${BASE_URL}assets/images/integrantes/EdisonGutierrezCordova.jpeg`,
    especialidades: ["Documentación Técnica", "Estándares de Calidad", "Revisión Documental", "Procesos"]
  },
  
  // COMUNICACIÓN
  {
    id: 12,
    nombre: "José Leonardo Yupán Cruz",
    rol: "Coordinador de Colaboración y Difusión",
    descripcion: "Encargado de la comunicación del proyecto, gestión de la colaboración entre equipos y difusión de avances.",
    linkedin: "https://www.linkedin.com/in/josé-leonardo-yupán-crúz-4b7158336",
    avatar: `${BASE_URL}assets/images/integrantes/JoseLeonardoYupan.jpg`,
    especialidades: ["Comunicación", "Gestión de Proyectos", "Marketing", "Colaboración"]
  },

  // DESARROLLADORES UX
  {
    id: 13,
    nombre: "Diego Cervantes Castillo",
    rol: "Desarrollador UX",
    descripcion: "Desarrollador enfocado en la implementación de diseños de experiencia de usuario y la creación de interfaces atractivas y funcionales.",
    linkedin: "https://www.linkedin.com/in/diego-cervantes-915533349/",
    avatar: `${BASE_URL}assets/images/integrantes/DiegoCervantesCastillo.jpg`,
    especialidades: ["UX Design", "Prototipado", "Figma", "User Research"]
  },
  {
    id: 14,
    nombre: "Ronald Anthony Quispe Oscco",
    rol: "Desarrollador UX",
    descripcion: "Especialista en desarrollo de interfaces centradas en el usuario, con enfoque en accesibilidad y diseño responsive.",
    linkedin: "https://www.linkedin.com/in/ronald-quispe-oscco-936797173/",
    avatar: `${BASE_URL}assets/images/integrantes/ronaldQuispeOscco.jpg`,
    especialidades: ["UI Development", "Responsive Design", "Accesibilidad", "CSS"]
  },
  {
    id: 15,
    nombre: "Joshua Fabianni Martinez Blanco",
    rol: "Desarrollador UX",
    descripcion: "Desarrollador con experiencia en la creación de experiencias de usuario fluidas y componentes interactivos.",
    linkedin: "https://www.linkedin.com/in/joshmartinez99/",
    avatar: `${BASE_URL}assets/images/integrantes/MartinezBlancoJoshua.jpg`,
    especialidades: ["Frontend", "Animaciones", "Interactividad", "Design Systems"]
  },

  // TESTERS
  {
    id: 16,
    nombre: "Julio Alexander Antaurco Mundo",
    rol: "Tester",
    descripcion: "Especialista en pruebas de software, responsable de identificar bugs y asegurar la calidad del sistema mediante testing manual y automatizado.",
    linkedin: "https://www.linkedin.com/in/julio-antaurco/",
    avatar: `${BASE_URL}assets/images/integrantes/JulioAlexanderAntaurco.jpeg`,
    especialidades: ["Testing Manual", "Pruebas Funcionales", "Reportes de Bugs", "QA"]
  },
  {
    id: 17,
    nombre: "Marcelo André Panduro Alvarez",
    rol: "Tester",
    descripcion: "Encargado de ejecutar planes de prueba, validar requisitos y garantizar que el software cumpla con los estándares de calidad.",
    linkedin: "https://www.linkedin.com/in/marcelo-panduro-470258258/",
    avatar: `${BASE_URL}assets/images/integrantes/MarceloPanduroAlvarez.jpeg`,
    especialidades: ["Test Cases", "Pruebas de Regresión", "Documentation", "Quality Control"]
  },
  {
    id: 18,
    nombre: "Javier Robinson Herrera Lopez",
    rol: "Tester",
    descripcion: "Tester enfocado en la detección temprana de defectos y la validación de funcionalidades críticas del sistema.",
    linkedin: "https://www.linkedin.com/in/robinson-herrera-71b6581b7/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    avatar: `${BASE_URL}assets/images/integrantes/JavierRobinsonHerreraLopez.jpeg`,
    especialidades: ["Testing", "Bug Tracking", "Pruebas de Integración", "Análisis"]
  },

  // DEVSECOPS ADICIONAL
  {
    id: 19,
    nombre: "Carlo Fabrizio Chavarria Rojas",
    rol: "Ingeniero DevSecOps",
    descripcion: "Especialista en integración de seguridad en el ciclo de desarrollo, automatización de pruebas de seguridad y gestión de vulnerabilidades.",
    linkedin: "https://www.linkedin.com/in/carlochavarriarojas/",
    avatar: `${BASE_URL}assets/images/integrantes/ChavarriaRojasCarloFabrizio.png`,
    especialidades: ["Security", "CI/CD", "Vulnerability Management", "Automation"]
  },

  // DESARROLLADORES FULLSTACK
  {
    id: 20,
    nombre: "Thaine Alexander Alarcon Segovia",
    rol: "Desarrollador Full Stack",
    descripcion: "Desarrollador versátil con experiencia en frontend y backend, capaz de implementar soluciones end-to-end.",
    linkedin: "https://www.linkedin.com/in/thaine-alarcons-segovia-92354338b/",
    avatar: `${BASE_URL}assets/images/integrantes/thainealarconssegovia.jpeg`,
    especialidades: ["React", "Node.js", "MongoDB", "REST APIs"]
  },
  {
    id: 21,
    nombre: "Frank Luis Corilla Yangali",
    rol: "Desarrollador Full Stack",
    descripcion: "Desarrollador full stack con enfoque en arquitecturas escalables y desarrollo de aplicaciones web modernas.",
    linkedin: "https://www.linkedin.com/in/frank-corilla-217414379/",
    avatar: `${BASE_URL}assets/images/integrantes/FrankcorillaYangali.jpg`,
    especialidades: ["JavaScript", "Express", "PostgreSQL", "Cloud"]
  },
  {
    id: 22,
    nombre: "Mathías Marcelo Cueto Escobar",
    rol: "Desarrollador Full Stack",
    descripcion: "Especialista en desarrollo de aplicaciones completas, desde la interfaz de usuario hasta la lógica de servidor.",
    linkedin: "https://www.linkedin.com/in/math%C3%ADas-cueto-escobar-3994a3267/",
    avatar: `${BASE_URL}assets/images/integrantes/MathiasCuetoEscobar.jpg`,
    especialidades: ["Vue.js", "Python", "Django", "SQL"]
  },
  {
    id: 23,
    nombre: "Juan Matias Gutierrez Casani",
    rol: "Desarrollador Full Stack",
    descripcion: "Desarrollador con experiencia en múltiples tecnologías, enfocado en crear soluciones robustas y mantenibles.",
    linkedin: "https://www.linkedin.com/in/matias-gutierrez-casani-a842a1341/",
    avatar: `${BASE_URL}assets/images/integrantes/MatiasGutierrezCasani.png`,
    especialidades: ["Angular", "C#", ".NET", "Azure"]
  },
  {
    id: 24,
    nombre: "Renzo Fabian Lopez Bazan",
    rol: "Desarrollador Full Stack",
    descripcion: "Desarrollador full stack especializado en aplicaciones web responsive y APIs RESTful.",
    linkedin: "https://www.linkedin.com/in/renzo-fabian-l%C3%B3pez-baz%C3%A1n-660699205/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    avatar: `${BASE_URL}assets/images/integrantes/RenzoLopezBazan.jpg`,
    especialidades: ["React", "Node.js", "MySQL", "API Design"]
  },
  {
    id: 25,
    nombre: "Luis Miguel Mamani Llanllaya",
    rol: "Desarrollador Full Stack",
    descripcion: "Desarrollador con capacidad para trabajar en todas las capas de una aplicación web moderna.",
    linkedin: "https://www.linkedin.com/in/luis-llanllaya-baa240253/",
    avatar: `${BASE_URL}assets/images/integrantes/LuisMamaniLlanllaya.jpg`,
    especialidades: ["JavaScript", "TypeScript", "MongoDB", "Express"]
  },
  {
    id: 26,
    nombre: "Michael Gustavo Orihuela Tomateo",
    rol: "Desarrollador Full Stack",
    descripcion: "Desarrollador versátil enfocado en la creación de aplicaciones eficientes y escalables.",
    linkedin: "https://www.linkedin.com/in/michael-orihuela-tomateo/",
    avatar: `${BASE_URL}assets/images/integrantes/MichaelOrihuelaTomateo.jpg`,
    especialidades: ["React", "Flask", "PostgreSQL", "Docker"]
  },
  {
    id: 27,
    nombre: "Jhonatan Gerard Oro Anticona",
    rol: "Desarrollador Full Stack",
    descripcion: "Desarrollador con experiencia en tecnologías frontend y backend, comprometido con las mejores prácticas de código.",
    linkedin: "https://www.linkedin.com/in/jhonatan-gerard-oro-anticona-74a397247/",
    avatar: `${BASE_URL}assets/images/integrantes/JhonatanGerardOroAnticona.jpg`,
    especialidades: ["Vue.js", "Node.js", "GraphQL", "Microservices"]
  },
  {
    id: 28,
    nombre: "Oscar Rene Pineda Flores",
    rol: "Desarrollador Full Stack",
    descripcion: "Desarrollador full stack con enfoque en optimización de rendimiento y experiencia de usuario.",
    linkedin: "https://www.linkedin.com/in/oscar-pineda-flores-16a834389/",
    avatar: `${BASE_URL}assets/images/integrantes/OscarPinedaflores.jpg`,
    especialidades: ["React", "Java", "Spring Boot", "Redis"]
  },
  {
    id: 29,
    nombre: "Mary Eliane Rojas Cordova",
    rol: "Desarrolladora Full Stack",
    descripcion: "Desarrolladora con habilidades en frontend y backend, especializada en crear interfaces intuitivas.",
    linkedin: "https://www.linkedin.com/in/maryrojascordova/",
    avatar: `${BASE_URL}assets/images/integrantes/MaryRojasCordova.png`,
    especialidades: ["Angular", "Python", "FastAPI", "MongoDB"]
  },
  {
    id: 30,
    nombre: "Luis Raul Ticona Peralta",
    rol: "Desarrollador Full Stack",
    descripcion: "Desarrollador con experiencia en múltiples frameworks y lenguajes de programación.",
    linkedin: "https://www.linkedin.com/in/luis-raul-ticona-peralta-717a74277/",
    avatar: `${BASE_URL}assets/images/integrantes/LuisTiconaPeralta.jpg`,
    especialidades: ["React", "PHP", "Laravel", "MySQL"]
  },
  {
    id: 31,
    nombre: "Juan Carlos Vite Agurto",
    rol: "Desarrollador Full Stack",
    descripcion: "Desarrollador full stack enfocado en soluciones innovadoras y código limpio.",
    linkedin: "https://www.linkedin.com/in/juancarlosviteagurto/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    avatar: `${BASE_URL}assets/images/integrantes/JuanCarlosViteAgurto.jpeg`,
    especialidades: ["Vue.js", "Ruby", "Rails", "PostgreSQL"]
  },
  {
    id: 32,
    nombre: "Geraldine Loana Yanque Flores",
    rol: "Desarrolladora Full Stack",
    descripcion: "Desarrolladora con pasión por crear aplicaciones web modernas y funcionales.",
    linkedin: "https://www.linkedin.com/in/geraldine-yanque-flores/",
    avatar: `${BASE_URL}assets/images/integrantes/GeraldineLoanaYanqueFlores.jpg`,
    especialidades: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    id: 33,
    nombre: "Yesica Paredes Gutierrez",
    rol: "Desarrolladora Full Stack",
    descripcion: "Desarrolladora versátil con experiencia en desarrollo web completo y bases de datos.",
    linkedin: "https://www.linkedin.com/in/yesica-paredes-gutierrez-9bb46a318/?originalSubdomain=pe",
    avatar: `${BASE_URL}assets/images/integrantes/yesica.jpg`,
    especialidades: ["JavaScript", "Python", "Django", "SQL Server"]
  },
  {
    id: 34,
    nombre: "Elmer Adrian Castro Ortiz",
    rol: "Desarrollador Full Stack",
    descripcion: "Desarrollador con habilidades en frontend, backend y deployment de aplicaciones.",
    linkedin: "https://www.linkedin.com/in/elmer-castro-3074a2291/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    avatar: `${BASE_URL}assets/images/integrantes/AdrianCastroOrtiz.png`,
    especialidades: ["React", "Go", "Docker", "Kubernetes"]
  }
];

// Organización por roles para mostrar en diferentes vistas
export const equipoPorArea = {
  "Liderazgo": equipoData.filter(p => 
    p.rol === "Product Owner" || 
    p.rol === "Scrum Master" || 
    p.rol === "Arquitecto"
  ),
  "Desarrollo": equipoData.filter(p => 
    p.rol === "Líder Frontend" || 
    p.rol === "Líder Backend" || 
    p.rol === "Ingeniero de Datos"
  ),
  "Infraestructura": equipoData.filter(p => 
    p.rol === "Ingeniero de Nube" || 
    p.rol === "Ingeniero DevSecOps"
  ),
  "Calidad y UX": equipoData.filter(p => 
    p.rol === "QA (Quality Assurance)" || 
    p.rol === "Ingeniero UX (User Experience)" || 
    p.rol === "Coordinador de Calidad de Documentos"
  ),
  "Comunicación": equipoData.filter(p => 
    p.rol === "Coordinador de Colaboración y Difusión"
  ),
  "Desarrolladores UX": equipoData.filter(p => 
    p.rol === "Desarrollador UX"
  ),
  "Testers": equipoData.filter(p => 
    p.rol === "Tester"
  ),
  "Full Stack": equipoData.filter(p => 
    p.rol === "Desarrollador Full Stack" || 
    p.rol === "Desarrolladora Full Stack"
  )
};

export default equipoData;