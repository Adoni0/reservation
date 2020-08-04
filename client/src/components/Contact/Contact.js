import React from 'react';
import './style.css';

export default function Contact(props) {
    return (
        <div>
            <form>
                <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Phone Number</label>
                    <div class="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Reserve</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
