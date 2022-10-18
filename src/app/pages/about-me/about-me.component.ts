import { Component, OnInit } from '@angular/core';
import { PreloaderService } from 'src/app/core/services/preloader.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent implements OnInit {
  public hide: boolean;

  constructor(private preloaderService: PreloaderService) {}

  ngOnInit(): void {
    this.hide = this.preloaderService.flag;
  }
}
