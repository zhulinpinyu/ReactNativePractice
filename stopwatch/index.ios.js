import React,{Component} from 'react'
import formatTime from 'minutes-seconds-milliseconds'
import {
  AppRegistry,
  TouchableHighlight,
  View,
  ScrollView,
  Text,
  StyleSheet
} from 'react-native'

class StopWatch extends Component{

  constructor(){
    super()
    this.state = {
      timeElapsed: null,
      running: false,
      startTime: null,
      laps:[]
    }
  }

  render(){
    return (
      <View style={style.container}>
        <View style={[style.header]}>
          <View style={[style.timerWrapper]}>
            <Text style={style.timer}>
              {formatTime(this.state.timeElapsed)}
            </Text>
          </View>
          <View style={[style.btnWrapper]}>
            {this.renderStopStartBtn()}
            {this.renderLapBtn()}
          </View>
        </View>
        <ScrollView>
          {this.renderLaps()}
        </ScrollView>
      </View>
    )
  }

  renderLaps(){
    return this.state.laps.map((lap,i) => {
      return (
        <View key={i} style={style.lap}>
          <Text style={style.lapText}>
            Lap {i+1}
          </Text>
          <Text style={style.lapText}>
            {formatTime(lap)}
          </Text>
        </View>
      )
    })
  }

  renderStopStartBtn(){
    return (
      <TouchableHighlight
        underlayColor="gray"
        onPress={this.handleStartPress.bind(this)}
        style={[style.button,(this.state.running ? style.stopBtn : style.startBtn)]}>
        <Text>
          {this.state.running ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
    )
  }

  handleStartPress(){
    if(this.state.running){
      clearInterval(this.interval)
      this.setState({running: false})
      return
    }
    this.setState({startTime: new Date()})
    this.interval = setInterval(()=>{
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      })
    },100)
  }

  renderLapBtn(){
    return (
      <TouchableHighlight
        underlayColor="gray"
        onPress={this.handleLapPress.bind(this)}
        style={style.button}>
        <Text>
          Lap
        </Text>
      </TouchableHighlight>
    )
  }

  handleLapPress(){
    const lap = this.state.timeElapsed
    if(this.state.running){
      this.setState({
        startTime: new Date(),
        laps: this.state.laps.concat([lap])
      })
    }
  }

  background(color){
    return {
      backgroundColor: color
    }
  }

  border(color){
    return {
      borderColor: color,
      borderWidth: 2
    }
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startBtn: {
    borderColor: '#00cc00'
  },
  stopBtn: {
    borderColor: '#cc0000'
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lapText: {
    fontSize: 23
  }
})

AppRegistry.registerComponent('stopwatch',() => StopWatch)
