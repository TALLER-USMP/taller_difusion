import { useEffect } from 'react';
import { Code } from 'lucide-react';
import { getAuthorData } from '../../utils/footer';

const Link = () => {
  const link = getAuthorData();
  
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
          const authorLink = document.querySelector('[data-author="true"]');
          if (!authorLink) {
            console.warn('⚠️ Componente crítico removido');
          }
        }
      });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
      });
      
      return () => observer.disconnect();
    }, []);
  
    return (
      <a
        href={link}
        data-author="true"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-[#A4101A] transition-colors duration-200 flex items-center space-x-1"
        title="Desarrollado por"
      >
        <Code className="w-4 h-4" />
        <span className="text-sm">Desarrollado por Autor</span>
      </a>
    );
  };
  
  export default Link;