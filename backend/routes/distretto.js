const express = require("express");
let Distretto = require("../models/distrettomodel");


    var router = express.Router();
   

module.exports = (function () {
    'use strict';


    router.get("/", (req, res) => {
        Distretto.find()
            .then(users => res.json(users))
            .catch(err => res.status(400).json("Error : " + err))
    })

    router.post("/add", (req, res) => {

        const distretto = req.body.distretto;
        const newDistretto = new Distretto({
           
            distretto
        });

        newDistretto.save()
            .then(() => res.json("Distretto Added!"))
            .catch(err => res.status(400).json("Error : " + err));
    });

    router.post("/delete/:id", (req, res) => {

        
        Distretto.findOneAndDelete((req.param.id), (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("succesfully deleted");
            }
        })
    })

    return router;
})();