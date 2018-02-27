import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../shared-ui/Button";
import TextInput from "../../shared-ui/TextInput";

let input;
const JoinBattle = props => (
  <View style={styles.container}>
    <Text>Rejoindre la partie:</Text>
    <TextInput
      placeholder="Code"
      ref={ref => {
        input = ref;
      }}
    />
    <Button
      label="Démarrer"
      onPress={() => {
        props.joinBattle(input.state.text);
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default JoinBattle;
