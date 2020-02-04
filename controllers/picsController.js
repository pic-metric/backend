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
        let [err, _] = await catchErrors(Pics.delete(req.params.pic_id))

        if (err) {
            next(new Error("There was an issue when attempting to delete the picture"))
        } else {
            res.status(200).send("Success")
        }
    }
}

module.exports = PicsController