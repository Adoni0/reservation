import React, { Component } from 'react';
import NavbarDisplay from '../components/NavbarDisplay/NavbarDisplay';
import { Form, Footer } from '../components/Buttongroup/Form';
import Icons from '../components/Icons/Icons';
import Background from '../components/Background/Background';


export class Home extends Component {


    render() {
        return (

            <div className="homePageContainer">
                <NavbarDisplay />

                <Background />
            
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
                            nineAmSpots={this.props.nineAmSpots}
                            tenAmSpots={this.props.tenAmSpots}
                            fivePmSpots={this.props.fivePmSpots}
                            sixPmSpots={this.props.sixPmSpots}
                        />
                    

                <Icons />
              
                <Footer />
            </div>
        )
    }
}

export default Home
