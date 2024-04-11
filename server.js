const express = require("express");
const mongoose = require("./config/db");
const routes = require("./routes");
const app = express();

app.listen(3001,() => console.log('Server Started'));


// * Database connection
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db connected!");
});

//For Parsing json to the request
app.use(express.json());

// * Api routes
app.use("/api", routes);