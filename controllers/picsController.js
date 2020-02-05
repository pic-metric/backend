const Pics = require('../models/picsModel')
const { catchErrors } = require('../helpers')

class PicsController {
    static async getAllPics(req, res, next) {
        let [err, allPics] = await catchErrors( Pics.all() )

        if (err) {
            next(new Error("There was an issue retrieving the pictures from the system."))
        } else if (!allPics.length) {
            next(new Error("There are no pictures stored in the system at this time."))
        } else {
            res.status(200).json(allPics)
        }
    }

    static async getAllPicsForUser(req, res, next) {
        let [err, pics] = await catchErrors( Pics.allForUser(req.params.user_id) )

        if (err) {
            next(new Error("There was an issue retrieving pictures for this user."))
        } else if (!pics.length) {
            next(new Error("There are no pictures stored for this user yet."))
        } else {
            res.status(200).json(pics)
        }
    }

    // Most important endpoint in the entire app.
    static async processAndCreate(req, res, next) {
         /*
        Store the url in the db.
        Then query the DS ednpoint to process the image.
        Once the image is processed, write to the attributes
        table all the attributes for the image. (Attributes.create())
         */
    }

    static async deletePic(req, res, next) {
        let [err, deletedPic] = await catchErrors(Pics.delete(req.params.pic_id))
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

module.exports = PicsController