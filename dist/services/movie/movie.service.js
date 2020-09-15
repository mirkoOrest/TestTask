"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieService = void 0;
const dataBase_1 = require("../../dataBase");
class MovieService {
    createMovie(movie) {
        const movieToCreate = new dataBase_1.MovieModel(movie);
        return movieToCreate.save();
    }
    getMovies() {
        return dataBase_1.MovieModel.find({});
    }
    getByYears() {
        return dataBase_1.MovieModel.find({}).sort({ year: 1 });
    }
    getByGenresFirst() {
        return dataBase_1.MovieModel.find({}).sort({ genre1: 1 });
    }
    getByGenresSecond() {
        return dataBase_1.MovieModel.find({}).sort({ genre2: 1 });
    }
}
exports.movieService = new MovieService();
//# sourceMappingURL=movie.service.js.map