const express = require('express')
const passport = require('passport')
const router = express.Router()
const Promotion = require('../Models/promotion')



router.get('/', passport.authenticate('local'), async (req, res, next) => {
    
    const ads = await Promotion.find()
    console.log(req.user.username)
    if (ads) { 

        return res.status(200).json({message: "Retrieved ads!", content: ads})

    }   else {

        return res.status(404).json({message: "Welcome to E-Shop!"})
        
    }

})



router.get('/Mens', async (req, res, next) => {
    
    const hits = await Promotion.find({category: /Mens/})

    if(hits.length) { 

        return res.status(200).json({message: "Retrieved mens!", content: hits})

    }   else {

        return res.status(404).json({message: "Nothing here!"})
        
    }

})



router.get('/Mens/Tops', async (req, res, next) => {
    
    const hits = await Promotion.find({category: {$regex: 'Mens/Tops/'}})

    if(hits.length) { 

        return res.status(200).json({message: "Retrieved mens tops!", content: hits})

    }   else {

        return res.status(404).json({message: "Nothing here!"})
        
    }

})



router.get('/Mens/Tops/Shirts', async (req, res, next) => {
    
    const hits = await Promotion.find({category: 'Mens/Tops/Shirts'})

    if(hits.length) { 

        return res.status(200).json({message: "Retrieved mens shirts!", content: hits})

    }   else {

        return res.status(404).json({message: "Nothing here!"})
        
    }

})



router.get('/Mens/Tops/Hoodies', async (req, res, next) => {
    
    const hits = await Promotion.find({category: 'Mens/Tops/Hoodies'})
    
    if (hits.length) { 

        return res.status(200).json({message: "Retrieved mens hoodies!", content: hits})

    }   else {

        return res.status(404).json({message: "Nothing here!"})
        
    }

})



router.get('/Mens/Bottoms', async (req, res, next) => {
    
    const hits = await Promotion.find({category: {$regex: 'Mens/Bottoms/'}})

    if(hits.length) { 

        return res.status(200).json({message: "Retrieved mens bottoms!", content: hits})

    }   else {

        return res.status(404).json({message: "Nothing here!"})
        
    }

})



router.get('/Mens/Bottoms/Shorts', async (req, res, next) => {
    
    const hits = await Promotion.find({category: 'Mens/Bottoms/Shorts'})

    if(hits.length) { 

        return res.status(200).json({message: "Retrieved mens shorts!", content: hits})

    }   else {

        return res.status(404).json({message: "Nothing here!"})
        
    }

})



router.get('/Mens/Bottoms/Pants', async (req, res, next) => {
    
    const hits = await Promotion.find({category: 'Mens/Bottoms/Pants'})
    
    if (hits.length) { 

        return res.status(200).json({message: "Retrieved mens pants!", content: hits})

    }   else {

        return res.status(404).json({message: "Nothing here!"})
        
    }

})



router.get('/Womens', async (req, res, next) => {
    
    const hits = await Promotion.find({category: /Womens/})

    if(hits.length) { 

        return res.status(200).json({message: "Retrieved womens!", content: hits})

    }   else {

        return res.status(404).json({message: "Nothing here!"})
        
    }

})



router.get('/Womens/Tops', async (req, res, next) => {
    
    const hits = await Promotion.find({category: {$regex: 'Womens/Tops/'}})

    if(hits.length) { 

        return res.status(200).json({message: "Retrieved womens tops!", content: hits})

    }   else {

        return res.status(404).json({message: "Nothing here!"})
        
    }

})



router.get('/Womens/Tops/Shirts', async (req, res, next) => {
    
    const hits = await Promotion.find({category: 'Womens/Tops/Shirts'})

    if(hits.length) { 

        return res.status(200).json({message: "Retrieved womens shirts!", content: hits})

    }   else {

        return res.status(404).json({message: "Nothing here!"})
        
    }

})



router.get('/Womens/Tops/Sweaters', async (req, res, next) => {
    
    const hits = await Promotion.find({category: 'Womens/Tops/Sweaters'})
    console.log(hits)
    if(hits.length) { 

        return res.status(200).json({message: "Retrieved womens hoodies!", content: hits})

    }   else {

        return res.status(404).json({message: "Nothing here!"})
        
    }

})



router.get('/Womens/Bottoms', async (req, res, next) => {
    
    const hits = await Promotion.find({category: {$regex: 'Womens/Bottoms/'}})

    if(hits.length) { 

        return res.status(200).json({message: "Retrieved womens bottoms!", content: hits})

    }   else {

        return res.status(404).json({message: "Nothing here!"})
        
    }

})



router.get('/Womens/Bottoms/Shorts', async (req, res, next) => {
    
    const hits = await Promotion.find({category: 'Womens/Bottoms/Shorts'})

    if(hits.length) { 

        return res.status(200).json({message: "Retrieved womens shorts!", content: hits})

    }   else {

        return res.status(404).json({message: "Nothing here!"})
        
    }

})



router.get('/Womens/Bottoms/Pants', async (req, res, next) => {
    
    const hits = await Promotion.find({category: 'Womens/Bottoms/Pants'})
    
    if (hits.length) { 

        return res.status(200).json({message: "Retrieved womens pants!", content: hits})

    }   else {

        return res.status(404).json({message: "Nothing here!"})
        
    }

})



module.exports = router