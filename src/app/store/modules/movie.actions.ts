import { createAction, props } from '@ngrx/store'
import { Movie } from '../../models/movie'

export const addMovies = createAction('addMovies',
  props<{ movies: Movie[] }>()
)

export const setMovie = createAction('setMovie',
  props<{ movie: Movie }>()

)

