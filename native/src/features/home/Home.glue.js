import React from "react";
import Home from "./Home";

const HomeGlue = props => (
  <Home
    navigateTo={() => {
      props.navigation.navigate("Talks");
    }}
  />
);

export default HomeGlue;
