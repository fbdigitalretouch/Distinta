const express = require("express");
let User = require("../models/usermodels");


    var router = express.Router();
   

module.exports = (function () {
    'use strict';


    router.get("/", (req, res) => {
        User.find()
            .then(users => res.json(users))
            .catch(err => res.status(400).json("Error : " + err))
    })

    router.post("/add", (req, res) => {

        const distretto = req.body.distretto;
        const newUser = new User({
           
            distretto
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