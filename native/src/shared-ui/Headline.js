import React from "react";
import { Headline as PaperHeadline } from "react-native-paper";

const Headline = props => (
  <PaperHeadline
    style={{
      fontSize: 32,
      marginVertical: 20,
      marginHorizontal: 10,
      ...props.style
    }}
  >
    {props.label}
  </PaperHeadline>
);

export default Headline;
