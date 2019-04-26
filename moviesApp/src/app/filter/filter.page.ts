import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  genres:any[]=[];
  movies:any[]=[];
  information: any = {};
  openGenres: boolean = false;
  openMovies: boolean = false;

  constructor(private api: ApiService, private loadingController: LoadingController, private router: Router) { }

  ngOnInit() {
    this.getGenres();
    this.getPopularMovies();
  }

  async getPopularMovies() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'crescent'
    });
    await loading.present();
    await this.api.getPopularMovie()
      .subscribe(res => {
        this.movies = res.results;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async getGenres() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'crescent'
    });
    await loading.present();
    await this.api.getGenres().subscribe(data => {
        this.genres = data.genres;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  toggleSection(id){
    switch(id){
      case('genero'):
        if(this.openGenres)
        {
          this.openGenres = false;
        }
        else{
          this.openGenres = true;
        }
      break;

      case('movies'):
      if(this.openMovies)
      {
        this.openMovies = false;
      }
      else{
        this.openMovies = true;
      }
      break;

      case(''):
        this.openMovies = false;
        this.openGenres = false;
      break;
    }
  }

  moviesByGenre(genre){
    let navigationExtras: NavigationExtras = {
      state: {
        'genre': genre
      }
    }
    this.router.navigate(['movies-by-genre'], navigationExtras);
  }

}
