const jwt = require('jwt')

const checkAdminAuth = function(req, res, next) {
    try {
        const token = req.Authorization.split(' ')[1]
        const verified = jwt.verify(token, process.env.ADMIN_KEY)
    
        if (verified) {

            next()

        }   else {
    
            return res.status(401).json({error: "You are not authorized to access this resource"})

        }

    }   catch (err) {

            return res.status(500).json({error: "Internal error"})

    }
}

module.exports = checkAdminAuth