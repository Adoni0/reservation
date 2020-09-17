import axios from 'axios';

export default {

    storeReservation: function(userInfo){
        return axios.post('api/reserve', userInfo)
    },

    getAllReservations: function(allRes){
        return axios.get('api/reserve')
    },

    deleteReservation: (reservationId) => {
        return axios.delete('api/reserve/' + reservationId)
    },

    updateReservation: (resId, resData) => {
        return axios.put(`api/reserve/${resId}`, resData)
    }

}