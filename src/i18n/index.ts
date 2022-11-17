import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

 const localesResource = {
   vi: {
     translation: require('./vi.json'),
   },
   en: {
     translation: require('./en.json'),
   },
 };

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: localesResource,
  fallbackLng: 'en',
  // debug: true,
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
});

export default i18n;