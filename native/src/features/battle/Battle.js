import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Battle = props => (
  <View style={styles.container}>
    <Text>Donne tout ce que tu as !</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Battle;
