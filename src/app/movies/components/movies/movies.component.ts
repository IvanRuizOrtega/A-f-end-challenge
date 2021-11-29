import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../models/movie'
import { Observable } from 'rxjs'


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Input() movies$: Observable<Movie[]> | undefined

  constructor() { }

  ngOnInit(): void { }

}
