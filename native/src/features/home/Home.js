import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Button from "../../shared-ui/Button";

const Home = props => (
  <View style={styles.container}>
    <Text>Un avis sur tout mais surtout un avis !</Text>
    <Button onPress={props.navigateTo} label="Commencer" />
  </View>
);
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
