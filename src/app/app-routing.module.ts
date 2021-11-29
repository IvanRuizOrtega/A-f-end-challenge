import { NgModule } from '@angular/core';
import { Route } from './utils/route'
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component'

const routes: Routes = [
  {
    path: Route.movies,
    loadChildren: () => import('./movies/movies.module').then(module => module.MoviesModule)
  },
  {
    path: Route.notFound,
    component: ErrorPageComponent
  },
  {
    path: Route.invalid,
    redirectTo: Route.notFound
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
