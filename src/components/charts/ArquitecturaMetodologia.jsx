// src/components/charts/ArquitecturaMetodologia.jsx
import React from 'react';
import { ReactFlowProvider } from '@xyflow/react';
// Importar solo el componente de Scrum
import ScrumFlow from './metodologia/ScrumFlow';

const ArquitecturaMetodologia = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <ReactFlowProvider>
        <ScrumFlow />
      </ReactFlowProvider>
    </div>
  );
};

export default ArquitecturaMetodologia;