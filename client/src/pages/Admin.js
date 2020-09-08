import React, { Component, useContext, useState, useEffect } from 'react'
import API from '../util/API'
import pvrpd from '../images/pvrpd.jpg';
// import { Footer } from '../components/Buttongroup/Form';
import Moment from 'react-moment';
import Table from '../components/Table';
import Modal from '../components/Modal';
import ChartBoxes from '../components/ChartBoxes/ChartBoxes';
import { auth } from '../components/Firebase';
import { UserContext } from '../providers/UserProvider';
import { Link } from 'react-router-dom';


// export default class Admin extends Component {
const Admin = () => {

    const [reservations, setReservations] = useState([]);
    const [resFilter, setResfilter] = useState([]);
    const [dateFilter, setDatefilter] = useState('');
    const [monthCounter, setMonthcounter] = useState(0);

    const user = useContext(UserContext);
    const {displayName, email} = user;

    const handleCurrentWeek = (e) => {
        e.preventDefault();

        const current = [...resFilter]
        setReservations(current);

    }

    const handleMonthCounter = () => {
        var today = new Date();
        var mm = '0' + (today.getMonth()+1);
        // console.log('mm ' + mm)
        const duplicate = [...resFilter];
        
        for(const resy of duplicate){

            var month = resy.date.split('-')[1];
            console.log('month ' + month)
            if(month === mm){
                setMonthcounter(monthCounter+1)
            } else {
                console.log(`No Reservations in Current Month!!`)
            }
        }
            
        
    }

    useEffect(() => {
    //   handleMonthCounter()

        API.getAllReservations()
            .then(data => {
                const resy = [...reservations]

                for (const reserved of data.data) {

                    resy.push(reserved);
                    // console.log(resy);
                    setReservations(resy)
                    setResfilter(resy)
                   

                }

            })
            .catch(err => console.log(err));
    }, []);


    const handleInputFilterChange = (event) => {
        const { name, value } = event.target;
        
        if(name === 'dateFilter'){
            setDatefilter(value)
        }
    }

    const handleFilterByDay = (e) => {
        e.preventDefault();
    
        const resy = [...resFilter]
        const test = resy.filter(day => dateFilter === day.date)
        console.log(test);
        setReservations(test);
    
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light admin-navbar">
                <img className="navbar-brand parksImage" src={pvrpd} />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="homeLink" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <p>{displayName}</p>
                        </li>

                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <button className="submitDate" onClick={() => { auth.signOut() }}><Link to="/">Sign out</Link></button>

                    </form>

                </div>
            </nav>

            <Modal
                dateFilter={dateFilter}
                handleFilterByDay={handleFilterByDay}
                handleInputFilterChange={handleInputFilterChange}
            />

            <ChartBoxes 
            monthCounter={monthCounter}
            resFilter={resFilter}
            />


            <div className="row admin-row">
                <div className="col md-12">
                    <div className=" card main-card mb-3">
                        <div className="card-header">Reservations Made
                                        <div className="btn-actions-pane-right">
                                <div role="group" className="btn-group-sm btn-group">
                                    <button onClick={handleCurrentWeek} className="active btn btn-info">Current Week</button>
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
                                    {reservations.length ? reservations.map(reservation => (
                                        <Table
                                            key={reservation._id}
                                            date={reservation.date}
                                            name={reservation.name}
                                            email={reservation.email}
                                            phone={reservation.phone}
                                            timeSlot={reservation.timeSlot}
                                        />
                                    )) : null}


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

export default Admin;

//     var today = this.state.today;
//     var dd = today.getDate();

//     var mm = today.getMonth()+1; 
//     var yyyy = today.getFullYear();
//     if(dd<10) 
//     {
//         dd='0'+dd;
//     } 

//     if(mm<10) 
//     {
//         mm='0'+mm;
//     } 
//     today = yyyy + '-' + mm + '-' + dd;
//     console.log(today);