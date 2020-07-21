import React, { Component } from 'react';
import NavbarDisplay from '../components/NavbarDisplay/NavbarDisplay';
import { Buttongroup, PoolImage } from '../components/Buttongroup/Buttongroup';

export class Home extends Component {
    render() {
        return (
            <div>
                <NavbarDisplay />
               
                <PoolImage />
                <Buttongroup />
            </div>
        )
    }
}

export default Home
