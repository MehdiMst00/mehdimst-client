import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-items',
  templateUrl: './portfolio-items.component.html',
  animations: [
    trigger('fadeInOutAnimation', [
      transition(':enter', [
        style({ opacity: 0, visibility: 'hidden' }),
        animate('300ms ease-out', style({ opacity: 1, visibility: 'visible' })),
      ]),
      transition(':leave', [
        style({ opacity: 1, visibility: 'visible' }),
        animate('300ms ease-in', style({ opacity: 0, visibility: 'hidden' })),
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
      }
    `,
  ],
})
export class PortfolioItemsComponent implements OnInit {
  public category: string;
  public loadedData: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.loadedData = false;

      this.category = params.get('category') || '';
      if (this.category == '')
        this.router.navigate(['portfolio'], {
          queryParams: { category: 'all' },
        });

      // TODO: Get data from rest api
      setTimeout(() => {
        console.log('Call Server In Portfolio');
        this.loadedData = true;
      }, 1000);
    });
  }
}
