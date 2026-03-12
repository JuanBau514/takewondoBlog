import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const links = {
  club: [
    { label: 'Nuestra Historia', to: '/historia' },
    { label: 'El Equipo', to: '/equipo' },
    { label: 'Galería', to: '/galeria' },
    { label: 'Contacto', to: '/contacto' },
  ],
  contenido: [
    { label: 'Blog', to: '/blog' },
    { label: 'Actividades', to: '/blog?category=actividades' },
    { label: 'Competencias', to: '/blog?category=competencias' },
    { label: 'Técnica', to: '/blog?category=tecnica' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-dark-800 border-t border-gray-200 dark:border-white/5">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/src/assets/logo.png" alt="TaoTeKing" className="w-10 h-10 object-contain dark:brightness-110" />
              <div>
                <span className="block font-display font-bold text-gray-900 dark:text-white text-lg leading-none">TaoTeKing</span>
                <span className="block text-primary-600 dark:text-primary-400 text-xs">Club de Taekwondo</span>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">
              Forjando campeones dentro y fuera del tatami. Más de 15 años transformando vidas a través del Taekwondo.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-white/5 hover:bg-primary-600/20 hover:text-primary-600 dark:hover:text-primary-400 text-gray-500 dark:text-gray-400 flex items-center justify-center transition-all duration-200">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-white/5 hover:bg-primary-600/20 hover:text-primary-600 dark:hover:text-primary-400 text-gray-500 dark:text-gray-400 flex items-center justify-center transition-all duration-200">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-white/5 hover:bg-primary-600/20 hover:text-primary-600 dark:hover:text-primary-400 text-gray-500 dark:text-gray-400 flex items-center justify-center transition-all duration-200">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Club links */}
          <div>
            <h4 className="font-display font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">El Club</h4>
            <ul className="space-y-2">
              {links.club.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Content links */}
          <div>
            <h4 className="font-display font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Contenido</h4>
            <ul className="space-y-2">
              {links.contenido.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 dark:text-gray-400 text-sm">Cra 45 #78-12, Bogota D.C, Cundinamarca, Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <a href="tel:+573001234567" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">+57 300 123 4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <a href="mailto:info@taoteking.com" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">info@taoteking.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-white/5">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Club TaoTeKing. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 dark:text-gray-600 text-xs">
            Hecho con pasión por el Taekwondo
          </p>
        </div>
      </div>
    </footer>
  );
}
