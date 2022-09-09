import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MenuTapList} from '../MenuTapList';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const LoggedNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen
          name="Homes"
          component={Home}
          options={{
            tabBarContentContainerStyle: {
              height: 100,
              // backgroundColor: 'red',
              marginTop: 200,
            },
            tabBarShowLabel: false,
    
          }}></Tab.Screen> */}
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

const styles = StyleSheet.create({});
