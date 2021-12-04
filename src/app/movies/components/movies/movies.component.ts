import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { selectMovies } from '../../../store/modules/movie.selector'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movie[]> | undefined

  constructor(private readonly store: Store<{ movies: Movie[] }>) { }

  ngOnInit(): void {
    this.movies$ = this.store.select(selectMovies)
  }

}
