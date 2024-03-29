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

    router.get("/find/:id", (req,res) => {
        Distinta.findOne({_id:req.params.id})
        .then(distintas => res.json(distintas))
        .catch(err => res.status(400).json("Error : " + err))
    })

    router.post("/add", (req, res) => {
        const todayDate = new Date();
        
        const index = req.body.index;
        const username = req.body.username;
        const distretto = req.body.distretto;
        const typeOfOperation = req.body.typeOfOperation;
        const clientName = req.body.clientName;
        const notes = req.body.notes;
        const date = new Date().toLocaleDateString("it-IT")
        const month = todayDate.toLocaleString('it-IT', { month: 'long' })
        const year = new Date().getFullYear()

        const newDistinta = new Distinta({
            index,
            username,
            distretto,
            typeOfOperation,
            clientName,
            notes,
            date,
            month,
            year,

        });

        newDistinta.save()
            .then(() => res.json("Distinta Added!"))
            .catch(err => res.status(400).json("Error : " + err));
    });

    router.delete("/delete/:id",  (req, res) => {
        const id = req.params.id;
         Distinta.findByIdAndDelete(id, err => {
            if(err){
                console.log(err);
            }else{
                res.json("Succesfully deleted")
            }
        })
        console.log(`Item ${id} deleted`)
       

    })

    

    router.patch("/update/:id", async (req,res) => {
        const id = req.params.id;
        const newDistretto = req.body.newDistretto;
        const newUsername = req.body.newUsername;
        const newDate = req.body.newDate;
        const newTypeOfOperation = req.body.newTypeOfOperation;
        const newNotes = req.body.newNotes;
        const newClientName = req.body.newClientName;

        const object = {
            distretto:newDistretto,
            username:newUsername,
            typeOfOperation:newTypeOfOperation,
            notes:newNotes,
            clientName:newClientName
        }

       await  Distinta.findByIdAndUpdate(id, object, (error,distintaToUpdate) =>{
                if(!error){console.log("updated")}
             //   distintaToUpdate.distretto = newDistretto;
             //   distintaToUpdate.username = newUsername;
             //  // distintaToUpdate.date = newDate;
             //   distintaToUpdate.typeOfOperation = newTypeOfOperation;
             //   distintaToUpdate.notes = newNotes;
             //   distintaToUpdate.clientName = newClientName;

              //  distintaToUpdate.save()
        })
        .catch((err) => {if(err){console.log(err)}})

    })

    return router;
})();