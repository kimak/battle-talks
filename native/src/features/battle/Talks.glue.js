import React from "react";
import { gql } from "apollo-boost";
import Talks from "./Talks";
import SmartQuery from "../../shared-ui/SmartQuery";

const talksQuery = gql`
  query {
    talks {
      id
      text
    }
  }
`;
const mapHandlers = props => {
  return {
    navigateToCreate(id, text) {
      props.navigation.navigate("CreateBattle", {
        battleId: id,
        battleText: text
      });
    },
    navigateToJoin() {
      props.navigation.navigate("Join");
    }
  };
};

const TalksGlue = props => (
  <SmartQuery query={talksQuery}>
    {({ data }) => {
      return <Talks talks={data.talks} {...mapHandlers(props)} />;
    }}
  </SmartQuery>
);
export default TalksGlue;
