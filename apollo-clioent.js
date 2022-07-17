import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

let link = new HttpLink({ uri: 'https://bill-record.herokuapp.com/' });
const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
  
  export default client;