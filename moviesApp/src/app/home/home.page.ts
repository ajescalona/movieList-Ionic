import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage implements OnInit {

  constructor(public api: ApiService, public loadingController: LoadingController,
    public router: Router, public route: ActivatedRoute) { }
  
  ngOnInit() {
    this.getPopularMovies();
  }

  movies:any[]=[];

  async getPopularMovies() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'crescent'
    });
    await loading.present();
    await this.api.getPopularMovie()
      .subscribe(res => {
        this.movies = res.results;
        console.log(this.movies);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
}
