import { PortfolioCategory } from './../../core/dtos/portfolios/portfolio.category';
import { PortfolioService } from './../../core/services/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { PreloaderComponent } from 'src/app/shared/preloader/preloader.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnInit {
  public hide: boolean;
  public categories: PortfolioCategory[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getCurrentCategories().subscribe((categories) => {
      if (categories === null) {
        this.portfolioService.getPortfolioCategories().subscribe((result) => {
          this.portfolioService.setCurrentCategories(result.portfolioCategories);
        });
      } else {
        this.categories = categories;
      }
    });
    this.hide = PreloaderComponent.flag;
  }
}
