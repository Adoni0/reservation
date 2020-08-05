import React from 'react';
import './style.css';

export default function Contact(props) {
    return (
        <div>
            <form className="contact-form">
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Phone Number</label>
                    <div className="col-sm-10">
                        <input type="tel" placeholder="123-456-7891" className="form-control" id="inputPassword3" />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-10">
                        <button onClick={props.handleSubmit} type="submit" className="btn btn-primary">Reserve</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
