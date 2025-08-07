# Arquitectura Inicial del Sistema

A continuación se presenta un diagrama básico representando el flujo inicial del sistema:

```mermaid
graph TD
    Inicio --> Login
    Login --> Dashboard
    Dashboard -->|Seleccionar| ModuloAcademico
    ModuloAcademico --> Sílabo
    ModuloAcademico --> PlanEstudios
    ModuloAcademico --> Evaluaciones
    Dashboard --> CerrarSesion
