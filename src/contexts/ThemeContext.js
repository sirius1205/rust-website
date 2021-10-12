import React from 'react';
import { useEffect } from 'react';

function getInitialColorMode() {
  if (typeof window !== 'undefined') {
    const persistedColorPreference = window.localStorage.getItem('theme');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';

    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }
  }

  return 'light';
}

function testQueryMode(searchParams) {
  if (searchParams) {
    const mode = searchParams.get('mode');

    if (mode === 'dark' || mode === 'light') {
      return mode;
    } else {
      return false;
    }
  } else return false;
}

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const searchParams = currentUrl && new URL(currentUrl).searchParams;

  const setColorMode = value => {
    rawSetColorMode(value);
    // Set Tailwind color mode
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    // Persist on update
    localStorage.theme = value;
  };

  // update color mode from query
  if (testQueryMode(searchParams)) {
    setColorMode(testQueryMode(searchParams));
    searchParams.delete('mode');
    // remove mode param from query
    window.history.replaceState(null, null, location.pathname + (searchParams.toString() ? '?' + searchParams : ''));
  }

  // update color mode if not set from query
  useEffect(() => {
    if (!testQueryMode(searchParams)) rawSetColorMode(getInitialColorMode());
  }, []);

  return <ThemeContext.Provider value={{ colorMode, setColorMode }}>{children}</ThemeContext.Provider>;
};
