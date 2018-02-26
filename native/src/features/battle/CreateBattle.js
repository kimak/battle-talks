import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../shared-ui/Button";
import TextInput from "../../shared-ui/TextInput";

const CreateBattle = props => (
  <View style={styles.container}>
    {console.log(props)}
    <Text>Un peu de politesse, c'est quoi ton blase ?</Text>
    <TextInput placeholder="Username" />
    <Button label="Inviter un ami" onPress={props.createBattle} />
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
