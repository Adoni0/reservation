var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ReservationSchema = new Schema({

    date: {
        type: Date,
        required: true,
        unique: true
    }, 
    lanes: [
        {
            laneNum: { //will be 8 lanes
                type: Number,
                required: true,
                default: 1
            },
            timeslots: [
                {
                    time: {
                        type: Number,
                        required: true
                    }, //use military time for simplicity
                    reserved: {
                        type: Boolean,
                        required: true
                    },
                    bookedBy: {
                        name: {
                            type: String,
                            required: true
                        },
                        phone: {
                            type: Number,
                            required: true,
                        },
                        email: {
                            type: String,
                            required: true
                        }
                    }
                },
    
            ]
        },
        

    ]
});

var Reservations = mongoose.model("Reservations", ReservationSchema);

// Export the model
module.exports = Reservations;