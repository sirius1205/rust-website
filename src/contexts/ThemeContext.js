import React from 'react';
import { useEffect } from 'react';

import { testInfraLink } from '../components/default/Link';

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

function getUrlColorMode(location) {
  const currentUrl = location.href;
  const searchParams = new URL(currentUrl).searchParams;
  const mode = searchParams.get('mode');

  if (mode === 'dark' || mode === 'light') {
    searchParams.delete('mode');
    window.history.replaceState(null, null, location.pathname + searchParams);
    return mode;
  }

  return false;
}

const referrer = document.referrer;

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, value }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);
  const referrerInfra = testInfraLink(referrer);

  useEffect(() => {
    const { location } = value;
    rawSetColorMode(getInitialColorMode());
    if (getUrlColorMode(location)) setColorMode(getUrlColorMode(location));
    // reset scroll position to top when navigate between stacks
    if (referrerInfra) window.scrollTo(0, 0);
  }, []);

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

  return <ThemeContext.Provider value={{ colorMode, setColorMode }}>{children}</ThemeContext.Provider>;
};
