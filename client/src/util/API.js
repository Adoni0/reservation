import axios from 'axios';

export default {

    storeReservation: function(userInfo){
        return axios.post('api/reserve', userInfo)
    },

    getAllReservations: function(allRes){
        return axios.get('api/reserve')
    },

    getReservationByDay: (reservationId) => {
        return axios.get('api/reserve/' + reservationId)
    }

}