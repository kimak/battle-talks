import React from "react";
import { Query } from "react-apollo";
import Loading from "./Loading";
import Error from "./Error";

const SmartQuery = props => (
  <Query query={props.query}>
    {({ loading, error, data }) => {
      if (error) return <Error />;
      if (loading) return <Loading />;
      return props.children({ data });
    }}
  </Query>
);
export default SmartQuery;
