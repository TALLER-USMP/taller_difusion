import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';

const WikiArticle = ({ article }) => {
  if (!article) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500 text-lg">Selecciona un artículo para comenzar</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <header className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-[#333333] mb-4">
          {article.title}
        </h1>
        
        {article.description && (
          <p className="text-lg text-gray-600 mb-6">
            {article.description}
          </p>
        )}

        {/* Meta information en span de Actualizado corregir {formatDate(article.lastUpdated)}*/}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
          {article.lastUpdated && (
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Actualizado: 31 de Octubre de 2025</span>
            </div>
          )}
          
          {article.author && (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Por: {article.author}</span>
            </div>
          )}
          
          {article.tags && article.tags.length > 0 && (
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <div className="flex gap-2">
                {article.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        {article.sections && article.sections.map((section, index) => (
          <section key={index} className="mb-8">
            {section.title && (
              <h2 className="text-2xl font-semibold text-[#A4101A] mb-4 pb-2 border-b border-gray-100">
                {section.title}
              </h2>
            )}
            
            {section.content && (
              <div className="text-[#333333] leading-relaxed space-y-4">
                {Array.isArray(section.content) ? (
                  section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-700">{section.content}</p>
                )}
              </div>
            )}

            {section.list && (
              <ul className="mt-4 space-y-2">
                {section.list.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#A4101A] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.code && (
              <div className="mt-4">
                <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm text-[#333333]">
                    {section.code}
                  </code>
                </pre>
              </div>
            )}

            {section.note && (
              <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Nota:</strong> {section.note}
                </p>
              </div>
            )}

            {section.warning && (
              <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>⚠️ Importante:</strong> {section.warning}
                </p>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Footer with navigation or additional info */}
      {article.relatedLinks && article.relatedLinks.length > 0 && (
        <footer className="mt-12 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-[#333333] mb-4">
            Enlaces Relacionados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {article.relatedLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-[#A4101A] hover:shadow-sm transition-all duration-200"
              >
                <div className="w-2 h-2 bg-[#A4101A] rounded-full"></div>
                <span className="text-[#333333] hover:text-[#A4101A]">
                  {link.title}
                </span>
              </a>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
};

export default WikiArticle;