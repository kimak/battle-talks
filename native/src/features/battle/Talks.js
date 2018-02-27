import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { Button, Headline } from "../../shared-ui";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5F737B"
  }
});
const Talks = props => (
  <View style={styles.container}>
    <Swiper dotColor="#50E3C2" activeDotColor="#FFF">
      {props.talks &&
        props.talks.map(item => (
          <View style={styles.slide} key={item.id}>
            <Headline label={item.text} style={{ color: "#FFF" }} />
            <Button
              label="Choisir ce sujet"
              onPress={props.navigateToCreate.bind(this, item.id, item.text)}
            />
          </View>
        ))}
    </Swiper>
    <Button label="Rejoindre une bataille" onPress={props.navigateToJoin} />
  </View>
);

export default Talks;
