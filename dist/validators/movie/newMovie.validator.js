"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newMovieValidator = void 0;
const Joi = require("joi");
exports.newMovieValidator = Joi.object({
    name: Joi.string().trim().min(2).max(25).required(),
    genre1: Joi.string().trim().min(2).max(25).required(),
    genre2: Joi.string().trim().min(2).max(25).required(),
    year: Joi.number().integer().min(1).max(2025).required()
});
//# sourceMappingURL=newMovie.validator.js.map