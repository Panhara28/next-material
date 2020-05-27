import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import getConfig from 'next/config'
const { publicRuntimeConfig, } = getConfig();

const client = new ApolloClient({
  link: createHttpLink({ uri: publicRuntimeConfig.api, fetch }),
  cache: new InMemoryCache(),
  name: 'nextjs-client',
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }
})

export default client;
