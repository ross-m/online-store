const mongoose = require('mongoose')
const schema = mongoose.Schema

const UserSchema = new schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean}
})

const User = mongoose.model('User',UserSchema)

module.exports = User