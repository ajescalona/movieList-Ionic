import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
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
  input:string;
  val: any;

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
}