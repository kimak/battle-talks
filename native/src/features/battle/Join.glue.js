import React from "react";
import Join from "./Join";
import { withApollo, graphql, compose } from "react-apollo";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

const getBattleByCode = gql`
  query($code: String!) {
    battle(code: $code) {
      id
      code
      ready
    }
  }
`;

const updateBattleMutation = gql`
  mutation(
    $id: ID!
    $ready: Boolean!
    $waiting: Boolean!
    $complete: Boolean!
  ) {
    updateBattle(
      id: $id
      ready: $ready
      waiting: $waiting
      complete: $complete
    ) {
      id
      ready
    }
  }
`;
const showError = () => {
  alert("Désolé... ce code n'est actuellement pas valide.");
};
const mapHandlers = props => {
  return {
    async joinBattle(code) {
      const results = await props.client.query({
        query: getBattleByCode,
        variables: { code }
      });
      if (results.data && results.data.battle.length > 0) {
        const battleResult = await props.client.mutate({
          mutation: updateBattleMutation,
          variables: {
            id: results.data.battle[0].id,
            ready: true,
            waiting: false,
            complete: false
          }
        });
        if (
          battleResult.data &&
          battleResult.data.updateBattle &&
          battleResult.data.updateBattle.ready
        ) {
          props.navigation.navigate("Battle", {
            id: battleResult.data.updateBattle.id
          });
        } else {
          showError();
        }
      } else {
        showError();
      }
    }
  };
};

const mapProps = props => {
  return {
    navParams: props.navigation.state.params
  };
};

const JoinGlue = props => (
  <Join {...props} {...mapHandlers(props)} {...mapProps(props)} />
);

export default withApollo(JoinGlue);
