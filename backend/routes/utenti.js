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



    router.delete("/delete/:id", async (req, res) => {
        const id = req.params.id;
        await Utente.findByIdAndDelete(id).exec()
        res.send("Item Deleted")

    })


    router.patch("/patch/:id",(req,res) =>{

        Utente.findByIdAndUpdate((req.params.id),(err) =>{

            if (err) {console.log(err);}else{
                console.log("Succesfully updated");

            }
        })

    })

    return router;
})();