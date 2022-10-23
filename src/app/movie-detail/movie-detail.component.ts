import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailModel } from '../models/MovieDetail';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
 
  response:MovieDetailModel;
  constructor( private activatedRoute: ActivatedRoute,
               private movieService:MoviesService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['movieId']) {
          this.getMovieDetails(params['movieId']);
          console.log("test");
      }
    });

  }

  getMovieDetails(movieId: number) {
    this.movieService.getMovieDetail(movieId).subscribe((response) => {
      this.response = response;
      console.log(response);
    });
  }

}
