import React from "react";
import CreateBattle from "./CreateBattle";
import { graphql, compose } from "react-apollo";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

const createBattleMutation = gql`
  mutation($text: String!) {
    createBattle(text: $text) {
      id
      code
    }
  }
`;

const mapHandlers = props => {
  return {
    navigateTo() {
      props.navigation.navigate("Invite");
    }
  };
};

const mapProps = props => {
  return {
    navParams: props.navigation.state.params
  };
};

const CreateBattleGlue = props => (
  <CreateBattle {...props} {...mapHandlers(props)} {...mapProps(props)} />
);

const hoc = graphql(createBattleMutation, {
  props: props => {
    return {
      createBattle: async username => {
        const { navigation } = props.ownProps;
        const navParams = navigation.state.params;
        try {
          const response = await props.mutate({
            variables: { text: navParams.battleText }
          });
          navigation.navigate("Invite", {
            code: response.data.createBattle.code
          });
        } catch (error) {
          console.log("error", error);
        }
      }
    };
  }
});
export default hoc(CreateBattleGlue);
