const mongoose = require('mongoose')
const { string } = require('yargs')
const schema = mongoose.Schema

const UserSchema = new schema({
    email: string,
    password: string,
    isAdmin: boolean
})

const User = mongoose.model('User',UserSchema)

module.exports = User