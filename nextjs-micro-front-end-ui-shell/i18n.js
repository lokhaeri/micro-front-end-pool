import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "welcome": "Welcome to React and react-i18next",
      "about": "This is about us",
      "menu.home": "Home page",
      "menu.about": "About us",
      "menu.settings": "Settings",
      "settings.choose_language": "Choose language:"
    }
  },
  de: {
    translation: {
      "welcome": "Herzlig wilkomen nach React und react-i18next",
      "about": "Dieses ist uber uns",
      "menu.home": "Startseite",
      "menu.about": "Über uns",
      "menu.settings": "die Einstellungen",
      "settings.choose_language": "Sprache wählen:"
    }
  }

};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    whitelist: ["en", "de"],
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
