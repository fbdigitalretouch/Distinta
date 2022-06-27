const express = require("express");
let User = require("../models/usermodels");
 User = User.User

    var router = express.Router();
   

module.exports = (function () {
    'use strict';


    router.get("/", (req, res) => {
        User.find()
            .then(users => res.json(users))
            .catch(err => res.status(400).json("Error : " + err))
    })

    router.post("/add", (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const newUser = new User({
            username,
            password
        });

        newUser.save()
            .then(() => res.json("User Added!"))
            .catch(err => res.status(400).json("Error : " + err));
    });

    router.post("/delete/:id", (req, res) => {

        
        User.findOneAndDelete((req.param.id), (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("succesfully deleted");
            }
        })
    })

    return router;
})();