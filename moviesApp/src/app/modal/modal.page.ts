import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  data: null;
  movie:any[]=[];

  constructor(private navParams: NavParams, private modalCtrl: ModalController, private api: ApiService) { }

  ngOnInit() {
    this.data = this.navParams.get('movie');
    this.movie = this.data
  }

  closeModal(){
    this.modalCtrl.dismiss()
  }

}
