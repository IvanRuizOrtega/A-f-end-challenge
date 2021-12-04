import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MovieService } from '../../../services/movie/movie.service'
import { Movie } from '../../../models/movie'
import { select, Store } from '@ngrx/store'
import {Observable, take } from 'rxjs'
import { selectMovie } from '../../../store/modules/movie.selector'

@Component({
  selector: 'app-list',
  templateUrl: './list.character.component.html',
  styles: []
})
export class ListCharacterComponent implements OnInit {

  movie: Movie = {
    title: '',
    episode_id: 0,
    characters: [],
    director: '',
  }

  constructor(private readonly route: ActivatedRoute,
              private readonly movieService: MovieService,
              private readonly store: Store<{ movie: Movie }>) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('movie'))
    this.store.pipe(select(selectMovie), take(1)).subscribe(movie => {
      movie.characters?.length ? this.setMovie(movie) : this.getMovie(id)
    })
  }

  private getMovie(id: number) {
    this.movieService.getMovie(id).subscribe(resp => {
      this.setMovie(resp)
    }, error => {
      alert(error.message)
    })
  }

  private setMovie(movie: Movie) {
   this.getCharacters(movie.characters)
    this.movie = movie
  }

  private getCharacters(characters: string[]) {
    characters.forEach(charId => {
      const id = (charId).replace(/[^0-9]/g,'')
      this.movieService.getCharacter(Number(id)).subscribe(resp => {
        console.log(resp)
      }, error => {
        alert(error.message)
      })
    })
  }


}
