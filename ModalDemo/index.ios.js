import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Modal
} from 'react-native';

class ModalDemo extends Component {

  constructor(){
    super()
    this.state = {
      visible: false
    }
  }

  _setModalVisible(visible){
    this.setState({...this.state,visible: visible})
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          visible={this.state.visible}
        >
          <View style={[styles.container]}>
            <View style={[styles.innerContainer]}>
              <Text>This modal was presented </Text>
              <TouchableHighlight
                onPress={this._setModalVisible.bind(this,false)}
                underlayColor="#a9d9d4">
                <Text style={styles.welcome}>
                  close
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={this._setModalVisible.bind(this,true)}
          underlayColor="#a9d9d4">
          <Text style={styles.welcome}>
            Please Show a Modal
          </Text>
        </TouchableHighlight>
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
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    backgroundColor: '#f0f0ff'
  }
});

AppRegistry.registerComponent('ModalDemo', () => ModalDemo);
