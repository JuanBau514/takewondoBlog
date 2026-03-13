import { Link } from 'react-router-dom';
import { ChevronDown, Trophy, Users, Star } from 'lucide-react';

const stats = [
  { icon: Trophy, value: '50+', label: 'Medallas' },
  { icon: Users, value: '200+', label: 'Atletas' },
  { icon: Star, value: '15+', label: 'Años de trayectoria' },
];

export default function HeroSection() {
  const scrollDown = () => {
    document.getElementById('actividades')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-dark-900">
      {/* Fondo blanco con acentos de bandera coreana */}
      
      {/* Gradiente sutil superior derecha - Rojo de la bandera */}
      <div 
        className="absolute -top-1/2 -right-1/4 w-2/3 h-5/6 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(218, 31, 80, 0.15) 0%, rgba(218, 31, 80, 0.05) 70%, transparent 100%)',
        }}
      />
      
      {/* Gradiente sutil inferior izquierda - Azul de la bandera */}
      <div 
        className="absolute -bottom-1/3 -left-1/3 w-5/6 h-5/6 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 82, 204, 0.4) 0%, rgba(0, 82, 204, 0.15) 50%, transparent 100%)',
        }}
      />
      
      {/* Elemento decorativo - Círculo rojo (inspirado en el yin-yang coreano) */}
      <div 
        className="absolute top-1/4 right-1/2 md:top-20 md:right-20 w-32 sm:w-40 h-32 sm:h-40 rounded-full pointer-events-none opacity-50 transform translate-x-1/3 md:translate-x-0"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(218, 31, 80, 0.5), rgba(218, 31, 80, 0.2) 50%, rgba(255, 255, 255, 0) 100%)',
        }}
      />
      
      {/* Elemento decorativo - Círculo azul */}
      <div 
        className="absolute bottom-1/4 left-1/2 md:bottom-32 md:left-16 w-32 sm:w-40 h-32 sm:h-40 rounded-full pointer-events-none opacity-60 transform -translate-x-1/3 md:translate-x-0"
        style={{
          background: 'radial-gradient(circle at 70% 70%, rgba(0, 82, 204, 0.6), rgba(0, 82, 204, 0.2) 50%, rgba(255, 255, 255, 0) 100%)',
        }}
      />

      <div className="relative container-custom text-center z-10 pt-24">
        {/* Badge con colores coreanos */}
        
        {/* <div className="inline-flex items-center gap-2 bg-white border-2 border-korean-red rounded-full px-5 py-2 mb-8 shadow-sm">
          <span className="w-2 h-2 bg-korean-red rounded-full animate-pulse" />
          <span className="text-korean-red text-sm font-medium">Inscripciones abiertas 2026</span>
        </div> */}

        {/* Title - Gradiente azul > negro/blanco > rojo coreano */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-none hero-gradient-title">
          <span className="block">SEMILLERO DE</span>
          <span className="block">CAMPEONES</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          En Club TaoTeKing no solo enseñamos Taekwondo — cultivamos disciplina, respeto y el carácter de verdaderos líderes. Únete a nuestra familia.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link to="/contacto" className="btn-primary text-base px-8 py-4">
            Comenzar ahora
          </Link>
          <Link to="/historia" className="btn-outline text-base px-8 py-4 !border-korean-blue !text-korean-blue hover:!bg-korean-blue hover:!text-white">
            Conocer el club
          </Link>
        </div>

        {/* Stats con iconos en colores coreanos */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <Icon 
                  size={20} 
                  className={index === 0 ? 'text-korean-red' : index === 1 ? 'text-korean-blue' : 'text-korean-green'} 
                />
                <span className="font-display text-3xl font-bold text-gray-900 dark:text-white">{value}</span>
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator - Rojo de la bandera */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors animate-bounce"
        aria-label="Scroll down"
        style={{ color: '#DA1F50' }}
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
