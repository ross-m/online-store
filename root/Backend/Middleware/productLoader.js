const multer = require('multer')
const path = require('path')

const engine = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, process.env.image_path)

    },

    filename: function (req, file, cb) {

        cb(null, file.originalname)

    }

})


const productLoader = multer({ 

    storage: engine,

    fileFilter: function (req, file, cb) {
        
        var type = path.extname(file.originalname)

        if(type != '.jpg' && type != '.png' && type != '.jpeg') {
            
            req.file_error = "Unsupported file type"
            return cb(null,false)

        }

        else {

            return cb(null, true)

        }
    } 

})

module.exports = productLoader