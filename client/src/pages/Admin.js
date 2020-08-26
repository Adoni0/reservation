import React, { Component } from 'react'
import API from '../util/API'

export default class Admin extends Component {

    componentDidMount() {
        API.getAllReservations()
        .then(data => {
            console.log(data)
            
          })
          .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>Admin Page</h1>
            </div>
        )
    }
}



