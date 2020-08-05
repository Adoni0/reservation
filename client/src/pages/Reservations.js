import React, { Component } from 'react';
import ResDisplay from '../components/ResDisplay/ResDisplay';
import Contact from '../components/Contact/Contact';

export default class Reservations extends Component {

    state = {

    }

    render() {
        return (
            <>
            <ResDisplay 
            date={this.props.date}
            time={this.props.time}
            />
            <Contact 
            handleSubmit={this.props.handleSubmit}
            />
            </>
        )
    }
}


