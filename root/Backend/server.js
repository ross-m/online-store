require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT
const db_url = process.env.DB_URL
const authRoute = require('./Routes/authentication')

mongoose.connect(db_url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {console.log("connected to database!")})
    .catch((err) => console.log(err))

app.use('/auth', authRoute)

app.listen(port, () => {
    console.log("user connected")
})