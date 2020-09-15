import {Router} from 'express';

import {movieController} from '../../controllers/movie';
import {IsMovieValidMiddleware} from '../../middlewares';

const router = Router();

router.post('/',IsMovieValidMiddleware, movieController.createMovie);
router.get('/', movieController.getMovies);
router.get('/years', movieController.getByYears);
router.get('/genresFirst', movieController.getByGenresFirst);
router.get('/genresSecond', movieController.getByGenresSecond);

export const movieRouter = router;
