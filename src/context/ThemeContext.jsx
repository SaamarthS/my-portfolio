/**
 * ThemeContext — manages dark/light mode state
 * Persists to localStorage so preference survives refreshes
 */
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    // Read from localStorage on first load
    const stored = localStorage.getItem('ss-theme');
    if (stored) return stored === 'dark';
    // Respect OS preference as fallback
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Sync the `dark` class to <html> element (Tailwind convention)
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('ss-theme', dark ? 'dark' : 'light');
  }, [dark]);

  const toggleDark = () => setDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
