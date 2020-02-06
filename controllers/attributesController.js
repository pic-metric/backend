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

    static async deleteAttributesForPic(req, res, next) {
        let [err, deletedPic] = await catchErrors(attributesModel.delete(req.params.pic_id))
        let errMsg = "There was an issue when attempting to delete the picture"
        
        if (err) {
            next(new Error(errMsg))
        } else {
            // deletedPic should return a 0 if it failed, or a 1 if it succeeeded
            if (deletedPic) {
                res.status(200).send("Success")
            } else {
                next(new Error(errMsg))
            }
        }
    }
} 

module.exports = AttributesController