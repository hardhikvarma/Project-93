import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { RFValue } from "react-native-responsive-fontsize";

export default class HomeScreen extends Component {
  render() {
    return (
     
      <Text style={{textAlign: "center", alignItems: "center", alignSelf: "center", marginTop: RFValue(280)}}>
       SET YOUR REMINDERS HERE! </Text>
    )
}
}
