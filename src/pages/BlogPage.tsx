import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { blogPosts } from '../lib/mockData';

const categories = [
  { key: '', label: 'Todos' },
  { key: 'actividades', label: 'Actividades' },
  { key: 'competencias', label: 'Competencias' },
  { key: 'noticias', label: 'Noticias' },
  { key: 'tecnica', label: 'Técnica' },
  { key: 'logros', label: 'Logros' },
];

const categoryColors: Record<string, string> = {
  actividades: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  competencias: 'bg-primary-600/10 text-primary-600 dark:text-primary-400 border-primary-600/20',
  noticias: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  tecnica: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
  logros: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const activeCategory = searchParams.get('category') || '';

  const filtered = blogPosts.filter(p => {
    const matchCat = !activeCategory || p.category === activeCategory;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1200&q=60')`, backgroundSize: 'cover' }} />
        <div className="relative container-custom text-center">
          <p className="text-primary-600 dark:text-primary-400 font-medium text-sm uppercase tracking-wider mb-3">Contenido del Club</p>
          <h1 className="section-title text-5xl md:text-6xl mb-4">Blog & Actividades</h1>
          <p className="section-subtitle mx-auto mb-8">
            Mantente informado de todo lo que ocurre en TaoTeKing: competencias, entrenamientos, técnicas y más.
          </p>
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-white dark:bg-dark-700 border border-gray-300 dark:border-white/10 rounded-xl py-3 pl-11 pr-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-primary-600/50 text-sm transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="container-custom">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setSearchParams(cat.key ? { category: cat.key } : {})}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.key
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 dark:text-gray-400">No se encontraron artículos con ese criterio.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(post => (
                <Link to={`/blog/${post.slug}`} key={post.id} className="group card flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full border ${categoryColors[post.category]}`}>
                        {categories.find(c => c.key === post.category)?.label}
                      </span>
                    </div>
                    {post.featured && (
                      <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
                        Destacado
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h2 className="font-display font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 flex-1 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 pt-4 border-t border-gray-200 dark:border-white/5">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        {formatDate(post.publishedAt)}
                      </div>
                      <span className="text-primary-600 dark:text-primary-400 flex items-center gap-1 group-hover:gap-2 transition-all font-medium">
                        Leer <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
