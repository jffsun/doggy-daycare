import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import DaycareContainer from "./components/DaycareContainer";
import Modal from 'react-modal';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { setContext } from '@apollo/client/link/context';

// middleware that attaches JWT token to every request
const authLink = setContext((_, { headers }) => {

    // grabs token from local storage
    const token = localStorage.getItem('id_token');
  
    // return the headers
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    }
  })
  
  // variable for graphql endpoint
  const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  const client = new ApolloClient({
    
    // use authLink middleware 
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

// Bind modal to your appElement
Modal.setAppElement('#root')

const App = () => {
    return(
        <ApolloProvider client={client}>
            <Router>
                <DaycareContainer/>
            </Router>
        </ApolloProvider>
    )
}

export default App;