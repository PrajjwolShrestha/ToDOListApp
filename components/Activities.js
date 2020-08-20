import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

//function
export const Activity = (props) => {
    //returns thingsTodo and status inside the view
    return(
        <View style={activityStyles.activity}>
            <Text style={activityStyles.text}>{props.thingsTodo}</Text> 
            <Text>{props.status}</Text>
        </View>
    )
}


//stylesheet
const activityStyles = StyleSheet.create({
    activity:{
        padding:10,
        display:"flex",
        flexDirection:'row',
        justifyContent:"space-between",
    },
    text:{
        fontSize:18,
        color:'black',
    }
})