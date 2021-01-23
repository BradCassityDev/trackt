import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import './App.css';

// Import other pages and components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Goal from './pages/Goal';
import NoMatch from './pages/NoMatch';

// setup ApolloClient
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="page-container">
          <Header />
          <div className="main-container">
            <Switch>
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/:username?" component={Home} />
              <Route exact path="/Goal/:id" component={Goal} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
