import React, { Component, useContext, useState, useEffect } from 'react'
import API from '../util/API'
import pvrpd from '../images/pvrpd.jpg';
import Table from '../components/Table';
import Modal from '../components/Modal';
import EditForm from '../components/EditForm/EditForm';
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
    const [weekCounter, setWeekcounter] = useState(0);
    const [todayCounter, setTodaycounter] = useState(0);

    const user = useContext(UserContext);
    const { displayName, email } = user;

    const handleAllRes = (e) => {
        e.preventDefault();

        const current = [...resFilter]
        setReservations(current);

    }

    const handleCurrentWeek = e => {
        e.preventDefault();

        var todaysDate = new Date();
        var dd = todaysDate.getDate();
        var mm = todaysDate.getMonth();
        var yyyy = todaysDate.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        // todaysDate = yyyy + '-' + mm + '-' + dd;

        const today = new Date(yyyy, mm, dd);

        const sevenDays = 7 * 24 * 60 * 60 * 1000;
        let currentWeek = today.getTime() + sevenDays;

        let result = [];

        const duplicate = [...resFilter];

        duplicate.forEach((rez) => {
            let dateArr = rez.date.split('-');
            let tmpDate = new Date(dateArr[0], (dateArr[1] - 1), dateArr[2]);
            // console.log('Time Stamp from arr: ' + tmpDate.getTime());

            if (tmpDate <= currentWeek && tmpDate >= today) {
                result.push(rez)
            }
        });

        setReservations(result);

    }

    const handleMonthCounter = () => {
        var today = new Date();
        var mm = '0' + (today.getMonth() + 1);

        const duplicate = resFilter[0]; //0 index is a sub array

        let onlyThisMonth = duplicate.filter((resy) => {
            return resy.date.split('-')[1] == mm;
        });

        setMonthcounter(monthCounter + onlyThisMonth.length);

    }

    const handleWeekCounter = () => {
        var todaysDate = new Date();
        var dd = todaysDate.getDate();
        var mm = todaysDate.getMonth();
        var yyyy = todaysDate.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        const today = new Date(yyyy, mm, dd);

        const sevenDays = 7 * 24 * 60 * 60 * 1000;
        let currentWeek = today.getTime() + sevenDays;

        const duplicate = [...resFilter];
      
        const onlyWeek = duplicate[0].filter((rez) => {
            let dateArr = rez.date.split('-');
            let tmpDate = new Date(dateArr[0], (dateArr[1] - 1), dateArr[2]);
       
            return tmpDate <= currentWeek && tmpDate >= today
            
        });
        
        setWeekcounter(weekCounter + onlyWeek.length);

    }

    const handleDayCounter = () => {
        var todaysDate = new Date();
        var dd = todaysDate.getDate();
        var mm = todaysDate.getMonth() + 1;
        var yyyy = todaysDate.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        todaysDate = yyyy + '-' + mm + '-' + dd;
        
        const duplicate = resFilter[0];
        let onlyToday = duplicate.filter((rez) => {
            return rez.date === todaysDate;
        })
        // console.log(onlyToday)
        setTodaycounter(todayCounter + onlyToday.length)
        
    }

    useEffect(() => {

        API.getAllReservations()
            .then(data => {
                const resy = [...reservations]
                // console.log(resy);

                for (const reserved of data.data) {

                    resy.push(reserved);
                    // console.log(resy);
                    setReservations(resy)
                    setResfilter(resFilter[0] = resy);
                    //    console.log(resFilter)

                }

            })
            .then(() => {
                handleMonthCounter()
                handleWeekCounter()
                handleDayCounter()
            })
            .catch(err => console.log(err));
    }, []);



    const handleInputFilterChange = (event) => {
        const { name, value } = event.target;

        if (name === 'dateFilter') {
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

    const handleDelete = id => {
        return () => {
            API.deleteReservation(id)
            .then(res => {
                API.getAllReservations()
                .then(data => {
                    // const resy = [];
                    var filteredRes = data.data.filter(rez => {
                        return rez._id !== res.data._id
                    })
                    setReservations(filteredRes);
                    setResfilter(filteredRes);
                    console.log(filteredRes)
                })
                .catch(err => console.log(err));    
                
            })
            .catch(err => console.log(err));
        }
        
    }

    const handleEdit = (id, reservation) => {
        return () => {console.log(`id: ${id} reservation: ${reservation.date}`)}
        // API.updateReservation(id, {
        //     date: reservation.date,
        //     timeSlot: reservation.timeSlot,
        //     name: reservation.name,
        //     email: reservation.email,
        //     phone: reservation.phone
        // })
        // .then(data => console.log(`reservation updated`))
        // .catch(err => console.log(err)); 
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
                            <a className="homeLink" href="/"><i className="fa fa-home" aria-hidden="true"></i> Home</a>
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

            <EditForm />

            <ChartBoxes
                monthCounter={monthCounter}
                weekCounter={weekCounter}
                todayCounter={todayCounter}
                resFilter={resFilter}
            />


            <div className="row admin-row">
                <div className="col md-12">
                    <div className=" card main-card mb-3">
                        <div className="card-header">Reservations Made
                                        <div className="btn-actions-pane-right">
                                <div role="group" className="btn-group-sm btn-group">
                                    <button onClick={handleAllRes} className="active btn btn-info">All Reservations</button>
                                    <button onClick={handleCurrentWeek} className="btn btn-info">Current Week</button>
                                    <button className="active btn btn-info" data-toggle="modal" data-target="#exampleModal">Filter Day</button>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                    <tr>
                                         <th className="text-center"></th>
                                         <th className="text-center"></th>
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
                                            // id={reservation._id}
                                            handleDelete={handleDelete(reservation._id)}
                                            handleEdit={handleEdit(reservation._id, reservation)}
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

        </>
    )

}

export default Admin;