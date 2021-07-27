const express = require('express')
const router = express.Router()
const Promotion = require('../Models/promotion')



router.get('/', async (req, res, next) => {
    
    const ads = await Promotion.find()

    if (ads) { 

        return res.response(200).json({message: "Retrieved ads!", content: ads})

    }   else {

        return res.response(200).json({message: "Welcome to E-Shop!"})
        
    }

})



router.get('/Mens', async (req, res, next) => {
    
    const ads = await Promotion.find()

    if (ads) { 

        return res.response(200).json({message: "Retrieved ads!", content: ads})

    }   else {

        return res.response(200).json({message: "Welcome to E-Shop!"})
        
    }

})



router.get('/Mens/Tops', async (req, res, next) => {
    
    const ads = await Promotion.find()

    if (ads) { 

        return res.response(200).json({message: "Retrieved ads!", content: ads})

    }   else {

        return res.response(200).json({message: "Welcome to E-Shop!"})
        
    }

})



router.get('/Mens/Tops/Shirts', async (req, res, next) => {
    
    const ads = await Promotion.find()

    if (ads) { 

        return res.response(200).json({message: "Retrieved ads!", content: ads})

    }   else {

        return res.response(200).json({message: "Welcome to E-Shop!"})
        
    }

})



router.get('/Mens/Tops/Hoodies', async (req, res, next) => {
    
    const ads = await Promotion.find()

    if (ads) { 

        return res.response(200).json({message: "Retrieved ads!", content: ads})

    }   else {

        return res.response(200).json({message: "Welcome to E-Shop!"})
        
    }

})


module.exports = router