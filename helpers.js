// Promise any -> Array Promise
function catchErrors(promise) {
    return promise
        .then(data => [null, data])
        .catch(err => [err])
}

// Array String -> Object -> Object
function validateFields (fields=[], obj={}) {
    return fields.every(field => field in obj)
}

// Object -> Object -> String
function responseForUnfinishedEndpoint(req, res) {
    res.status(200).send("This endpoint is still a work in progress.")
}

// String -> Object -> Object
function without (prop, obj) {
    const typeErrorMessage = "You must supply either a string or an array of strings as the prop to filter out."
    switch (typeof prop) {
        case "string":
            return filterObj( function predicate(key, val) { return key !== prop }, obj )
        case "object": 
            if (Array.isArray(prop)) {
                return filterObj(function predicate(key, val) { 
                    return !prop.includes(key) 
                }, obj)
            } else {
                throw new TypeError(typeErrorMessage)
            }
        default: 
            throw new TypeError(typeErrorMessage)
    }
}


module.exports = {
    catchErrors,
    validateFields,
    responseForUnfinishedEndpoint,
    without
}