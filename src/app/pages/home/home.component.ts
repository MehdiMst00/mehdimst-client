import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PreloaderComponent } from 'src/app/shared/preloader/preloader.component';

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
})
export class HomeComponent implements OnInit {
  public hide: boolean;

  public customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    items: 1,
    nav: false,
    animateIn: 'animate__animated animate__fadeIn',
    animateOut: 'animate__animated animate__fadeOut',
  };

  ngOnInit(): void {
    this.hide = PreloaderComponent.flag;
  }
}
