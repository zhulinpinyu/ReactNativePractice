import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Second extends Component {
  render(){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>
          Second
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('subsecond')}
          title="Go SubSecond"
        />
      </View>
    )
  }
}
