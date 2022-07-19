const express = require("express");
let Distinta = require("../models/distintamodel");

var router = express.Router();

module.exports = (function () {
    'use strict';


    router.get("/",(req,res) =>{
        Distinta.find()
            .then(distintas => res.json(distintas) )
            .catch(err => res.status(400).json("Error : " + err))
    })

    router.get("/:id", (req, res) => {
        Distinta.find(req.params.id,(err) => {if(err){console.log(err)}})
            .then(distintas => res.json(distintas) )
            .catch(err => res.status(400).json("Error : " + err));
        })

    router.patch("/:id", (req,res) => {
        Distinta.findOneAndUpdate((req.params.id,req.body.distretto,(err) => {if(!err) {alert("Update eseguito correttamente")}}))
                .then(res => console.log(res.data))
                .catch(err => res.status(400).json("Error : " + err));
    })






    return router;

})