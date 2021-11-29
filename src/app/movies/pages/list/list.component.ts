import { Component, OnInit } from '@angular/core'
import { MovieService } from '../../../services/movie/movie.service'
import { Movie } from '../../../models/movie'
import { Store } from '@ngrx/store'
import { State } from '../../../store/modules/movie.reducer'
import { addMovies } from '../../../store/modules/movie.actions'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  constructor(private movieService: MovieService,
              private store: Store<{ movies: State }>) { }

  ngOnInit(): void {
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
