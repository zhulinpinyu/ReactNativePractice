import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import RNShakeEvent from 'react-native-shake-event'

export default class Shaker extends Component {
  state = {
    now: ''
  }

  componentWillMount() {
    RNShakeEvent.addEventListener('shake', () => {
      this.setState({now: new Date().toLocaleString()})
    });
  }

  componentWillUnmount() {
    RNShakeEvent.removeEventListener('shake');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          { this.state.now }
        </Text>
        <Text>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

const styles = {
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
    fontWeight: '600'
  }
}
