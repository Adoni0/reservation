import React, { Component } from 'react';
import NavbarDisplay from '../components/NavbarDisplay/NavbarDisplay';
import { Form, ProgramButton, AM, PM, PoolImage } from '../components/Buttongroup/Form';
import Icons from '../components/Icons/Icons';


export class Home extends Component {

    // state = {
    //     submitForm: false,
    //     date: '',
    //     isAMButton: false,
    //     isPMButton: false
    // }

    // handleClick = (e) => {
    //     e.preventDefault();
    //     this.setState({ submitForm: true })
    // }

    // handleInputChange = (event) => {
    //     this.setState({ date: event.target.value })
    //     console.log("Date: " + this.state.date)
    // }

    // amClick = (e) => {
    //     e.preventDefault();
    //     this.setState({ isAMButton: true, isPMButton: false })
    // }

    // pmClick = (e) => {
    //     e.preventDefault();
    //     this.setState({ isPMButton: true, isAMButton: false })
    // }

    render() {
        return (

            <div>
                <NavbarDisplay />
                <PoolImage />
                <Form 
                handleClick={this.props.handleClick}
                handleInputChange={this.props.handleInputChange}
                value={this.props.value} 
                />
                <Icons />
                {this.props.submitForm ? <ProgramButton amClick={this.props.amClick}
                pmClick={this.props.pmClick} /> : console.log('form not yet submitted')}
                {this.props.isAMButton ? <AM /> : console.log("am button not clicked yet")}
                {this.props.isPMButton ? <PM /> : console.log("pm button not yet pushed")}
            </div>
        )
    }
}

export default Home
