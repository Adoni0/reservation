import React, { Component } from 'react'
import API from '../util/API'
import pvrpd from '../images/pvrpd.jpg';
// import { Footer } from '../components/Buttongroup/Form';
import Moment from 'react-moment';
import Table from '../components/Table';


export default class Admin extends Component {

    state = {
        reservations: [],
        date: [],
        name: [],
        email: '',
        phone: '',
        time: '',
        today: new Date()
    }

    componentDidMount() { //display reservations for the upcoming week

        API.getAllReservations()
            .then(data => {
                for(const reserved of data.data){
                    this.setState({ reservations: reserved })
                    // console.log(this.state.reservations);
                }

            })
            .catch(err => console.log(err));
    }

    //<Moment format="YYYY-MM-DD" add={{days: 1}}>{this.state.today}</Moment>

    render() {
        console.log(this.state.reservations);
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


                <div className="row admin-row">
                    <div className="col md-12">
                        <div className=" card main-card mb-3">
                            <div className="card-header">Reservations Made
                                        <div className="btn-actions-pane-right">
                                    <div role="group" className="btn-group-sm btn-group">
                                        <button className="active btn btn-info">Current Week</button>
                                        <button className="btn btn-info">Filter Day</button>
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
                                        date={reservation.date}
                                        name={reservation.name}
                                        email={reservation.email}
                                        phone={reservation.phone}
                                        timeSlot={reservation.timeSlot}
                                        />
                                   )) : console.log(`error`)}
                                        
                                        {/* {this.state.reservations.length ? this.state.reservations.map(reservation => (

                                            <tr>
                                                <td className="text-center text-muted">{reservation.date}</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">

                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">{reservation.name}</div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">{reservation.email}</td>
                                                <td className="text-center">
                                                    <div>{reservation.phone}</div>
                                                </td>
                                                <td className="text-center">
                                                    <div>{reservation.time}</div>
                                                </td>
                                            </tr>

                                        )) : null} */}
                                        {/* <tr>
                                                <td className="text-center text-muted"><Moment format="YYYY-MM-DD" add={{ days: 1 }}>{this.state.today}</Moment></td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">

                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">John Doe</div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Madrid</td>
                                                <td className="text-center">
                                                    <div className="badge badge-warning">Pending</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Details</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted"><Moment format="YYYY-MM-DD" add={{ days: 2 }}>{this.state.today}</Moment></td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">

                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">Ruben Tillman</div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Berlin</td>
                                                <td className="text-center">
                                                    <div className="badge badge-success">Completed</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Details</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted"><Moment format="YYYY-MM-DD" add={{ days: 3 }}>{this.state.today}</Moment></td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">

                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">Elliot Huber</div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">London</td>
                                                <td className="text-center">
                                                    <div className="badge badge-danger">In Progress</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Details</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted"><Moment format="YYYY-MM-DD" add={{ days: 4 }}>{this.state.today}</Moment></td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">

                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">Vinnie Wagstaff</div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Amsterdam</td>
                                                <td className="text-center">
                                                    <div className="badge badge-info">On Hold</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Details</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted"><Moment format="YYYY-MM-DD" add={{ days: 5 }}>{this.state.today}</Moment></td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">

                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">Vinnie Wagstaff</div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Amsterdam</td>
                                                <td className="text-center">
                                                    <div className="badge badge-info">On Hold</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Details</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted"><Moment format="YYYY-MM-DD" add={{ days: 6 }}>{this.state.today}</Moment></td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">

                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">Vinnie Wagstaff</div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Amsterdam</td>
                                                <td className="text-center">
                                                    <div className="badge badge-info">On Hold</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Details</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted"><Moment format="YYYY-MM-DD" add={{ days: 7 }}>{this.state.today}</Moment></td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">

                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">Vinnie Wagstaff</div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Amsterdam</td>
                                                <td className="text-center">
                                                    <div className="badge badge-info">On Hold</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Details</button>
                                                </td>
                                            </tr> */}
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


