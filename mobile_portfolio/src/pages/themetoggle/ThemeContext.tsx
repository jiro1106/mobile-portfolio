import React, { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";

// define theme
type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

// default value = null
const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<"light" | "dark">(systemTheme || "light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// error catching
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
