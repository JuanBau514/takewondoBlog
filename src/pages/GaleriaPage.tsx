import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ['Todas', 'competencias', 'entrenamientos', 'eventos', 'graduaciones'];
const categoryLabels: Record<string, string> = {
  Todas: 'Todas',
  competencias: 'Competencias',
  entrenamientos: 'Entrenamientos',
  eventos: 'Eventos',
  graduaciones: 'Graduaciones',
};

const gallery = [
  { id: '1', src: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80', alt: 'Competencia departamental', category: 'competencias' },
  { id: '2', src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', alt: 'Ceremonia de graduación', category: 'graduaciones' },
  { id: '3', src: 'https://images.unsplash.com/photo-1509155194946-c1f45d2f1a4b?w=800&q=80', alt: 'Sesión de entrenamiento', category: 'entrenamientos' },
  { id: '4', src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80', alt: 'Taller de defensa personal', category: 'eventos' },
  { id: '5', src: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=800&q=80', alt: 'Atleta en competencia', category: 'competencias' },
  { id: '6', src: 'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=800&q=80', alt: 'Entrenamiento grupal', category: 'entrenamientos' },
  { id: '7', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', alt: 'Instructor demostrando técnica', category: 'entrenamientos' },
  { id: '8', src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80', alt: 'Evento del club', category: 'eventos' },
  { id: '9', src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80', alt: 'Graduación cinturón negro', category: 'graduaciones' },
  { id: '10', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80', alt: 'Instructora en clase', category: 'entrenamientos' },
  { id: '11', src: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&q=80', alt: 'Combate en torneo', category: 'competencias' },
  { id: '12', src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80', alt: 'Festejo de medallas', category: 'competencias' },
];

export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === 'Todas' ? gallery : gallery.filter(g => g.category === activeCategory);

  const closeLightbox = () => setLightbox(null);
  const prevPhoto = () => setLightbox(i => (i! - 1 + filtered.length) % filtered.length);
  const nextPhoto = () => setLightbox(i => (i! + 1) % filtered.length);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800 text-center">
        <div className="container-custom">
          <p className="text-primary-600 dark:text-primary-400 font-medium text-sm uppercase tracking-wider mb-3">Momentos únicos</p>
          <h1 className="section-title text-5xl md:text-6xl mb-4">Galería</h1>
          <p className="section-subtitle mx-auto">Capturas de los mejores momentos del Club TaoTeKing.</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="container-custom">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-white/5'
                }`}
              >
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((item, idx) => (
              <div
                key={item.id}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
                onClick={() => setLightbox(idx)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/40 transition-all duration-300 flex items-end p-3">
                  <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {item.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox — siempre oscuro */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-gray-900/97 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors" onClick={closeLightbox}>
            <X size={32} />
          </button>
          <button
            className="absolute left-4 text-white hover:text-primary-400 transition-colors"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
          >
            <ChevronLeft size={48} />
          </button>
          <div className="max-w-4xl max-h-[80vh] mx-16" onClick={e => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-center text-gray-400 text-sm mt-3">{filtered[lightbox].alt}</p>
          </div>
          <button
            className="absolute right-4 text-white hover:text-primary-400 transition-colors"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </main>
  );
}
