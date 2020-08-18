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
            />
            </>
        )
    }
}

// https://d2blwilx4xw5sk.cloudfront.net/289d681b-bbf2-40c5-9eb7-87b674fd38c8/3c66a799-3fff-4eeb-bfde-1c152816abde/PVRPDLogo2.jpg?response-content-disposition=attachment%3B%20filename%3D%22PVRPDLogo2.jpg%22%3B%20filename%2A%3DUTF-8%27%27PVRPDLogo2.jpg&response-content-type=image%2Fjpeg&Expires=2147483647&Signature=HlKzPbm6-OFF8FVy3H9HlqTs5DYvZA0kezuB~qCtPtQStlZQpj-UYE-K9WuvFGSWUVQKgwSWvxH99J3X2DVvLdWnK~AQFxOdP6daAQ1VSB0CsLI6mL2kUVSYMQLodNjFMAp0jnDr1XfVVRLhflvDcLKr1GtfSCrq7iFsVBlAfJ3AnbmSHHdZk8trtE1A8wWg7u1vu9LVa~BGtaBDSN9S4gpjpu4bw0zSrTFA8yI2C0g4bR04npy9wv1QPQU8maDWcG09WJJpHUz7cv6MA9Jo24j~ZRFSziik6IiqwYSS4aqhTmFQ7Nf2lbZwG4Z35dTYoCVivnlvwcFg3I-ebuc2kA__&Key-Pair-Id=APKAJ5IHCXOL4TBJNRUA&DO-NOT-COPY-THIS-URL


