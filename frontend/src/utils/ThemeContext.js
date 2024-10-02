import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedTheme = localStorage.getItem("themeMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add("light_mode");
    } else {
      document.documentElement.classList.remove("light_mode");
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("themeMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
