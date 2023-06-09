const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const authController = require('./controllers/authController')
const propertyController = require('./controllers/propertyController')
const app = express();

// Connecting mongodb
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) .then(() => console.log("Mongo db connected successfully")) .catch((err) => { console.error(err)})

// routes and middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/auth", authController)
app.use("/property", propertyController)
app.use("/upload", uploadController)

// Connecting server
app.listen(process.env.PORT, () => console.log("Server has been started successfully"))