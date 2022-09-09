import {Image, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';

import {MenuTapList} from '../MenuTapList';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import WView from '../../components/core/WView';
import WText from '../../components/core/WText';

const Tab = createMaterialTopTabNavigator();

const LoggedNavigation = () => {
  const navigationRef = useNavigationContainerRef();
  const [currentRouteName, setCurrentRouteName] = useState<string>('Home');
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={async () => {
        const currentRouteNameState = navigationRef.getCurrentRoute().name;
        setCurrentRouteName(currentRouteNameState);
      }}>
      {currentRouteName === 'Home' ? (
        <WView mHoz={20} color={'white'}>
          <WText style={styles.logoText} color={'#0d8af0'}>
            fakebook
          </WText>
          <WView></WView>
        </WView>
      ) : null}

      <Tab.Navigator>
        {MenuTapList.map((e, index) => {
          const {name, component, title, iconActive, iconUnActive} = e;
          return (
            <Tab.Screen
              key={index}
              name={name}
              component={component}
              options={{
                tabBarShowLabel: false,
                tabBarLabel: ({color, size, focused}) => (
                  <Text
                    style={{
                      color: focused ? 'rgb(18, 136, 58)' : 'grey',
                      fontSize: 10,
                      fontWeight: focused ? 'bold' : 'normal',
                    }}>
                    {title}
                  </Text>
                ),
                tabBarIcon: ({color, size, focused}) => (
                  <Image
                    source={focused ? iconActive : iconUnActive}
                    style={{
                      width: '100%',
                      height: '100%',
                      tintColor: '#0d8af0',
                    }}
                  />
                ),
              }}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default LoggedNavigation;

const styles = StyleSheet.create({
  logoText: {
    fontWeight: 'bold',
    fontSize: 26,
    fontFamily: 'Muli-SemiBold',
  },
});
