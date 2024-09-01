import { useState } from "react";

export function LanguageToggle() {
  //--- L'état du toggle (Français / Anglais) ---
  const [active, setActive] = useState(true);

  //--- Toggle de l'état ---
  function toggleActive() {
    setActive(!active);
  }

  return (
    <div className={`language-toggle ${active}`} onClick={toggleActive}>
      <p className="french-toggle">FR</p>
      <p className="english-toggle">EN</p>
    </div>
  );
}
