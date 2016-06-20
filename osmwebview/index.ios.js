import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

class osmwebview extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          accessible={false}
          source={{uri: 'http://m.amap.com/'}}
          style={styles.webview} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  webview:{
    flex: 1,

  }
});

AppRegistry.registerComponent('osmwebview', () => osmwebview);
