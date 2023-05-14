const authController = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

authController.post('/register', async(req,res) => {
    try{
        const isExisting = await User.findOne({email: req.body.email})
        if (isExisting){
            throw new Error("Alread such an email exists")
        }
    } catch(error) {
        return res.status(500).json(error.message)
    }
})