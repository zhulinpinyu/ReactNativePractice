import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native'

import HomeComponent from './src/component/HomeComponent'

class NavigatorDemo extends Component {

  renderScene(route,navigator){
    const Component = route.component
    return <Component {...route.params} navigator={navigator} />
  }

  configScene(){
    return Navigator.SceneConfigs.FloatFromBottom
  }

  render() {
    const init_route = { name: 'Home', component: HomeComponent }
    return (
      <Navigator
        initialRoute={init_route}
        renderScene={this.renderScene}
        configureScene={this.configScene}
      />
    )
  }
}

AppRegistry.registerComponent('NavigatorDemo', () => NavigatorDemo);
