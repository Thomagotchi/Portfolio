// ----- import de fonctions React -----
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// ----- import de l'application -----
import { App } from "./App.jsx";
// ----- import de fonction de traduction -----
import "./utils/translation/i18n.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
