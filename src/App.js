import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Index from './components/index';
import Signup from './components/signup';
import Login  from './components/login';
import UsersData from './components/databse/database';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/">
              <Index/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
            <Route path="/usercollection">
                <UsersData/>
            </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
