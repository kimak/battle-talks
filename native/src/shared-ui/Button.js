import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#50E3C2",
    padding: 20,
    margin: 10,
    alignItems: "center"
  }
});

const Button = props => (
  <TouchableOpacity onPress={props.onPress} style={styles.root}>
    <Text>{props.label}</Text>
  </TouchableOpacity>
);

export default Button;
