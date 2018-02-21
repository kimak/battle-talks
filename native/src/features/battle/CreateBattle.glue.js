import React from "react";
import CreateBattle from "./CreateBattle";

const mapHandlers = props => {
  return {
    navigateTo() {
      props.navigation.navigate("Invite");
    }
  };
};

const CreateBattleGlue = props => <CreateBattle {...mapHandlers(props)} />;
export default CreateBattleGlue;
