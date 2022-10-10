import { Component, OnInit } from '@angular/core';
import { PreloaderComponent } from 'src/app/shared/preloader/preloader.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent implements OnInit {
  public hide: boolean;

  ngOnInit(): void {
    this.hide = PreloaderComponent.flag;
  }
}
