const express = require("express");
var app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
//middleware
app.use(bodyParser.json());
//import routes
const userRoute = require("./router/router");
app.use("/customer", userRoute);

app.get("/", (req, res) => {
  console.log("test sss");
  res.send("home test");
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to database test ")
);

app.listen(3005);
