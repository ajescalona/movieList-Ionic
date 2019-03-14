import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MoviesByGenrePage } from './movies-by-genre.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesByGenrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MoviesByGenrePage]
})
export class MoviesByGenrePageModule {}
