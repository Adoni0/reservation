import React, { Component } from 'react'
import API from '../util/API'
import pvrpd from '../images/pvrpd.jpg';
// import { Footer } from '../components/Buttongroup/Form';
import Moment from 'react-moment';
import Table from '../components/Table';
import Modal from '../components/Modal';


export default class Admin extends Component {

    state = {
        reservations: []
        // date: [],
        // name: [],
        // email: '',
        // phone: '',
        // time: '',
        // today: new Date()
    }

    componentDidMount() { //display reservations for the upcoming week


        API.getAllReservations()
            .then(data => {
                const resy = [...this.state.reservations]
                for (const reserved of data.data) {

                    resy.push(reserved);
                    // console.log(resy);
                    this.setState({ reservations: resy })

                }

            })
            .catch(err => console.log(err));
    }

    //<Moment format="YYYY-MM-DD" add={{days: 1}}>{this.state.today}</Moment>

    render() {

        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <img className="navbar-brand parksImage" src={pvrpd} />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="homeLink" href="/">Home</a>
                            </li>

                        </ul>

                    </div>
                </nav>

                <Modal />


                <div className="row admin-row">
                    <div className="col md-12">
                        <div className=" card main-card mb-3">
                            <div className="card-header">Reservations Made
                                        <div className="btn-actions-pane-right">
                                    <div role="group" className="btn-group-sm btn-group">
                                        <button className="active btn btn-info">Current Week</button>
                                        <button className="btn btn-info" data-toggle="modal" data-target="#exampleModal">Filter Day</button>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Date</th>
                                            <th>Name</th>
                                            <th className="text-center">Email</th>
                                            <th className="text-center">Phone</th>
                                            <th className="text-center">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.reservations.length ? this.state.reservations.map(reservation => (
                                            <Table
                                                key={reservation._id}
                                                date={reservation.date}
                                                name={reservation.name}
                                                email={reservation.email}
                                                phone={reservation.phone}
                                                timeSlot={reservation.timeSlot}
                                            />
                                        )) : console.log(`error`)}


                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>


                {/* <Footer /> */}
            </>
        )
    }
}


