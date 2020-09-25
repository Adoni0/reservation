var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ReservationSchema = new Schema({
    // date: Date

    date: {
        type: String,
        required: true,
        // unique: true
    },
    timeSlot: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }


})


var Reservations = mongoose.model("Reservations", ReservationSchema);

// Export the model
module.exports = Reservations;