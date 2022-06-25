const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");


const Schema = mongoose.schema

require ("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);


const distintaRouting = require("./routes/distinta")
const userRouting = require("./routes/user")

app.use("/distinta",distintaRouting);
app.use("/user",userRouting)

app.listen(port,()=>{console.log("Server is running on port " + port);
})

