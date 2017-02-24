import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import RNShakeEvent from 'react-native-shake-event'
import Image from 'react-native-image-progress'
import ProgressBar from 'react-native-progress/Bar'

KEYS = ['abstract', 'animals', 'business', 'cats', 'city', 'food', 'nightlife', 'fashion', 'people', 'nature', 'sports', 'technics', 'transport']

export default class Shaker extends Component {
  state = {
    now: ''
  }

  componentWillMount() {
    RNShakeEvent.addEventListener('shake', () => {
      const key = KEYS[Math.floor(Math.random() * KEYS.length)]
      this.setState({
        now: new Date().toLocaleString(),
        uri: `http://lorempixel.com/400/300/${key}/`
      })
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
        <Image
          source={{ uri: this.state.uri }}
          indicator={ProgressBar}
          style={{
            width: 400,
            height: 300,
          }}/>
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
