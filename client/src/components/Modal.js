import React from 'react'

export default function Modal(props) {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Filter by Day</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <form>
                                <div className="form-group">
                                    
                                    <input type="date" onChange={props.handleInputFilterChange} name="dateFilter" value={props.dateFilter} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">Filter by a specific date.</small>
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" onClick={props.handleFilterByDay} className="btn btn-primary">Filter</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
