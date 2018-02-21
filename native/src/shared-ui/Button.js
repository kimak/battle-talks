import React from "react";
import { Button as PaperButton } from "react-native-paper";

const Button = props => (
  <PaperButton primary raised onPress={props.onPress}>
    {props.label}
  </PaperButton>
);

export default Button;
