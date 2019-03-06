import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(public api: ApiService, public router: Router, public route: ActivatedRoute, private modalCtrl: ModalController) { }

  ngOnInit() {
    
  }

  results:any[]=[];

  searchMovies(ev: any) {
    let val = ev.target.value;

      this.api.searchMovies(val).subscribe(data=>{

      console.log(data.results);
      this.results = data.results;
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
