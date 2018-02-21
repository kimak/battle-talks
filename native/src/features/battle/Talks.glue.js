import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
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
    navigateTo() {
      props.navigation.navigate("CreateBattle");
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
