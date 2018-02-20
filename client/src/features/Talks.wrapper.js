import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Talks from "./Talks";
import Loading from "../shared-ui/Loading";
import Error from "../shared-ui/Error";
import SmartQuery from "../shared-ui/SmartQuery";

const talksQuery = gql`
  query {
    talks {
      id
      text
    }
  }
`;

const TalksWrapper = () => (
  <SmartQuery query={talksQuery}>
    {({ data }) => {
      return <Talks talks={data.talks} />;
    }}
  </SmartQuery>
);
export default TalksWrapper;
