import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

//create an app as a class
export default class TodoListApp extends Component{
  //render function is the main component inside the class which returns view
  render(){
    return(
      //returns view component
      //safearea view
      <SafeAreaView>
        
      </SafeAreaView>

    )
  }
} 

//outside of the class, create a stylesheet
const styles = StyleSheet.create({
  main:{
    paddingHorizontal:10,
  }
})
