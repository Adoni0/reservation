import React from 'react'
// import Contact from '../Contact/Contact'

export default function ResDisplay(props) {
    return (
        <div>
            <h2 name="date">Make your reservation for {props.date} at</h2>
            <h2 name="time">{props.time}</h2>
            {/* <Contact handleSubmit={props.handleSubmit}/> */}
        </div>
        
    )
}
