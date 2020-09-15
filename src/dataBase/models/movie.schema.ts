import {Document, Model, model, Schema} from 'mongoose';

import {IMovie} from '../../models';
import {TableNamesEnum} from '../../constants';

export type MovieType = IMovie & Document

export const MovieSchema: Schema = new Schema<IMovie>({
  name: {
    type: String,
    required: true,
    unique: true
  },
  genre1: {
    type: String,
    required: true
  },
  genre2: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
},
{timestamps: true}
);

export const MovieModel: Model<MovieType> = model<MovieType>(TableNamesEnum.MOVIE, MovieSchema);
