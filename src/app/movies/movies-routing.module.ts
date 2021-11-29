import { NgModule } from '@angular/core';
import { Route } from '../utils/route'
import { RouterModule, Routes } from '@angular/router'

// pages
import { HomeComponent } from './pages/home/home.component'
import { ListComponent } from './pages/list/list.component'
import { ListCharacterComponent } from './pages/list.characters/list.character.component'

const routes: Routes = [
  {
    path: Route.empty,
    component: HomeComponent,
    children: [
      {
        path: Route.empty,
        component: ListComponent
      },
      {
        path: ':movie/'.concat(Route.characters),
        component: ListCharacterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
