// src/data/arquitectura/software/devsecops-nodes.js
export const frontendNodes = [
  {
    "id": "developer-frontend",
    "type": "custom",
    "position": {
      "x": -140.0794862315522,
      "y": 260.42880316308793
    },
    "data": {
      "label": "DEVELOPER FRONTEND",
      "icon": "/assets/images/icons/developer.svg",
      "type": "person",
      "description": "Desarrollador Frontend"
    }
  },
  {
    "id": "github",
    "type": "custom",
    "position": {
      "x": 206.47955872196422,
      "y": 252.69850634295221
    },
    "data": {
      "label": "GitHub",
      "icon": "/taller_difusion/assets/images/icons/github.svg",
      "type": "service",
      "description": "Control de versiones"
    }
  },
  {
    "id": "azure-devops",
    "type": "custom",
    "position": {
      "x": 207.17192761106372,
      "y": 514.653765799134
    },
    "data": {
      "label": "Azure DevOps",
      "icon": "/taller_difusion/assets/images/icons/azure-devops.svg",
      "type": "service",
      "description": "CI/CD Pipeline"
    }
  },
  {
    "id": "azure-ad",
    "type": "custom",
    "position": {
      "x": 545.4797503744812,
      "y": 722.3765145665932
    },
    "data": {
      "label": "AZURE AD",
      "icon": "/taller_difusion/assets/images/icons/azure-ad.svg",
      "type": "service",
      "description": "Autenticación"
    }
  },
  {
    "id": "azure-key-vault",
    "type": "custom",
    "position": {
      "x": 695.6886323832197,
      "y": 972.7432749135851
    },
    "data": {
      "label": "AZURE KEY VAULT",
      "icon": "/taller_difusion/assets/images/icons/azure-key-vault.svg",
      "type": "service",
      "description": "Gestión de secretos"
    }
  },
  {
    "id": "azure-container-registry",
    "type": "custom",
    "position": {
      "x": 327.4788359647362,
      "y": 973.3379249990513
    },
    "data": {
      "label": "AZURE CONTAINER REGISTRY",
      "icon": "/taller_difusion/assets/images/icons/azure-container-registry.svg",
      "type": "service",
      "description": "Registro de contenedores"
    }
  },
  {
    "id": "azure-monitor",
    "type": "custom",
    "position": {
      "x": -114.69981624567492,
      "y": 730.7931199190342
    },
    "data": {
      "label": "AZURE MONITOR",
      "icon": "/taller_difusion/assets/images/icons/azure-monitor.svg",
      "type": "service",
      "description": "Monitoreo y telemetría"
    }
  },
  {
    "id": "azure-app-insights",
    "type": "custom",
    "position": {
      "x": -117.66087956125604,
      "y": 510.34031805509005
    },
    "data": {
      "label": "APPLICATION INSIGHTS",
      "icon": "/taller_difusion/assets/images/icons/azure-app-insights.svg",
      "type": "service",
      "description": "Análisis de rendimiento"
    }
  },
  {
    "id": "azure-test-plans",
    "type": "custom",
    "position": {
      "x": 207.50456760957286,
      "y": 722.9046962642234
    },
    "data": {
      "label": "AZURE TEST PLANS",
      "icon": "/taller_difusion/assets/images/icons/azure-test-plans.svg",
      "type": "service",
      "description": "Testing automatizado"
    }
  },
  {
    "id": "microfrontends",
    "type": "custom",
    "position": {
      "x": 589.0412583534119,
      "y": 254.26299930149105
    },
    "data": {
      "label": "MICROFRONTENDS",
      "icon": "/taller_difusion/assets/images/icons/microfrontends.svg",
      "type": "architecture",
      "description": "Arquitectura modular"
    }
  },
  {
    "id": "azure-front-door",
    "type": "custom",
    "position": {
      "x": 589.2028764769983,
      "y": 42.99509305040171
    },
    "data": {
      "label": "AZURE FRONT DOOR",
      "icon": "/taller_difusion/assets/images/icons/azure-front-door.svg",
      "type": "service",
      "description": "CDN y Load Balancer"
    }
  },
  {
    "id": "web-application",
    "type": "custom",
    "position": {
      "x": 201.78730962380524,
      "y": 43.69560066855169
    },
    "data": {
      "label": "WEB APPLICATION",
      "icon": "/taller_difusion/assets/images/icons/web-app.svg",
      "type": "application",
      "description": "Aplicación desplegada"
    }
  },
  {
    "id": "users",
    "type": "custom",
    "position": {
      "x": -158.52673437493794,
      "y": 43.81641285759146
    },
    "data": {
      "label": "Users",
      "icon": "/taller_difusion/assets/images/icons/users.svg",
      "type": "person",
      "description": "Usuarios finales"
    }
  }
];

export const frontendEdges = [
  {
    "id": "users-to-monitor",
    "source": "users",
    "target": "azure-monitor",
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "type": "smoothstep",
    "animated": true,
    "style": {
      "stroke": "#059669",
      "strokeWidth": 3
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#059669"
    },
    "label": "User Metrics",
    "labelStyle": {
      "fontSize": 18,
      "fontWeight": 600
    }
  },
  {
    "id": "test-plans-to-microfrontends",
    "source": "azure-test-plans",
    "target": "microfrontends",
    "sourceHandle": "left",
    "targetHandle": "right",
    "type": "smoothstep",
    "animated": true,
    "style": {
      "stroke": "#1e40af",
      "strokeWidth": 3
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#1e40af"
    },
    "label": "Deploy to Modules",
    "labelStyle": {
      "fontSize": 18,
      "fontWeight": 600
    }
  },
  {
    "id": "front-door-to-webapp",
    "source": "azure-front-door",
    "target": "web-application",
    "sourceHandle": "left",
    "targetHandle": "right",
    "type": "smoothstep",
    "animated": true,
    "style": {
      "stroke": "#059669",
      "strokeWidth": 3
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#059669"
    },
    "label": "Route Traffic",
    "labelStyle": {
      "fontSize": 18,
      "fontWeight": 600
    }
  },
  {
    "id": "xy-edge__developer-frontendright-githubleft",
    "source": "developer-frontend",
    "target": "github",
    "sourceHandle": "right",
    "targetHandle": "left",
    "type": "smoothstep",
    "animated": true,
    "style": {
      "stroke": "#0891b2",
      "strokeWidth": 2
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#0891b2"
    },
    "label": "",
    "labelStyle": {
      "fontSize": 12,
      "fontWeight": 600
    }
  },
  {
    "id": "xy-edge__githubbottom-azure-app-insightstop",
    "source": "github",
    "target": "azure-app-insights",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "type": "smoothstep",
    "animated": true,
    "style": {
      "stroke": "#0891b2",
      "strokeWidth": 2
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#0891b2"
    },
    "label": "",
    "labelStyle": {
      "fontSize": 12,
      "fontWeight": 600
    }
  },
  {
    "id": "xy-edge__azure-monitorright-azure-test-plansleft",
    "source": "azure-monitor",
    "target": "azure-test-plans",
    "sourceHandle": "right",
    "targetHandle": "left",
    "type": "smoothstep",
    "animated": true,
    "style": {
      "stroke": "#0891b2",
      "strokeWidth": 2
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#0891b2"
    },
    "label": "",
    "labelStyle": {
      "fontSize": 12,
      "fontWeight": 600
    }
  },
  {
    "id": "xy-edge__azure-test-plansright-azure-adleft",
    "source": "azure-test-plans",
    "target": "azure-ad",
    "sourceHandle": "right",
    "targetHandle": "left",
    "type": "smoothstep",
    "animated": true,
    "style": {
      "stroke": "#0891b2",
      "strokeWidth": 2
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#0891b2"
    },
    "label": "",
    "labelStyle": {
      "fontSize": 12,
      "fontWeight": 600
    }
  },
  {
    "id": "xy-edge__azure-adbottom-azure-container-registrytop",
    "source": "azure-ad",
    "target": "azure-container-registry",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "type": "smoothstep",
    "animated": true,
    "style": {
      "stroke": "#0891b2",
      "strokeWidth": 2
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#0891b2"
    },
    "label": "",
    "labelStyle": {
      "fontSize": 12,
      "fontWeight": 600
    }
  },
  {
    "id": "xy-edge__azure-adbottom-azure-key-vaulttop",
    "source": "azure-ad",
    "target": "azure-key-vault",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "type": "smoothstep",
    "animated": true,
    "style": {
      "stroke": "#0891b2",
      "strokeWidth": 2
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#0891b2"
    },
    "label": "",
    "labelStyle": {
      "fontSize": 12,
      "fontWeight": 600
    }
  },
  {
    "id": "xy-edge__usersright-web-applicationleft",
    "source": "users",
    "target": "web-application",
    "sourceHandle": "right",
    "targetHandle": "left",
    "type": "smoothstep",
    "animated": true,
    "style": {
      "stroke": "#0891b2",
      "strokeWidth": 2
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#0891b2"
    },
    "label": "",
    "labelStyle": {
      "fontSize": 12,
      "fontWeight": 600
    }
  },
  {
    "id": "xy-edge__web-applicationright-azure-front-doorleft",
    "source": "web-application",
    "target": "azure-front-door",
    "sourceHandle": "right",
    "targetHandle": "left",
    "type": "smoothstep",
    "animated": true,
    "style": {
      "stroke": "#0891b2",
      "strokeWidth": 2
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#0891b2"
    },
    "label": "",
    "labelStyle": {
      "fontSize": 12,
      "fontWeight": 600
    }
  },
  {
    "id": "xy-edge__githubright-microfrontendsleft",
    "source": "github",
    "target": "microfrontends",
    "sourceHandle": "right",
    "targetHandle": "left",
    "type": "smoothstep",
    "animated": true,
    "style": {
      "stroke": "#0891b2",
      "strokeWidth": 2
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#0891b2"
    },
    "label": "",
    "labelStyle": {
      "fontSize": 12,
      "fontWeight": 600
    }
  },
  {
    "id": "xy-edge__azure-front-doorbottom-microfrontendstop",
    "source": "azure-front-door",
    "target": "microfrontends",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "type": "smoothstep",
    "animated": true,
    "style": {
      "stroke": "#0891b2",
      "strokeWidth": 2
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#0891b2"
    },
    "label": "",
    "labelStyle": {
      "fontSize": 12,
      "fontWeight": 600
    }
  },
  {
    "id": "xy-edge__azure-app-insightsbottom-azure-monitortop",
    "source": "azure-app-insights",
    "target": "azure-monitor",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "type": "smoothstep",
    "animated": true,
    "style": {
      "stroke": "#0891b2",
      "strokeWidth": 2
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#0891b2"
    },
    "label": "",
    "labelStyle": {
      "fontSize": 12,
      "fontWeight": 600
    }
  },
  {
    "id": "xy-edge__githubbottom-azure-devopstop",
    "source": "github",
    "target": "azure-devops",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "type": "smoothstep",
    "animated": true,
    "style": {
      "stroke": "#0891b2",
      "strokeWidth": 2
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#0891b2"
    },
    "label": "",
    "labelStyle": {
      "fontSize": 12,
      "fontWeight": 600
    }
  }
];

export const nodeTypes = {
  custom: 'customNode'
};