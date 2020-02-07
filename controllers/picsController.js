const Pics = require('../models/picsModel')
const Attributes = require('../models/attributesModel')
const axios = require('axios')
const { catchErrors } = require('../helpers')
const fs = require('fs')

class PicsController {
    static async getUnprocessedPicById(req, res, next) {
        let [err, pic] = await catchErrors(Pics.getPicById(req.params.pic_id))

        if (err) { 
            next(err)
        } else {
            if (pic && pic.pic) {
                res.writeHead(200, {
                    'Content-Length': pic.pic.length
                })
                res.end(pic.pic); 
            } else {
                res.status(404).send("Not found.")
            }
        }
    }

    static async getProcessedPicById(req, res, next) {
        let [err, pic] = await catchErrors(Pics.getPicById(req.params.pic_id))

        if (err) { 
            next(err)
        } else {
            if (pic && pic.processed_pic) {
                res.writeHead(200, {
                    'Content-Length': pic.processed_pic.length
                })
                res.end(pic.processed_pic); 
            } else {
                res.status(404).send("Not found.")
            }
        }
    }

    static async getAllPicsForUser(req, res, next) {
        let [err, pics] = await catchErrors(Pics.allForUser(req.params.user_id))

        if (err) {
            next(new Error("There was an issue retrieving pictures for this user."))
        } else if (!pics.length) {
            res.status(200).json([])
        } else {
            // Return the just pic id and whether it's processed
            res.status(200).json(pics.map( pic => ({ 
                id: pic.id, 
                processed: Boolean(pic.processed_pic) 
            })))
        }
    }

    // Grab the image from the frontend and store it in the db.
    static async processAndCreate(req, res, next) {
        let byteData = fs.readFileSync(req.file.path)
        
        // Store the url in the db.
        Pics.create(req.params.user_id, byteData)
            .then(ids => {
                res.status(200).send("Successfully saved photo. Processing image now...")
                // call the flask api
                console.log('=============== ID TO SEND TO DS============', ids[0])
                processImage(ids[0])
                    .then(res => {
                        console.log("successfully processed the image.")
                    })
                    .catch(console.error)
            })
        
        // Query the DS ednpoint to process the image. 
        // Once the image is processed, the DS team will write directly to the Attributes table
        function processImage(picId) {
            return axios.get(`http://flask-app-5.5fq8ergm84.us-west-1.elasticbeanstalk.com/image_summary/${picId}`)
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