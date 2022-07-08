const express = require("express");
let Distinta = require("../models/distintamodel");

var router = express.Router();

module.exports = (function () {
    'use strict';



    router.get("/", (req, res) => {
        Distinta.find()
            .then(distintas => res.json(distintas) )
            .catch(err => res.status(400).json("Error : " + err))
    })

    router.post("/add", (req, res) => {
        
        const index = req.body.index;
        const username = req.body.username;
        const distretto = req.body.distretto;
        const typeOfOperation = req.body.typeOfOperation;
        const clientName = req.body.clientName;
        const notes = req.body.notes;
        const date = new Date().toLocaleDateString("it-IT")

        const newDistinta = new Distinta({
            index,
            username,
            distretto,
            typeOfOperation,
            clientName,
            notes,
            date,

        });

        newDistinta.save()
            .then(() => res.json("Distinta Added!"))
            .catch(err => res.status(400).json("Error : " + err));
    });

    router.post("/delete/:id", (req, res) => {

        
       Distinta.findOneAndDelete((req.param.id), (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("succesfully deleted");
            }
        })
    })

    return router;
})();