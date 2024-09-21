// ----- import de fonction de traduction -----
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// ----- import des traductions -----
import * as frTranslation from "../../assets/i18n/fr.json";
import * as enTranslation from "../../assets/i18n/en.json";

// Les traductions sont stocker dans des fichiers JSON séparer
const resources = {
  fr: {
    translation: frTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "fr",
  lng: "fr",

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
