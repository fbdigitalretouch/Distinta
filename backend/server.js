const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");

const {
    Schema
} = mongoose;

require ("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const distintaRouting = require("./routes/distinta.js")
const userRouting = require("./routes/user.js")

app.use(app.distintaRouting);
app.use(app.userRouting);



app.listen(port,()=>{console.log("Server is running on port " + port);
})

