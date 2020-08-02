import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/reserve" component={Reservations}/>
      </Switch>
    </Router>
  );
}

export default App;
