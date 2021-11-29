import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MovieService } from '../../../services/movie/movie.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.character.component.html',
  styles: []
})
export class ListCharacterComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('movie'))
    this.movieService.getMovie(id).subscribe(resp => {
      console.log(resp.characters.length)
    }, error => {
      alert(error.message)
    })
  }


}
