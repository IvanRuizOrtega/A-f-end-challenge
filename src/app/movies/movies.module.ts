import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// routing
import { MoviesRoutingModule } from './movies-routing.module'
// components
import { MoviesComponent } from './components/movies/movies.component'
import { MovieComponent } from './components/movie/movie.component'

// pages
import { HomeComponent } from './pages/home/home.component'
import { ListComponent } from './pages/list/list.component'
import { ListCharacterComponent } from './pages/list.characters/list.character.component'

// store
import { StoreModule } from '@ngrx/store'
import { movieFeatureKey,movieReducer } from '../store/modules/movie.reducer'

@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    HomeComponent,
    ListComponent,
    ListCharacterComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    StoreModule.forFeature(movieFeatureKey, movieReducer)
  ]
})
export class MoviesModule { }
