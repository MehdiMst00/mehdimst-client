import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    // Go to down
    trigger('routeAnimations', [
      transition(
        'HomePage => AboutMePage, HomePage => ResumePage, HomePage => PortfolioPage, HomePage => ContactPage, AboutMePage => ResumePage, AboutMePage => PortfolioPage, AboutMePage => ContactPage, ResumePage => PortfolioPage, ResumePage => ContactPage, PortfolioPage => ContactPage',
        [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
            }),
          ]),
          query(':enter', [style({ bottom: '-100%', opacity: 0 })]),
          query(':leave', animateChild()),
          group([
            query(':leave', [
              animate('1s ease-in-out', style({ bottom: '100%', opacity: 0 })),
            ]),
            query(':enter', [
              animate('1s ease-in-out', style({ bottom: '0%', opacity: 1 })),
            ]),
          ]),
          query(':enter', animateChild()),
        ]
      ),

      // Go to up
      transition(
        'AboutMePage => HomePage, ResumePage => HomePage, PortfolioPage => HomePage, ContactPage => HomePage, ResumePage => AboutMePage, PortfolioPage => AboutMePage, ContactPage => AboutMePage, PortfolioPage => ResumePage, ContactPage => ResumePage, ContactPage => PortfolioPage',
        [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
            }),
          ]),
          query(':enter', [style({ top: '-100%', opacity: 0 })]),
          query(':leave', animateChild()),
          group([
            query(':leave', [
              animate('1s ease-in-out', style({ top: '100%', opacity: 0 })),
            ]),
            query(':enter', [
              animate('1s ease-in-out', style({ top: '0%', opacity: 1 })),
            ]),
          ]),
          query(':enter', animateChild()),
        ]
      ),
    ]),
  ],
})
export class AppComponent implements OnInit {
  location: Location;

  ngOnInit() {
    if (environment.production) {
      if (location.protocol === 'http:') {
        window.location.href = location.href.replace('http', 'https');
      }
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState']
    );
  }
}
