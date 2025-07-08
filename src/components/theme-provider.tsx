'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Theme = 'dark' | 'light';
type ColorTheme = 'blue' | 'green' | 'orange';

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
  toggleTheme: () => void;
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  defaultColorTheme = 'blue',
  storageKey = 'ui-theme',
  colorStorageKey = 'ui-color-theme',
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultColorTheme?: ColorTheme;
  storageKey?: string;
  colorStorageKey?: string;
}) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return defaultTheme;
    }
    try {
        const storedTheme = localStorage.getItem(storageKey);
        return (storedTheme as Theme) || defaultTheme;
    } catch (e) {
        return defaultTheme;
    }
  });

  const [colorTheme, setColorThemeState] = useState<ColorTheme>(() => {
    if (typeof window === 'undefined') {
      return defaultColorTheme;
    }
    try {
        const storedColorTheme = localStorage.getItem(colorStorageKey);
        return (storedColorTheme as ColorTheme) || defaultColorTheme;
    } catch (e) {
        return defaultColorTheme;
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);
  
  useEffect(() => {
    const body = window.document.body;
    body.classList.remove('theme-blue', 'theme-green', 'theme-orange');
    body.classList.add(`theme-${colorTheme}`);
    localStorage.setItem(colorStorageKey, colorTheme);
  }, [colorTheme, colorStorageKey]);

  const toggleTheme = useCallback(() => {
    setThemeState((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const value = {
    theme,
    setTheme: setThemeState,
    colorTheme,
    setColorTheme: setColorThemeState,
    toggleTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
