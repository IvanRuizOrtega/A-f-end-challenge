import { Action, createReducer, on} from '@ngrx/store'
import { addMovies, setMovie } from './movie.actions'
import { Movie } from '../../models/movie'

export const movieFeatureKey = 'movie'

export interface State {
  movies: Movie[],
  movie: Movie
}
export const initialState: State = {
  movies: [],
  movie: {} as Movie
}

export const _movieReducer = createReducer(
  initialState,
  on(addMovies, (state: State, { movies }) => ({
    ...state,
    movies
  })),
  on(setMovie, (state: State, { movie }) => ({...state,
    movie
  }))
)

export function movieReducer(state: State | undefined, action: Action) {
  return _movieReducer(state, action)
}
