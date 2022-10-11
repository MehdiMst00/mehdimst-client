import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PreloaderComponent } from 'src/app/shared/preloader/preloader.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
})
export class ResumeComponent implements OnInit, AfterViewInit {
  public hide: boolean;

  constructor() {}

  ngOnInit(): void {
    this.hide = PreloaderComponent.flag;
  }

  ngAfterViewInit(): void {
    const delayTime: number = this.hide ? 1000 : 2000;
    setTimeout(() => {
      const allProgress = document.getElementsByClassName('animated-progress');
      for (let index = 0; index < allProgress.length; index++) {
        const progress: any = allProgress[index];
        const percent = progress.getAttribute('data-progress');
        progress.style.width = percent + '%';
      }
    }, delayTime);
  }
}
