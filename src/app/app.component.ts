import { Component } from '@angular/core';
import {MoviesService} from './movies.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Movies';
  results:any=[]
  constructor(private movie:MoviesService){
    
    this.movie.getPopularMovies().subscribe(data =>{
      this.results=data.results;
      console.log(this.results);
    })
  }
}
