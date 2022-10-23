import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  form: FormGroup;
  response:any;

  constructor(public fb: FormBuilder,private movieService:MoviesService) {
    this.form = this.fb.group({
      keyword: [''],
    });
   }

  ngOnInit(): void {
  }
  submitForm() {
    var formData: any = new FormData();
    let name:string = this.form.get('keyword').value;
    this.movieService.findMoviesByKeyword(name).subscribe(response => {
        this.response=response;
        console.log(response);
    })
  }

}
