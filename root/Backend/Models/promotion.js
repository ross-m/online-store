const mongoose = require('mongoose')
const schema = mongoose.Schema

const PromotionSchema = new schema({
    name: {type: String, required: true},
    image: {type: Buffer}
})

const Promotion = mongoose.model('Promotion', PromotionSchema)

module.exports = Promotion