import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
@NgModule({
  imports: [CommonModule, SwiperModule, RouterModule.forChild(routes)],
  declarations: [HomeComponent],
})
export class HomeModule {}
