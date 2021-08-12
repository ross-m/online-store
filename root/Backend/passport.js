const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const MongoStore = require('connect-mongo')
const User = require('./Models/user')
const bcrypt = require('bcrypt')

module.exports = (app) => {
    async function verifyPassword(user, password) {
        try {
            var result = await bcrypt.compare(password, user.password)
           
            return result

        }   catch(err) {

            return false

        }
    }

    app.use(session({ 
        secret:"dogs",
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: 'mongodb+srv://ross99:password99@cluster0.gpxra.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            crypto: {secret: 'squirrel'},
            autoRemove: 'interval',
            autoRemoveInterval: 60 * 24
        }),
        expires: 60 * 60
    }))
    
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
    
        async function(email, password, done) {
            
            await User.findOne({email: email}, function(err, user) {
                
                if (err) { return done(err) }
    
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.'})
                }
    
                if (!verifyPassword(user, password)) {
                    return done(null, false, { message: 'Incorrect password' })
                }
    
                return done(null, user)
    
            })
        }
    ))
    
    passport.serializeUser(function(user, done) {
        console.log('serialize')
        done(null, user.email)
    })
    
    passport.deserializeUser(async function(email, done) {
        console.log('deserialize')
        await User.findOne({email: email}, function(err, user) {
            done(err, user)
        })
    })
    
    app.use(passport.initialize())
    app.use(passport.session())
}
