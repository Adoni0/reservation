import React, { Component } from 'react';
import ResDisplay from '../components/ResDisplay/ResDisplay';
import Contact from '../components/Contact/Contact';
import NavBarDisplay from '../components/NavbarDisplay/NavbarDisplay'

export default class Reservations extends Component {


    render() {
        return (
            <>
            <NavBarDisplay />
            <ResDisplay 
            date={this.props.date}
            time={this.props.time}
            handleSubmit={this.props.handleSubmit}
            />
            <Contact 
            handleSubmit={this.props.handleSubmit}
            handleInputChange={this.props.handleInputChange}
            name={this.props.name}
            email={this.props.email}
            phone={this.props.phone}
            />
            </>
        )
    }
}



