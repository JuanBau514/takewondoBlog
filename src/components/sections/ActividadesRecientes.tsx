import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { blogPosts } from '../../lib/mockData';

const categoryColors: Record<string, string> = {
  actividades: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  competencias: 'bg-primary-600/10 text-primary-600 dark:text-primary-400 border-primary-600/20',
  noticias: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  tecnica: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
  logros: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20',
};

const categoryLabels: Record<string, string> = {
  actividades: 'Actividades',
  competencias: 'Competencias',
  noticias: 'Noticias',
  tecnica: 'Técnica',
  logros: 'Logros',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function ActividadesRecientes() {
  const featured = blogPosts.find(p => p.featured);
  const recent = blogPosts.filter(p => !p.featured || p.id !== featured?.id).slice(0, 4);

  return (
    <section id="actividades" className="py-24 bg-white dark:bg-dark-900">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-primary-600 dark:text-primary-400 font-medium text-sm uppercase tracking-wider mb-2">Noticias del Club</p>
            <h2 className="section-title">Actividades Recientes</h2>
            <p className="section-subtitle">Mantente al tanto de todo lo que ocurre en TaoTeKing.</p>
          </div>
          <Link to="/blog" className="btn-outline text-sm py-2 px-5 whitespace-nowrap self-start sm:self-auto">
            Ver todo <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured post */}
          {featured && (
            <Link to={`/blog/${featured.slug}`} className="lg:col-span-3 group card">
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${categoryColors[featured.category]}`}>
                    {categoryLabels[featured.category]}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
                    {featured.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2">{featured.excerpt}</p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between border-t border-gray-200 dark:border-white/5">
                <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-xs">
                  <Calendar size={12} />
                  {formatDate(featured.publishedAt)}
                </div>
                <span className="text-primary-600 dark:text-primary-400 text-xs font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Leer más <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          )}

          {/* Recent posts */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {recent.slice(0, 3).map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.id} className="group card flex gap-4 p-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${categoryColors[post.category]} inline-block mb-1`}>
                    {categoryLabels[post.category]}
                  </span>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-1">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500 text-xs">
                    <Calendar size={10} />
                    {formatDate(post.publishedAt)}
                  </div>
                </div>
              </Link>
            ))}

            <Link to="/blog" className="group card p-4 flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 hover:bg-primary-600/10 text-sm font-medium">
              <Tag size={16} />
              Ver todas las actividades
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
