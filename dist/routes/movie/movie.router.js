"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieRouter = void 0;
const express_1 = require("express");
const movie_1 = require("../../controllers/movie");
const middlewares_1 = require("../../middlewares");
const router = express_1.Router();
router.post('/', middlewares_1.IsMovieValidMiddleware, movie_1.movieController.createMovie);
router.get('/', movie_1.movieController.getMovies);
router.get('/years', movie_1.movieController.getByYears);
router.get('/genresFirst', movie_1.movieController.getByGenresFirst);
router.get('/genresSecond', movie_1.movieController.getByGenresSecond);
exports.movieRouter = router;
//# sourceMappingURL=movie.router.js.map