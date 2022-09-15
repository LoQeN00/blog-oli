import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://api-us-east-1.hygraph.com/v2/cl7m30ojc1llt01up0inafuwo/master',
  cache: new InMemoryCache(),
});
