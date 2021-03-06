const mongoose = require('mongoose')
const schema = mongoose.Schema

const ProductSchema = new schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: String, required: true},
    image: {type: Buffer}
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product