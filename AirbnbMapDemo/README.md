AirbnbMapDemo
===

ReactNative官方推荐MapView组件应用[react-native-maps](https://github.com/airbnb/react-native-maps) example 实例

**谨防入坑：(2017-02-14)**

```bash
yarn add react-native-maps@0.13.0
```

-------

#### 简单使用：

1. `react-native init demo`
2. `cd demo && yarn add react-native-maps@0.13.0`

3. 示例代码

```
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import MapView from 'react-native-maps'

export default class AirbnbMapDemo extends Component {
  render() {
    return (
      <MapView
        style={{flex: 1}}
        showsUserLocation={true}
        followsUserLocation={true}
      />
    );
  }
}

AppRegistry.registerComponent('AirbnbMapDemo', () => AirbnbMapDemo);
```
