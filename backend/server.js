const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");



require ("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);


const distintaRouting = require("./routes/distinta")
const userRouting = require("./routes/user")
const modificaRouting = require("./routes/modifica")


app.use("/distinta",distintaRouting);
app.use("/user",userRouting);
app.use("/modifica",modificaRouting);

app.listen(port,()=>{console.log("Server is running on port " + port);
})

