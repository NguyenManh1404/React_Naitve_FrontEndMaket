import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome'; // import Icon, *FontAwesome* là tên gói
// import {Icon} from 'react-native-eva-icons';
const Home = () => {
  return (
    <View>
      <View
        style={{
          width: '100%',
          backgroundColor: 'yellow',
          position: 'absolute',
          top: -300,
          zIndex: 1,
        }}>
        <Text>hhhhh</Text>
      </View>
      <Text>Home</Text>
      {/* <Icon name="github" width={48} height={48} /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
