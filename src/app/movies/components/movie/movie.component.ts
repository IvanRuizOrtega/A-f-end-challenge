import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Movie } from '../../../models/movie'
import { Route } from '../../../utils/route'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie = { title: '',
    episode_id: 0,
    characters: [],
    director: '' }
  @Input() index: number = 0
  private pathMovie: string = Route.movies
  private pathCharacter: string = Route.characters

  constructor(private router: Router ) { }

  ngOnInit(): void { }

  goToCharacter(movie: Movie): void {
    const id: string = String(movie.url).replace(/[^0-9]/g,'')
    const url: string = this.pathMovie.concat(`/${id}/`+ this.pathCharacter)
    this.router.navigate([url])
  }


}
