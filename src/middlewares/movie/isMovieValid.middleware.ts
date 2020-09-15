import {NextFunction, Request, Response} from 'express';
import * as Joi from 'joi';

import {newMovieValidator} from '../../validators';

export const IsMovieValidMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const {error} = Joi.validate(req.body, newMovieValidator);

  if (error) {
    return next(new Error(error.details[0].message));
  }

  next();
};
