import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const horarios = [
  { dia: 'Lunes - Viernes', hora: '4:00 PM - 8:00 PM' },
  { dia: 'Sábados', hora: '8:00 AM - 12:00 PM' },
  { dia: 'Domingos', hora: 'Cerrado' },
];

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '', interes: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800 text-center">
        <div className="container-custom">
          <p className="text-primary-600 dark:text-primary-400 font-medium text-sm uppercase tracking-wider mb-3">Estamos aquí para ti</p>
          <h1 className="section-title text-5xl md:text-6xl mb-4">Contáctanos</h1>
          <p className="section-subtitle mx-auto">
            ¿Tienes preguntas sobre nuestros programas? ¿Quieres agendar tu clase gratis? Escríbenos.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6">Información de Contacto</h2>
              </div>

              <div className="card p-5 flex gap-4">
                <div className="w-10 h-10 bg-primary-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Dirección</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Cra 45 #78-12, Barrio Laureles<br />Bogota D.C, Cundinamarca, Colombia</p>
                </div>
              </div>

              <div className="card p-5 flex gap-4">
                <div className="w-10 h-10 bg-primary-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Teléfono / WhatsApp</h3>
                  <a href="tel:+573001234567" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">+57 300 123 4567</a>
                </div>
              </div>

              <div className="card p-5 flex gap-4">
                <div className="w-10 h-10 bg-primary-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Email</h3>
                  <a href="mailto:info@taoteking.com" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">info@taoteking.com</a>
                </div>
              </div>

              <div className="card p-5">
                <div className="flex gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm self-center">Horarios de Atención</h3>
                </div>
                <div className="space-y-2">
                  {horarios.map(h => (
                    <div key={h.dia} className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">{h.dia}</span>
                      <span className={h.hora === 'Cerrado' ? 'text-gray-400 dark:text-gray-600' : 'text-gray-900 dark:text-white font-medium'}>{h.hora}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="card overflow-hidden h-48 relative">
                <div className="absolute inset-0 bg-gray-100 dark:bg-dark-700 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Mapa interactivo</p>
                    <p className="text-gray-400 dark:text-gray-500 text-xs">Cra 45 #78-12, Medellín</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card p-8">
                {sent ? (
                  <div className="text-center py-12">
                    <CheckCircle size={56} className="text-green-500 dark:text-green-400 mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">¡Mensaje enviado!</h3>
                    <p className="text-gray-500 dark:text-gray-400">Nos pondremos en contacto contigo pronto. ¡Gracias por tu interés en TaoTeKing!</p>
                    <button
                      className="btn-primary mt-6"
                      onClick={() => { setSent(false); setForm({ nombre: '', email: '', telefono: '', mensaje: '', interes: '' }); }}
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6">Envíanos un Mensaje</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1.5">Nombre completo *</label>
                          <input
                            type="text" name="nombre" required value={form.nombre} onChange={handleChange}
                            placeholder="Tu nombre"
                            className="w-full bg-gray-50 dark:bg-dark-700 border border-gray-300 dark:border-white/10 rounded-xl py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-primary-600/50 text-sm transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1.5">Email *</label>
                          <input
                            type="email" name="email" required value={form.email} onChange={handleChange}
                            placeholder="tu@email.com"
                            className="w-full bg-gray-50 dark:bg-dark-700 border border-gray-300 dark:border-white/10 rounded-xl py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-primary-600/50 text-sm transition-colors"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1.5">Teléfono</label>
                          <input
                            type="tel" name="telefono" value={form.telefono} onChange={handleChange}
                            placeholder="+57 300 000 0000"
                            className="w-full bg-gray-50 dark:bg-dark-700 border border-gray-300 dark:border-white/10 rounded-xl py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-primary-600/50 text-sm transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1.5">Me interesa</label>
                          <select
                            name="interes" value={form.interes} onChange={handleChange}
                            className="w-full bg-gray-50 dark:bg-dark-700 border border-gray-300 dark:border-white/10 rounded-xl py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:border-primary-600/50 text-sm transition-colors"
                          >
                            <option value="">Seleccionar...</option>
                            <option value="infantil">Clases Infantil</option>
                            <option value="juvenil">Clases Juvenil</option>
                            <option value="adultos">Clases Adultos</option>
                            <option value="competencia">Entrenamiento de Competencia</option>
                            <option value="defensa">Defensa Personal</option>
                            <option value="otro">Otro</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1.5">Mensaje *</label>
                        <textarea
                          name="mensaje" required value={form.mensaje} onChange={handleChange}
                          rows={5}
                          placeholder="Cuéntanos en qué te podemos ayudar..."
                          className="w-full bg-gray-50 dark:bg-dark-700 border border-gray-300 dark:border-white/10 rounded-xl py-3 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-primary-600/50 text-sm transition-colors resize-none"
                        />
                      </div>
                      <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5">
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Enviando...
                          </span>
                        ) : (
                          <><Send size={18} /> Enviar mensaje</>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
