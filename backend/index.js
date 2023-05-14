const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) .then(() => console.log("Connected successfully")) .catch((err) => { console.error(err)})

app.listen(process.env.PORT, () => console.log("Server has been started successfully"))