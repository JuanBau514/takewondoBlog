import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-24 bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50 via-white to-primary-50 dark:from-primary-950/40 dark:via-dark-900 dark:to-primary-950/40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-600/5 dark:bg-primary-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-custom text-center">
        <p className="text-primary-600 dark:text-primary-400 font-medium text-sm uppercase tracking-wider mb-3">Empieza hoy</p>
        <h2 className="section-title mb-4">¿Listo para el desafío?</h2>
        <p className="section-subtitle mx-auto mb-10">
          Tu primera clase es gratis. Ven a conocernos, sin compromisos. Contamos con horarios para todas las edades y niveles.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/contacto" className="btn-primary text-base px-8 py-4">
            Agenda tu clase gratis
            <ArrowRight size={18} />
          </Link>
          <a href="tel:+573001234567" className="btn-outline text-base px-8 py-4">
            <Phone size={18} />
            Llámanos
          </a>
        </div>
      </div>
    </section>
  );
}
