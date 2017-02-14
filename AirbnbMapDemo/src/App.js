import React, { Component } from 'react';
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
      <MapView
        style={{flex: 1}}
        showsUserLocation={true}
        followsUserLocation={true}
        onLongPress={this.onMapPress.bind(this)}
      >
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
    );
  }
}
