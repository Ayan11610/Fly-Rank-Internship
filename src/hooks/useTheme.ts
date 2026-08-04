import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    // Defaulting to dark mode for modern high-quality developer aesthetics
    root.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    // Scaffold hook, currently enforces dark
    setTheme("dark");
  };

  return { theme, toggleTheme };
}
