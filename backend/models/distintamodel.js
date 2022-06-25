const mongoose = require("mongoose");
const userSchema = require("./usermodels");
const User = require ("./usermodels")

const Schema = mongoose.Schema;

const distintaSchema = new Schema({

    username: userSchema,
    typeOfOperation: String,
    clientName: String,
    date:Date,
}, {
    timestamp: true
});



const Distinta = mongoose.model("Distinta", distintaSchema);

module.exports = Distinta;