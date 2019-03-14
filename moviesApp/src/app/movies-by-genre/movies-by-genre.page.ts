import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.page.html',
  styleUrls: ['./movies-by-genre.page.scss'],
})
export class MoviesByGenrePage implements OnInit {

  passedId: any;
  movies:any[]=[];

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService) { 
    if(this.router.getCurrentNavigation().extras.state){
      this.passedId = this.router.getCurrentNavigation().extras.state.genre
      console.log(this.passedId);
    }
  }

  ngOnInit() {
    this.getMoviesByGenres();
  }

  getMoviesByGenres(){
    this.api.getMoviesByGenre(this.passedId.id)
    .subscribe(data => {
      this.movies = data.results;
      console.log(this.movies);
    });
  }
}
