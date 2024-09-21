// ----- import du SASS général du site -----
import "./styles/styles.scss";
// ----- import de fonction React -----
import { useEffect, useState } from "react";
// ----- import de fonction de traduction -----
import i18next from "i18next";
// ----- import de du router de l'application -----
import { Router } from "./Router";
// ----- import du context de theme -----
import { ThemeProvider } from "./utils/context/theme";

// ----- L'application -----
export function App() {
  // Ces variables vérifie si l'utilisateur à déjà choisi un theme et langue
  const localTheme = localStorage.getItem("theme");
  const activeLanguage = localStorage.getItem("currentLanguage");

  // Change la langue de l'application si l'utilisateur a déjà visiter le site
  switch (activeLanguage) {
    case "en":
      i18next.changeLanguage("en", (err) => {
        if (err) return console.log("something went wrong loading", err);
      });
      break;
    default:
      localStorage.setItem("currentLanguage", "fr");
  }

  // Change le theme de l'application si l'utilisateur a déjà visiter le site
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

  // Cela applique le theme actif
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
