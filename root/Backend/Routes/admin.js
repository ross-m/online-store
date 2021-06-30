const express = require('express')
const router = express.Router()
const Product = require('../Models/product')
const checkAuth = require('../Middleware/checkAdminAuth')

router.post('/add-product', checkAuth, async (req, res, next) => {
    try {

        const newProduct = Product({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            image: req.body.image
        })

        try {

            await newProduct.save()
            return res.status(200).json({message: "Succesfully saved product!"})

        }   catch (err) {

                return res.status(500).json({error: "Internal error"})

        }

    }   catch (err) {

            return res.status(500).json({error: "Internal error"})

    }
})