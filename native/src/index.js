import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import Navigation from "./navigation";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#50E3C2"
  }
};

//uri: "https://battle-talks-server-gxamsltgcx.now.sh"
const client = new ApolloClient({
  uri: "http://192.168.1.68:4000"
});

const App = () => (
  <ApolloProvider client={client}>
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  </ApolloProvider>
);
export default App;
