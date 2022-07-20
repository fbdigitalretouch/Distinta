const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const utentiSchema = new Schema({

    username: {
        type:String,
        required:true
    }
    
});


const Utente = mongoose.model("Utente", utentiSchema);


module.exports = Utente