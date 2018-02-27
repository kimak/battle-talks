import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../shared-ui/Button";

const Invite = props => (
  <View style={styles.container}>
    <Text>
      DEMANDE À TON ADVERSAIRE ET À TON PUBLIC DE REJOINDRE LE DÉBAT EN
      SAISISSANT CE CODE
    </Text>
    <Text>{props.navParams.code}</Text>
    {/*<Button label="Choisir son camp" onPress={props.navigateTo} />*/}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Invite;
