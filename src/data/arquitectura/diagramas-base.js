export const diagramaInicial = `graph TD
    A[Inicio del Proyecto] --> B[Planificación]
    B --> C[Diseño de Arquitectura]
    C --> D[Desarrollo]
    D --> E[Pruebas]
    E --> F[Entrega]`;

// Diagrama alternativo con más estilo
export const diagramaInicialDetallado = `graph TB
    subgraph "Fase de Inicio"
        A[Inicio del Proyecto]
        A --> B[Planificación]
    end
    
    subgraph "Fase de Diseño"
        B --> C[Diseño de Arquitectura]
        C --> C1[Definir Componentes]
        C --> C2[Definir APIs]
    end
    
    subgraph "Fase de Desarrollo"
        C1 --> D[Desarrollo]
        C2 --> D
        D --> D1[Frontend]
        D --> D2[Backend]
    end
    
    subgraph "Fase de Testing"
        D1 --> E[Pruebas]
        D2 --> E
        E --> E1[Pruebas Unitarias]
        E --> E2[Pruebas Integración]
    end
    
    subgraph "Fase de Entrega"
        E1 --> F[Entrega]
        E2 --> F
    end
    
    style A fill:#e1f5fe
    style F fill:#c8e6c9`;

// Diagrama de prueba simple
export const diagramaPrueba = `graph LR
    A[Proximamente...]`;