import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    submitForm: false,
    date: '',
    isAMButton: false,
    isPMButton: false
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ submitForm: true })
  }

  handleInputChange = (event) => {
    this.setState({ date: event.target.value })
    console.log("Date: " + this.state.date)
  }

  amClick = (e) => {
    e.preventDefault();
    this.setState({ isAMButton: true, isPMButton: false })
  }

  pmClick = (e) => {
    e.preventDefault();
    this.setState({ isPMButton: true, isAMButton: false })
  }


  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Home {...props}
          handleClick={this.handleClick}
          handleInputChange={this.handleInputChange}
          value={this.state.date}
          amClick={this.amClick}
          pmClick={this.pmClick}
          submitForm={this.state.submitForm}
          isAMButton={this.state.isAMButton}
          isPMButton={this.state.isPMButton}
          />} />
          <Route exact path="/reserve" render={props => <Reservations {...props}
          date={this.state.date}
          />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
