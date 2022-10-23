import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { MovieDetailModel } from './models/MovieDetail';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http:HttpClient) {
    
   }
  

  getPopularMovies(){
    let url ='https://api.themoviedb.org/3/movie/popular?api_key=0b0a0ac47f24ad4b45f489aa6ea6d393&language=tr-TR&page=1'
    return this.http.get<any>(url);
  }

  getMovieDetail(id:number){
    let url = 'https://api.themoviedb.org/3/movie/'+id+'?api_key=0b0a0ac47f24ad4b45f489aa6ea6d393&language=tr-TR';
    return this.http.get<MovieDetailModel>(url);
  }

  findMoviesByKeyword(keyword:string){
    let url = 'https://api.themoviedb.org/3/search/movie?api_key=0b0a0ac47f24ad4b45f489aa6ea6d393&language=tr-TR&query='+keyword+'&page=1&include_adult=false';
    return this.http.get<any>(url);

  }
}
