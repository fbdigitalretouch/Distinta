const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const distrettoSchema = new Schema({

    distretto: {
        type:String,
        unique:true,
        
    }
});


const Distretto = mongoose.model("Distretto", distrettoSchema);


module.exports = Distretto

