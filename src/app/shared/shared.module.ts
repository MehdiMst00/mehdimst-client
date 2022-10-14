import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [HeaderComponent, PreloaderComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule,
  ],
  exports: [HeaderComponent, PreloaderComponent, CarouselModule],
})
export class SharedModule {}
