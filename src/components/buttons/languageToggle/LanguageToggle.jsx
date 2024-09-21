// ----- import du SASS -----
import "./languageToggle.scss";
// ----- import de fonction React -----
import { useState } from "react";
// ----- import de fonction de traduction -----
import i18next from "i18next";

// ----- Composant 'LanguageToggle' -----
export function LanguageToggle() {
  // Ces deux variables vérifie si une langue est déjà active dans le local storage
  const activeLanguage = localStorage.getItem("currentLanguage");
  const [currentLanguage, setCurrentLanguage] = useState(activeLanguage);

  //--- Toggle de la language ---
  function languageSwitch() {
    switch (currentLanguage) {
      case "fr":
        setCurrentLanguage("en");
        i18next.changeLanguage("en", (err) => {
          if (err) return console.log("something went wrong loading", err);
          localStorage.setItem("currentLanguage", "en");
        });
        break;
      default:
        setCurrentLanguage("fr");
        i18next.changeLanguage("fr", (err) => {
          if (err) return console.log("something went wrong loading", err);
          localStorage.setItem("currentLanguage", "fr");
        });
    }
  }

  return (
    <div
      className={`language-toggle language-toggle-${currentLanguage}`}
      onClick={languageSwitch}
    >
      <p className="english-toggle">EN</p>
      <p className="french-toggle">FR</p>
    </div>
  );
}
