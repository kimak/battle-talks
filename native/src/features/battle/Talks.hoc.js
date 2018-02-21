import React from "react";
import { graphql, compose } from "react-apollo";
import { gql } from "apollo-boost";

import withLoading from "../../shared-ui/hoc/withLoading";
import withError from "../../shared-ui/hoc/withError";
import Talks from "./Talks";

const talksQuery = gql`
  query {
    talks {
      id
      text
    }
  }
`;

const TalksContainer = compose(
  graphql(talksQuery, {
    props: props => {
      return {
        talks: props.data.talks,
        error: props.data.error,
        loading: props.data.loading
      };
    }
  }),
  withError,
  withLoading
)(Talks);

export default TalksContainer;
