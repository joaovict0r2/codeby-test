import {
  useState, createContext, useMemo, useEffect, 
} from 'react';

export const AppContext = createContext({});

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light',
  );

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  const providerValue = useMemo(
    () => ({
      theme,
      handleToggleTheme,
    }),
    [theme, handleToggleTheme],
  );

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
}
