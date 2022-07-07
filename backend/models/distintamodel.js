const mongoose = require("mongoose");
const userSchema = require("./usermodels");

const Schema = mongoose.Schema;

let date = new Date()

const distintaSchema = new Schema({

    username: String,
    distretto: String,
    typeOfOperation: String,
    clientName: String,
    notes:String,
    date:String
});


const Distinta = mongoose.model("Distinta", distintaSchema);

module.exports = Distinta;