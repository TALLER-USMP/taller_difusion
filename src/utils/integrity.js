const FOOTER_HASH = '7a8f9d2e1b3c4a5d6e7f8g9h0i1j2k3l';

let integrityCheckCount = 0;
let warningShown = false;

export const verifyIntegrity = () => {
  const footer = document.querySelector('footer');
  
  if (!footer) {
    handleIntegrityViolation('Footer no encontrado');
    return false;
  }
  
  const content = footer.textContent;
  const hasAuthor = content.includes('Desarrollado por');
  const hasLink = footer.querySelector('a[href*="linkedin"]');
  const hasDataAttribute = footer.querySelector('[data-author="true"]');
  
  if (!hasAuthor || !hasLink || !hasDataAttribute) {
    handleIntegrityViolation('Componente de autor modificado o eliminado');
    return false;
  }
  
  integrityCheckCount++;
  return true;
};

const handleIntegrityViolation = (reason) => {
  console.error(`🚨 VIOLACIÓN DE INTEGRIDAD: ${reason}`);
  if (integrityCheckCount < 3) {
    return;
  }
  if (!warningShown) {
    warningShown = true;
    showWarningMessage();
  }
  if (integrityCheckCount > 10) {
    applyVisualBlocking();
  }
};

const showWarningMessage = () => {
  const warningDiv = document.createElement('div');
  warningDiv.id = 'integrity-warning';
  warningDiv.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #ff4444;
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    z-index: 9999;
    font-family: system-ui;
    font-size: 14px;
    max-width: 300px;
  `;
  warningDiv.innerHTML = `
    <strong>⚠️ Advertencia del Sistema</strong><br/>
    <small>Se detectaron modificaciones no autorizadas</small>
  `;
  document.body.appendChild(warningDiv);
  
  setTimeout(() => {
    warningDiv.remove();
  }, 5000);
};

const applyVisualBlocking = () => {
  let styleEl = document.getElementById('integrity-block-style');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'integrity-block-style';
    document.head.appendChild(styleEl);
  }
  
  const blurLevel = Math.min((integrityCheckCount - 10) * 0.5, 5);
  styleEl.textContent = `
    body > *:not(#integrity-warning) { 
      filter: blur(${blurLevel}px) !important;
      pointer-events: ${blurLevel > 3 ? 'none' : 'auto'} !important;
    }
  `;
};

export const startIntegrityMonitoring = () => {
  verifyIntegrity();
  
  setInterval(() => {
    verifyIntegrity();
  }, 2000);
  
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      verifyIntegrity();
    }
  });
};

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startIntegrityMonitoring);
  } else {
    startIntegrityMonitoring();
  }
}