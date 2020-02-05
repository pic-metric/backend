const Pics = require('../models/picsModel')
const Attributes = require('../models/attributesModel')
const axios = require('axios')
const { catchErrors } = require('../helpers')
const fs = require('fs')

class PicsController {
    static async getAllPics(req, res, next) {
        let [err, allPics] = await catchErrors(Pics.all())

        if (err) {
            next(new Error("There was an issue retrieving the pictures from the system."))
        } else if (!allPics.length) {
           res.status(200).json([])
        } else {
            res.status(200).json(allPics)
        }
    }

    static async getPicById(req, res, next) {
        let [err, pic] = await catchErrors(Pics.getPicById(req.params.pic_id))

        if (err) { 
            next(err)
        } else {
            res.status(200).json(pic)
        }
    }

    static async getAllPicsForUser(req, res, next) {
        let [err, pics] = await catchErrors(Pics.allForUser(req.params.user_id))

        if (err) {
            next(new Error("There was an issue retrieving pictures for this user."))
        } else if (!pics.length) {
            next(new Error("There are no pictures stored for this user yet."))
        } else {
            res.status(200).json(pics)
        }
    }

    // Grab the image from the frontend and store it in the db.
    static async processAndCreate(req, res, next) {

        console.log('========REQ.FILE=======', req.file, '\n\n')
        console.log('========REQ.BODY==========', req.body)
        
        let byteData = fs.readFileSync(req.file.path)
        
        // Store the url in the db.
        Pics.create(req.params.user_id, byteData)
            .then(ids => {
                res.status(200).send("Successfully saved photo. Processing image now...")
                // call the flask api
                processImage(ids[0])
            })
        
        // call the flask api
        function processImage(img) {
             /*
                Query the DS ednpoint to process the image.
                Once the image is processed, the DS team will
                write directly to the Attributes table
         */
            axios.get(`flaskendpoint/${img.id}`)
        }
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