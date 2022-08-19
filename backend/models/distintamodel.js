const mongoose = require("mongoose");


const Schema = mongoose.Schema;

let date = new Date()

const distintaSchema = new Schema({
    
    index:String,
    username: String,
    distretto: String,
    typeOfOperation: String,
    clientName: String,
    notes:String,
    date:String,
    month:String,
    year:String
},{timestamps:true});


const Distinta = mongoose.model("Distinta", distintaSchema);

module.exports = Distinta;