import { createContext, createElement, useContext, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const ThemeContext = createContext(null);

const themes = {
  dark: {
    name: 'dark',
    bodyClassName: 'theme-dark',
    colors: {
      background: '#05070a',
      foreground: '#f8fafc',
    },
  },
  light: {
    name: 'light',
    bodyClassName: 'theme-light',
    colors: {
      background: '#f4f7fb',
      foreground: '#0f172a',
    },
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('university-theme') || 'dark');

  useEffect(() => {
    const nextTheme = themes[theme] ? theme : 'dark';
    const themeConfig = themes[nextTheme];

    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(themeConfig.bodyClassName);
    localStorage.setItem('university-theme', nextTheme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === 'dark',
      setTheme,
      toggleTheme: () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark')),
    }),
    [theme],
  );

  return createElement(
    ThemeContext.Provider,
    { value },
    createElement(
      motion.div,
      {
        animate: {
          backgroundColor: themes[theme]?.colors.background ?? themes.dark.colors.background,
          color: themes[theme]?.colors.foreground ?? themes.dark.colors.foreground,
        },
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        className: 'min-h-screen transition-colors duration-500',
      },
      children,
    ),
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}
