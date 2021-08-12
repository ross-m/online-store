const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const MongoStore = require('connect-mongo')
const User = require('./Models/user')

module.exports = (app) => {
    app.use(session({ 
        secret:"dogs",
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: 'mongodb+srv://ross99:password99@cluster0.gpxra.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            crypto: {secret: 'squirrel'},
            autoRemove: 'interval',
            autoRemoveInterval: 60 * 24
        })
    }))
    
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
    
        async function(email, password, done) {
            console.log('hello')
            await User.findOne({email: email}, function(err, user) {
                console.log(user)
                if (err) { return done(err) }
    
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.'})
                }
    
                if (!user.validPassword(password)) {
                    return done(null, false, { message: 'Incorrect password' })
                }
    
                return done(null, user)
    
            })
        }
    ))
    
    passport.serializeUser(function(user, done) {
        done(null, user.email)
    })
    
    passport.deserializeUser(function(user, done) {
        User.findone({email: user.email}, function(err, user) {
            done(err, user)
        })
    })
    
    app.use(passport.initialize())
    app.use(passport.session())
}
