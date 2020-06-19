import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:8888/.netlify/functions/graphql',
    headers: {
      authorization:
        typeof window !== 'undefined'
          ? localStorage.getItem('authToken') || ''
          : '',
    },
  }),
});

export default client;
