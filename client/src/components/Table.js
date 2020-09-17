import React from 'react'

export default function Table(props) {
    return (
        <>
            <tr>
                <td className="text-center"><i onClick={props.handleDelete} className="fa fa-times delete-icon" aria-hidden="true"></i></td>
                <td className="text-center"><i onClick={props.handleEdit} data-toggle="modal" data-target="#exampleModalScrollable" className="fa fa-pencil edit-icon" aria-hidden="true"></i></td>
                <td className="text-center text-muted">{props.date}</td>
                <td>
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left mr-3">

                            </div>
                            <div className="widget-content-left flex2">
                                <div className="widget-heading">{props.name}</div>

                            </div>
                        </div>
                    </div>
                </td>
                <td className="text-center">{props.email}</td>
                <td className="text-center">
                    <div>{props.phone}</div>
                </td>
                <td className="text-center">
                    <div>{props.timeSlot}</div>
                </td>
            </tr>


        </>
    )
}
