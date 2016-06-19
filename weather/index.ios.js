import React, {Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  MapView,
  View,
  Text
} from 'react-native'

import fetchWeather from './src/api'

class Weather extends Component{

  constructor(){
    super()
    this.state = {
      pin: {
        latitude: 22.53,
        longitude: 114.02
      },
      weather: {
        city: null,
        temp: null,
        descr: null
      }
    }
  }

  handleRegionChange(region){
    this.setState({
      pin: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    })
    fetchWeather(region.latitude,region.longitude)
    .then((res)=>{
      this.setState(res)
    })
  }

  render(){
    return (
      <View style={style.container}>
        <MapView
        annotations={[this.state.pin]}
        onRegionChangeComplete = {this.handleRegionChange.bind(this)}
        style={style.map}></MapView>
        <View style={style.textWrapper}>
          <Text style={style.text}>{this.state.city}</Text>
          <Text style={style.text}>{this.state.temp}</Text>
          <Text style={style.text}>{this.state.descr}</Text>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  map: {
    flex: 1,
    marginTop: 20
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
})

AppRegistry.registerComponent('weather', () => Weather )