import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PreloaderService } from 'src/app/core/services/preloader.service';
// import Swiper core and required modules
import SwiperCore, { EffectFade, Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectFade, Autoplay]);

@Component({
  selector: 'app-home',
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
})
export class HomeComponent implements OnInit {
  public hide: boolean;

  constructor(
    private router: Router,
    private preloaderService: PreloaderService
  ) {}

  ngOnInit(): void {
    this.hide = this.preloaderService.flag;
  }

  navigateToAbout() {
    this.router.navigate(['about-me']);
  }
}
