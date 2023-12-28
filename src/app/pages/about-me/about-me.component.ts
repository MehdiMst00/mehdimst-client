import { Component, OnInit } from '@angular/core';
import { PreloaderService } from '../../core/services/preloader.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent implements OnInit {
  public hide: boolean = false;

  constructor(private readonly preloaderService: PreloaderService) {}

  ngOnInit(): void {
    this.hide = this.preloaderService.flag;
  }
}
