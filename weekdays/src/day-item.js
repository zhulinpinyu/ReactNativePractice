import React,{Component} from 'react'
import {
  Text,
  StyleSheet
} from 'react-native'

export default class DayItem extends Component{
  render(){
    return (
      <Text style={this.style()}>
        {this.props.day}
      </Text>
    )
  }

  style(){
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  }

  color(){
    const opacity = 1 / (this.props.dayUntil + 1)
    return 'rgba(0,0,0,'+ opacity +')'
  }
  fontWeight(){
    return ""+(7 - this.props.dayUntil ) * 100 + ""
  }
  fontSize(){
    return 60 - ( 6 * this.props.dayUntil)
  }
  lineHeight(){
    return 70 - ( 4 * this.props.dayUntil)
  }
}