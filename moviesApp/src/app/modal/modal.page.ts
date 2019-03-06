import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  movie_id: null;
  movie:any[]=[];

  constructor(private navParams: NavParams, private modalCtrl: ModalController, private api: ApiService) { }

  ngOnInit() {
    this.movie_id = this.navParams.get('movie_id');

    this.api.getMovie(this.movie_id)
      .subscribe(data => {
      console.log(data)
      this.movie = data;
    })
  }

  closeModal(){
    this.modalCtrl.dismiss()
  }

}
