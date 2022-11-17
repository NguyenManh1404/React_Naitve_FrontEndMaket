import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
const Video = () => {
  return (
    <View>
      <Text>Mapdemo</Text>
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          zoomControlEnabled={true}
          zoomEnabled={true}
          style={{
            height: 180,
          }}
          region={{
            latitude: 16.069560532577032,
            longitude: 108.23408695899637,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            coordinate={{
              latitude: 16.069560532577032,
              longitude: 108.23408695899637,
            }}>
            <Callout>
              <Text>Address</Text>
            </Callout>
          </Marker>
        </MapView>
      </View>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
});
