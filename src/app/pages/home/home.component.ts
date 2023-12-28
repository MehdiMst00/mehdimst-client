import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { PreloaderService } from '../../core/services/preloader.service';
import { register } from 'swiper/element/bundle';
import { isPlatformBrowser } from '@angular/common';
register();

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styles: [
    `
      @keyframes mehdiBackInDown {
        0% {
          transform: translateY(-1200px) scale(0.7) rotate(90deg);
          opacity: 0.7;
        }

        80% {
          transform: translateY(0px) scale(0.7) rotate(90deg);
          opacity: 0.7;
        }

        100% {
          transform: scale(1) rotate(90deg);
          opacity: 1;
        }
      }

      .mehdiBackInDown {
        animation-name: mehdiBackInDown;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit, AfterViewInit {
  public hide: boolean = false;
  @ViewChild('swiperContainer', { static: true }) swiperContainer!: ElementRef;

  constructor(
    private readonly router: Router,
    private readonly preloaderService: PreloaderService,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {}

  ngOnInit(): void {
    this.hide = this.preloaderService.flag;
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const swiperOptions = {
        slidesPerView: 1,
        autoplay: { delay: 1000, disableOnInteraction: false },
        loop: true,
        effect: 'flip',
        flipEffect: {
          slideShadows: false,
        },
        speed: 1000,
      };
      const swiperEl = this.swiperContainer.nativeElement;
      Object.assign(swiperEl, swiperOptions);
      swiperEl.initialize();
    }
  }

  navigateToAbout() {
    this.router.navigate(['about-me']);
  }
}
