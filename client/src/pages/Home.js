import React, { Component } from 'react';
import NavbarDisplay from '../components/NavbarDisplay/NavbarDisplay';
import { Form, ProgramButton, AM, PM, PoolImage } from '../components/Buttongroup/Form';
import Icons from '../components/Icons/Icons';


export class Home extends Component {


    render() {
        return (

            <div>
                <NavbarDisplay />
                <PoolImage />
                <Form 
                handleClick={this.props.handleClick}
                handleInputChange={this.props.handleInputChange}
                value={this.props.value}
                nineAM={this.props.nineAM} 
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
