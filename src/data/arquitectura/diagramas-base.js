export const diagramaBase = `
graph TD
    Inicio --> Login
    Login --> Dashboard
    Dashboard -->|Seleccionar| ModuloAcademico
    ModuloAcademico --> Sílabo
    ModuloAcademico --> PlanEstudios
    ModuloAcademico --> Evaluaciones
    Dashboard --> CerrarSesion
`;
