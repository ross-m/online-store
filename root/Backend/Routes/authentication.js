const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../Models/user')
const bcrypt = require('bcrypt')

router.post('/login', async (req, res) => {
    const currentUser = User.findOne({username: req.body.email})

    if (currentUser) {
        bcrypt.compare(req.body.password, currentUser.password, function(err, res) {
            if (res) {

            }   else {
                    return res.status(401).json({error: err})
            }
        })
    } else {

    }
})

module.exports = router
