import React from "react";
import Invite from "./Invite";

const mapHandlers = props => {
  return {
    navigateTo() {
      props.navigation.navigate("SideChoose");
    }
  };
};

const mapProps = props => {
  return {
    navParams: props.navigation.state.params
  };
};

const InviteGlue = props => (
  <Invite {...mapHandlers(props)} {...mapProps(props)} />
);
export default InviteGlue;
