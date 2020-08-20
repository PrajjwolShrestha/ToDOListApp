import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

import {AppItem} from './components/AppItem';

export default class App extends Component {
  listData = [
    { id: '1', activity: 'eat', status: 'done'},
    { id: '2', activity: 'sleep', status: 'notDone'},
    { id: '3', activity: 'run', status: 'done'},
  ]
  render() {
    return (
      <SafeAreaView>
        <FlatList 
          data={this.listData}
          renderItem={this.renderList}
          keyExtractor={ activities => activities.id }
        />
      </SafeAreaView>
    )
  }
  renderList = ({item}) => (
    <AppItem activity={item.activity} status={item.status} />
  )
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
  }
})