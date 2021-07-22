const jwt = require('jsonwebtoken')

const checkAdminAuth = function(req, res, next) {
    
    try {
        
        const token = req.headers.authorization.split(' ')[1]
        const verified = jwt.verify(token, process.env.ADMIN_KEY)
        next();

    }   catch (err) {

            return res.status(500).json({error: "Rejected"})

    }
}

module.exports = checkAdminAuth