const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const direttoreSchema = new Schema({

    direttore: {
        type:String,
        unique:true,
        
    }
});

const Direttore = mongoose.model("Direttore", direttoreSchema);


module.exports = Direttore
