const multer = require('multer')

const engine = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, process.env.image_path + 'Products/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

/* const filter (req, file, cb) {
    cb(null)
} */
const productLoader = multer({ storage: engine })

module.exports = productLoader