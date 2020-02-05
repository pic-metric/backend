const attributesModel = require('../models/attributesModel')
const { catchErrors } = require('../helpers')

class AttributesController {
    static async getAllForPic(req, res, next) {
        let [err, attributes] = await catchErrors(attributesModel.getAllForPic(req.params.pic_id))

        if (err) {
            next(err)
        } else {
            res.status(200).json(attributes)
        }   
    }
} 

module.exports = AttributesController