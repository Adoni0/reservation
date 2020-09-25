import React, { useState } from 'react'
import API from '../../util/API'

export default function EditForm(props) {


    const handleUpdate = (e) => {
        e.preventDefault();

        API.updateReservation(props.resId, {
            date: props.resDate,
            timeSlot: props.resTime,
            name: props.resName,
            email: props.resEmail,
            phone: props.resPhone
        })
            .then(data => {
                console.log(data.data)
                console.log(props.resId)
                
                    API.getAllReservations()
                        .then(rez => {

                            props.refreshReservationsAfterEdit(rez.data)
                        })
                        .catch(err => console.log(err));
                
            })
            .catch(err => console.log(err));

    }

    var todaysDate = new Date();
    var year = todaysDate.getFullYear();
    var month = ("0" + (todaysDate.getMonth() + 1)).slice(-2);  //MM
    var day = ("0" + todaysDate.getDate()).slice(-2); // DD
    var minDate = (year + "-" + month + "-" + day);

    return (
        // <!-- Scrollable modal -->
        <div className="modal fade" id="exampleModalScrollable" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable edit">
                <div className="modal-content">
                    <div style={{ backgroundColor: '#3bb78f', backgroundImage: 'linear-gradient(315deg, #3bb78f 0%, #0bab64 74' }} className="modal-header">
                        <h5 style={{ marginLeft: '140px' }}>Edit Reservation Info</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div style={{ marginLeft: '125px', paddingBottom: '10px' }} className="nameInput">
                                <i style={{ paddingRight: '10px' }} className="fa fa-user fa-2x" aria-hidden="true"></i>
                                <input style={{ width: '200px' }} onChange={props.handleChange} name="name" value={props.resName} />
                            </div>

                            <div style={{ marginLeft: '125px', paddingBottom: '10px' }} className="emailInput">
                                <i style={{ paddingRight: '10px' }} className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                                <input style={{ width: '200px' }} type="email" onChange={props.handleChange} name="resEmail" value={props.resEmail} />
                            </div>

                            <div style={{ marginLeft: '125px', paddingBottom: '10px' }} className="phoneInput">
                                <i style={{ paddingRight: '10px' }} className="fa fa-phone-square fa-2x" aria-hidden="true"></i>
                                <input onChange={props.handleChange} name="phone" value={props.resPhone} />
                            </div>

                            <div style={{ marginLeft: '125px', paddingBottom: '10px' }} className="timeInput">
                                <i style={{ paddingRight: '10px' }} className="fa fa-clock-o fa-2x" aria-hidden="true"></i>
                                <select name="time" onChange={props.handleChange} value={props.resTime} id="time-select">
                                    <option value="9AM">9AM</option>
                                    <option value="10AM">10AM</option>
                                    <option value="5PM">5PM</option>
                                    <option value="6PM">6PM</option>
                                </select>
                            </div>

                            <div style={{ marginLeft: '125px', paddingBottom: '10px' }} className="dateInput">
                                <i style={{ paddingRight: '10px' }} className="fa fa-calendar fa-2x" aria-hidden="true"></i>
                                <input min={minDate} onChange={props.handleChange} type="date" name="date" value={props.resDate} />
                            </div>
                        </form>

                    </div>
                    <div className="modal-footer mx-auto">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button onClick={handleUpdate} type="button" data-dismiss="modal" className="btn btn-success">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>


    )
}
