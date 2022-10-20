import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PreloaderComponent } from './preloader/preloader.component';

@NgModule({
  declarations: [HeaderComponent, PreloaderComponent],
  imports: [CommonModule, BrowserAnimationsModule, AppRoutingModule],
  exports: [HeaderComponent, PreloaderComponent],
})
export class SharedModule {}
