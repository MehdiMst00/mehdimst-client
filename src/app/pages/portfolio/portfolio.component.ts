import { Component, OnInit } from '@angular/core';
import { PreloaderComponent } from 'src/app/shared/preloader/preloader.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnInit {
  public hide: boolean;

  constructor() {}

  ngOnInit(): void {
    this.hide = PreloaderComponent.flag;
  }
}
