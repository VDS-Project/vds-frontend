// contexts/ThemeContext.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isLoaded: boolean;
  initializePlugins: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const initializePlugins = () => {
    // Initialize any theme plugins here if needed
    // เนื่องจากเรา import CSS แล้ว ส่วนใหญ่จะทำงานอัตโนมัติ
    console.log("Theme CSS loaded and initialized");
  };

  useEffect(() => {
    // Wait for DOM to be ready then initialize
    const timer = setTimeout(() => {
      initializePlugins();
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Add body class for theme compatibility
  useEffect(() => {
    document.body.setAttribute("data-plugin-page-transition", "");
    const bodyDiv = document.querySelector(".body");
    if (!bodyDiv) {
      document.body.classList.add("body");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        isLoaded,
        initializePlugins,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
