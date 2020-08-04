import React, { Component } from 'react';
import NavbarDisplay from '../components/NavbarDisplay/NavbarDisplay';
import { Form, ProgramButton, AM, PM, PoolImage } from '../components/Buttongroup/Form';
import Icons from '../components/Icons/Icons';


export class Home extends Component {

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
        this.setState({ isAMButton: true })
    }

    pmClick = (e) => {
        e.preventDefault();
        this.setState({ isPMButton: true })
    }

    render() {
        return (

            <div>
                <NavbarDisplay />
                <PoolImage />
                <Form 
                handleClick={this.handleClick}
                handleInputChange={this.handleInputChange}
                value={this.state.date} 
                />
                <Icons />
                {this.state.submitForm ? <ProgramButton amClick={this.amClick}
                pmClick={this.pmClick} /> : console.log('form not yet submitted')}
                {this.state.isAMButton ? <AM /> : console.log("am button not clicked yet")}
                {this.state.isPMButton ? <PM /> : console.log("pm button not yet pushed")}
            </div>
        )
    }
}

export default Home
