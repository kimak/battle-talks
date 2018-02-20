import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Talks = props =>
  props.talks &&
  props.talks.map(item => <Text key={item.id}>{item.text}</Text>);

const styles = StyleSheet.create({
  container: {}
});
export default Talks;
