const mongoose = require('mongoose')
const schema = mongoose.Schema

const PromotionSchema = new schema({
    name: {type: String, required: true},
    image: {data: Buffer, contentType: String}
})

const Promotion = mongoose.model('Promotion', PromotionSchema)

module.exports = Promotion