const db = require('../models')


module.exports = {
    all: function (req, res) {
        db.users.all(function (result) {
            res.send(result)


        })
    },
    getOne: function (req, res) {
        db.users.getOne(req.params.id, function (result) {
            res.send(result)
        })
    },
    create: function (req, res) {

        db.users.create(["first_name", "last_name", "email", "fbID"], [req.body.first_name, req.body.last_name, req.body.email, req.body.fbID], function (result) {
            res.send(result)
        });



    },
    update: function (req, res) {
        var condition = "id = " + req.params.id;
        db.users.update(req.body, condition, function (result) {
            res.send(result)
        })

    },
    delete: function (req, res) {
        db.users.delete(req.params.id, function (result) {
            res.send(result)
        })

    }
}