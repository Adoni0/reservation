import React, { Component } from 'react';
import NavbarDisplay from '../components/NavbarDisplay/NavbarDisplay';
import { Buttongroup, PoolImage } from '../components/Buttongroup/Buttongroup';
import Icons from '../components/Icons';


export class Home extends Component {
    
    render() {
        return (
            
            <div>
                <NavbarDisplay />             
                <PoolImage />
                <Buttongroup />
                <Icons />
               
            </div>
        )
    }
}

export default Home
