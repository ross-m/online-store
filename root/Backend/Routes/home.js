const express = require('express')
const router = express.Router()
const Promotion = require('../Models/promotion')



router.get('/', async (req, res, next) => {
    
    const ads = await Promotion.find()

    if (ads) { 

        return res.status(200).json({message: "Retrieved ads!", content: ads})

    }   else {

        return res.status(404).json({message: "Welcome to E-Shop!"})
        
    }

})



router.get('/Mens', async (req, res, next) => {
    
    const hits = await Promotion.find({category: /Mens/})

    if (hits) { 

        return res.status(200).json({message: "Retrieved mens!", content: hits})

    }   else {

        return res.status(404).json({message: "Nothing here!"})
        
    }

})



router.get('/Mens/Tops', async (req, res, next) => {
    
    const hits = await Promotion.find({category: {$regex: 'Mens/Tops/'}})

    if (hits) { 

        return res.status(200).json({message: "Retrieved mens tops!", content: hits})

    }   else {

        return res.status(404).json({message: "Nothing here!"})
        
    }

})



router.get('/Mens/Tops/Shirts', async (req, res, next) => {
    
    const hits = await Promotion.find({category: 'Mens/Tops/Shirts'})

    if (hits) { 

        return res.status(200).json({message: "Retrieved mens shirts!", content: hits})

    }   else {

        return res.status(404).json({message: "Nothing here!"})
        
    }

})



router.get('/Mens/Tops/Hoodies', async (req, res, next) => {
    
    const hits = await Promotion.find({category: 'Mens/Tops/Hoodies'})
    console.log(hits)
    if (hits) { 

        return res.status(200).json({message: "Retrieved mens hoodies!", content: hits})

    }   else {

        return res.status(404).json({message: "Nothing here!"})
        
    }

})


module.exports = router