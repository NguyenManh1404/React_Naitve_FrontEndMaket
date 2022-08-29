import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WView from '../../components/core/WView';
// import Icon from 'react-native-vector-icons/FontAwesome'; // import Icon, *FontAwesome* là tên gói
// import {Icon} from 'react-native-eva-icons';
import {useTranslation, initReactI18next} from 'react-i18next';
import i18n from 'i18next';

const translationsVN = {title: 'Fakebook'};

i18n.use(initReactI18next).init({
  // compatibilityJSON: 'v3',
  resources: {
    en: {
      translations: translationsVN,
    },
  },
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const Home = () => {
  const {t} = useTranslation();

  return (
    <WView>
      <WView
        style={{
          width: '100%',
          backgroundColor: 'yellow',
          position: 'absolute',
          top: -300,
          zIndex: 1,
        }}>
        <Text>hhhhh</Text>
      </WView>
      <Text>{t('title')}</Text>
      {/* <Icon name="github" width={48} height={48} /> */}
    </WView>
  );
};

export default Home;

const styles = StyleSheet.create({});
