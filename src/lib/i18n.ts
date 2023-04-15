import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import common_ar from "data/translations/ar.json";
import common_en from "data/translations/en.json";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      common: common_en,
    },
    ar: {
      common: common_ar,
    },
  },
});

export default i18next;
