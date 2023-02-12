const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//import Routes
const postsRoute = require("./routes/post");

app.use("/post", postsRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on Home");
});

app.get("/posts", (req, res) => {
  res.send("We are on Posts");
});

//connection to Database
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("CONNECTED TO DATABASE");
  })
  .catch((err) => console.log({ message: err }));

//Listener of express
app.listen(3000);
