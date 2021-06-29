const router = require('express').Router()
const jwt = require('jsonwebtoken')
const User = require('../Models/user')
const bcrypt = require('bcrypt')
const ipfilter = require('express-ipfilter').IpFilter
const IpDeniedError = require('express-ipfilter').IpDeniedError



router.post('/login', async (req, res, next) => {
    try {
        const currentUser = await User.findOne({email: req.body.email})
        
        if (currentUser) {

            const result = await bcrypt.compare(req.body.password, currentUser.password)

            if(result) {

                const Token = jwt.sign(
                    {
                        email: currentUser
                    }, 
                    process.env.AUTH_KEY,
                    {
                        expiresIn: "1h"
                    }
                );

                return res.status(200).json({message: "User succesfully logged in!", token: Token})

            }   else {
                    return res.status(404).json({error: "Incorrect password"})
            }

        }   else {
                return res.status(404).json({error: "Can't find any user with that email..."})
        }

    }   catch(err) {
            console.log(err)
            return res.status(500).json({error: "Something went wrong"})
    }
})



router.post('/register', async (req, res, next) => {
    try {
        const potentialConflict = await User.findOne({email: req.body.email})
        
        if (potentialConflict) {
            
            return res.status(409).json({error: "This email is already in use!"})

        }   else {

            bcrypt.hash(req.body.password, 10, async (err, hash) => {

                if (err) {

                    return res.status(500).json({error: "Error registering user..."})

                }   else {

                        const newUser = new User({
                            email: req.body.email,
                            password: hash,
                            isAdmin: false
                        })

                        await newUser.save()
                            .then(() => {
                                return res.status(200).json({message: "User has been registered!"})
                            })
                            .catch((err) => {
                                return res.status(500).json({error: "Error registering user..."})
                            })
                }
            })
        }

    }   catch(err) {
            console.log(err)
        }
})



router.post('/admin', ipfilter(process.env.admins), (req, res, next) => {
    console.log('hello')
    return res.status(200).json({message: "we have entered the admin page"})
})



router.use((err, req, res, next) => {

    if (err instanceof IpDeniedError) {

      return res.status(401).json({error: "You are not authorized to access this resource"})

    } else {

      return res.status(500).json({error: "Error logging in..."})

    }

})



module.exports = router
