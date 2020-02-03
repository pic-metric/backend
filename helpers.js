// Promise any -> Array Promise
function withCatch(promise) {
    return promise
        .then(data => [null, data])
        .catch(err => [err])
}

// Array String -> Object -> Object
function validateFields (fields=[], obj={}) {
    return fields.every(field => field in obj)
}

function responseForUnfinishedEndpoint(req, res) {
    res.status(200).send("This endpoint is still a work in progress.")
}

module.exports = {
    withCatch,
    validateFields,
    responseForUnfinishedEndpoint
}