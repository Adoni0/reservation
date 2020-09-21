import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


export default function Contact(props) {

    return (
        <div className="outerContainer">
            <form className="contact-form">
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" name="name" onChange={props.handleInputChange} value={props.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange={props.handleInputChange} name="email" value={props.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" onChange={props.handleInputChange} value={props.phone} className="form-control" id="exampleInputPassword1" />
                </div>

                {/* <button onClick={props.handleSubmit} type="submit" className="btn btn-primary"><Link className="changeTextColor" to="/">Reserve</Link></button> */}
                <button className="bubbly" onClick={props.handleSubmit} type="submit">
                    <div className="left"></div>
                    <Link className="changeTextColor" to="/">Reserve</Link>
                    {/* Reserve */}
                    <div className="right"></div>
                </button>

            </form>
        
        </div>
    )

}
