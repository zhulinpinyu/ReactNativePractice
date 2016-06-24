import React, { Component } from 'react';
import {
  Image,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ImageDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
         {/*default ios not allow http connect so you must config*/}
        <Image
          source={{uri: 'http://mat1.gtimg.com/www/images/qq2012/qqlogo_aoyun.png'}}
          style={{width: 300, height: 200}}
          resizeMode='contain'
        />
        <Image
          source={require('./redgui.jpg')}
          style={{width: 300, height: 300}}
          resizeMode='contain'
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
    backgroundColor: '#00ff99'
  }
})

AppRegistry.registerComponent('ImageDemo', () => ImageDemo);
