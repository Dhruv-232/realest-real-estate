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

// get counts of different types of properties
propertyController.get('/find/types', async (req, res) => {
    try {
        const beachType = await Property.countDocuments({ type: 'beach' })
        const mountainType = await Property.countDocuments({ type: 'mountain' })
        const villageType = await Property.countDocuments({ type: 'village' })

        return res.status(200).json({ beach: beachType, mountain: mountainType, village: villageType })
    } catch (error) {
        return res.status(500).json(error)
    }
})

// get individual property
propertyController.get('/find/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate('currentOwner', '-password')

        if (!property) {
            throw new Error('No such property with that id')
        } else {
            return res.status(200).json(property)
        }
    } catch (error) {
        return res.status(500).json(error)
    }
})

// Create a property
propertyController.post('/', verifyToken, async (req, res) => {
    try {
        const newProperty = await Property.create({ ...req.body, currentOwner: req.user.id })

        return res.status(201).json(newProperty)
    } catch (error) {
        return res.status(500).json(error)
    }
})