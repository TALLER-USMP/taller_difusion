// src/data/arquitectura/software/frontend-nodes.js

export const frontendNodes = [
  // DEVELOPER FRONTEND (inicio del flujo)
  {
    id: 'developer-frontend',
    type: 'custom',
    position: { x: 50, y: 150 },
    data: {
      label: 'DEVELOPER FRONTEND',
      icon: '/assets/images/icons/developer.svg',
      type: 'person',
      description: 'Desarrollador Frontend'
    },
  },
  
  // GITHUB
  {
    id: 'github',
    type: 'custom',
    position: { x: 450, y: 150 },
    data: {
      label: 'GitHub',
      icon: '/assets/images/icons/github.svg',
      type: 'service',
      description: 'Control de versiones'
    },
  },

  // AZURE DEVOPS
  {
    id: 'azure-devops',
    type: 'custom',
    position: { x: 850, y: 150 },
    data: {
      label: 'Azure DevOps',
      icon: '/assets/images/icons/azure-devops.svg',
      type: 'service',
      description: 'CI/CD Pipeline'
    },
  },

  // AZURE AD
  {
    id: 'azure-ad',
    type: 'custom',
    position: { x: 1250, y: 150 },
    data: {
      label: 'AZURE AD',
      icon: '/assets/images/icons/azure-ad.svg',
      type: 'service',
      description: 'Autenticación'
    },
  },

  // AZURE TEST PLANS
  {
    id: 'azure-test-plans',
    type: 'custom',
    position: { x: 1250, y: 400 },
    data: {
      label: 'AZURE TEST PLANS',
      icon: '/assets/images/icons/azure-test-plans.svg',
      type: 'service',
      description: 'Testing automatizado'
    },
  },

  // MICROFRONTENDS
  {
    id: 'microfrontends',
    type: 'custom',
    position: { x: 850, y: 400 },
    data: {
      label: 'MICROFRONTENDS',
      icon: '/assets/images/icons/microfrontends.svg',
      type: 'architecture',
      description: 'Arquitectura modular'
    },
  },

  // AZURE FRONT DOOR
  {
    id: 'azure-front-door',
    type: 'custom',
    position: { x: 850, y: 650 },
    data: {
      label: 'AZURE FRONT DOOR',
      icon: '/assets/images/icons/azure-front-door.svg',
      type: 'service',
      description: 'CDN y Load Balancer'
    },
  },

  // WEB APPLICATION
  {
    id: 'web-application',
    type: 'custom',
    position: { x: 450, y: 650 },
    data: {
      label: 'WEB APPLICATION',
      icon: '/assets/images/icons/web-app.svg',
      type: 'application',
      description: 'Aplicación desplegada'
    },
  },

  // USERS (final del flujo)
  {
    id: 'users',
    type: 'custom',
    position: { x: 50, y: 650 },
    data: {
      label: 'Users',
      icon: '/assets/images/icons/users.svg',
      type: 'person',
      description: 'Usuarios finales'
    },
  },
];


export const frontendEdges = [
  // Flujo principal de desarrollo (línea superior - izquierda a derecha)
  {
    id: 'developer-to-github',
    source: 'developer-frontend',
    target: 'github',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#1e40af', strokeWidth: 3 },
    markerEnd: { type: 'arrowclosed', color: '#1e40af' },
    label: 'Code Push',
    labelStyle: {
      fontSize: 18,         // tamaño de fuente en px
      fontWeight: 600,      // grosor
    }
  },
  
  {
    id: 'github-to-devops',
    source: 'github',
    target: 'azure-devops',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#1e40af', strokeWidth: 3 },
    markerEnd: { type: 'arrowclosed', color: '#1e40af' },
    label: 'Trigger CI/CD',
    labelStyle: {
      fontSize: 18,
      fontWeight: 600,
    }
  },

  {
    id: 'devops-to-azure-ad',
    source: 'azure-devops',
    target: 'azure-ad',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#1e40af', strokeWidth: 3 },
    markerEnd: { type: 'arrowclosed', color: '#1e40af' },
    label: 'Auth Config',
    labelStyle: {
      fontSize: 18,
      fontWeight: 600,
    }
  },

  {
    id: 'azure-ad-to-test-plans',
    source: 'azure-ad',
    target: 'azure-test-plans',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#1e40af', strokeWidth: 3 },
    markerEnd: { type: 'arrowclosed', color: '#1e40af' },
    label: 'Security Tests',
    labelStyle: {
      fontSize: 18,
      fontWeight: 600,
    }
  },

  {
    id: 'test-plans-to-microfrontends',
    source: 'azure-test-plans',
    target: 'microfrontends',
    sourceHandle: 'bottom',   // Sale por la izquierda de Test Plans left
    targetHandle: 'top',  // Llega por la derecha de Microfrontends right
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#1e40af', strokeWidth: 3 },
    markerEnd: { type: 'arrowclosed', color: '#1e40af' },
    label: 'Deploy to Modules',
    labelStyle: {
      fontSize: 18,
      fontWeight: 600,
    }
  },
  {
    id: 'front-door-to-microfrontends',
    source: 'azure-front-door',
    target: 'microfrontends',
    sourceHandle: '',      // Sale por arriba de Front Door
    targetHandle: '',   // Llega por debajo de Microfrontends
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#059669', strokeWidth: 3 },
    markerEnd: { type: 'arrowclosed', color: '#059669' },
    label: 'CDN Distribution',
    labelStyle: {
      fontSize: 18,
      fontWeight: 600,
    }
  },
  

  {
    id: 'webapp-to-front-door',
    source: 'web-application',
    target: 'azure-front-door',
    sourceHandle: 'right',   // Sale por la derecha de Web App
    targetHandle: 'left',    // Llega por la izquierda de Front Door
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#059669', strokeWidth: 3 },
    markerEnd: { type: 'arrowclosed', color: '#059669' },
    label: 'Route Traffic',
    labelStyle: {
      fontSize: 18,
      fontWeight: 600,
    }
  },

  {
    id: 'users-to-webapp',
    source: 'users',
    target: 'web-application',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#059669', strokeWidth: 3 },
    markerEnd: { type: 'arrowclosed', color: '#059669' },
    label: 'User Access',
    labelStyle: {
      fontSize: 18,
      fontWeight: 600,
    }
  },
];
export const nodeTypes = {
  custom: 'customNode'
};