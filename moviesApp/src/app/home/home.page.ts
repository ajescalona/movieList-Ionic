import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
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

  movies:any[]=[];

  constructor(public api: ApiService, public loadingController: LoadingController,
    public router: Router, public route: ActivatedRoute, private modalCtrl: ModalController) { }
  
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

  async movieDetails(id: any){
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        movie_id: id
      }
    });
    return await modal.present();
  }
  
}
