import React, { Component } from 'react';
import NavbarDisplay from '../components/NavbarDisplay';
import Buttongroup from '../components/Buttongroup';

export class Home extends Component {
    render() {
        return (
            <div>
                <NavbarDisplay />
                <Buttongroup />
            </div>
        )
    }
}

export default Home
