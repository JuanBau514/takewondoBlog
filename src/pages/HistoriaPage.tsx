import { achievements } from '../lib/mockData';
import { Trophy, Medal } from 'lucide-react';

const medalColors = {
  oro: 'border-colombian-yellow bg-yellow-400/10 text-yellow-700 dark:text-yellow-400',
  plata: 'border-gray-400 bg-gray-400/10 text-gray-600 dark:text-gray-300',
  bronce: 'border-amber-600 bg-amber-600/10 text-amber-700 dark:text-amber-500',
  especial: 'border-korean-blue bg-blue-400/10 text-korean-blue dark:text-blue-400',
};

const timeline = [
  { year: '2008', title: 'Fundación del Club', text: 'El Maestro Carlos Rodríguez funda TaoTeKing con apenas 8 estudiantes en un pequeño local del barrio Laureles, Medellín. Su sueño: crear un espacio donde el Taekwondo transforme vidas.' },
  { year: '2011', title: 'Primera Sede Propia', text: 'Con el crecimiento sostenido de estudiantes, el club adquiere su primera sede propia con tatami y equipos profesionales. La comunidad crece hasta 60 atletas activos.' },
  { year: '2014', title: 'Primeras Medallas Nacionales', text: 'Nuestros atletas debuutan en el Campeonato Nacional logrando dos medallas de bronce. El inicio de una tradición de excelencia competitiva.' },
  { year: '2017', title: 'Afiliación a la Federación', text: 'TaoTeKing obtiene afiliación oficial a la Federación Colombiana de Taekwondo, abriendo las puertas a competencias internacionales y programas de desarrollo.' },
  { year: '2020', title: 'Adaptación y Resiliencia', text: 'Durante la pandemia, el club innova con entrenamientos virtuales y mantiene viva la comunidad. Salimos más fuertes y con una plataforma digital consolidada.' },
  { year: '2024', title: 'Hoy: Referentes Regionales', text: 'Con más de 200 atletas activos, 50+ medallas acumuladas y proyección internacional, TaoTeKing es reconocido como uno de los clubes de Taekwondo más sólidos del departamento de Cundinamarca.' },
];

export default function HistoriaPage() {
  return (
    <main className="pt-20">
      {/* Hero — imagen de fondo, siempre oscuro */}
      <section className="relative py-24 bg-dark-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=1200&q=60')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 to-dark-800" />
        <div className="relative container-custom text-center">
          <p className="text-korean-blue dark:text-blue-400 font-medium text-sm uppercase tracking-wider mb-3">Nuestra Historia</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">15 Años Forjando Campeones</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Desde un pequeño tatami en Laureles hasta ser referentes del Taekwondo en Cundinamarca. Conoce el camino que nos trajo hasta aquí.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title text-4xl">Línea de Tiempo</h2>
            <p className="section-subtitle mx-auto">Los momentos que definieron nuestra historia.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center line with gradient */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-korean-red via-korean-blue to-colombian-green -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, i) => {
                const colorMap = [
                  { dot: 'bg-korean-red', year: 'text-korean-red dark:text-orange-300' },
                  { dot: 'bg-korean-blue', year: 'text-korean-blue dark:text-blue-300' },
                  { dot: 'bg-colombian-green', year: 'text-colombian-green dark:text-green-300' },
                  { dot: 'bg-colombian-yellow', year: 'text-colombian-yellow dark:text-yellow-300' },
                ];
                const classes = colorMap[i % 4];

                return (
                  <div key={item.year} className={`relative flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Dot */}
                    <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 ${classes.dot} rounded-full border-2 border-white dark:border-dark-900 z-10 mt-1`} />

                    {/* Year bubble (desktop) */}
                    <div className={`hidden md:flex w-1/2 ${i % 2 === 0 ? 'justify-end pr-12' : 'justify-start pl-12'}`}>
                      <div className="self-start">
                        <span className={`font-display text-4xl font-bold opacity-60 ${classes.year}`}>{item.year}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                      <div className="card p-6">
                        <span className={`font-display text-2xl font-bold md:hidden ${classes.year}`}>{item.year}</span>
                        <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">{item.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Logros */}
      <section className="py-24 bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-korean-red dark:text-red-400 font-medium text-sm uppercase tracking-wider mb-2">Palmarés</p>
            <h2 className="section-title text-4xl">Nuestros Logros</h2>
            <p className="section-subtitle mx-auto">Cada medalla es el resultado del esfuerzo colectivo de nuestros atletas e instructores.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((a) => (
              <div key={a.id} className={`card p-6 border ${medalColors[a.type]}`}>
                <div className="flex items-center gap-3 mb-3">
                  {a.type === 'especial' ? (
                    <Trophy size={20} />
                  ) : (
                    <Medal size={20} />
                  )}
                  <span className="text-xs font-semibold uppercase tracking-wider">{a.type}</span>
                  <span className="ml-auto text-gray-400 dark:text-gray-500 text-sm">{a.year}</span>
                </div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white text-base mb-1">{a.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{a.description}</p>
                {a.athlete && (
                  <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">Atleta: <span className="text-gray-700 dark:text-gray-300">{a.athlete}</span></p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-24 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-korean-blue dark:text-blue-400 font-medium text-sm uppercase tracking-wider mb-3">Nuestra Filosofía</p>
              <h2 className="section-title text-4xl mb-6">El Espíritu TaoTeKing</h2>
              <div className="space-y-5">
                {[
                  { title: '예의 (Cortesía)', text: 'Tratamos a cada persona con respeto y dignidad, dentro y fuera del tatami.', bar: 'bg-korean-red dark:bg-korean-red' },
                  { title: '염치 (Integridad)', text: 'Actuamos con honestidad y coherencia en cada aspecto de nuestra práctica y vida.', bar: 'bg-korean-blue dark:bg-korean-blue' },
                  { title: '인내 (Perseverancia)', text: 'Cada caída es una oportunidad de levantarse más fuerte. Nunca abandonamos.', bar: 'bg-colombian-green dark:bg-colombian-green' },
                  { title: '자제 (Autocontrol)', text: 'El dominio de sí mismo es la base de todo logro. Controlamos nuestras emociones y acciones.', bar: 'bg-colombian-yellow dark:bg-colombian-yellow' },
                  { title: '백절불굴 (Espíritu indomable)', text: 'Ante cualquier adversidad, nuestro espíritu permanece inquebrantable.', bar: 'bg-korean-red dark:bg-korean-red' },
                ].map(({ title, text, bar }) => (
                  <div key={title} className="flex gap-4">
                    <div className={`w-1 rounded-full ${bar} flex-shrink-0 mt-1`} />
                    <div>
                      <h4 className="font-display font-bold text-gray-900 dark:text-white text-base mb-1">{title}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80"
                  alt="Filosofía TaoTeKing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-korean-blue/20 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
