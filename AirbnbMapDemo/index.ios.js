import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import MapView from 'react-native-maps'

export default class AirbnbMapDemo extends Component {
  render() {
    return (
      <MapView
        style={{flex: 1}}
        showsUserLocation={true}
        followsUserLocation={true}
      />
    );
  }
}

AppRegistry.registerComponent('AirbnbMapDemo', () => AirbnbMapDemo);
