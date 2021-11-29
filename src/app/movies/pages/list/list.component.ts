import { Component, OnInit } from '@angular/core'
import { MovieService } from '../../../services/movie/movie.service'
import { Movie } from '../../../models/movie'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { State } from '../../../store/modules/movie.reducer'
import { selectMovies } from '../../../store/modules/movie.selector'
import { addMovies } from '../../../store/modules/movie.actions'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  movies$: Observable<Movie[]> | undefined

  constructor(private movieService: MovieService,
              private store: Store<{ movies: State }>) { }

  ngOnInit(): void {
    this.movies$ = this.store.pipe(select(selectMovies))
    this.getMovies()
  }

  private getMovies() {
    this.movieService.getMovies().subscribe(resp => {
      const movies: Movie[] = resp.results
      this.store.dispatch(addMovies({ movies }))
    }, error => {
      alert(error.message)
    })
  }

}
