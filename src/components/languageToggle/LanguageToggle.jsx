import { useState } from "react";
import "./languageToggle.scss";
import i18next from "i18next";

export function LanguageToggle() {
  //--- L'état du toggle (Français / Anglais) ---
  const [active, setActive] = useState(localStorage.getItem("transActive"));

  //--- Toggle de l'état ---
  function toggleActive() {
    setActive(!active);

    if (active) {
      i18next.changeLanguage("fr", (err) => {
        if (err) return console.log("something went wrong loading", err);
        localStorage.setItem("transActive", !active);
      });
    } else {
      i18next.changeLanguage("en", (err) => {
        if (err) return console.log("something went wrong loading", err);
        localStorage.setItem("transActive", !active);
      });
    }
  }

  return (
    <div
      className={`language-toggle language-toggle-${active}`}
      onClick={toggleActive}
    >
      <p className="english-toggle">EN</p>
      <p className="french-toggle">FR</p>
    </div>
  );
}
