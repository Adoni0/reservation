import React, { useEffect, useState } from 'react'
import './ChartBoxes.css'
import API from '../../util/API';

const ChartBoxes = (props) => {

    const [todaysReservations, setTodaysReservations] = useState([]);

    const updateChart = () => {

        var today = new Date();
                var dd = today.getDate();

                var mm = today.getMonth() + 1;
                var yyyy = today.getFullYear();
                if (dd < 10) {
                    dd = '0' + dd;
                }

                if (mm < 10) {
                    mm = '0' + mm;
                }
                today = yyyy + '-' + mm + '-' + dd;
                
                var resDuplicate = [...props.resFilter]

                Update(today, resDuplicate);
                
                const todayFilter = resDuplicate.filter(resy => resy.date === today);
                // setTodaysReservations(todayFilter)
                // console.log(todayFilter)
        
    }

    const Update = (today, array) => {
        var emptyArray = [];
                
                for(var i = 0; i < array.length; i++){
                    console.log(array[i])
                    if(array[i].date === today){
                        emptyArray.push(array[i].date);
                        setTodaysReservations(emptyArray)

                    } else {
                        return null
                    }
                }
    }

    return (
        <div className="row chart-row">
            <div className="col md-4">
                <div className="card mb-3 bg-mixed-hopes widget-chart text-white card-border">
                    <div className="icon-wrapper rounded">
                        <div className="icon-wrapper-bg bg-dark opacity-9" />
                        <i className="fa fa-calendar" aria-hidden="true"></i>

                    </div>
                    <div className="widget-numbers">
                        {props.monthCounter}
                    </div>
                    <div className="widget-subheading">
                        Total Reservations this Month
    </div>
                    <div className="widget-description text-dark">
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        <span className="pl-1">175.5%</span>
                    </div>
                </div>
            </div>

            <div className="col md-4">
                <div className="card mb-3 bg-grow-early widget-chart text-white card-border">
                    <div className="icon-wrapper rounded-circle">
                        <div className="icon-wrapper-bg bg-white opacity-2" />
                        <i className="fa fa-calendar-plus-o" aria-hidden="true"></i>

                    </div>
                    <div className="widget-numbers">
                        16
    </div>
                    <div className="widget-subheading">
                        Reservations Made in Current Week
    </div>
                    <div className="widget-description text-white">
                        <span className="pl-1">54.1%</span>
                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div className="col md-4">
                <div className="card mb-3 bg-plum-plate widget-chart text-white card-border">
                    <div className="icon-wrapper rounded-circle">
                        <div className="icon-wrapper-bg bg-dark opacity-9" />
                        <i onClick={updateChart} className="fa fa-calendar-check-o" aria-hidden="true"></i>

                    </div>
                    <div className="widget-numbers">
                        {todaysReservations.length}
                    </div>
                    <div className="widget-subheading">
                        # of Reservations Today
    </div>
                    <div className="widget-description text-white opacity-8">
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        <span className="pl-1">175.5%</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChartBoxes