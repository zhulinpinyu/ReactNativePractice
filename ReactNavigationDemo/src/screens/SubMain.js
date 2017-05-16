import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class SubMain extends Component {
  static navigationOptions = {
    tabBarVisible: false
  }
  render(){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>
          SubMain
        </Text>
      </View>
    )
  }
}
