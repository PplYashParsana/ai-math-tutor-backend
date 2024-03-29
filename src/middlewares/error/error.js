const utils = require('./utils');
const multer = require("multer");

//Error Handler class to pass standered Error to user
class ErrorHandler extends Error {
    constructor(errorType, error) {
        super();
        this.errorType = errorType;
        this.statusCode = utils.replaceWithStrInObj(error, 'statusCode', 500);
        this.message = utils.replaceWithBlankStrInObj(error, 'message');
    }
}

const errorHandler = (err, _req, res, _next) => {
    if (err instanceof multer.MulterError) {
        console.log(err);
        return res.status(418).json(err);
    }
    else {
        return res.status(err.statusCode).json(err);
    }
};

module.exports = { ErrorHandler, errorHandler };
