import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
// import Moment from 'react-moment';

export function Form(props) {
    return (
        <div className="row">
            <form className="calendar">
                <label className="lane" id="l1">Select a Date: </label>
                <input type="date" name="date" value={props.value} onChange={props.handleInputChange} />
                <button onClick={props.handleClick}>Submit</button>

                <div style={{ "display": props.submitForm }} className="lap-btns">
                    <button onClick={props.amClick} type="button" className="btn btn-light ampm">AM Lap Swim</button>
                    <button onClick={props.pmClick} type="button" className="btn btn-dark ampm">PM Lap Swim</button>
                </div>

                <div className="am-link" style={{ "display": props.amButton }}>
                    <button type="button" onClick={props.nineAM} className="btn btn-outline-info"><Link to="/reserve">9AM</Link></button>
                    <button type="button" onClick={props.tenAM} className="btn btn-outline-info"><Link to="/reserve">10AM</Link></button>
                </div>

                <div className="pm-link" style={{ "display": props.pmButton }}>
                    <button type="button" onClick={props.fivePM} className="btn btn-outline-info"><Link to="/reserve">5PM</Link></button>
                    <button type="button" onClick={props.sixPM} className="btn btn-outline-info"><Link to="/reserve">6PM</Link></button>
                </div>
            </form>



        </div>
    )
}


export function Footer() {
    return (
        <div className="footer">
            <p>This is some content in sticky footer</p>
        </div>
    )

}
