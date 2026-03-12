import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, ArrowLeft, Tag, User } from 'lucide-react';
import { blogPosts } from '../lib/mockData';

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
  return new Date(iso).toLocaleDateString('es-CO', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const related = blogPosts.filter(p => p.id !== post?.id && p.category === post?.category).slice(0, 3);

  if (!post) return <Navigate to="/blog" replace />;

  const paragraphs = post.content.split('\n\n').filter(Boolean);

  return (
    <main className="pt-20">
      {/* Hero — imagen siempre oscuro */}
      <div className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/20" />
        <div className="absolute bottom-0 left-0 right-0 container-custom pb-10">
          <Link to="/blog" className="flex items-center gap-2 text-gray-300 hover:text-white text-sm mb-4 transition-colors w-fit">
            <ArrowLeft size={16} /> Volver al Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-xs font-medium px-3 py-1 rounded-full border ${categoryColors[post.category]}`}>
              {categoryLabels[post.category]}
            </span>
            {post.featured && (
              <span className="text-xs font-medium bg-primary-600/20 text-primary-300 border border-primary-600/30 px-3 py-1 rounded-full">
                Destacado
              </span>
            )}
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article */}
      <div className="bg-white dark:bg-dark-900 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 dark:text-gray-400 mb-10 pb-8 border-b border-gray-200 dark:border-white/5">
              <div className="flex items-center gap-2">
                <User size={14} className="text-primary-600 dark:text-primary-400" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-primary-600 dark:text-primary-400" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
            </div>

            {/* Content */}
            <article className="prose dark:prose-invert max-w-none">
              {paragraphs.map((para, i) => {
                if (para.startsWith('**') && para.endsWith('**')) {
                  return <h3 key={i} className="font-display text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">{para.replace(/\*\*/g, '')}</h3>;
                }
                return (
                  <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5 text-base">
                    {para.replace(/\*\*/g, '')}
                  </p>
                );
              })}
            </article>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-10 pt-8 border-t border-gray-200 dark:border-white/5">
                <Tag size={14} className="text-gray-400 dark:text-gray-500" />
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5 px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-dark-800">
          <div className="container-custom">
            <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-8">Artículos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map(r => (
                <Link to={`/blog/${r.slug}`} key={r.id} className="group card">
                  <div className="h-40 overflow-hidden">
                    <img src={r.coverImage} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold text-gray-900 dark:text-white text-sm group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">{r.title}</h3>
                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">{formatDate(r.publishedAt)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
