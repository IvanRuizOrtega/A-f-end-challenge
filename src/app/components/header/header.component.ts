import { Component, OnInit } from '@angular/core';
import { Route } from '../../utils/route'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  movies: string = Route.movies

  constructor() { }

  ngOnInit(): void {
  }

}
