import React from 'react';
import './App.css';
import Home from './components/Home.js';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        {/* <Route path="/" exact component={Home}></Route> */}
        {/* <Route path="/" exact component={Home}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
