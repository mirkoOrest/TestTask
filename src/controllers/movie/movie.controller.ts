import {NextFunction, Request, Response} from 'express';

import {IMovie} from '../../models';
import {movieService} from '../../services/movie';

class MovieController {

  async createMovie(req: Request, res: Response, next: NextFunction) {
    try {

      const movie = req.body as IMovie;
      const newMovie = await movieService.createMovie(movie);

      res.json(newMovie);

    } catch (e) {
      next(e);
    }
  }

  async getMovies(req: Request, res: Response, next: NextFunction) {
    try {

      const movies = await movieService.getMovies();

      res.json(movies);

    } catch (e) {
      next(e);
    }

  }

  async getByYears(req: Request, res: Response, next: NextFunction) {
    try {
      const movies = await movieService.getByYears();

      res.json(movies);

    } catch (e) {
      next(e);
    }
  }

  async getByGenresFirst(req: Request, res: Response, next: NextFunction) {
    try {
      const movies = await movieService.getByGenresFirst();

      res.json(movies);

    } catch (e) {
      next(e);
    }
  }

  async getByGenresSecond(req: Request, res: Response, next: NextFunction) {
    try {
      const movies = await movieService.getByGenresSecond();

      res.json(movies);

    } catch (e) {
      next(e);
    }
  }

}

export const movieController = new MovieController();
