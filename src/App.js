import React, { Component } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Authenticator } from "@aws-amplify/ui-react";

import AnalysisContainer from "./components/analysisContainer";
import IntelDrawer from "./components/IntelDrawer";

import "@aws-amplify/ui-react/styles.css";
import "./App.css";

const httpLink = createHttpLink({
  uri: "https://75pakaytozcsbgl2niax4vgsjy.appsync-api.eu-west-2.amazonaws.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  const token = "da2-mif62xdc2ncxpl7hunwoyvgmji";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // authorization: token ? `${token}` : "",
      authorization: token ? `${token}` : "",
      "x-api-key": token ? `${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "100%", backgroundColor: "#1a1b21" }}
      >
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <Authenticator>
          <ApolloProvider client={client}>
            <IntelDrawer />
            <AnalysisContainer />
          </ApolloProvider>
        </Authenticator>
      </div>
    );
  }
}

export default App;
