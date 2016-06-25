import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

const BASE64ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg=='

class TabBarIOSDemo extends Component {
  constructor(){
    super()
    this.state = {
      selectedTab: 'HomeTab'
    }
  }

  renderTabContent(color,info){
    return (
      <View style={[styles.tabContent]}>
        <View style={styles.navBar}>
          <Text style={[styles.navBarText,styles.navBarAdd]}>+</Text>
          <Text style={styles.navBarText}>{info}</Text>
          <Text style={[styles.navBarText,styles.navBarOk]}>Ok</Text>
        </View>
        <View style={[styles.navContent,,{backgroundColor: color}]}>
          <Text style={styles.tabText}>{info}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <TabBarIOS
        tinColor='white'
        barTinColor='darkslateblue'
        unselectedTinColor='yellow'>
        <TabBarIOS.Item
          title='Home'
          icon={{uri: BASE64ICON, scale: 3}}
          selected={this.state.selectedTab==='HomeTab'}
          onPress={()=>{
            this.setState({
              selectedTab: 'HomeTab'
            })
          }}>
          {this.renderTabContent('#414a8c','Home')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Contact'
          systemIcon='contacts'
          selected={this.state.selectedTab==='ContactTab'}
          onPress={()=>{
            this.setState({
              selectedTab: 'ContactTab'
            })
          }}>
          {this.renderTabContent('#783e33','Contact')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='More'
          icon={require('./flux.png')}
          selectedIcon={require('./relay.png')}
          selected={this.state.selectedTab==='MoreTab'}
          onPress={()=>{
            this.setState({
              selectedTab: 'MoreTab'
            })
          }}>
          {this.renderTabContent('#21551c','More')}
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
  },
  tabText: {
    color: 'white',
    fontSize: 30
  },
  navBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 3
  },
  navContent: {
    flex: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navBarText: {
    color: 'gray',
    fontSize: 20,
    fontWeight: '500'
  },
  navBarAdd: {
    marginLeft: 5
  },
  navBarOk: {
    marginRight: 5
  }
})

AppRegistry.registerComponent('TabBarIOSDemo', () => TabBarIOSDemo)
