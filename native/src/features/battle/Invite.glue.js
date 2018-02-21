import React from "react";
import Invite from "./Invite";

const mapHandlers = props => {
  return {
    navigateTo() {
      props.navigation.navigate("SideChoose");
    }
  };
};

const InviteGlue = props => <Invite {...mapHandlers(props)} />;
export default InviteGlue;
