const express = require('express')
const router = express.Router()
const Product = require('../Models/product')
const Promotion = require('../Models/promotion')
const checkAuth = require('../Middleware/checkAdminAuth')
const upload = multer({ dest: process.env.image_path})
const fs = require('fs')

router.post('/add-product', upload.single('product-image'), checkAuth, async (req, res, next) => {
    
    try {
        const imgData = fs.readFileSync(process.env.image_path)
        
        if (imgData) {
            const newProduct = new Product()
            newProduct.name = req.body.name,
            newProduct.description = req.body.description,
            newProduct.category = req.body.category,
            newProduct.price = req.body.price
            newProduct.image.data = imgData
            newProduct.image.contentType = req.body.contentType
            
            try {
    
                await newProduct.save()
                return res.status(200).json({message: "Succesfully saved product!"})
    
            }   catch (err) {
    
                    return res.status(500).json({error: "Internal error"})
    
            }

        }   else    {

                return res.status(500).json({error: "Internal error"})

        }
        
    }   catch (err) {

            return res.status(500).json({error: "Internal error"})

    }
})



router.post('/add-promotion', upload.single('promotion-image'), checkAuth, (req, res, next) => {
    
    try {
        const imgData = fs.readFileSync(process.env.image_path)

        if (imgData) {
            const newPromotion = new Product()
            newPromotion.name = req.body.name,
            newPromotion.description = req.body.description,
            newPromotion.category = req.body.category,
            newPromotion.price = req.body.price
            newPromotion.image.data = imgData
            newPromotion.image.contentType = req.body.contentType
    
            try {
    
                await newPromotion.save()
                return res.status(200).json({message: "Promotion successfully uploaded!"})
    
            }   catch {
    
                return res.status(500).json({error: "Internal error"})
    
            }

        }   else {

            return res.status(500).json({error: "Internal error"})

        }
        
    }   catch (err) {

            return res.status(500).json({error: "Internal error"})

    }

})


module.exports = router