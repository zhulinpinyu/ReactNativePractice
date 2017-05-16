import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Welcome extends Component {

  render(){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#008000'}}>
        <Text style={{fontSize: 30}}>
          Welcome
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('main')}
          title="Go Go Go !!!"
        />
      </View>
    )
  }
}
