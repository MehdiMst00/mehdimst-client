import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { PreloaderService } from '../../core/services/preloader.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [],
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
export class PreloaderComponent {
  public hide: boolean = false;

  constructor(
    private readonly preloaderService: PreloaderService,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {}

  ngAfterViewInit(): void {
    let timeOutTime: number = isPlatformBrowser(this.platformId) ? 2000 : 0;
    setTimeout(() => {
      this.hide = true;
      this.preloaderService.flag = true;
    }, timeOutTime);
  }
}
