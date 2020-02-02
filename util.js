function withCatch(promise) {
    return promise
        .then(data => [null, data])
        .catch(err => [err])
}

function validateFields (fields=[], obj={}) {
    return fields.every(field => field in obj)
}

module.exports = {
    withCatch,
    validateFields
}