var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ReservationSchema = new Schema({

    date: {
        type: Date,
        required: true,
        unique: true
    },
    program: [
        {
            AMlaps: [
                {
                    timeSlots: [
                        {
                            time: {
                                type: Number,
                                required: true
                            }, //use military time for simplicity
                            reserved: {
                                type: Boolean,
                                required: true
                            },
                            lanes: [
                                {
                                    type: Array,
                                    max: 6,
                                    required: true,
                                    reserved: Boolean
                                }

                            ],
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
                }
            ]
        },
        {
            PMlaps: [
                {
                    timeSlots: [
                        {
                            time: {
                                type: Number,
                                required: true
                            }, //use military time for simplicity
                            reserved: {
                                type: Boolean,
                                required: true
                            },
                            lanes: [
                                {
                                    type: Array,
                                    max: 6,
                                    required: true,
                                    reserved: Boolean
                                }

                            ],
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
                }
            ]
        }

    ]

    // lanes: [
    //     {
    //         laneNum: { //will be 6 lanes reservable
    //             type: Number,
    //             required: true,
    //         },
    //         timeslots: [
    //             {
    //                 time: {
    //                     type: Number,
    //                     required: true
    //                 }, //use military time for simplicity
    //                 reserved: {
    //                     type: Boolean,
    //                     required: true
    //                 },
    //                 bookedBy: {
    //                     name: {
    //                         type: String,
    //                         required: true
    //                     },
    //                     phone: {
    //                         type: Number,
    //                         required: true,
    //                     },
    //                     email: {
    //                         type: String,
    //                         required: true
    //                     }
    //                 }
    //             },

    //         ]
    //     },


    // ]
});

var Reservations = mongoose.model("Reservations", ReservationSchema);

// Export the model
module.exports = Reservations;