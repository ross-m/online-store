const mongoose = require('mongoose')
const schema = mongoose.Schema

const ProductSchema = new schema({
    name: String,
    description: String,
    price: String,
    image: {data: Buffer, type: String}
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product