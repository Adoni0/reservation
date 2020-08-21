import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import swimmer from '../../images/swimmer.jpg';
import swimmer1 from '../../images/swimmer1.jpg';
import swimmer2 from '../../images/swimmer2.jpg';
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
                    <button type="button" onClick={props.nineAM} className="btn btn-outline-info test"><Link to="/reserve">9AM</Link></button>
                    <button type="button" className="btn btn-outline-info"><Link to="/reserve">10AM</Link></button>
                </div>

                <div className="pm-link" style={{ "display": props.pmButton }}>
                    <button type="button" className="btn btn-outline-info">5PM</button>
                    <button type="button" className="btn btn-outline-info">6PM</button>
                </div>
            </form>



        </div>
    )
}

// export function ProgramButton(props) {

//     return (
//         <div className="lap-btns">
//             <button onClick={props.amClick} type="button" className="btn btn-light">AM Lap Swim</button>
//             <button onClick={props.pmClick} type="button" className="btn btn-dark">PM Lap Swim</button>
//         </div>
//     )
// }

// export function AM(props) {
//     return (
//         <div>
//             <button type="button" onClick={props.nineAM} className="btn btn-outline-info"><Link to="/reserve">9AM</Link></button>
//             <button type="button" className="btn btn-outline-info"><Link to="/reserve">10AM</Link></button>
//         </div>
//     )
// }

// export function PM() {
//     return (
//         <div>
//             <button type="button" className="btn btn-outline-info">5PM</button>
//             <button type="button" className="btn btn-outline-info">6PM</button>
//         </div>
//     )
// }

export function PoolImage() {
    return (
        <>
            <img className="swimmer" src={swimmer} />
            <img className="swimmer1" src={swimmer1} />
            <img className="swimmer2" src={swimmer2} />
        </>
    )
}

export function Footer() {
    return (
        <div className="footer">
            <p>This is some content in sticky footer</p>
        </div>
    )

}
