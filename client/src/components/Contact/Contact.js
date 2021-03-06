import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


export default function Contact(props) {

    return (
        <div className="outerContainer">
            <form className="contact-form">
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" name="name" placeholder="John Doe" onChange={props.handleInputChange} value={props.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" placeholder="janedoe@pvrpd.com" onChange={props.handleInputChange} name="email" value={props.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="(805)000-0000" name="phone" onChange={props.handleInputChange} value={props.phone} className="form-control" id="exampleInputPassword1" />
                </div>

                {/* <button onClick={props.handleSubmit} type="submit" className="btn btn-primary"><Link className="changeTextColor" to="/">Reserve</Link></button> */}
                <button style={{marginLeft: '15px'}} className="bubbly" onClick={props.handleSubmit} type="submit">
                    <div className="left"></div>
                    <Link className="changeTextColor" to="/">Reserve</Link>
                    {/* Reserve */}
                    <div className="right"></div>
                </button>

            </form>
        
        </div>
    )

}
