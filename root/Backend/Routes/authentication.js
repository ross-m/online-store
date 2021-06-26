const router = require('express').Router()
const jwt = require('jsonwebtoken')
const User = require('../Models/user')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

router.post('/auth/login', async (req, res, next) => {
    const currentUser = User.findOne({username: req.body.email})

    if (currentUser) {

        bcrypt.compare(req.body.password, currentUser.password, function(err, res) {

            if (res) {

                const Token = jwt.sign(
                    {
                    email: currentUser.email
                    },
                    process.env.AUTH_KEY,
                    {
                        expiresIn: '1h'
                    }
                )

                return res.status(200).json({message: "Login succesful!", token: Token})

            }   else {

                    return res.status(401).json({error: err})

            }
        })

    }   else {

        return res.status(404).json({error: "Could not find user with that email."})

    }
})

router.post('/auth/register', async (req, res, next) => {
    
    const potentialConflict = await mongoose.findOne({email: req.body.email})

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
})

module.exports = router
