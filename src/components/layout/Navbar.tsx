import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, LogIn, LogOut, User, Sun, Moon, Monitor } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme, type ThemeMode } from '../../context/ThemeContext';

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Historia', to: '/historia' },
  { label: 'Equipo', to: '/equipo' },
  { label: 'Galería', to: '/galeria' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contacto', to: '/contacto' },
];

const modeIcons: Record<ThemeMode, React.ReactNode> = {
  auto:  <Monitor size={17} />,
  light: <Sun size={17} />,
  dark:  <Moon size={17} />,
};

const modeLabels: Record<ThemeMode, string> = {
  auto:  'Automático',
  light: 'Claro',
  dark:  'Oscuro',
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, isAuthenticated, loginWithGoogle, logout } = useAuth();
  const { mode, toggleMode } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-md shadow-lg shadow-gray-200/80 dark:shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/src/assets/logo.png" alt="TaoTeKing" className="w-10 h-10 object-contain dark:brightness-110" />
            <div className="hidden sm:block">
              <span className="block font-display font-bold text-gray-900 dark:text-white text-lg leading-none">TaoTeKing</span>
              <span className="block text-primary-600 dark:text-primary-400 text-xs font-medium">Club de Taekwondo</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.to
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-600/10'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleMode}
              title={`Tema: ${modeLabels[mode]}`}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200"
            >
              {modeIcons[mode]}
              <span className="text-xs font-medium">{modeLabels[mode]}</span>
            </button>

            {/* Auth */}
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {user?.picture ? (
                    <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full border-2 border-primary-600" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center">
                      <User size={16} className="text-white" />
                    </div>
                  )}
                  <span className="text-sm text-gray-600 dark:text-gray-300">{user?.name?.split(' ')[0]}</span>
                </div>
                <button onClick={logout} className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <LogOut size={16} />
                  Salir
                </button>
              </div>
            ) : (
              <button onClick={() => loginWithGoogle()} className="btn-primary text-sm py-2 px-5">
                <LogIn size={16} />
                Iniciar sesión
              </button>
            )}
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleMode}
              title={`Tema: ${modeLabels[mode]}`}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {modeIcons[mode]}
            </button>
            <button
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-white/5">
          <div className="container-custom py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-600/10'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
                <ChevronRight size={16} className="opacity-50" />
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-200 dark:border-white/5">
              {isAuthenticated ? (
                <button onClick={logout} className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  <LogOut size={16} /> Cerrar sesión
                </button>
              ) : (
                <button onClick={() => loginWithGoogle()} className="btn-primary w-full justify-center mt-2">
                  <LogIn size={16} /> Iniciar sesión con Google
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
