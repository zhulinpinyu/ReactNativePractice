import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native';


let THUMB_URLS = [
  require('./Thumbnails/like.png'),
  require('./Thumbnails/dislike.png'),
  require('./Thumbnails/call.png'),
  require('./Thumbnails/fist.png'),
  require('./Thumbnails/bandaged.png'),
  require('./Thumbnails/flowers.png'),
  require('./Thumbnails/heart.png'),
  require('./Thumbnails/liking.png'),
  require('./Thumbnails/party.png'),
  require('./Thumbnails/poke.png'),
  require('./Thumbnails/superlike.png'),
  require('./Thumbnails/victory.png'),
]

class ListViewDemo extends Component {

  constructor(){
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this._genRows())
    }
  }

  _genRows(){
     var dataBlob = []
     for (var i = 0; i < THUMB_URLS.length; i++){
       dataBlob.push('Cell ' + i)
     }
     return dataBlob
  }

  _renderRow(rowData, sectionID, rowID, highlightRow){
    var imgSource = THUMB_URLS[rowID]
    return (
      <TouchableHighlight onPress={() => {
        highlightRow(sectionID,rowID)
        alert(rowID)
      }}>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={imgSource} />
            <Text style={styles.text}>
              {rowData}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  _renderGridRow(rowData, sectionID, rowID, highlightRow){
    var imgSource = THUMB_URLS[rowID]
    return (
      <TouchableHighlight onPress={() => {
        highlightRow(sectionID,rowID)
        alert(rowID)
      }}>
        <View>
          <View style={gridStyles.row}>
            <Image style={gridStyles.thumb} source={imgSource} />
            <Text style={gridStyles.text}>
              {rowData}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const isGridLayout = true
    if(isGridLayout){
      return (<ListView
        contentContainerStyle={gridStyles.list}
        dataSource={this.state.dataSource}
        renderRow={this._renderGridRow}
      />)
    }else{
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          style={styles.lv}
        />
      )
    }
  }
}

const styles = StyleSheet.create({
  lv: {
    marginTop: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 6,
    backgroundColor: '#00F6F6',
    borderBottomWidth: 2,
    borderBottomColor: 'gray'
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1
  }
})

const gridStyles = StyleSheet.create({
  list: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 3,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#f6f6f6'
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1
  }
})


AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);
