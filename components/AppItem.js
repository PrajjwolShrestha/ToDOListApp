import React from 'react';
import { Text,View,StyleSheet } from 'react-native';

export const AppItem = ( props ) => {
  return(
    <View style={itemStyles.item}>
      <Text style={itemStyles.text}>{props.activity}</Text>
      <Text style={itemStyles.text}>{props.status}</Text>
    </View>
  )
}

const itemStyles = StyleSheet.create({
  item : {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 16,
    color: 'black'
  }
})