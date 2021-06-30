const mongoose = require('mongoose')
const schema = mongoose.Schema

const PromotionSchema = new schema({
    name: {type: String, required: true},
    image: {data: Buffer, type: String, required: true}
})

const Promotion = mongoose.model('Product', ProductSchema)

module.exports = Promotion