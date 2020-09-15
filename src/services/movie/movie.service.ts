import {MovieModel} from '../../dataBase';
import {IMovie} from '../../models';

class MovieService {

  createMovie(movie: Partial<IMovie>): Promise<IMovie> {
    const movieToCreate = new MovieModel(movie);

    return movieToCreate.save();
  }

  getMovies(): Promise<IMovie | null> {
    return MovieModel.find({}) as any;
  }

  getByYears(): Promise<IMovie | null> {
    return MovieModel.find({}).sort({year: 1}) as any;
  }

  getByGenresFirst(): Promise<IMovie | null> {
    return MovieModel.find({}).sort({genre1: 1}) as any;
  }

  getByGenresSecond(): Promise<IMovie | null> {
    return MovieModel.find({}).sort({genre2: 1}) as any;
  }

}

export const movieService = new MovieService();
