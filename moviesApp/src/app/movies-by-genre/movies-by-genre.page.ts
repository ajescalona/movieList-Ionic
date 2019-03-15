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
  movies:any =[];
  page: number = 1;
  maximumPages: number = 5;
  movie:any =[];

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService) { 
    if(this.router.getCurrentNavigation().extras.state){
      this.passedId = this.router.getCurrentNavigation().extras.state.genre
    }
    this.getMoviesByGenres();
  }

  ngOnInit() {
    
  }

  getMoviesByGenres(event?){

    this.api.getMoviesByGenre(this.passedId.id, this.page)
    .subscribe(data => {
      if(this.movies.length === 0)
      {
        this.movies = data.results;
        console.log("entre primera pagina")
        console.log(this.movies)
        console.log(this.movies.length)
      }
      else{
        for (let i = 0; i < 20; i++) { 
          this.movies.push(data.results[i]);
        }
      }

      if(event){
        event.target.complete()
      }

    });    
  }

  loadData(event) {
    setTimeout(() => {
      this.page++;
      this.getMoviesByGenres(event);

      if(this.page === this.maximumPages){
        event.target.disabled = true;
      }
    }, 1500);
  }
  

}
