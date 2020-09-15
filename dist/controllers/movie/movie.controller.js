"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieController = void 0;
const movie_1 = require("../../services/movie");
class MovieController {
    async createMovie(req, res, next) {
        try {
            const movie = req.body;
            const newMovie = await movie_1.movieService.createMovie(movie);
            res.json(newMovie);
        }
        catch (e) {
            next(e);
        }
    }
    async getMovies(req, res, next) {
        try {
            const movies = await movie_1.movieService.getMovies();
            res.json(movies);
        }
        catch (e) {
            next(e);
        }
    }
    async getByYears(req, res, next) {
        try {
            const movies = await movie_1.movieService.getByYears();
            res.json(movies);
        }
        catch (e) {
            next(e);
        }
    }
    async getByGenresFirst(req, res, next) {
        try {
            const movies = await movie_1.movieService.getByGenresFirst();
            res.json(movies);
        }
        catch (e) {
            next(e);
        }
    }
    async getByGenresSecond(req, res, next) {
        try {
            const movies = await movie_1.movieService.getByGenresSecond();
            res.json(movies);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.movieController = new MovieController();
//# sourceMappingURL=movie.controller.js.map