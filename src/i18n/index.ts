import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enFaq from './locales/en/faq.json';
import enPrivacy from './locales/en/privacy.json';

import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';
import esFaq from './locales/es/faq.json';
import esPrivacy from './locales/es/privacy.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        faq: enFaq,
        privacy: enPrivacy,
      },
      es: {
        common: esCommon,
        home: esHome,
        faq: esFaq,
        privacy: esPrivacy,
      },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    defaultNS: 'common',
    ns: ['common', 'home', 'faq', 'privacy'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
