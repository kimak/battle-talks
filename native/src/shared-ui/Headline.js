import React from "react";
import { Headline as PaperHeadline } from "react-native-paper";

const Headline = props => (
  <PaperHeadline style={{ marginVertical: 20, marginHorizontal: 10 }}>
    {props.label}
  </PaperHeadline>
);

export default Headline;
