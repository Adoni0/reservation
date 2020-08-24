import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import NoMatch from './pages/NoMatch'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from './util/API';

class App extends Component {
  state = {
    submitForm: "none",
    date: '',
    isAMButton: "none",
    isPMButton: "none",
    time: '',
    name: '',
    email: '',
    phone: ''
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ submitForm: "block" })
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
   
  }

  amClick = e => {
    e.preventDefault();
    this.setState({ isAMButton: "block", isPMButton: "none" })
  }

  pmClick = e => {
    e.preventDefault();
    this.setState({ isPMButton: "block", isAMButton: "none" })
  }

  handleNineAM = e => {
    e.preventDefault();
    this.setState({ time: "9AM" })
    // console.log("TIME " + this.state.time);
  }

  handleTenAM = e => {
    e.preventDefault();
    this.setState({ time: "10AM" })
  }

  handleFivePM = e => {
    e.preventDefault();
    this.setState({ time: "5PM" })
  }

  handleSixPm = e => {
    e.preventDefault();
    this.setState({ time: "6PM" })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    API.storeReservation({
      date: this.state.date,
      timeSlots: {
        time: this.state.time,
        bookedBy: {
          name: this.state.name,
          phone: this.state.phone,
          email: this.state.email
        }
      }
    })
      .then(data => {
        alert("Success!", data)
      })
      .catch(err => console.log(err));
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
            tenAM={this.handleTenAM}
            fivePM={this.handleFivePM}
            sixPM={this.handleSixPM}
          />} />
          <Route exact path="/reserve" render={props => <Reservations {...props}
            date={this.state.date}
            time={this.state.time}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
          />} />
          <Route component={NoMatch} />
        </Switch>
      </Router >
    );
  }
}

export default App;
