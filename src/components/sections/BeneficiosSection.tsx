import { Shield, Brain, Heart, Zap, Users, Trophy } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Defensa Personal',
    description: 'Aprende técnicas efectivas de autodefensa que podrás aplicar en situaciones reales del día a día.',
    color: 'korean-red',
    category: 'Protección',
  },
  {
    icon: Brain,
    title: 'Disciplina Mental',
    description: 'El Taekwondo desarrolla concentración, control emocional y resiliencia que se transladan a todos los ámbitos de la vida.',
    color: 'korean-blue',
    category: 'Desarrollo',
  },
  {
    icon: Heart,
    title: 'Condición Física',
    description: 'Mejora tu flexibilidad, fuerza, velocidad y resistencia cardiovascular con entrenamientos integrales.',
    color: 'colombian-green',
    category: 'Salud',
  },
  {
    icon: Zap,
    title: 'Técnica de Élite',
    description: 'Instructores con cinturón negro y formación internacional te guían hacia la excelencia técnica.',
    color: 'colombian-yellow',
    category: 'Excelencia',
  },
  {
    icon: Users,
    title: 'Comunidad Familia',
    description: 'Forma parte de una comunidad unida donde el respeto, la solidaridad y el compañerismo son valores fundamentales.',
    color: 'korean-red',
    category: 'Comunidad',
  },
  {
    icon: Trophy,
    title: 'Camino a la Competencia',
    description: 'Para quienes desee competir, ofrecemos preparación especializada para torneos locales, nacionales e internacionales.',
    color: 'korean-blue',
    category: 'Competencia',
  },
];

const colorMap = {
  'korean-red': { 
    text: 'text-korean-red dark:text-orange-300', 
    border: 'border-korean-red', 
    bg: 'bg-red-50 dark:bg-red-950/20',
    hoverBg: 'hover:bg-red-100 dark:hover:bg-red-950/40',
  },
  'korean-blue': { 
    text: 'text-korean-blue dark:text-blue-300', 
    border: 'border-korean-blue', 
    bg: 'bg-blue-50 dark:bg-blue-950/20',
    hoverBg: 'hover:bg-blue-100 dark:hover:bg-blue-950/40',
  },
  'colombian-green': { 
    text: 'text-colombian-green dark:text-green-300', 
    border: 'border-colombian-green', 
    bg: 'bg-green-50 dark:bg-green-950/20',
    hoverBg: 'hover:bg-green-100 dark:hover:bg-green-950/40',
  },
  'colombian-yellow': { 
    text: 'text-colombian-yellow dark:text-yellow-300', 
    border: 'border-colombian-yellow', 
    bg: 'bg-yellow-50 dark:bg-yellow-950/20',
    hoverBg: 'hover:bg-yellow-100 dark:hover:bg-yellow-950/40',
  },
};

export default function BeneficiosSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="text-korean-blue dark:text-blue-300 font-medium text-sm uppercase tracking-wider mb-2">¿Por qué elegirnos?</p>
          <h2 className="section-title">Más que Taekwondo</h2>
          <p className="section-subtitle mx-auto">
            Entrenamos cuerpo, mente y espíritu. Nuestro método transforma personas en campeones de la vida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, description, color, category }) => {
            const colors = colorMap[color];
            return (
              <div key={title} className={`card p-6 border-2 ${colors.border} ${colors.bg} ${colors.hoverBg} transition-all duration-300 hover:shadow-lg`}>
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={24} className={`${colors.text} flex-shrink-0`} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">{category}</span>
                </div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg mb-2">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
