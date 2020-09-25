import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';


export function Form(props) {

    var todaysDate = new Date();
    var year = todaysDate.getFullYear();
    var month = ("0" + (todaysDate.getMonth() + 1)).slice(-2);  //MM
    var day = ("0" + todaysDate.getDate()).slice(-2); // DD
    var minDate = (year + "-" + month + "-" + day);


    return (
        
        <div className="dateAndTime row">
            
            <form className="calendar">
                <label style={{ fontSize: '1em' }} className="lane" id="l1">Select a Date: </label>
                <input style={{ fontSize: '1.5em' }} type="date" min={minDate} name="date" value={props.dateValue} onChange={props.handleInputChange} />
                <button style={{ fontSize: '1.2em', marginTop: '-10px' }} className="btn btn-warning" onClick={props.handleClick}>Reserve</button>

                <div style={{ "display": props.submitForm }} className="lap-btns">
                    <button onClick={props.amClick} type="button" className="btn btn-light ampm">AM Lap Swim</button>
                    <button onClick={props.pmClick} type="button" className="btn btn-dark ampm">PM Lap Swim</button>
                </div>

                <div className="am-link" style={{ "display": props.amButton }}>
                    <button type="button" data-container="body" data-toggle="popover" data-placement="bottom" data-content={props.nineAmSpots + " spots left"} onClick={props.nineAM} className="btn submitDate btn-outline-light"><Link className="changeColor" to="/reserve">9AM</Link></button>   
                    {/* <button onMouseEnter={displayRemainingSpots} type="button" className="btn submitDate btn-outline-light"><Link className="changeColor" to="/reserve">9AM</Link></button> */}
                    <button type="button" data-container="body" data-toggle="popover" data-placement="bottom" data-content={props.tenAmSpots + " spots left"} onClick={props.tenAM} className="btn submitDate btn-outline-light"><Link className="changeColor" to="/reserve">10AM</Link></button>

                </div>

                <div className="pm-link" style={{ "display": props.pmButton }}>
                    <button type="button" data-container="body" data-toggle="popover" data-placement="bottom" data-content={props.fivePmSpots + " spots left"} onClick={props.fivePM} className="btn submitDate btn-outline-light"><Link className="changeColor" to="/reserve">5PM</Link></button>
                    <button type="button" data-container="body" data-toggle="popover" data-placement="bottom" data-content={props.sixPmSpots + " spots left"} onClick={props.sixPM} className="btn submitDate btn-outline-light"><Link className="changeColor" to="/reserve">6PM</Link></button>
                </div>
               
            </form>

        </div>
       
       
    )
}


export function Footer() {
    return (
        <div className="footer">
            <p style={{ color: 'white', fontSize: '10px' }}>COPYRIGHT © 2020 PLEASANT VALLEY RECREATION & PARK DISTRICT<br />

1605 E. BURNLEY STREET, CAMARILLO CA 93010 <br />

TELEPHONE (805) 482-1996  <br />

POWERED BY SOUDONIX ENTERPRISES</p>
        </div>
    )

}
