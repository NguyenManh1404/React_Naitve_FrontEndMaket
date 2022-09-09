import i18n from 'i18next';
// localization/index.ts
// import moment from 'moment';
import {initReactI18next} from 'react-i18next';
// import { LocaleConfig as RNCalendarsLocaleConfig } from 'react-native-calendars';
// import * as RNLocalize from 'react-native-localize';
import translations from './translations';

type AppLanguageCode = 'en';

// export const userLanguage = RNLocalize.getLocales()[0].languageCode;
const FALLBACK_LANGUAGE: AppLanguageCode = 'en';
const DEFAULT_NAMESPACE = 'common';

// Object.keys(translations).forEach(locale => {
//   RNCalendarsLocaleConfig.locales[locale] = {
//     monthNames: moment.localeData(locale).months(),
//     monthNamesShort: moment.localeData(locale).monthsShort(),
//     dayNames: moment.localeData(locale).weekdays(),
//     dayNamesShort: moment.localeData(locale).weekdaysMin(),
//   };
// });

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: translations,
  fallbackLng: FALLBACK_LANGUAGE,
  lng: userLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export function setLanguage(language: AppLanguageCode) {
  if (Object.keys(translations).includes(language)) {
    i18n.changeLanguage(language);
  }
}

export default i18n;
