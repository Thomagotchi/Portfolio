import { useState } from "react";
import "./languageToggle.scss";
import i18next from "i18next";

export function LanguageToggle() {
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
