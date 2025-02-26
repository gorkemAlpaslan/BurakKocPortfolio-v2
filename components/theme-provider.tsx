"use client";

import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
} from "next-themes";
import { createContext, useContext, useEffect, useState } from "react";
import { getSystemTheme } from "@/lib/utils";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Yeni tema context'i oluştur
const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => null,
});

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const {
    theme: nextTheme,
    setTheme: setNextTheme,
    systemTheme,
  } = useNextTheme();

  // Eğer next-themes çalışıyorsa, sistem temasını veya next-themes temayı kullan
  const activeTheme = nextTheme === "system" ? systemTheme : nextTheme;

  // Manuel state yönetimi (next-themes olmazsa çalışacak)
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = window.localStorage.getItem("theme") as Theme;
      if (savedTheme) return savedTheme;
    }
    return getSystemTheme();
  });

  useEffect(() => {
    // Eğer next-themes varsa, tema değişikliğini onun üzerinden yap
    if (nextTheme) {
      setTheme(activeTheme as Theme);
    } else {
      // Eğer next-themes çalışmıyorsa, sistem temasına göre değişiklik yap
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        if (!window.localStorage.getItem("theme")) {
          setTheme(e.matches ? "dark" : "light");
        }
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [nextTheme, activeTheme]);

  useEffect(() => {
    // HTML class'ını güncelle
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (setNextTheme) {
      setNextTheme(theme === "dark" ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <NextThemesProvider {...props}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </NextThemesProvider>
  );
}

// Hook: ThemeContext kullanımı
export const useTheme = () => useContext(ThemeContext);
