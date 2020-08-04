const db = require('../models/reservations');

module.exports = {
    create: function(req, res){
        db.Reservations.create(req.body)
        .then(data => {
            console.log(data)
        })
        .catch(err => res.json(err));
    },

    findAll: function(req,res){
        db.Reservations.find()
        .then(reservation => {
            res.json(reservation)
        })
        .catch(err => res.json(err));
    }
}