import { createContext, useContext, useEffect, useState } from "react";


 const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme" || "light"));

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const valuee = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={valuee}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

