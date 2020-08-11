import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import CreateProfile from './components/CreateProfile';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Hero />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/createprofile'>
            <CreateProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
