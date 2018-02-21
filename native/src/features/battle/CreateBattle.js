import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../shared-ui/Button";

const CreateBattle = props => (
  <View style={styles.container}>
    <Text>Un peu de politesse, quel est ton nom ?</Text>
    <Button label="Inviter un ami" onPress={props.navigateTo} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default CreateBattle;
