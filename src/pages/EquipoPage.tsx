import { Instagram, Facebook, Award } from 'lucide-react';
import { teamMembers } from '../lib/mockData';

const danLabels = ['', '1er Dan', '2do Dan', '3er Dan', '4to Dan', '5to Dan', '6to Dan', '7mo Dan', '8vo Dan', '9no Dan'];

export default function EquipoPage() {
  return (
    <main className="pt-20">
      {/* Hero — imagen de fondo, siempre oscuro */}
      <section className="py-24 bg-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509155194946-c1f45d2f1a4b?w=1200&q=60')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 to-dark-800" />
        <div className="relative container-custom text-center">
          <p className="text-primary-400 font-medium text-sm uppercase tracking-wider mb-3">Nuestros Instructores</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">El Equipo TaoTeKing</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Maestros y profesionales dedicados a guiarte en cada paso de tu camino en el Taekwondo.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-24 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="group card overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  {member.dan && (
                    <div className="absolute top-3 right-3 bg-primary-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                      {danLabels[member.dan]}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg mb-0.5">{member.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-3">{member.role}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={14} className="text-yellow-500 dark:text-yellow-400" />
                    <span className="text-gray-500 dark:text-gray-400 text-xs">{member.belt}{member.dan ? ` - ${danLabels[member.dan]}` : ''}</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">{member.bio}</p>
                  {member.socialLinks && (
                    <div className="flex gap-2 mt-4">
                      {member.socialLinks.instagram && (
                        <a href={member.socialLinks.instagram} aria-label="Instagram" className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-primary-600/20 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 flex items-center justify-center transition-all">
                          <Instagram size={14} />
                        </a>
                      )}
                      {member.socialLinks.facebook && (
                        <a href={member.socialLinks.facebook} aria-label="Facebook" className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-primary-600/20 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 flex items-center justify-center transition-all">
                          <Facebook size={14} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horarios */}
      <section className="py-24 bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-primary-600 dark:text-primary-400 font-medium text-sm uppercase tracking-wider mb-2">Horarios</p>
            <h2 className="section-title text-4xl">Clases Disponibles</h2>
            <p className="section-subtitle mx-auto">Programas adaptados para cada edad y nivel.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { grupo: 'Infantil', edad: '6 - 12 años', dias: 'Lun, Mié, Vie', hora: '4:00 PM - 5:30 PM', color: 'border-blue-500/30 bg-blue-500/5' },
              { grupo: 'Juvenil', edad: '13 - 17 años', dias: 'Lun, Mié, Vie', hora: '5:30 PM - 7:00 PM', color: 'border-green-500/30 bg-green-500/5' },
              { grupo: 'Adultos y Competencia', edad: '18 años en adelante', dias: 'Mar, Jue, Sáb', hora: '6:00 PM - 8:00 PM', color: 'border-primary-600/30 bg-primary-600/5' },
            ].map((h) => (
              <div key={h.grupo} className={`card border ${h.color} p-6 text-center`}>
                <h3 className="font-display font-bold text-gray-900 dark:text-white text-xl mb-1">{h.grupo}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{h.edad}</p>
                <div className="space-y-2">
                  <p className="text-gray-800 dark:text-white font-medium text-sm">{h.dias}</p>
                  <p className="text-primary-600 dark:text-primary-400 font-display font-bold text-lg">{h.hora}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
