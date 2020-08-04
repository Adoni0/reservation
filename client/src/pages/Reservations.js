import React, { Component } from 'react';
import ResDisplay from '../components/ResDisplay/ResDisplay';

export default class Reservations extends Component {

    state = {

    }

    render() {
        return (
            <ResDisplay 
            date={this.props.date}
            />
        )
    }
}


