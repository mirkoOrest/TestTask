import * as Joi from 'joi';

export const newMovieValidator = Joi.object({
  name: Joi.string().trim().min(2).max(25).required(),
  genre1: Joi.string().trim().min(2).max(25).required(),
  genre2: Joi.string().trim().min(2).max(25).required(),
  year: Joi.number().integer().min(1).max(2025).required()
});
