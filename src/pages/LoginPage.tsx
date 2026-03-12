import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, Trophy, Users, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const { isAuthenticated, loginWithGoogle, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/', { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-dark-900 flex flex-col md:flex-row">
      {/* Left panel — imagen/branding, siempre oscuro */}
      <div className="hidden md:flex md:w-1/2 relative bg-dark-800 flex-col items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=60')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 to-primary-950/50" />
        <div className="relative text-center z-10">
          <img src="/src/assets/logo.png" alt="TaoTeKing" className="w-20 h-20 object-contain mx-auto mb-6 brightness-110" />
          <h2 className="font-display text-4xl font-bold text-white mb-3">TaoTeKing</h2>
          <p className="text-primary-300 font-medium mb-8">Club de Taekwondo</p>
          <div className="space-y-4 text-left max-w-xs">
            {[
              { icon: Trophy, text: 'Accede a contenido exclusivo del club' },
              { icon: Users, text: 'Conecta con la comunidad TaoTeKing' },
              { icon: Shield, text: 'Gestiona tus datos de forma segura' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-primary-400" />
                </div>
                <p className="text-gray-300 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel — login form */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link to="/" className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm mb-10 transition-colors w-fit">
            <ArrowLeft size={16} /> Volver al inicio
          </Link>

          {/* Mobile logo */}
          <div className="md:hidden flex items-center gap-3 mb-8">
            <img src="/src/assets/logo.png" alt="TaoTeKing" className="w-10 h-10 object-contain brightness-110" />
            <div>
              <span className="block font-display font-bold text-gray-900 dark:text-white text-lg leading-none">TaoTeKing</span>
              <span className="text-primary-600 dark:text-primary-400 text-xs">Club de Taekwondo</span>
            </div>
          </div>

          <h1 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-2">Iniciar sesión</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-10">Accede a tu cuenta del Club TaoTeKing</p>

          <div className="space-y-4">
            <button
              onClick={() => loginWithGoogle()}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3.5 px-6 rounded-xl border border-gray-300 transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              )}
              Continuar con Google
            </button>
          </div>

          <p className="text-center text-gray-400 dark:text-gray-500 text-xs mt-8 leading-relaxed">
            Al iniciar sesión, aceptas nuestros{' '}
            <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">Términos de servicio</a>{' '}
            y{' '}
            <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">Política de privacidad</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
