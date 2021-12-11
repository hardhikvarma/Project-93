import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { RFValue } from "react-native-responsive-fontsize";

export default class HomeScreen extends Component {
  render() {
    return (
     
      <View style={styles.heading}>
      <Text style={{color: "white", fontSize: 36, textAlign: 'center'}}> REMINDER APP </Text>
      <Image style={styles.bgImage}
        source={require("../assets/bg4.jpg")}
      
      ></Image>

      </View>
      
    )
}
}

const styles = StyleSheet.create({
heading :{
  backgroundColor : "lightblue",
  
},
bgImage:{
  height: RFValue(650)
}
})