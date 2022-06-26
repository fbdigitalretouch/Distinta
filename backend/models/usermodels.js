const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({

    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        minlength: 3,
        
    },
    password: {
        type: String,
        require: true,
        trim: true,
        minlength: 5,
    },



});

const User = mongoose.model("User", userSchema);


module.exports = {User:User,userSchema:userSchema}

