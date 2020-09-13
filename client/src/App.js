import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import Admin from './pages/Admin';
import NoMatch from './pages/NoMatch';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp';
import PasswordReset from './pages/PasswordReset';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from './util/API';
import Provide from './components/Provide';


class App extends Component {
  state = {
    submitForm: "none",
    date: '',
    isAMButton: "none",
    isPMButton: "none",
    time: '',
    name: '',
    email: '',
    phone: '',
    nineAmSpots: 0
  }


  handleClick = (e) => {
    e.preventDefault();
    this.setState({ submitForm: "block" });

    this.handleSpotsAvailable();
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

  handleSixPM = e => {
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
        // console.log("Success!")
        alert('Reservation Saved!')
      })
      .catch(err => console.log(err));

  }

  handleSpotsAvailable = () => {// run when reserve button is clicked!!
    API.getAllReservations()
    .then((data) => {
      // console.log('got here!!')
      var reservations = data.data;
      var result = [];
      reservations.forEach(rez => {
        if(rez.date === this.state.date && rez.timeSlot === '9AM'){
          result.push(rez);
          var count = 6 - result.length;
          console.log(count)
          // result.length < 6 ? this.setState({ nineAmSpots: count }) : null;
        }else {
          return null;
        }
      })
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
            nineAmSpots={this.state.nineAmSpots}
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
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/signIn" component={SignIn}/>
          <Route exact path="/signUp" component={SignUp}/>
          <Route exact path="/login" component={Provide}/>
          <Route exact path="/passwordReset" component={PasswordReset}/>
          <Route component={NoMatch} />
        </Switch>
      </Router >
    );
  }
}

export default App;
