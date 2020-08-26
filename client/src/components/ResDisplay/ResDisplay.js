import React from 'react'
import './style.css'
// import pool from '../../images/pool-lane.jpg'

export default function ResDisplay(props) {

    const style = {
        backgroundImage: "url('https://images.pexels.com/photos/261185/pexels-photo-261185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 ')",
        // borderBottom: " solid white"
    }

    return (
        <div style={style} className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 name="date" className="display-4">Make your reservation for {props.date}</h1>
                <h1 name="time" className="lead">At {props.time}</h1>
            </div>
        </div>

    )
}

