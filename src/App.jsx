import { Router } from "./Router";
import { ThemeProvider } from "./utils/translation/context/theme";

import "./styles/styles.scss";
import { useEffect, useState } from "react";

export function App() {
  const localTheme = localStorage.getItem("theme");

  if (!localStorage.getItem("transActive")) {
    localStorage.setItem("transActive", false);
  }

  const [themeMode, setThemeMode] = useState(
    localTheme === "dark" ? "dark" : "light"
  );

  const darkTheme = () => {
    localStorage.setItem("theme", "dark");
    setThemeMode("dark");
  };
  const lightTheme = () => {
    localStorage.setItem("theme", "light");
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <Router />;
    </ThemeProvider>
  );
}
