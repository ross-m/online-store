const multer = require('multer')
const path = require('path')

const productLoader = multer({ 

    fileFilter: function (req, file, cb) {
        
        var type = String(path.extname(file.originalname))
        
        if(type != '.jpg' && type != '.png' && type != '.jpeg') {
            
            req.file_error = "Unsupported file type"
            return cb(null,false)

        }

        else {

            return cb(null, true)

        }
    },

    limits: {fileSize: 1000000, files: 1}

})

module.exports = productLoader