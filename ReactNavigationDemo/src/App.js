import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Main from './screens/Main'
import SubMain from './screens/SubMain'
import Welcome from './screens/Welcome'
import Second from './screens/Second'
import SubSecond from './screens/SubSecond'
import Third from './screens/Third'

export default class App extends Component {
  render(){
    const MainTab = StackNavigator({
      main: {
        screen: Main
      },
      submain: {
        screen: SubMain
      }
    })

    const SecondTab = StackNavigator({
      second: {
        screen: Second
      },
      subsecond: {
        screen: SubSecond
      }
    })

    const MainNavigator = TabNavigator({
      main: {
        screen: MainTab
      },
      second: {
        screen: SecondTab
      },
      Third: {
        screen: Third
      }
    }, {})

    const Root = TabNavigator({
      welcome: {
        screen: Welcome
      },
      main: {
        screen: MainNavigator
      }
    }, {
      navigationOptions: {
        tabBarVisible: false
      }
    })

    return (
      <Root />
    )
  }
}
