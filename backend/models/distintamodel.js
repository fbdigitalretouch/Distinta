const mongoose = require("mongoose");
const userSchema = require("./usermodels");

const Schema = mongoose.Schema;

const distintaSchema = new Schema({

    username: userSchema.userSchema,
    typeOfOperation: String,
    clientName: String,
    notes:String,
    date:Date,
}, {
     timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
  }
});


const Distinta = mongoose.model("Distinta", distintaSchema);

module.exports = Distinta;