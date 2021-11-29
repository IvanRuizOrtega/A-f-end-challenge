import { createFeatureSelector, createSelector } from '@ngrx/store'
import { movieFeatureKey, State } from './movie.reducer'

export const selectMovieState = createFeatureSelector<State>(
  movieFeatureKey
)

export const selectMovies = createSelector(
  selectMovieState,
  (state: State) => state.movies
)
