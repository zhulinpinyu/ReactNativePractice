import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Main extends Component {
  render(){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>
          Main
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('submain')}
          title="Go SubMain"
        />
      </View>
    )
  }
}
