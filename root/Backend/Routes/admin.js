const express = require('express')
const router = express.Router()
const Product = require('../Models/product')
const Promotion = require('../Models/promotion')
const checkAuth = require('../Middleware/checkAdminAuth')
const productLoader = require('../Middleware/productLoader')
const promotionLoader = require('../Middleware/promotionLoader')

router.post('/add-product', checkAuth, productLoader.single('product-image'), async (req, res, next) => {
    
    try {
        
        const newProduct = new Product({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            image: req.file.buffer
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



router.post('/add-promotion', checkAuth, promotionLoader.single('promotion-image'), async (req, res, next) => {
    
    try {
        
        const newPromotion = new Promotion({
            name: req.body.name,
            image: req.file.buffer
        })

        try {

            await newPromotion.save()
            return res.status(200).json({message: "Promotion successfully uploaded!"})

        }   catch {

            return res.status(500).json({error: "Internal error"})

        }
        
    }   catch (err) {

            return res.status(500).json({error: "Internal error"})

    }

})


module.exports = router