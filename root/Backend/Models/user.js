const mongoose = require('mongoose')
const { string } = require('yargs')
const schema = mongoose.Schema

const UserSchema = new schema({
    email: {type: 'string', required: true},
    password: {type: 'string', required: true},
    isAdmin: {type: Boolean}
})

const User = mongoose.model('User',UserSchema)

module.exports = User