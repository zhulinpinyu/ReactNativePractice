import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

let id=0

export default class App extends Component {
  state = {
    markers: []
  }

  randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  onMapPress(e){
    this.setState({
      markers: [
        ...this.state.markers,
        {
          id: id++,
          coordinate: e.nativeEvent.coordinate,
          color: this.randomColor()
        }
      ]
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followsUserLocation={true}
          onLongPress={this.onMapPress.bind(this)}>
          {
            this.state.markers.map(marker => {
              return (
                <MapView.Marker
                  key={marker.id}
                  coordinate={marker.coordinate}
                  pinColor={marker.color}
                />
              )
            })
          }
        </MapView>
        <View style={styles.label}>
          <Text style={styles.labelText}>Map</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  label: {
    flexDirection: 'row',
    paddingTop: 60,
    paddingLeft: 60,
    backgroundColor: 'transparent'
  },
  labelText: {
    fontSize: 20
  }
}
