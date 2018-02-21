import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../shared-ui/Button";

const Talks = props => (
  <View style={styles.container}>
    {props.talks &&
      props.talks.map(item => <Text key={item.id}>{item.text}</Text>)}
    <Button label="Choisir ce sujet" onPress={props.navigateTo} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Talks;
