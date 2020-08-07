import React from 'react'

export default function ResDisplay(props) {
    return (
        <div>
            <h2 name="date">Make your reservation for {props.date} at</h2>
            <h2 name="time">{props.time}</h2>
        </div>
    )
}
