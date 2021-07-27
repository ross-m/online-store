const checkProductType = function(req, res, next) {
    
    try {
        
        categories = ['Mens/Tops/Shirts', 'Mens/Tops/Hoodies', 'Mens/Bottoms/Shorts', 'Mens/Bottoms/Pants',
                      'Womens/Tops/Shirts', 'Womens/Tops/Sweaters', 'Womens/Bottoms/Shorts', 'Womens/Bottoms/Pants']
        
        if (categories.includes(req.body.category)) 
        {
            next();
        }

        else 
        {
            return res.status(404).json({error: "Invalid product type"})
        }

    }   catch (err) {

            return res.status(500).json({error: "Rejected"})

    }
}

module.exports = checkProductType