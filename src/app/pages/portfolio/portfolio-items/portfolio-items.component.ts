import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { Portfolio } from '../../../core/dtos/portfolios/portfolio';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-portfolio-items',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-items.component.html',
  animations: [
    trigger('fadeInOutAnimation', [
      transition(':enter', [
        style({ opacity: 0, visibility: 'hidden' }),
        animate(
          '300ms ease-in-out',
          style({ opacity: 1, visibility: 'visible' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, visibility: 'visible' }),
        animate(
          '300ms ease-in-out',
          style({ opacity: 0, visibility: 'hidden' })
        ),
      ]),
    ]),
  ],
  styles: [
    `
      figure:hover span {
        opacity: 1;
      }
      figure:hover div.portfolio-image {
        transform: scale(1.1);
        border-radius: 0.5rem;
      }
    `,
  ],
})
export class PortfolioItemsComponent implements OnInit {
  public category: string = '';
  public loadedData: boolean = false;
  public portfolios: Portfolio[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly portfolioService: PortfolioService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params: any) => {
      this.loadedData = false;
      this.portfolios = [];

      this.category = params.get('category') || '';
      if (this.category == '')
        this.router.navigate(['portfolio'], {
          queryParams: { category: 'all' },
        });

      if (this.category == 'all') this.category = '';

      setTimeout(() => {
        this.portfolioService
          .getPortfolios(this.category)
          .subscribe((result) => {
            this.portfolios = result.portfolios;
          });
        this.loadedData = true;
      }, 300);
    });
  }
}
