import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import pvrpd from '../../images/pvrpd.jpg';

export default function NavbarDisplay() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <img className="navbar-brand parksImage" src={pvrpd}/>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/">Home</Link>
                            </li>
                            
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <a className="admin" href="">Admin</a>
                        </form>
                    </div>
                </nav>
            </div>
        </>
    )
}
