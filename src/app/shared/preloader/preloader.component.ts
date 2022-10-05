import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  animations: [
    trigger('fadeOutAnimation', [
      transition(':leave', [
        style({ opacity: 1, visibility: 'visible' }),
        animate('300ms ease-in', style({ opacity: 0, visibility: 'hidden' })),
      ]),
    ]),
  ],
})
export class PreloaderComponent implements AfterViewInit {
  public hide: boolean = false;
  static flag: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.hide = true;
      PreloaderComponent.flag = true;
    }, 2000);
  }
}
