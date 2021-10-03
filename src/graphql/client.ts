import {
    ApolloClient,
    ApolloLink,
    InMemoryCache
  } from "@apollo/client";
  import { createHttpLink } from "apollo-link-http";
  import { setContext } from '@apollo/client/link/context';

  const GRAPHQL_API = process.env.REACT_APP_GRAPHQL_API;
  
  const link = createHttpLink({ uri: GRAPHQL_API });
  
  const cache = new InMemoryCache();
  
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "ojojioj",
      }
    }
  });
  const client = new ApolloClient({
    cache: cache,
    link: authLink.concat(link as unknown as ApolloLink),
  });
  
  export default client;