const Property = require('../models/Property')
const propertyController = require('express').Router()
const verifyToken = require("../middlewares/verifyToken")

// get all 
propertyController.get('/getAll', async(req, res) => {
    try {
        const properties = await Property.find({})

        return res.status(200).json(properties)
    }
    catch (error) {
        return res.status(500).json(error.message)
    }
})

// get featured

// get all from a specific type

// get counts of types