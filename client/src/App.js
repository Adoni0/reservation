import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from './util/API';

class App extends Component {
  state = {
    submitForm: false,
    date: '',
    isAMButton: false,
    isPMButton: false,
    time: ''
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ submitForm: true })
  }

  handleInputChange = (event) => {
    // const { name, value } = event.target;
    // this.setState({
    //   [name]: value
    // })
    this.setState({ date: event.target.value })
    // console.log("Date: " + this.state.date)
  }

  amClick = (e) => {
    e.preventDefault();
    this.setState({ isAMButton: true, isPMButton: false })
  }

  pmClick = (e) => {
    e.preventDefault();
    this.setState({ isPMButton: true, isAMButton: false })
  }

  handleNineAM = (e) => {
    e.preventDefault();
    this.setState({ time: "9AM" })
    console.log("TIME " + this.state.time);
  }

  handleSubmit = () => {
    API.storeReservation()
    .then(data => {
      alert("Success!")
    })
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
            nineAM={this.handleNineAM}
          />} />
          <Route exact path="/reserve" render={props => <Reservations {...props}
            date={this.state.date}
            time={this.state.time}
            handleSubmit={this.handleSubmit}
          />} />
        </Switch>
      </Router >
    );
  }
}

export default App;
