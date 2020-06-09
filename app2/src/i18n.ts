import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLangFromCookie } from "./helpers/detectLanguage";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "title1": "Micro Front End - App2",
      "description": "This is an example of micro front end project that was loaded from the initial UI Shell application.",
    }
  },
  de: {
    translation: {
      "title1": "Micro-Front-End - Applikation No.2",
      "description": "Dies ist ein Beispiel für ein Micro-Front-End-Projekt, das aus der ursprünglichen UI-Shell-Anwendung geladen wurde.",
    }
  }

};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getLangFromCookie(),
    whitelist: ["en", "de"],
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
