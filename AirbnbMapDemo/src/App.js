import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import axios from 'axios'

let id=0

export default class App extends Component {
  state = {
    markers: [],
    center: null,
    region: null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
        const {coords: {latitude, longitude}} = position
        axios.get(`https://restapi.amap.com/v3/assistant/coordinate/convert?key=key&locations=${longitude},${latitude}&coordsys=gps`)
        .then(res => {
          const [lng,lat] = res.data.locations.split(',')
          this.setState({
            center: {
              longitude: parseFloat(lng),
              latitude: parseFloat(lat)
            },
            region: {
              latitude: parseFloat(lat),
              longitude: parseFloat(lng),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }
          })
        })
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  onMapPress(e){
    this.setState({
      ...this.state,
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

  renderCenter(){
    if(this.state.center){
      return (
        <MapView.Marker
          coordinate={this.state.center}
        />
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followsUserLocation={false}
          onLongPress={this.onMapPress.bind(this)}
          region={this.state.region}>
          {this.renderCenter()}
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
