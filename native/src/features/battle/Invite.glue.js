import React from "react";
import Invite from "./Invite";
import withDidMount from "../../shared-ui/hoc/withDidMount";
import { graphql, withApollo, compose } from "react-apollo";
import { gql } from "apollo-boost";

const battleSubscription = gql`
  subscription {
    battle {
      node {
        id
        ready
        talk {
          text
        }
      }
    }
  }
`;

const mapHandlers = props => {
  return {
    didMount() {
      props.client
        .subscribe({
          query: battleSubscription
        })
        .subscribe({
          next(data) {
            console.log("subscribe data ", data);
            // ... call updateQuery to integrate the new comment
            // into the existing list of comments
          },
          error(err) {
            console.error("err", err);
          }
        });
    },
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

const InvideDidMount = withDidMount(Invite);
const InviteGlue = props => (
  <InvideDidMount {...mapHandlers(props)} {...mapProps(props)} />
);

const hoc = compose(withApollo);
export default hoc(InviteGlue);
