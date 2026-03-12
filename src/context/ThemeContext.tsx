import { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'auto' | 'light' | 'dark';
export type ResolvedTheme = 'light' | 'dark';

const STORAGE_KEY = 'taoteking-theme';
const MODE_CYCLE: ThemeMode[] = ['auto', 'light', 'dark'];

function getTimeBasedTheme(): ResolvedTheme {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? 'light' : 'dark';
}

function resolveTheme(mode: ThemeMode): ResolvedTheme {
  return mode === 'auto' ? getTimeBasedTheme() : mode;
}

function getInitialMode(): ThemeMode {
  const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
  if (stored === 'light' || stored === 'dark' || stored === 'auto') return stored;
  return 'auto';
}

interface ThemeContextValue {
  theme: ResolvedTheme;
  mode: ThemeMode;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  mode: 'auto',
  toggleMode: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode);
  const theme = resolveTheme(mode);

  // Track last visit
  useEffect(() => {
    localStorage.setItem('taoteking-last-visit', new Date().toISOString());
  }, []);

  // Apply/remove 'dark' class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Persist mode choice
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  // Auto mode: re-evaluate every minute as time passes
  useEffect(() => {
    if (mode !== 'auto') return;
    const interval = setInterval(() => {
      const resolved = getTimeBasedTheme();
      const root = document.documentElement;
      if (resolved === 'dark') root.classList.add('dark');
      else root.classList.remove('dark');
    }, 60_000);
    return () => clearInterval(interval);
  }, [mode]);

  const toggleMode = () => {
    const idx = MODE_CYCLE.indexOf(mode);
    setMode(MODE_CYCLE[(idx + 1) % MODE_CYCLE.length]);
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
