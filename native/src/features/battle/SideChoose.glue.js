import React from "react";
import SideChoose from "./SideChoose";

const mapHandlers = props => {
  return {
    navigateTo() {
      props.navigation.navigate("Battle");
    }
  };
};

const SideChooseGlue = props => <SideChoose {...mapHandlers(props)} />;
export default SideChooseGlue;
