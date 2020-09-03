import React, { Component } from 'react';
import NavbarDisplay from '../components/NavbarDisplay/NavbarDisplay';
import { Form, Footer } from '../components/Buttongroup/Form';
import Icons from '../components/Icons/Icons';


export class Home extends Component {


    render() {
        return (

            <div className="homePageContainer">
                <NavbarDisplay />
            
                        <Form
                            handleClick={this.props.handleClick}
                            handleInputChange={this.props.handleInputChange}
                            value={this.props.value}
                            nineAM={this.props.nineAM}
                            tenAM={this.props.tenAM}
                            fivePM={this.props.fivePM}
                            sixPM={this.props.sixPM}
                            amClick={this.props.amClick}
                            pmClick={this.props.pmClick}
                            submitForm={this.props.submitForm}
                            amButton={this.props.isAMButton}
                            pmButton={this.props.isPMButton}
                        />
                    

                <Icons />
                {/* {this.props.submitForm === "display: block" ? <ProgramButton amClick={this.props.amClick}
                pmClick={this.props.pmClick} /> : console.log('form not yet submitted')} */}
                {/* {this.props.isAMButton ? <AM /> : console.log("am button not clicked yet")}
                {this.props.isPMButton ? <PM /> : console.log("pm button not yet pushed")} */}
                <Footer />
            </div>
        )
    }
}

export default Home
