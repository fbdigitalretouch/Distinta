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

    router.delete("/delete/:id", async (req, res) => {
        const id = req.params.id;
        await Distinta.findByIdAndDelete(id).exec()
        console.log(`Item ${id} deleted`)

    })

    router.put("/update/:id", async (req,res) => {
        const id = req.params.id;
        const newDistretto = req.body.newDistretto;
        const newUsername = req.body.newUsername;
        const newDate = req.body.newDate;
        const newAttivazione = req.body.newAttivazione;
        const newNote = req.body.newNote;
        const newClientName = req.body.newClientName;

        await Distinta.findById(id, (error,distintaToUpdate) =>{
                distintaToUpdate.distretto = newDistretto;
                distintaToUpdate.username = newUsername;
                distintaToUpdate.date = newDate;
                distintaToUpdate.typeOfOperation = newAttivazione;
                distintaToUpdate.notes = newNote;
                distintaToUpdate.clientName = newClientName;

                distintaToUpdate.save()
        })
        .catch((err) => {if(err){console.log(err)}})

    })

    return router;
})();