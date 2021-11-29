import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url: string = environment.baseUrl

  constructor(private http:HttpClient) {}

  getMovies():Observable<any> {
    return this.http.get<any>(this.url.concat('films'))
  }

  getMovie(id: number):Observable<any> {
    return this.http.get<any>(this.url.concat(`films/${id}`))
  }

  getCharacter(characterId: number): Observable<any> {
    return this.http.get<any>(this.url.concat(`people/${characterId}`))
  }
}
