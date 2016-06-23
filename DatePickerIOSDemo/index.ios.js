
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DatePickerIOS
} from 'react-native';

class DatePickerIOSDemo extends Component {
  constructor(){
    super()
    this.state = {
      date: new Date()
    }
  }

  handleDateChange(date){
    this.setState({date:date})
  }

  render() {
    const date = this.state.date
    return (
      <View style={styles.container}>
        <DatePickerIOS
          date={date}
          mode="date"
          onDateChange={this.handleDateChange.bind(this)}
        />
        <DatePickerIOS
          date={date}
          mode="time"
          onDateChange={this.handleDateChange.bind(this)}
        />
        <DatePickerIOS
          date={date}
          mode="datetime"
          onDateChange={this.handleDateChange.bind(this)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#55FFFF',
  }
});

AppRegistry.registerComponent('DatePickerIOSDemo', () => DatePickerIOSDemo);
