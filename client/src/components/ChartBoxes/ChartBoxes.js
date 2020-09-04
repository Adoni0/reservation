import React from 'react'
import './ChartBoxes.css'

const ChartBoxes = () => {
    return (
        <div className="row chart-row">
            <div className="col md-4">
                <div className="card mb-3 bg-mixed-hopes widget-chart text-white card-border">
                    <div className="icon-wrapper rounded">
                        <div className="icon-wrapper-bg bg-dark opacity-9" />
                        <i class="fa fa-calendar" aria-hidden="true"></i>

                    </div>
                    <div className="widget-numbers">
                        38
    </div>
                    <div className="widget-subheading">
                        Total Reservations this Month
    </div>
                    <div className="widget-description text-dark">
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        <span className="pl-1">175.5%</span>
                    </div>
                </div>
            </div>

            <div className="col md-4">
                <div className="card mb-3 bg-grow-early widget-chart text-white card-border">
                    <div className="icon-wrapper rounded-circle">
                        <div className="icon-wrapper-bg bg-white opacity-2" />
                        <i class="fa fa-calendar-plus-o" aria-hidden="true"></i>

                    </div>
                    <div className="widget-numbers">
                        16
    </div>
                    <div className="widget-subheading">
                        Reservations Made in Current Week
    </div>
                    <div className="widget-description text-white">
                        <span className="pl-1">54.1%</span>
                        <i class="fa fa-angle-up" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div className="col md-4">
                <div className="card mb-3 bg-plum-plate widget-chart text-white card-border">
                    <div className="icon-wrapper rounded-circle">
                        <div className="icon-wrapper-bg bg-dark opacity-9" />
                        <i class="fa fa-calendar-check-o" aria-hidden="true"></i>

                    </div>
                    <div className="widget-numbers">
                        5
    </div>
                    <div className="widget-subheading">
                        # of Reservations Today
    </div>
                    <div className="widget-description text-white opacity-8">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        <span className="pl-1">175.5%</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChartBoxes