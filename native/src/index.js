import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Talks from "./features/Talks.wrapper";
//import HomeContainer from "./Home.container";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const App = () => (
  <ApolloProvider client={client}>
    <Talks />
  </ApolloProvider>
);
export default App;
