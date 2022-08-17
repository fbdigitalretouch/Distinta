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
const distrettoRouting = require("./routes/distretto")
const utentiRouting = require("./routes/utenti")
const direttoreRouting = require ("./routes/direttore")

app.use("/distinta",distintaRouting);
app.use("/distretto",distrettoRouting);
app.use("/utenti",utentiRouting);
app.use("/direttore",direttoreRouting);

app.listen(port,()=>{console.log("Server is running on port " + port);
})

