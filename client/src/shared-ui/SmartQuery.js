import React from "react";
import { Query } from "react-apollo";
import Loading from "./Loading";
import Error from "./Error";

const SmartQuery = props => (
  <Query query={props.query}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return <Error />;
      return props.children({ data });
    }}
  </Query>
);
export default SmartQuery;
