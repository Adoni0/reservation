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
            </form>

        </div>
    )
}

export function ProgramButton(props) {

    return (
        <div className="lap-btns">
            <button onClick={props.amClick} type="button" className="btn btn-light">AM Lap Swim</button>
            <button onClick={props.pmClick} type="button" className="btn btn-dark">PM Lap Swim</button>
        </div>
    )
}

export function AM() {
    return(
        <>
        <button type="button" className="btn btn-outline-info"><Link to="/reserve">9AM</Link></button>
        <button type="button" className="btn btn-outline-info"><Link to="/reserve">10AM</Link></button>
        </>
    )
}

export function PM() {
    return(
        <>
        <button type="button" className="btn btn-outline-info">5PM</button>
        <button type="button" className="btn btn-outline-info">6PM</button>
        </>
    )
}

export function PoolImage() {
    return (
        <img className="pool-image" src="https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    )
}
