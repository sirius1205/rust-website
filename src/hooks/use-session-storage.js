import { useEffect, useState } from 'react';

function getSessionStorageOrDefault(key, defaultValue) {
  const stored = window.sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

function useSessionStorage(key, defaultValue) {
  const [value, setValue] = useState(getSessionStorageOrDefault(key, defaultValue));

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useSessionStorage;
