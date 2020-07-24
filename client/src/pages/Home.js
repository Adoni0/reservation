import React, { Component } from 'react';
import NavbarDisplay from '../components/NavbarDisplay/NavbarDisplay';
import { Form, PoolImage } from '../components/Buttongroup/Form';
import Icons from '../components/Icons/Icons';


export class Home extends Component {
    
    render() {
        return (
            
            <div>
                <NavbarDisplay />             
                <PoolImage />
                <Form />
                <Icons />
               
            </div>
        )
    }
}

export default Home
