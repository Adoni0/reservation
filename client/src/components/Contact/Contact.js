import React from 'react';
import './style.css';


export default function Contact(props) {

    return (
        <>
            <form className="contact-form">
                <div class="form-group">
                    <label >Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Phone Number</label>
                    <input type="tel" placeholder="123-456-7891" class="form-control" id="exampleInputPassword1" />
                </div>
                
                <button onClick={props.handleSubmit} type="submit" class="btn btn-primary">Reserve</button>
            </form>
        </>
    )

}
