import { Component, OnInit } from '@angular/core';
import { PortfolioCategory } from '../../core/dtos/portfolios/portfolio.category';
import { PreloaderService } from '../../core/services/preloader.service';
import { PortfolioService } from '../../core/services/portfolio.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PortfolioItemsComponent } from './portfolio-items/portfolio-items.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  imports: [RouterLink, RouterLinkActive, PortfolioItemsComponent],
})
export class PortfolioComponent implements OnInit {
  public hide: boolean = false;
  public categories: PortfolioCategory[] = [];

  constructor(
    private readonly portfolioService: PortfolioService,
    private readonly preloaderService: PreloaderService
  ) {}

  ngOnInit(): void {
    this.portfolioService.getCurrentCategories().subscribe((categories) => {
      if (categories === null) {
        this.portfolioService.getPortfolioCategories().subscribe((result) => {
          this.portfolioService.setCurrentCategories(
            result.portfolioCategories
          );
        });
      } else {
        this.categories = categories;
      }
    });
    this.hide = this.preloaderService.flag;
  }
}
