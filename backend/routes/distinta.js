const express = require("express");
let Distinta = require("../models/distintamodel");



module.exports = (function() {
    'use strict';

    var router = require('express').Router();

    router.get("/",(req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error : " + err))
})

    return router;
})();