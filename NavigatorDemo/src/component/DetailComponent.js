import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import HomeComponent from './HomeComponent'

const USERS = [
  {id: 1,profile: {name: "王二", age: 97}},
  {id: 2,profile: {name: "李小锤", age: 5}}
]

export default class DetailComponent extends Component {

  pressBtn(){
    const {navigator} = this.props
    this.props.setUser(USERS[this.props.id - 1])
    navigator.pop()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to DetailComponent
        </Text>
        <Text>id: {this.props.id}</Text>
        <TouchableOpacity onPress={this.pressBtn.bind(this)}>
            <Text>点我回去</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
