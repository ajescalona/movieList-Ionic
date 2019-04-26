import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage implements OnInit {
  results:any[]=[];
  movies:any[]=[];
  movie:any[]=[];
  favoriteMovie:any[]=[];
  input:string;
  val: any;
  like: any = [];
  unlike: any = [];

  constructor(public api: ApiService, public loadingController: LoadingController,
    public router: Router, public route: ActivatedRoute, private modalCtrl: ModalController, private nav: NavController) { }
  
  ngOnInit() {
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

  movieDetails(movieId: any){
    var body = {
      'id': movieId
    }

    this.api.getMovie(body).subscribe(data => {
      this.movie = data;
      this.movieModal(this.movie);
    })
  }

  async movieModal(data: any){
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        movie: data
      }
    });
    return await modal.present();
  }
  
  searchMovies(ev: any) {
    this.val = ev.target.value;

    if(this.val != [])
    { 
      var body = {
        'searchStr': this.val
      }
      
      this.api.searchMovies(body).subscribe(data=>{
        this.results = data.results;
      });
    }
    this.results = [];
    this.input = ev.target.value;
  }

  goToFilter(){
    this.nav.navigateForward('/filter');
  }


  toggleLikeState(movie){  

    if(this.favoriteMovie == movie){

      /* this.api.deleteFavoriteMovie(movie.id).subscribe( data =>{
        console.log(data)
      }) */
      console.log('quito movie');
      this.like[movie.id] = false;
      this.unlike[movie.id] = true;
    }
    else{

      let body = {
        'backdrop_path': movie.backdrop_path,
        'id': movie.id,
        'original_language': movie.original_language,
        'title': movie.title,
       ' overview': movie.overview,
        'poster_path': movie.poster_path,
        'release_date': movie.release_date,
        'vote_average': movie.vote_average
      }

      /* this.api.addFavoriteMovie(body).subscribe( data => {
        console.log(data)
      }) */
      console.log('agrego movie');
      this.like[movie.id] = !this.like[movie.id];
      this.unlike[movie.id] = !this.unlike[movie.id];
    }

    this.favoriteMovie = movie;
    console.log(this.favoriteMovie);
    
  }  


}