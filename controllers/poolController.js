const db = require('../models/');

module.exports = {
    create: function (req, res) {

        db.Reservations.count({
            date: req.body.date,
            timeSlot: req.body.timeSlots.time
        }, (err, count) => {
            if (err) return err;

            console.log(count);

            if (count < 6) {
                console.log('Got this far');

                db.Reservations.create({
                    date: req.body.date,                        // date: '2020-08-25',
                    timeSlot: req.body.timeSlots.time,          // timeSlot: '9AM',
                    name: req.body.timeSlots.bookedBy.name,     // name: 'Diarmuid',
                    email: req.body.timeSlots.bookedBy.email,   // email: 'dermo@gmail.com',
                    phone: req.body.timeSlots.bookedBy.phone    // phone: '23445346456'
                })
                    .then(data => {
                        console.log(data)
                    })
                    .catch(err => res.json(err));
            }
        })


    },

    findAll: function (req, res) {
        db.Reservations.find()
            .then(reservation => {
                res.json(reservation)
            })
            .catch(err => res.json(err));
    },

    remove: (req, res) => {
        db.Reservations.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    }
}