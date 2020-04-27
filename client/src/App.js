import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
