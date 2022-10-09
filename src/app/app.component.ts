import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    // Go to down
    trigger('routeAnimations', [
      transition('HomePage => AboutMePage, AboutMePage => ResumePage, HomePage => ResumePage', [
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
      ]),

      // Go to up
      transition('ResumePage => AboutMePage, AboutMePage => HomePage, ResumePage => HomePage', [
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
      ]),
    ]),
  ],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState']
    );
  }
}
