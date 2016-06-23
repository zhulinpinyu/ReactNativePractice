import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

class ActivityIndicatorDemo extends Component {

  constructor(){
    super()
    this.state ={
      animating: true
    }
  }

  setToggleTimeout() {
    //三秒显示一次
    setInterval(() => {
      this.setState({animating: !this.state.animating})
    }, 3000)
  }

  componentDidMount() {
    this.setToggleTimeout()
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={this.state.animating}
          style={[styles.centering]}
          size="large"
          color="#ff00ff"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAFFFF',
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('ActivityIndicatorDemo', () => ActivityIndicatorDemo);
