const express = require("express");
const router = express.Router()
let Distinta = require("../models/distintamodel");

router.get("/",(req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error : " + err))
})

module.export = router;