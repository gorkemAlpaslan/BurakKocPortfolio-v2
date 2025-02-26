"use client";

import type React from "react";

import { createContext, useContext, useEffect, useState } from "react";
import { getSystemTheme } from "@/lib/utils";

type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => null,
});

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Başlangıçta sistem temasını kullan
  const [theme, setTheme] = useState<Theme>(() => {
    // localStorage'dan kayıtlı temayı kontrol et
    if (typeof window !== "undefined") {
      const savedTheme = window.localStorage.getItem("theme") as Theme;
      if (savedTheme) return savedTheme;
    }
    // Kayıtlı tema yoksa sistem temasını kullan
    return getSystemTheme();
  });

  useEffect(() => {
    // Sistem tema değişikliklerini dinle
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      // Sadece localStorage'da kayıtlı tema yoksa sistem temasını takip et
      if (!window.localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // Tema değiştiğinde HTML class'ını ve localStorage'ı güncelle
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
