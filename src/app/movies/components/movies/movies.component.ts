import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { selectMovies } from '../../../store/modules/movie.selector'
import { State } from '../../../store/modules/movie.reducer'


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movie[]> | undefined

  constructor(private store: Store<{ movies: State }>) { }

  ngOnInit(): void {
    this.movies$ = this.store.pipe(select(selectMovies))
  }

}
