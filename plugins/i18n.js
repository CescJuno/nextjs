import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import ko from "../locales/ko.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "en-US": {
        translations: en,
      },
      "ko-KR": {
        translations: ko,
      },
    },
    // fallbackLng: ['en', 'ko'],
    fallbackLng: [`en-US`, `ko-KR`],
    ns: [`translations`],
    defaultNS: `translations`,
    interpolation: {
      escapeValue: false,
    },
    debug: false,
    react: {
      useSuspense: false,
    },
    lng: "ko-KR",
  });

export default i18n;
