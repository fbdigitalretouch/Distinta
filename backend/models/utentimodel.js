const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const utentiSchema = new Schema({

    username: {
        type:String,
        required:true,
        _id:false,
        versioning:false

    }
    
});


const Utente = mongoose.model("Utente", utentiSchema);


module.exports = Utente