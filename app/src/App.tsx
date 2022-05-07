import React, { useEffect } from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import './App.css';
import { Exercises } from './components/Exercises';

//tell what to do if there's an error
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
      return message;
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:5000/graphql' }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  //link is the link to our backend
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <header className='App-header'>
          <p>Exercise App</p>
          <Exercises />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
