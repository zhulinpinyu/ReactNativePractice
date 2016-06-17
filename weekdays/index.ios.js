import React,{Component} from 'react'
import {
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native'
import Moment from 'moment'

import DayItem from './src/day-item'

//create component
class Weekdays extends Component{
  renderDays(){
    var dayItems = []
    for(let i = 0; i < 7; i++) {
      const day = Moment().add(i,'days').format('dddd')
      dayItems.push(<DayItem key={i} dayUntil={i} day={day}/>)
    }
    return dayItems
  }

  render(){
    return (
      <View style={styles.container}>
        {this.renderDays()}
      </View>
    )
  }
}

//Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

//show component on Screen

AppRegistry.registerComponent('weekdays',()=>{
  return Weekdays
})