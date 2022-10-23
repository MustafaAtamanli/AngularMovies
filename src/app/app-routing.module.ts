import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:"popular-movies",component:PopularMoviesComponent}, 
  {path:"movie-detail/:movieId",component:MovieDetailComponent},
  {path:"search",component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
