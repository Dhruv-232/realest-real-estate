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
propertyController.get('/find/featured', async(req, res) => {
    try {
        const featuredProperties = await Property.find({featured: true}).populate('Current Owner', '-password')

        return res.status(200). json(featuredProperties)
    }
    catch (error) {
        return res.status(500).json(error.message)
    }
})

// get all from specific type
propertyController.get('/find', async (req, res) => {
    const type = req.query
    
    try {
        if (type) {
            properties = await Property.find(type).populate("owner", '-password')
        } else {
            properties = await Property.find({})
        }

        return res.status(200).json(properties)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// get counts of types