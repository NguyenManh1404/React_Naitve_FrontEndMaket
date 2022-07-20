import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import LoggedNavigation from './src/navigation/LoggedNavigation/LoggedNavigation';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return <LoggedNavigation />;
};

export default App;

const styles = StyleSheet.create({});
