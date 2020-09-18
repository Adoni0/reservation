import React, { useState } from 'react'
import API from '../../util/API'

export default function EditForm(props) {


    const handleUpdate = (e) => {
        e.preventDefault();
        // console.log(props.resName)
        // console.log(props.resId)
        // console.log(props.resTime)
        // console.log(props.resEmail)
        // console.log(props.resPhone)
         API.updateReservation(props.resId, {
            date: props.resDate,
            timeSlot: props.resTime,
            name: props.resName,
            email: props.resEmail,
            phone: props.resPhone
        })
        .then(data => console.log(`reservation updated: ${data}`))
        .catch(err => console.log(err)); 
    }

    return (
        // <!-- Scrollable modal -->
        <div className="modal fade" id="exampleModalScrollable" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Edit Reservation Info</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    
                    <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                        <input onChange={props.handleChange} name="name" value={props.resName} />
                        <br/>
                        <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                        <input onChange={props.handleChange} name="resEmail" value={props.resEmail} />
                        <br/>
                        <i className="fa fa-phone-square fa-2x" aria-hidden="true"></i>
                        <input onChange={props.handleChange} name="phone" value={props.resPhone} />
                        <br/>
                        <i className="fa fa-clock-o fa-2x" aria-hidden="true"></i>
                        <select name="time" onChange={props.handleChange} value={props.resTime} id="time-select">
                            {/* <option value="">--Select a New Time--</option> */}
                            <option value="9AM">9AM</option>
                            <option value="10AM">10AM</option>
                            <option value="5PM">5PM</option>
                            <option value="6PM">6PM</option>
                        </select>
                        <br/>
                        <i className="fa fa-calendar fa-2x" aria-hidden="true"></i>
                        <input onChange={props.handleChange} type="date" name="date" value={props.resDate} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button onClick={handleUpdate} type="button" className="btn btn-primary">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>


    )
}
