import 'react-i18next';
import translations from './translations';

declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: typeof translations['en'];
  }
}
