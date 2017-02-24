import React, { Component } from 'react'
import { AppRegistry, Alert } from 'react-native'
import PasswordGesture from 'react-native-gesture-password'

class GesturePassword extends Component {
  state = {
    message: 'Please input your password.',
    status: 'normal'
  }

  onEnd(password) {
    if (password == '1235789') {
      this.setState({
        status: 'right',
        message: 'Password is right, success.'
      })
      Alert.alert("解锁🔓成功")
    } else {
      this.setState({
        status: 'wrong',
        message: 'Password is wrong, try again.'
      })
      Alert.alert("解锁🔓失败")
    }
  }

  onStart() {
    this.setState({
        status: 'normal',
        message: 'Please input your password.'
    })
  }

  onReset() {
    //interval 设置为2秒 过时自动清理手势图案
    this.setState({
      status: 'normal',
      message: 'Please input your password (again).'
    })
  }

  render() {
    return (
      <PasswordGesture
        ref='pg'
        interval={2000}
        status={this.state.status}
        message={this.state.message}
        onStart={this.onStart.bind(this)}
        onEnd={this.onEnd.bind(this)}
        onReset={this.onReset.bind(this)}
        />
    )
  }
}


AppRegistry.registerComponent('GesturePassword', () => GesturePassword);
