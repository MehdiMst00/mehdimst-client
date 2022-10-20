import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PreloaderService } from 'src/app/core/services/preloader.service';

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

  constructor(
    private router: Router,
    private preloaderService: PreloaderService
  ) {}

  public customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 0,
    stagePadding: 0,
    items: 1,
    nav: false,
    animateIn: 'animate__animated animate__fadeIn animate__faster',
    animateOut: 'animate__animated animate__fadeOut animate__faster',
    autoplayTimeout: 3000,
    smartSpeed: 450,
    autoWidth: false,
    autoHeight: false,
  };

  ngOnInit(): void {
    this.hide = this.preloaderService.flag;
  }

  navigateToAbout() {
    this.router.navigate(['about-me']);
  }
}
