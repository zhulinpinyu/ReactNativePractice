import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import DetailComponent from './DetailComponent'

export default class HomeComponent extends Component {

  constructor(){
    super()
    this.state = {
      id: 1,
      user: null
    }
  }

  pressBtn(){
    const navigator = this.props.navigator
    navigator.push({
      name: 'Detail',
      component: DetailComponent,
      params: {
        id: this.state.id,
        setUser: (user) => {
          this.setState({...this.state,user})
        }
      }
    })
  }

  renderInfo(){
    if(this.state.user){
      return (
        <View style={styles.container}>
          <Text>User: {JSON.stringify(this.state.user)}</Text>
          <TouchableOpacity onPress={this.pressBtn.bind(this)}>
              <Text>点我看详细</Text>
          </TouchableOpacity>
        </View>
      )
    }else{
      return (
        <TouchableOpacity onPress={this.pressBtn.bind(this)}>
            <Text>点我看详细</Text>
        </TouchableOpacity>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to HomeComponent
        </Text>
        {this.renderInfo()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
