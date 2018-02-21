import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../shared-ui/Button";

const SideChoose = props => (
  <View style={styles.container}>
    <Text>CHOISIS TON CAMP</Text>
    <Button label="Oui" onPress={props.navigateTo} />
    <Button label="Non" onPress={props.navigateTo} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default SideChoose;
