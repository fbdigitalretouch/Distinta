const express = require("express");
let Direttore = require("../models/direttoremodel");


    var router = express.Router();
   

module.exports = (function () {
    'use strict';


    router.get("/", (req, res) => {
        Direttore.find()
            .then(users => res.json(users))
            .catch(err => res.status(400).json("Error : " + err))
    })

    router.post("/add", (req, res) => {

        const direttore = req.body.direttore;
        const newDirettore= new Direttore({direttore});

        newDirettore.save()
            .then(() => res.json("Distretto Added!"))
            .catch(err => res.status(400).json("Error : " + err));
    });

    router.post("/delete/:id", (req, res) => {

        
        Direttore.findOneAndDelete((req.param.id), (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("succesfully deleted");
            }
        })
    })

    return router;
})();