import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  response:any;

  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(response => {
      this.response=response;
    });
  }

}
