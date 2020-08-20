import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList,TextInput } from 'react-native';

import {AppItem} from './components/AppItem';

export default class App extends Component {

  state ={
    activityItem: '',
    activityStatus: ''

  }
  listData = [
    { id: '1', activity: 'eat', status: 'done'},
    { id: '2', activity: 'sleep', status: 'notDone'},
    { id: '3', activity: 'run', status: 'done'},
  ]
  render() {
    return (
      <SafeAreaView>
        <Text>Add your todo list activities</Text>

        <TextInput
          style={styles.input}
          placeholder="Todo activities here"
          onChangeText={ text => this.setState({activityItem: text})}
        />

        <TextInput
          style={styles.input}
          placeholder="activity status"
          onChangeText={text => this.setState({activityStatus: text})}
        
        />

        

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
  },
  input:{
    width:'100%',
    padding:10,
    borderColor:'black',
    borderWidth:1,
    marginVertical:15,
  }
})