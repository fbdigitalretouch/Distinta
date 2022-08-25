const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const path = require("path");



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

 __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../distinta-fastweb/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../distinta-fastweb", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}..`  )
);

