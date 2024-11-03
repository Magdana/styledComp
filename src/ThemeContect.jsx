import React, { createContext, useState, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const lightTheme = {
  background: "#FFFFFF",
  textColor: "#333333",
  buttonColor: "#4CAF50",
};

const darkTheme = {
  background: "#18181B",
  textColor: "#FFFFFF",
  buttonColor: "#E05A3F",
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeSettings = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themeSettings}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
