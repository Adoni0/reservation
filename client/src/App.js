import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import Admin from './pages/Admin';
import NoMatch from './pages/NoMatch';
import SignIn from './pages/SignIn/SignIn';
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
    nineAmSpots: 6,
    tenAmSpots: 6,
    fivePmSpots: 6,
    sixPmSpots: 6
  }


  handleClick = (e) => {
    e.preventDefault();
    if(this.state.date){
      this.setState({
        submitForm: "block", nineAmSpots: 6,
        tenAmSpots: 6, fivePmSpots: 6, sixPmSpots: 6
      })
  
      this.handleSpotsAvailable();
    }
    return null;
    
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
    this.setState({ time: "9AM", isPMButton: "none", isAMButton: "none", submitForm: "none" })
    // console.log("TIME " + this.state.time);
  }

  handleTenAM = e => {
    e.preventDefault();
    this.setState({ time: "10AM", isPMButton: "none", isAMButton: "none", submitForm: "none" })
  }

  handleFivePM = e => {
    e.preventDefault();
    this.setState({ time: "5PM", isPMButton: "none", isAMButton: "none", submitForm: "none" })
  }

  handleSixPM = e => {
    e.preventDefault();
    this.setState({ time: "6PM", isPMButton: "none", isAMButton: "none", submitForm: "none" })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    if(this.state.date && this.state.time && this.state.name && this.state.phone && this.state.email){
    alert('Reservation Saved!')
    
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
        console.log("Success!")
      })
      .catch(err => console.log(err));
    } else {
      alert('All fields must be entered.')
    }

  }

  handleSpotsAvailable = () => {// run when reserve button is clicked!!
    API.getAllReservations()
      .then((data) => {
        // console.log('got here!!')
        var reservations = data.data;
        var result = [];

        reservations.forEach(rez => {
          if (rez.date === this.state.date && rez.timeSlot === '9AM') {
            result.push(rez);
            var count = 6 - result.length;
            // console.log('9Am count: ' + count);
            this.setState({ nineAmSpots: count })
          } else if (rez.date === this.state.date && rez.timeSlot === '10AM') {
            result.push(rez);
            var count = 6 - result.length;
            // console.log('10Am count: ' + count);
            this.setState({ tenAmSpots: count })
          } else if (rez.date === this.state.date && rez.timeSlot === '5PM') {
            result.push(rez);
            var count = 6 - result.length;
            // console.log('5PM count: ' + count);
            this.setState({ fivePmSpots: count })
          } else if (rez.date === this.state.date && rez.timeSlot === '6PM') {
            result.push(rez);
            var count = 6 - result.length;
            // console.log('6PM count: ' + count);
            this.setState({ sixPmSpots: count })
          } else {
            return null;
          }
        })
      })
      .catch(err => console.log(err));
  }

  removeButtonsOnDateChange = () => {
    this.setState({ submitForm: 'none', isAMButton: 'none', isPMButton: 'none' })
  }


  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Home {...props}
            handleClick={this.handleClick}
            handleInputChange={this.handleInputChange}
            dateValue={this.state.date}
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
            tenAmSpots={this.state.tenAmSpots}
            fivePmSpots={this.state.fivePmSpots}
            sixPmSpots={this.state.sixPmSpots}
            removeButtonsOnDateChange={this.removeButtonsOnDateChange}
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
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/login" component={Provide} />
          <Route component={NoMatch} />
        </Switch>
      </Router >
    );
  }
}

export default App;
