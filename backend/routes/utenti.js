const express = require("express");
let Utente = require("../models/utentimodel");


    var router = express.Router();
   

module.exports = (function () {
    'use strict';


    router.get("/", (req, res) => {
        Utente.find()
            .then(users => res.json(users))
            .catch(err => res.status(400).json("Error : " + err))
    })

    router.post("/add", (req, res) => {

        const utente = req.body.username;
        const newUtente = new Utente({
            username:utente
        });

        console.log(newUtente)

        newUtente.save()
            .then(() => res.json("Utente Aggiunto!"))
            .catch(err => res.status(400).json("Error : " + err));
    });

    router.post("/delete/:id", (req, res) => {

        
        Utente.findOneAndDelete((req.param.id), (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("succesfully deleted");
            }
        })
    })

    router.patch("/patch/:id",(req,res) =>{

        Utente.findByIdAndUpdate((req.param.id),(err) =>{

            if (err) {console.log(err);}else{
                console.log("Succesfully updated");

            }
        })

    })

    return router;
})();