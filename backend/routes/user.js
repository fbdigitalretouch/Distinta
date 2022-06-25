const express = require("express");
let User = require("../models/usermodels");


module.exports = (function () {
    'use strict';

    var router = require('express').Router();

    router.get("/", (req, res) => {
        User.find()
            .then(users => res.json(users))
            .catch(err => res.status(400).json("Error : " + err))
    })

    router.post("add", (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const newUser = new User({
            username,
            password
        });

        newUser.save()
            .then(() => res.json("User Added!"))
            .catch(err => res.status(400).json("Error : " + err));
    });


    return router;
})();

