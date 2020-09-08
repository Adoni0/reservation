import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
// import Moment from 'react-moment';

export function Form(props) {
    return (
        <div className="dateAndTime row">
            <form className="calendar">
                <label className="lane" id="l1">Select a Date: </label>
                <input type="date" name="date" value={props.value} onChange={props.handleInputChange} />
                <button className="submitDate" onClick={props.handleClick}>Reserve</button>

                <div style={{ "display": props.submitForm }} className="lap-btns">
                    <button onClick={props.amClick} type="button" className="btn btn-light ampm">AM Lap Swim</button>
                    <button onClick={props.pmClick} type="button" className="btn btn-dark ampm">PM Lap Swim</button>
                </div>

                <div className="am-link" style={{ "display": props.amButton }}>
                    <button type="button" onClick={props.nineAM} className="btn submitDate btn-outline-light"><Link className="changeColor" to="/reserve">9AM</Link></button>
                    <button type="button" onClick={props.tenAM} className="btn submitDate btn-outline-light"><Link className="changeColor" to="/reserve">10AM</Link></button>
                </div>

                <div className="pm-link" style={{ "display": props.pmButton }}>
                    <button type="button" onClick={props.fivePM} className="btn submitDate btn-outline-light"><Link className="changeColor" to="/reserve">5PM</Link></button>
                    <button type="button" onClick={props.sixPM} className="btn submitDate btn-outline-light"><Link className="changeColor" to="/reserve">6PM</Link></button>
                </div>
            </form>



        </div>
    )
}


export function Footer() {
    return (
        <div className="footer">
            <p style={{color: 'white', fontSize: '12px'}}>COPYRIGHT © 2020 PLEASANT VALLEY RECREATION & PARK DISTRICT<br/>

1605 E. BURNLEY STREET, CAMARILLO CA 93010 <br/>

TELEPHONE (805) 482-1996</p>
        </div>
    )

}
