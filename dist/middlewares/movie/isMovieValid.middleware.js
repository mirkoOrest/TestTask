"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsMovieValidMiddleware = void 0;
const Joi = require("joi");
const validators_1 = require("../../validators");
exports.IsMovieValidMiddleware = (req, res, next) => {
    const { error } = Joi.validate(req.body, validators_1.newMovieValidator);
    if (error) {
        return next(new Error(error.details[0].message));
    }
    next();
};
//# sourceMappingURL=isMovieValid.middleware.js.map