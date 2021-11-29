import { Action, createReducer, on} from '@ngrx/store'
import { addMovies } from './movie.actions'
import { Movie } from '../../models/movie'

export const movieFeatureKey = 'movie'

export interface State {
  movies: Movie[]
}
export const initialState: State = {
  movies: [],
}

export const _movieReducer = createReducer(
  initialState,
  on(addMovies, (state: State, { movies }) => ({...state,
    movies
  }))
)

export function movieReducer(state: State | undefined, action: Action) {
  return _movieReducer(state, action)
}
