const gateKeep = function(req, res, next) {
    if(req.session.passport && req.session.passport.user) {
        next()
    }

    else {
        return res.status(401).json({ error: "Unauthorized" })
    }
}

module.exports = gateKeep