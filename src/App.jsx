import { Router } from "./Router";
import { ThemeProvider } from "./utils/context/theme";
import "./styles/styles.scss";
import { useEffect, useState } from "react";
import i18next from "i18next";

export function App() {
  const localTheme = localStorage.getItem("theme");

  const activeLanguage = localStorage.getItem("currentLanguage");

  // Switch language to current language if user has already modified the language
  switch (activeLanguage) {
    case "en":
      i18next.changeLanguage("en", (err) => {
        if (err) return console.log("something went wrong loading", err);
      });
      break;
    default:
      localStorage.setItem("currentLanguage", "fr");
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
    document.getElementById("root").classList.remove("dark", "light");
    document.getElementById("root").classList.add(themeMode);
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <Router />
    </ThemeProvider>
  );
}
