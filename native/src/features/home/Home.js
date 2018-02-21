import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button, Headline, TextInput } from "../../shared-ui";

const Home = props => (
  <View style={styles.container}>
    <Headline primary label="Un avis sur tout mais surtout un avis !" />
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
