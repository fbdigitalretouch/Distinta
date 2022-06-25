const express = require("express");
let Distinta = require("../models/distintamodel");



module.exports = (function() {
    'use strict';

    var router = require('express').Router();

    router.get("/",(req,res) => {
    Distinta.find()
    .then(distintas => res.json(distintas))
    .catch(err => res.status(400).json("Error : " + err))
})

    return router;
})();