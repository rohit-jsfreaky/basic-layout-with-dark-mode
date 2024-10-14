import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  // Load saved theme from localStorage or default to 'light'
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const toggleTheme = () => {
    setIsDarkMode((prevState) => {
      const newTheme = !prevState;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light'); // Save theme to localStorage
      return newTheme;
    });
  };

  const theme = isDarkMode ? 'dark' : 'light';

  // Apply theme class to HTML on initial load and theme change
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
